'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "@/components/Footer";

export default function ReservationPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>

      <div className="relative" style={{ height: '50vh', minHeight: '300px' }}>
        <Link href="/" className="absolute inset-x-0 top-4 sm:top-6 md:top-8 lg:top-11 z-10 mx-auto block w-fit">
          <Image 
            className="block mx-auto w-48 sm:w-64 md:w-80 lg:w-[471px] h-auto" 
            src="/images/logo_small.png" 
            alt="Francischiello Logo" 
            width={471} 
            height={247} 
          />
        </Link>

        <Image className="object-cover" src="/images/main.png" alt="francischiello_itinerari_top" fill />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hotel Branding Card - Bridge between sections */}
      <div className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-lg -mt-4 sm:-mt-6 md:-mt-8 mb-8 sm:mb-12 md:mb-16 w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="text-center">
          <h2 className="text-[#BCB09C] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1 sm:mb-2 leading-tight">Rezervasiya</h2>
        </div>
      </div>

      {/* Sticky decorative strips on left and right */}
      <div className="fixed left-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <div className="fixed right-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      {/* Reservation Form */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          {/* Date Selection Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Check-in Date */}
            <div>
              <label className="block text-[#3A2C0C] uppercase font-medium text-xs sm:text-sm mb-2">
                YERLƏŞMƏ TARİXİ
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-09-01"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-[#3A2C0C] uppercase font-medium text-xs sm:text-sm mb-2">
                ÇIXIŞ TARİXİ
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-09-02"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Room Accommodation Section */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-[#3A2C0C] uppercase font-medium text-xs sm:text-sm mb-2">
              OTAQDA YERLƏŞMƏ
            </label>
            <p className="text-[#3A2C0C] text-xs sm:text-sm mb-3 sm:mb-4">
              Böyüklər 12 yaşdan və yuxarı
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-3 sm:mb-4">
              {/* Adults Field */}
              <div className="relative">
                <select
                  defaultValue="2"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none text-sm sm:text-base"
                >
                  <option value="1">👤 1 böyük</option>
                  <option value="2">👤 2 böyük</option>
                  <option value="3">👤 3 böyük</option>
                  <option value="4">👤 4 böyük</option>
                  <option value="5">👤 5 böyük</option>
                  <option value="6">👤 6 böyük</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Add Children Field */}
              <div className="relative">
                <select
                  defaultValue="0"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none text-sm sm:text-base"
                >
                  <option value="0">+ Uşaqları əlavə etmək</option>
                  <option value="1">+ 1 uşaq</option>
                  <option value="2">+ 2 uşaq</option>
                  <option value="3">+ 3 uşaq</option>
                  <option value="4">+ 4 uşaq</option>
                  <option value="5">+ 5 uşaq</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <button className="text-[#FFA500] hover:text-[#FF8C00] text-xs sm:text-sm font-medium transition-colors order-2 sm:order-1">
              Daha 1 nömrə lazımdır +
            </button>
            <div className="relative flex flex-row items-center order-1 sm:order-2">
              <button className="bg-[#C6BFB2] rounded-full hover:bg-[#5D4E37] text-white font-semibold w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="text-sm sm:text-base md:text-lg">Axtar</span>
              </button>
              <div className="ml-2 sm:ml-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C6BFB2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
