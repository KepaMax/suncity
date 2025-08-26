'use client'
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';


export default function RoomsPage() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    <div className="relative h-screen">
      <Link href="/" className="absolute inset-x-0 top-11 z-10 mx-auto block w-fit">
        <Image className="block mx-auto" src="/images/logo_small.png" alt="Francischiello Logo" width={471} height={247} />
      </Link>

      <Image className="object-cover" src="/images/main.png" alt="francischiello_itinerari_top" fill />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="text-white uppercase space-y-2 px-4">
          <p className="text-2xl lg:text-4xl">Sun City Hotel & Spa Naftalan, Naftalan</p>
          <div className="bg-white h-px w-64 mx-auto"></div>
          <p className="text-xl">Heading text</p>
        </div>
      </div>

      <div className="absolute bottom-32 w-fit inset-x-0 mx-auto flex flex-col items-center">
        <p className="text-white text-lg">scroll down</p>
        <Icon icon="mynaui:arrow-long-down" className="w-10 h-20 text-white" />
      </div>
    </div>

    {/* Hotel Branding Card - Bridge between sections */}
    <div className="relative z-10 bg-white px-8 py-6 -mt-8 mb-16 w-1/2 mx-auto">
      <div className="text-center">
        <h2 className="text-[#BCB09C] text-3xl font-normal mb-2">OTAQLAR</h2>
        <h3 className="text-black text-xl font-normal">Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.</h3>
      </div>
    </div>

    {/* Sticky decorative strips on left and right */}
    <div className="fixed left-0 top-0 w-8 h-full z-0 pointer-events-none">
      <div className="w-full h-full bg-[#BCB09C]/10"></div>
    </div>

    <div className="fixed right-0 top-0 w-8 h-full z-0 pointer-events-none">
      <div className="w-full h-full bg-[#BCB09C]/10"></div>
    </div>

    <section className="relative h-[650px] mb-20">
        {/* Superior Label - Top Left */}
        <div className="absolute left-8 top-8 z-30">
          <h2 className="text-2xl font-bold text-[#514639]">SUPERIOR</h2>
        </div>

        {/* Left Container - Smaller with Image and Text */}
        <div className="absolute left-0 px-8 top-1/2 transform -translate-y-1/2 w-[55%] h-[514px] z-20">
          <div className="relative h-full p-6 bg-[#ECE7DF]">
            <div className="bg-white p-8  h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left Column - Image */}
                <div className="relative h-full">
                  <Image
                    src="/images/rooms-1-1.png"
                    alt="Sun City Pool"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Text and Button */}
                <div className="relative flex flex-col justify-center items-center p-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#514639] mb-4">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-base text-[#514639] leading-relaxed">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>

                </div>
                <div className="absolute  -bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-5 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Larger Image */}
        <div className="absolute right-8 top-0 w-[50%] h-full z-10">
          <Image
            src="/images/rooms-1-2.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />

        </div>
      </section>

      <section className="relative h-[650px] mb-20">
        {/* Superior Label - Top Right */}
        <div className="absolute right-8 top-8 z-30">
          <h2 className="text-2xl font-bold text-[#514639]">DELUX QUEEN</h2>
        </div>

        {/* Left Container - Larger Image */}
        <div className="absolute left-8 top-0 w-[50%] h-full z-10">
          <Image
            src="/images/rooms-2-1.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Container - Smaller with Image and Text */}
        <div className="absolute right-0 px-8 top-1/2 transform -translate-y-1/2 w-[55%] h-[514px] z-20">
          <div className="relative h-full p-6 bg-[#ECE7DF]">
            <div className="bg-white p-8  h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left Column - Image */}
                <div className="relative h-full">
                  <Image
                    src="/images/rooms-2-2.png"
                    alt="Sun City Pool"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Text and Button */}
                <div className="relative flex flex-col justify-center items-center p-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#514639] mb-4">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-base text-[#514639] leading-relaxed">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>

                </div>
                <div className="absolute  -bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-5 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[650px] mb-20">
        {/* Superior Label - Top Left */}
        <div className="absolute left-8 top-8 z-30">
          <h2 className="text-2xl font-bold text-[#514639]">TRIPLE ROOM</h2>
        </div>

        {/* Left Container - Smaller with Image and Text */}
        <div className="absolute left-0 px-8 top-1/2 transform -translate-y-1/2 w-[55%] h-[514px] z-20">
          <div className="relative h-full p-6 bg-[#ECE7DF]">
            <div className="bg-white p-8  h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left Column - Image */}
                <div className="relative h-full">
                  <Image
                    src="/images/rooms-3-1.png"
                    alt="Sun City Pool"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Text and Button */}
                <div className="relative flex flex-col justify-center items-center p-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#514639] mb-4">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-base text-[#514639] leading-relaxed">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>

                </div>
                <div className="absolute  -bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-5 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Larger Image */}
        <div className="absolute right-8 top-0 w-[50%] h-full z-10">
          <Image
            src="/images/rooms-3-2.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />

        </div>
      </section>

      <section className="relative h-[650px] mb-20">
        {/* Superior Label - Top Right */}
        <div className="absolute right-8 top-8 z-30">
          <h2 className="text-2xl font-bold text-[#514639]">FAMILY SUITE</h2>
        </div>

        {/* Left Container - Larger Image */}
        <div className="absolute left-8 top-0 w-[50%] h-full z-10">
          <Image
            src="/images/rooms-4-1.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Container - Smaller with Image and Text */}
        <div className="absolute right-0 px-8 top-1/2 transform -translate-y-1/2 w-[55%] h-[514px] z-20">
          <div className="relative h-full p-6 bg-[#ECE7DF]">
            <div className="bg-white p-8  h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left Column - Image */}
                <div className="relative h-full">
                  <Image
                    src="/images/rooms-4-2.png"
                    alt="Sun City Pool"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Text and Button */}
                <div className="relative flex flex-col justify-center items-center p-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#514639] mb-4">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-base text-[#514639] leading-relaxed">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>

                </div>
                <div className="absolute  -bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-5 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer />
  </>
  )
}

