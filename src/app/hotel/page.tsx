'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { Icon } from "@iconify/react";

export default function HotelPage() {
  return (
    <>
      <main className="overflow-x-hidden">
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

          <Image className="object-cover" src="/images/hotel_main.jpg" alt="francischiello_itinerari_top" fill />
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
          <div className="text-center mt-4 sm:mt-6 md:mt-8">
            <h2 className="text-[#BCB09C] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-5 leading-tight">HOTEL</h2>
            <h3 className="text-black text-base sm:text-lg md:text-xl leading-tight">
              Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.
            </h3>
          </div>
        </div>

        {/* Sticky decorative strips on left and right */}
        <div className="fixed left-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <div className="fixed right-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <section className="relative min-h-screen mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden space-y-8">
              {/* Top Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src="/images/hotel_spa.jpg"
                  alt="Sun City Naftalan Hotel"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8B4513] mb-4 sm:mb-6">
                  İstirahətiniz bizim peşəkarlığımızdır!
                </h2>
                
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex-1 h-px bg-[#8B4513]"></div>
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full ml-4"></div>
                </div>
                
                <p className="text-sm sm:text-base text-[#8B7355] leading-relaxed mb-4">
                  &ldquo;SunCity Hotel Spa Naftalan&rdquo; Naftalan, Azərbaycanda yerləşən unikal təbii müalicə yerdir. 5 mərtəbəli müasir binada sakit və ya aktiv istirahət üçün lazım olan bütün şəraitlər təmin edilir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib, peşəkar işçi və tibb bacısı tərəfindən xidmət göstərilir. Bu, müasir sağlamlıq kompleksidir və müxtəlif qonaq ehtiyacları və rahatlıq səviyyələrinə uyğun 95 fərqli otaq kateqoriyası təqdim edir.
                </p>
                
                <p className="text-sm sm:text-base text-[#8B7355] leading-relaxed">
                  Naftalanın sağaldıcı, rahatlıq və qonaqpərverliyini &ldquo;SunCity Hotel Spa Naftalan&rdquo;da yaşayın.
                </p>
              </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Left Container - Larger Image */}
              <div className="relative w-full h-[600px]">
                <Image
                  src="/images/hotel_spa.jpg"
                  alt="Sun City Naftalan Hotel"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Right Container - Content */}
              <div className="bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8B4513] mb-4 lg:mb-6">
                  İstirahətiniz bizim peşəkarlığımızdır!
                </h2>
                
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="flex-1 h-px bg-[#8B4513]"></div>
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full ml-4"></div>
                </div>
                
                <p className="text-base lg:text-lg xl:text-xl text-[#8B7355] leading-relaxed mb-4 lg:mb-6">
                  &ldquo;SunCity Hotel Spa Naftalan&rdquo; Naftalan, Azərbaycanda yerləşən unikal təbii müalicə yerdir. 5 mərtəbəli müasir binada sakit və ya aktiv istirahət üçün lazım olan bütün şəraitlər təmin edilir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib, peşəkar işçi və tibb bacısı tərəfindən xidmət göstərilir. Bu, müasir sağlamlıq kompleksidir və müxtəlif qonaq ehtiyacları və rahatlıq səviyyələrinə uyğun 95 fərqli otaq kateqoriyası təqdim edir.
                </p>
                
                <p className="text-base lg:text-lg xl:text-xl text-[#8B7355] leading-relaxed">
                  Naftalanın sağaldıcı, rahatlıq və qonaqpərverliyini &ldquo;SunCity Hotel Spa Naftalan&rdquo;da yaşayın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Section */}
        <section className="relative min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Background Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{backgroundImage: 'url(/images/hotel_xidmetler.jpg)'}}
                />
              </div>

              {/* Services Content */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-serif text-[#8B4513] mb-4 sm:mb-6">Xidmətlərimiz</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">95 rahat otel otağı – müxtəlif kateqoriyalarda, tam təchizatlı rahatlıq</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">Naftalan yağı müalicəsi – bədəninizi yeniləyən unikal terapiya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">Fizioterapiya prosedurları – peşəkar həkimlər və tibbi personal tərəfindən tətbiq edilir</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">Spa və sağlamlıq mərkəzi – sauna, buxar otağı və istirahət zonaları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">Açıq və bağlı hovuzlar – həm sağlamlıq, həm də istirahət üçün</span>
                  </li>
                </ul>
              </div>

              {/* Additional Services */}
              <div className="bg-[#C6BFB2] p-6 sm:p-8 rounded-lg">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">Restoran və sağlam qidalanma – menyular dietik və müasir tələblərə uyğun</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">Relax zonalar – sakitlik və ruh tarazlığı üçün xüsusi məkanlar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">Kosmetoloji xidmətlər – dəriyə qulluq və gözəllik prosedurları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">Transfer xidməti – hava limanı və dəmir yolu stansiyalarından rahat gediş-gəliş</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700">Pulsuz Wi-Fi və otaq xidməti – günün 24 saatı</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative w-full h-[80%] min-h-[600px]">
              <div className='absolute top-0 right-0 w-[70%] h-full rounded-lg overflow-hidden' 
                   style={{backgroundImage: 'url(/images/hotel_xidmetler.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
              
              <div className='absolute top-0 left-0 w-[40%] h-[50%] bg-white p-8 lg:p-10 xl:p-12 flex flex-col justify-center rounded-l-lg'>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif text-[#8B4513] mb-6 lg:mb-8">Xidmətlərimiz</h3>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-600">95 rahat otel otağı – müxtəlif kateqoriyalarda, tam təchizatlı rahatlıq</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-600">Naftalan yağı müalicəsi – bədəninizi yeniləyən unikal terapiya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-600">Fizioterapiya prosedurları – peşəkar həkimlər və tibbi personal tərəfindən tətbiq edilir</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-600">Spa və sağlamlıq mərkəzi – sauna, buxar otağı və istirahət zonaları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-600">Açıq və bağlı hovuzlar – həm sağlamlıq, həm də istirahət üçün</span>
                  </li>
                </ul>
              </div>
              
              <div className='absolute bottom-0 left-0 w-[30%] h-[50%] bg-[#C6BFB2] p-8 lg:p-10 xl:p-12 flex flex-col justify-center rounded-bl-lg'>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-700">Restoran və sağlam qidalanma – menyular dietik və müasir tələblərə uyğun</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-700">Relax zonalar – sakitlik və ruh tarazlığı üçün xüsusi məkanlar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-700">Kosmetoloji xidmətlər – dəriyə qulluq və gözəllik prosedurları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-700">Transfer xidməti – hava limanı və dəmir yolu stansiyalarından rahat gediş-gəliş</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base lg:text-lg xl:text-xl text-gray-700">Pulsuz Wi-Fi və otaq xidməti – günün 24 saatı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="max-w-7xl mx-auto">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src="/images/hovuz.jpg"
                alt="Sun City Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex justify-end">
              <div className="w-full relative">
                {/* Mobile Layout */}
                <div className="lg:hidden mt-8 sm:mt-12 md:mt-16">
                  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Check-in time */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm sm:text-base font-normal text-gray-700">Giriş saatı</span>
                        <span className="text-sm sm:text-base font-normal text-gray-700">14:00</span>
                      </div>
                      
                      {/* Check-out time */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm sm:text-base font-normal text-gray-700">Çıxış saatı</span>
                        <span className="text-sm sm:text-base font-normal text-gray-700">14:00</span>
                      </div>
                      
                      {/* Cancellation policy */}
                      <div className="flex justify-between items-start">
                        <span className="text-sm sm:text-base font-normal text-gray-700">Rezervasiya ləğvi</span>
                        <div className="text-xs sm:text-sm font-normal text-gray-700 text-left max-w-[60%]">
                          Ləğv qaydaları plandan asılı olaraq dəyişə bilər. Dəqiq ləğv şərtləri rezervasyon təsdiqində göstərilmişdir.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circular Button */}
                  <div className="flex justify-center mt-6 sm:mt-8">
                    <button className="bg-white w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                      <span className="text-xs sm:text-sm font-normal text-black">Rezervasiya</span>
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block absolute w-[45%] top-26 right-8 z-20">
                  <div className="bg-white h-[254px] p-8 lg:p-10 xl:p-12 border-gray-200 rounded-lg shadow-lg">
                    <div className="space-y-4 lg:space-y-6">
                      {/* Check-in time */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-base lg:text-lg font-normal text-gray-700">Giriş saatı</span>
                        <span className="text-base lg:text-lg font-normal text-gray-700">14:00</span>
                      </div>
                      
                      {/* Check-out time */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-base lg:text-lg font-normal text-gray-700">Çıxış saatı</span>
                        <span className="text-base lg:text-lg font-normal text-gray-700">14:00</span>
                      </div>
                      
                      {/* Cancellation policy */}
                      <div className="flex justify-between items-start">
                        <span className="text-base lg:text-lg font-normal text-gray-700">Rezervasiya ləğvi</span>
                        <div className="text-sm lg:text-base font-normal text-gray-700 text-left max-w-[60%]">
                          Ləğv qaydaları plandan asılı olaraq dəyişə bilər. Dəqiq ləğv şərtləri rezervasyon təsdiqində göstərilmişdir.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circular Button - Bottom Right */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-30">
                    <button className="bg-white w-[120px] h-[120px] rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                      <span className="text-[14px] font-normal text-black">Rezervasiya</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer className='mb-26' />

        {/* Sticky Booking Panel (Bottom) */}
        <div className="fixed bottom-0 w-full left-0 mt-10 right-0 z-50 bg-[#BCB09C]/95 backdrop-blur px-3 lg:px-8 py-3 lg:py-2 shadow-[0_-6px_20px_rgba(0,0,0,0.15)]">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              {/* Quick Info */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center text-white gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-bold">2</span>
                  <div className="flex flex-col">
                    <p className='text-xs sm:text-sm uppercase'>avqust 2025</p>
                    <p className='text-xs'>12:00</p>
                  </div>
                </div>
                <div className="text-white text-xs sm:text-sm">→</div>
                <div className="flex items-center text-white gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-bold">3</span>
                  <div className="flex flex-col">
                    <p className='text-xs sm:text-sm uppercase'>avqust 2025</p>
                    <p className='text-xs'>12:00</p>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button className="bg-white text-[#BCB09C] px-3 sm:px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
                Rezervasiya et
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between w-full mx-auto gap-5">
            {/* Arrival Date */}
            <div className="w-1/4">
              <div className="text-white text-[10px] mb-1 text-left">Gəliş tarixi</div>
              <div className="flex border border-[#F1F1F126] rounded-lg items-center px-3 py-2 justify-between gap-2">
                <div className="flex items-center text-white gap-2">
                  <span className="text-4xl font-bold">2</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>avqust 2025</p>
                    <p className='text-xs'>12:00</p>
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
                  <span className="text-4xl font-bold">3</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>avqust 2025</p>
                    <p className='text-xs'>12:00</p>
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
                  <span className="text-4xl font-bold">2</span>
                  <div className="flex flex-col">
                    <p className='text-sm uppercase'>Böyük:</p>
                    <p className='text-xs'>Uşaq:1</p>
                  </div>
                </div>
                <Icon icon="mdi:chevron-down" className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Book Button */}
            <div className="w-1/4">
              <div className="h-6"></div> {/* Spacer to align with inputs */}
              <div className="flex border border-[#F1F1F126] bg-white hover:bg-slate-200 transition-colors rounded-lg justify-center items-center px-3 py-2 gap-2 h-[52px]">
                <span className="text-base font-bold">Rezervasiya et</span>
              </div>
              {/* Promo code link */}
              <div className="flex justify-end mt-2">
                <button className="flex items-center gap-2 text-white/90 text-xs hover:text-slate-200 transition-colors">
                  <Image src="/promo_code_icon.svg" alt="promo_code" width={16} height={16} />
                  <span>promo kod</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}