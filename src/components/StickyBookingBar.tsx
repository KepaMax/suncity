'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Icon } from "@iconify/react";
import Link from 'next/link';

interface StickyBookingBarProps {
  className?: string;
  showPromoCode?: boolean;
  customDates?: {
    arrival: { day: string; month: string; year: string; time: string };
    departure: { day: string; month: string; year: string; time: string };
  };
  customGuests?: {
    adults: number;
    children: number;
  };
  onBookNow?: () => void;
  onPromoCode?: () => void;
}

export default function StickyBookingBar({ 
  className = '',
  showPromoCode = true,
  customDates,
  customGuests,
  onBookNow,
  onPromoCode
}: StickyBookingBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [arrivalDate, setArrivalDate] = useState('2025-08-02');
  const [departureDate, setDepartureDate] = useState('2025-08-03');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  // Default values for display
  const displayArrival = customDates?.arrival || { day: '2', month: 'avqust', year: '2025', time: '12:00' };
  const displayDeparture = customDates?.departure || { day: '3', month: 'avqust', year: '2025', time: '12:00' };
  const displayGuests = customGuests || { adults: 2, children: 1 };

  // Click outside handler for guests dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isGuestsDropdownOpen && !target.closest('.guests-section')) {
        setIsGuestsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isGuestsDropdownOpen]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      // Default behavior - could open a modal or navigate to booking page
      console.log('Opening booking form...');
    }
  };

  const handlePromoCode = () => {
    if (onPromoCode) {
      onPromoCode();
    } else {
      // Default behavior
      console.log('Opening promo code input...');
    }
  };

  const formatDateForDisplay = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const month = date.toLocaleDateString('az-AZ', { month: 'long' });
    const year = date.getFullYear().toString();
    return { day, month, year, time: '12:00' };
  };

  const currentArrivalDisplay = formatDateForDisplay(arrivalDate);
  const currentDepartureDisplay = formatDateForDisplay(departureDate);

  return (
    <>
      {/* Mobile Bottom Sheet Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleExpanded}
        />
      )}

      {/* Sticky Booking Panel */}
      <div className={`fixed bottom-0 w-full left-0 mt-10 right-0 z-50 bg-[#BCB09C]/95 backdrop-blur px-3 lg:px-8 py-3 lg:py-2 shadow-[0_-6px_20px_rgba(0,0,0,0.15)] ${className}`}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between w-full mx-auto gap-5">
          {/* Arrival Date */}
          <div className="w-1/4">
            <div className="text-white text-[10px] mb-1 text-left">Gəliş tarixi</div>
            <div className="relative">
              <div 
                className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const input = document.getElementById('arrival-date-input') as HTMLInputElement;
                  if (input) {
                    if (typeof input.showPicker === 'function') {
                      input.showPicker();
                    } else {
                      input.click();
                    }
                  }
                }}
              >
                <div className="flex items-center text-white gap-2">
                  <span className="text-4xl font-bold">{currentArrivalDisplay.day}</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>{currentArrivalDisplay.month} {currentArrivalDisplay.year}</p>
                    <p className='text-xs'>{currentArrivalDisplay.time}</p>
                  </div>
                </div>
                <Image src="/calendar_icon.svg" alt="calendar" width={24} height={24} />
              </div>
              
              {/* Hidden date input */}
              <input
                id="arrival-date-input"
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
                style={{ zIndex: -1 }}
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="w-1/4">
            <div className="text-white text-[10px] mb-1 text-left">Çıxış tarixi</div>
            <div className="relative">
              <div 
                className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const input = document.getElementById('departure-date-input') as HTMLInputElement;
                  if (input) {
                    if (typeof input.showPicker === 'function') {
                      input.showPicker();
                    } else {
                      input.click();
                    }
                  }
                }}
              >
                <div className="flex items-center text-white gap-2">
                  <span className="text-4xl font-bold">{currentDepartureDisplay.day}</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>{currentDepartureDisplay.month} {currentDepartureDisplay.year}</p>
                    <p className='text-xs'>{currentDepartureDisplay.time}</p>
                  </div>
                </div>
                <Image src="/calendar_icon.svg" alt="calendar" width={24} height={24} />
              </div>
              
              {/* Hidden date input */}
              <input
                id="departure-date-input"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
                style={{ zIndex: -1 }}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="w-1/4 guests-section">
            <div className="text-white text-[10px] mb-1 text-left">Qonaqlar</div>
            <div className="relative">
              <div 
                className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGuestsDropdownOpen(!isGuestsDropdownOpen);
                }}
              >
                <div className="flex items-center text-white gap-2">
                  <span className="text-4xl font-bold">{adults}</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>Böyük:</p>
                    <p className='text-xs'>Uşaq:{children}</p>
                  </div>
                </div>
                <Icon icon="mdi:chevron-down" className={`w-6 h-6 text-white transition-transform ${isGuestsDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Desktop Dropdown */}
              {isGuestsDropdownOpen && (
                <div 
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-3">
                    {/* Adults Selection */}
                    <div>
                      <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                        Böyüklər
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                      >
                        <option value={1}>👤 1 böyük</option>
                        <option value={2}>👤 2 böyük</option>
                        <option value={3}>👤 3 böyük</option>
                        <option value={4}>👤 4 böyük</option>
                        <option value={5}>👤 5 böyük</option>
                        <option value={6}>👤 6 böyük</option>
                      </select>
                    </div>
                    
                    {/* Children Selection */}
                    <div>
                      <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                        Uşaqlar
                      </label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                      >
                        <option value={0}>+ Uşaqları əlavə etmək</option>
                        <option value={1}>+ 1 uşaq</option>
                        <option value={2}>+ 2 uşaq</option>
                        <option value={3}>+ 3 uşaq</option>
                        <option value={4}>+ 4 uşaq</option>
                        <option value={5}>+ 5 uşaq</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Book Button */}
          <div className="w-1/4">
            <div className="h-6"></div> {/* Spacer to align with inputs */}
            <Link href="/reservation" className="flex border border-[#F1F1F126] bg-white hover:bg-slate-200 transition-colors rounded-lg justify-center items-center px-3 py-2 gap-2 h-[52px] cursor-pointer" onClick={handleBookNow}>
              <span className="text-base font-bold">Rezervasiya et</span>
            </Link>
            {/* Promo code link */}
            {showPromoCode && (
              <div className="flex justify-end mt-2">
                <button 
                  className="flex items-center gap-2 text-white/90 text-xs hover:text-slate-200 transition-colors"
                  onClick={handlePromoCode}
                >
                  <Image src="/promo_code_icon.svg" alt="promo_code" width={16} height={16} />
                  <span>promo kod</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout - Collapsed */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            {/* Quick Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center text-white gap-2">
                <span className="text-2xl font-bold">{currentArrivalDisplay.day}</span>
                <div className="flex flex-col">
                  <p className='text-xs uppercase'>{currentArrivalDisplay.month} {currentArrivalDisplay.year}</p>
                  <p className='text-xs'>{currentArrivalDisplay.time}</p>
                </div>
              </div>
              <div className="text-white text-xs">→</div>
              <div className="flex items-center text-white gap-2">
                <span className="text-2xl font-bold">{currentDepartureDisplay.day}</span>
                <div className="flex flex-col">
                  <p className='text-xs uppercase'>{currentDepartureDisplay.month} {currentDepartureDisplay.year}</p>
                  <p className='text-xs'>{currentDepartureDisplay.time}</p>
                </div>
              </div>
            </div>

            {/* Expand Button */}
            <button 
              onClick={toggleExpanded}
              className="bg-white text-[#BCB09C] px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              {isExpanded ? 'Bağla' : 'Ətraflı'}
            </button>
          </div>
        </div>

        {/* Mobile Bottom Sheet - Expanded */}
        <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        }`}>
          {/* Handle Bar */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="px-6 pb-8 space-y-6">
            {/* Title */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#3A2C0C]">Rezervasiya</h3>
              <p className="text-sm text-gray-600">Tarixləri seçin və rezervasiya edin</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Arrival Date */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Gəliş tarixi
                </label>
                <input
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-200 rounded-lg text-[#3A2C0C] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                />
              </div>

              {/* Departure Date */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Çıxış tarixi
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-200 rounded-lg text-[#3A2C0C] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                />
              </div>

              {/* Adults */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Böyüklər
                </label>
                <div className="relative">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-3 py-3 border border-gray-200 rounded-lg text-[#3A2C0C] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none"
                  >
                    <option value={1}>👤 1 böyük</option>
                    <option value={2}>👤 2 böyük</option>
                    <option value={3}>👤 3 böyük</option>
                    <option value={4}>👤 4 böyük</option>
                    <option value={5}>👤 5 böyük</option>
                    <option value={6}>👤 6 böyük</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Uşaqlar
                </label>
                <div className="relative">
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3 py-3 border border-gray-200 rounded-lg text-[#3A2C0C] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none"
                  >
                    <option value={0}>+ Uşaqları əlavə etmək</option>
                    <option value={1}>+ 1 uşaq</option>
                    <option value={2}>+ 2 uşaq</option>
                    <option value={3}>+ 3 uşaq</option>
                    <option value={4}>+ 4 uşaq</option>
                    <option value={5}>+ 5 uşaq</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Book Button */}
              <Link 
                href="/reservation"
                className="w-full bg-[#BCB09C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#A69B8A] transition-colors flex items-center justify-center"
                onClick={handleBookNow}
              >
                Rezervasiya et
              </Link>

              {/* Promo Code */}
              {showPromoCode && (
                <button 
                  className="w-full flex items-center justify-center gap-2 text-[#BCB09C] text-sm hover:text-[#A69B8A] transition-colors"
                  onClick={handlePromoCode}
                >
                  <Image src="/promo_code_icon.svg" alt="promo_code" width={14} height={14} />
                  <span>Promo kod istifadə et</span>
                </button>
              )}
            </div>

            {/* Additional Info */}
            <div className="text-center text-xs text-gray-500">
              <p>Pulsuz ləğv etmə • Ödənişsiz rezervasiya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
