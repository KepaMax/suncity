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

    <div className="relative h-screen min-h-[600px]">
      <Link href="/" className="absolute inset-x-0 top-4 sm:top-6 md:top-8 lg:top-11 z-10 mx-auto block w-fit">
        <Image 
          className="block mx-auto w-48 sm:w-64 md:w-80 lg:w-[471px] h-auto" 
          src="/images/logo_small.png" 
          alt="Francischiello Logo" 
          width={471} 
          height={247} 
        />
      </Link>

      <Image className="object-cover" src="/images/lobbi-bar.jpg" alt="francischiello_itinerari_top" fill />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 grid place-items-center text-center px-4">
        <div className="text-white uppercase space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
            Sun City Hotel & Spa Naftalan, Naftalan
          </p>
          <div className="bg-white h-px w-32 sm:w-48 md:w-56 lg:w-64 mx-auto"></div>
          <p className="text-base sm:text-lg md:text-xl leading-tight">Heading text</p>
        </div>
      </div>

      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 w-fit inset-x-0 mx-auto flex flex-col items-center">
        <p className="text-white text-sm sm:text-base md:text-lg">scroll down</p>
        <Icon icon="mynaui:arrow-long-down" className="w-6 h-12 sm:w-8 h-16 md:w-10 h-20 text-white" />
      </div>
    </div>

    {/* Hotel Branding Card - Bridge between sections */}
    <div className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-lg -mt-4 sm:-mt-6 md:-mt-8 mb-8 sm:mb-12 md:mb-16 w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
      <div className="text-center">
        <h2 className="text-[#BCB09C] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1 sm:mb-2 leading-tight">OTAQLAR</h2>
        <h3 className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-tight">Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.</h3>
      </div>
    </div>

    {/* Sticky decorative strips on left and right */}
    <div className="fixed left-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
      <div className="w-full h-full bg-[#BCB09C]/10"></div>
    </div>

    <div className="fixed right-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
      <div className="w-full h-full bg-[#BCB09C]/10"></div>
    </div>

    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
        {/* Superior Label - Top Left */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-4 sm:top-6 md:top-8 z-30">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#514639]">SUPERIOR</h2>
        </div>

        {/* Left Container - Smaller with Image and Text */}
        <div className="absolute left-0 px-2 sm:px-4 md:px-6 lg:px-8 top-1/2 transform -translate-y-1/2 w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[514px] z-20">
          <div className="relative h-full p-3 sm:p-4 md:p-6 bg-[#ECE7DF]">
            <div className="bg-white p-4 sm:p-6 md:p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
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
                <div className="relative flex flex-col justify-center items-center p-2 sm:p-3 md:p-4">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#514639] mb-2 sm:mb-3 md:mb-4 text-center">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#514639] leading-relaxed text-center">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-xs sm:text-sm md:text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-4 h-5 sm:w-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Larger Image */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-0 w-full sm:w-[35%] md:w-[45%] lg:w-[50%] h-full z-10">
          <Image
            src="/images/rooms-1-2.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
        {/* Superior Label - Top Right */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-4 sm:top-6 md:top-8 z-30">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#514639]">DELUX QUEEN</h2>
        </div>

        {/* Left Container - Larger Image */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-0 w-full sm:w-[35%] md:w-[45%] lg:w-[50%] h-full z-10">
          <Image
            src="/images/rooms-2-1.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Container - Smaller with Image and Text */}
        <div className="absolute right-0 px-2 sm:px-4 md:px-6 lg:px-8 top-1/2 transform -translate-y-1/2 w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[514px] z-20">
          <div className="relative h-full p-3 sm:p-4 md:p-6 bg-[#ECE7DF]">
            <div className="bg-white p-4 sm:p-6 md:p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
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
                <div className="relative flex flex-col justify-center items-center p-2 sm:p-3 md:p-4">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#514639] mb-2 sm:mb-3 md:mb-4 text-center">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#514639] leading-relaxed text-center">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-xs sm:text-sm md:text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-4 h-5 sm:w-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
        {/* Superior Label - Top Left */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-4 sm:top-6 md:top-8 z-30">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#514639]">TRIPLE ROOM</h2>
        </div>

        {/* Left Container - Smaller with Image and Text */}
        <div className="absolute left-0 px-2 sm:px-4 md:px-6 lg:px-8 top-1/2 transform -translate-y-1/2 w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[514px] z-20">
          <div className="relative h-full p-3 sm:p-4 md:p-6 bg-[#ECE7DF]">
            <div className="bg-white p-4 sm:p-6 md:p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
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
                <div className="relative flex flex-col justify-center items-center p-2 sm:p-3 md:p-4">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#514639] mb-2 sm:mb-3 md:mb-4 text-center">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#514639] leading-relaxed text-center">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-xs sm:text-sm md:text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-4 h-5 sm:w-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - Larger Image */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-0 w-full sm:w-[35%] md:w-[45%] lg:w-[50%] h-full z-10">
          <Image
            src="/images/rooms-3-2.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
        {/* Superior Label - Top Right */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-4 sm:top-6 md:top-8 z-30">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#514639]">FAMILY SUITE</h2>
        </div>

        {/* Left Container - Larger Image */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-0 w-full sm:w-[35%] md:w-[45%] lg:w-[50%] h-full z-10">
          <Image
            src="/images/rooms-4-1.png"
            alt="Sun City Naftalan Hotel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Container - Smaller with Image and Text */}
        <div className="absolute right-0 px-2 sm:px-4 md:px-6 lg:px-8 top-1/2 transform -translate-y-1/2 w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[514px] z-20">
          <div className="relative h-full p-3 sm:p-4 md:p-6 bg-[#ECE7DF]">
            <div className="bg-white p-4 sm:p-6 md:p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
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
                <div className="relative flex flex-col justify-center items-center p-2 sm:p-3 md:p-4">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#514639] mb-2 sm:mb-3 md:mb-4 text-center">
                      Sərinləyici və Təmiz Hovuz
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#514639] leading-relaxed text-center">
                      SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 right-1/2 translate-x-1/2">
                  <button className="bg-[#ECE7DF] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-xs sm:text-sm md:text-base font-normal text-black mb-1">Detallı</span>
                    <svg className="w-4 h-5 sm:w-5 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

