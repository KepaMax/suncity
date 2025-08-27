'use client';

import { useState } from 'react';
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

  // Default values
  const arrivalDate = customDates?.arrival || { day: '2', month: 'avqust', year: '2025', time: '12:00' };
  const departureDate = customDates?.departure || { day: '3', month: 'avqust', year: '2025', time: '12:00' };
  const guests = customGuests || { adults: 2, children: 1 };

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
            <div className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2">
              <div className="flex items-center text-white gap-2">
                <span className="text-4xl font-bold">{arrivalDate.day}</span>
                <div className="flex flex-col">
                  <p className='text-sm uppercase'>{arrivalDate.month} {arrivalDate.year}</p>
                  <p className='text-xs'>{arrivalDate.time}</p>
                </div>
              </div>
              <Image src="/calendar_icon.svg" alt="calendar" width={24} height={24} />
            </div>
          </div>

          {/* Departure Date */}
          <div className="w-1/4">
            <div className="text-white text-[10px] mb-1 text-left">Çıxış tarixi</div>
            <div className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2">
              <div className="flex items-center text-white gap-2">
                <span className="text-4xl font-bold">{departureDate.day}</span>
                <div className="flex flex-col">
                  <p className='text-sm uppercase'>{departureDate.month} {departureDate.year}</p>
                  <p className='text-xs'>{departureDate.time}</p>
                </div>
              </div>
              <Image src="/calendar_icon.svg" alt="calendar" width={24} height={24} />
            </div>
          </div>

          {/* Guests */}
          <div className="w-1/4">
            <div className="text-white text-[10px] mb-1 text-left">Qonaqlar</div>
            <div className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2">
              <div className="flex items-center text-white gap-2">
                <span className="text-4xl font-bold">{guests.adults}</span>
                <div className="flex flex-col">
                  <p className='text-sm uppercase'>Böyük:</p>
                  <p className='text-xs'>Uşaq:{guests.children}</p>
                </div>
              </div>
              <Icon icon="mdi:chevron-down" className="w-6 h-6 text-white" />
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
                <span className="text-2xl font-bold">{arrivalDate.day}</span>
                <div className="flex flex-col">
                  <p className='text-xs uppercase'>{arrivalDate.month} {arrivalDate.year}</p>
                  <p className='text-xs'>{arrivalDate.time}</p>
                </div>
              </div>
              <div className="text-white text-xs">→</div>
              <div className="flex items-center text-white gap-2">
                <span className="text-2xl font-bold">{departureDate.day}</span>
                <div className="flex flex-col">
                  <p className='text-xs uppercase'>{departureDate.month} {departureDate.year}</p>
                  <p className='text-xs'>{departureDate.time}</p>
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
                <div className="flex border border-gray-200 rounded-lg items-center px-3 py-3 justify-between bg-gray-50">
                  <div className="flex items-center text-[#3A2C0C] gap-3">
                    <span className="text-3xl font-bold">{arrivalDate.day}</span>
                    <div className="flex flex-col">
                      <p className='text-sm uppercase font-medium'>{arrivalDate.month} {arrivalDate.year}</p>
                      <p className='text-xs text-gray-600'>{arrivalDate.time}</p>
                    </div>
                  </div>
                  <Image src="/calendar_icon.svg" alt="calendar" width={20} height={20} />
                </div>
              </div>

              {/* Departure Date */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Çıxış tarixi
                </label>
                <div className="flex border border-gray-200 rounded-lg items-center px-3 py-3 justify-between bg-gray-50">
                  <div className="flex items-center text-[#3A2C0C] gap-3">
                    <span className="text-3xl font-bold">{departureDate.day}</span>
                    <div className="flex flex-col">
                      <p className='text-sm uppercase font-medium'>{departureDate.month} {departureDate.year}</p>
                      <p className='text-xs text-gray-600'>{departureDate.time}</p>
                    </div>
                  </div>
                  <Image src="/calendar_icon.svg" alt="calendar" width={20} height={20} />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-[#3A2C0C] mb-2">
                  Qonaqlar
                </label>
                <div className="flex border border-gray-200 rounded-lg items-center px-3 py-3 justify-between bg-gray-50">
                  <div className="flex items-center text-[#3A2C0C] gap-3">
                    <span className="text-3xl font-bold">{guests.adults}</span>
                    <div className="flex flex-col">
                      <p className='text-sm uppercase font-medium'>Böyük:</p>
                      <p className='text-xs text-gray-600'>Uşaq:{guests.children}</p>
                    </div>
                  </div>
                  <Icon icon="mdi:chevron-down" className="w-5 h-5 text-[#BCB09C]" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Book Button */}
              <button 
                className="w-full bg-[#BCB09C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#A69B8A] transition-colors"
                onClick={handleBookNow}
              >
                Rezervasiya et
              </button>

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
