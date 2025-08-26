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
      <header id="site_header" className={`fixed h-8 top-0 inset-x-0 bg-[#BCB09C]/90 px-4 py-1 z-50 flex justify-end items-center transition-all duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>

        <button
          onClick={toggleDrawer}
          className="relative size-8 cursor-pointer text-white hover:text-gray-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* Navigation Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleDrawer}
        ></div>

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-full lg:w-[560px] bg-white transform transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer Header */}
          <div className="bg-zinc-700 h-8 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDrawer}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-white text-lg">menu</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="border-r border-white/30 pr-4">IT</span>
              <span>EN</span>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex h-[calc(100%-2rem)]">
            {/* Navigation Links */}
            <div className="w-full lg:w-1/2 p-8">
              <nav className="space-y-6">
                <Link href="/" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Ana Səhifə</Link>
                <Link href="/hotel" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Hotel</Link>
                <Link href="/rooms" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Otaqlar</Link>
                <Link href="/services" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Xidmətlər</Link>
                <Link href="/contact" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Əlaqə</Link>
                <Link href="/reservation" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Rezervasiya</Link>
              </nav>
            </div>

            {/* Image Slider */}
            <div className="hidden lg:block w-1/2 bg-gray-100">
              <div className="h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_home.webp"
                      alt="francischiello_menu_home"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_hotel.webp"
                      alt="francischiello_menu_hotel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_rooms.webp"
                      alt="francischiello_menu_rooms"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_restaurant.webp"
                      alt="francischiello_menu_restaurant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_pool.webp"
                      alt="francischiello_menu_pool"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_weddings.webp"
                      alt="francischiello_menu_weddings"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_benessere.webp"
                      alt="francischiello_menu_benessere"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_itinerari.webp"
                      alt="francischiello_menu_itinerari"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_offerte.webp"
                      alt="francischiello_menu_offerte"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-full">
                    <Image
                      src="https://www.francischiello.it/wp-content/uploads/2025/08/francischiello_menu_contatti.webp"
                      alt="francischiello_menu_contatti"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" style={{ height: '50vh' }}>
        <Link href="/" className="absolute inset-x-0 top-11 z-10 mx-auto block w-fit">
          <Image className="block mx-auto" src="/images/logo_small.png" alt="Francischiello Logo" width={471} height={247} />
        </Link>

        <Image className="object-cover" src="/images/main.png" alt="francischiello_itinerari_top" fill />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hotel Branding Card - Bridge between sections */}
      <div className="relative z-10 bg-white px-8 py-6 -mt-8 mb-16 w-1/2 mx-auto">
        <div className="text-center">
          <h2 className="text-[#BCB09C] text-3xl font-normal mb-2">Rezervasiya</h2>
        </div>
      </div>

      {/* Sticky decorative strips on left and right */}
      <div className="fixed left-0 top-0 w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <div className="fixed right-0 top-0 w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      {/* Reservation Form */}
      <div className=" mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Date Selection Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Check-in Date */}
            <div>
              <label className="block text-[#3A2C0C] uppercase font-medium text-sm mb-2">
                YERLƏŞMƏ TARİXİ
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-09-01"
                  className="w-full px-4 py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                />
                {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div> */}
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-[#3A2C0C] uppercase font-medium text-sm mb-2">
                ÇIXIŞ TARİXİ
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-09-02"
                  className="w-full px-4 py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent"
                />
                {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>

          {/* Room Accommodation Section */}
          <div className="mb-8">
            <label className="block text-[#3A2C0C] uppercase font-medium text-sm mb-2">
              OTAQDA YERLƏŞMƏ
            </label>
            <p className="text-[#3A2C0C] text-sm mb-4">
              Böyüklər 12 yaşdan və yuxarı
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Adults Field */}
              <div className="relative">
                <select
                  defaultValue="2"
                  className="w-full px-4 py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none"
                >
                  <option value="1">👤 1 böyük</option>
                  <option value="2">👤 2 böyük</option>
                  <option value="3">👤 3 böyük</option>
                  <option value="4">👤 4 böyük</option>
                  <option value="5">👤 5 böyük</option>
                  <option value="6">👤 6 böyük</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Add Children Field */}
              <div className="relative">
                <select
                  defaultValue="0"
                  className="w-full px-4 py-3 border border-[#3A2C0C] text-[#3A2C0C] bg-white focus:outline-none focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent appearance-none"
                >
                  <option value="0">+ Uşaqları əlavə etmək</option>
                  <option value="1">+ 1 uşaq</option>
                  <option value="2">+ 2 uşaq</option>
                  <option value="3">+ 3 uşaq</option>
                  <option value="4">+ 4 uşaq</option>
                  <option value="5">+ 5 uşaq</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#3A2C0C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Add Another Room Link */}
            
          </div>

          {/* Search Button */}
          <div className="flex justify-between items-center">
          <button className="text-[#FFA500] hover:text-[#FF8C00] text-sm font-medium transition-colors">
              Daha 1 nömrə lazımdır +
            </button>
            <div className="relative flex flex-row items-center">
              <button className="bg-[#C6BFB2] rounded-full hover:bg-[#5D4E37] text-white font-semibold w-[90px] h-[90px] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="text-lg">Axtar</span>
              </button>
              <div className="ml-4">
                <svg className="w-6 h-6 text-[#C6BFB2]" fill="currentColor" viewBox="0 0 20 20">
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
