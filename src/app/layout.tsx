'use client';

import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Image from 'next/image';

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDrawerOpen && !target.closest('.drawer-content') && !target.closest('.drawer-toggle')) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDrawerOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  // Auto-slide images when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 10); // 10 images total
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isDrawerOpen]);

  // Handle scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar and close drawer
        setIsNavbarVisible(false);
        if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <html lang="en">
      <body className={`${quicksand.variable} font-quicksand antialiased`}>
        {/* Header with Menu Button */}
        <header className={`fixed h-8 top-0 inset-x-0 bg-[#BCB09C]/90 px-4 py-1 z-50 flex justify-end items-center transition-all duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <button
            onClick={toggleDrawer}
            className="relative size-8 cursor-pointer text-white hover:text-gray-300 transition-colors drawer-toggle"
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
          <div className={`absolute right-0 top-0 h-full w-full lg:w-[560px] bg-white transform transition-transform duration-300 ease-out drawer-content ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Drawer Header */}
            <div className="bg-[#BCB09C] h-8 flex items-center justify-between px-6">
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

            </div>

            {/* Drawer Content */}
            <div className="flex h-[calc(100%-2rem)]">
              {/* Navigation Links */}
              <div className="w-full lg:w-1/2 p-8">
                <nav className="space-y-6">
                  <a href="/" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Ana Səhifə</a>
                  <a href="/hotel" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Hotel</a>
                  <a href="/rooms" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Otaqlar</a>
                  <a href="/services" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Xidmətlər</a>
                  <a href="/contact" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Əlaqə</a>
                  <a href="/reservation" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">Rezervasiya</a>
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

        {children}
      </body>
    </html>
  );
}
