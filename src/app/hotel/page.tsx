'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { Icon } from "@iconify/react";

export default function HotelPage() {
  return (
    <>
      <main>
        <div className="relative h-screen">
          <Link href="/" className="absolute inset-x-0 top-11 z-10 mx-auto block w-fit">
            <Image className="block mx-auto" src="/images/logo_small.png" alt="Francischiello Logo" width={471} height={247} />
          </Link>

          <Image className="object-cover" src="/images/hotel_main.jpg" alt="francischiello_itinerari_top" fill />
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
        <div className="relative z-10 bg-white px-8 py-6 shadow-lg -mt-16 mb-16 w-1/2 mx-auto">
          <div className="text-center mt-8">
            <h2 className="text-[#BCB09C] text-3xl font-medium mb-5">HOTEL</h2>
            <h3 className="text-black text-xl ">Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.</h3>
          </div>
        </div>

        {/* Sticky decorative strips on left and right */}
        <div className="fixed left-0 top-0 w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <div className="fixed right-0 top-0 w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <section className="relative h-screen mb-20">


          {/* Left Container - Larger Image */}
          <div className="absolute left-8 top-0 w-[50%] h-[600px] z-10">
            <Image
              src="/images/hotel_spa.jpg"
              alt="Sun City Naftalan Hotel"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Container - Smaller with Image and Text */}
          <div className="absolute right-0 px-8 top-28 w-[55%] h-[400px] z-20">

              <div className="bg-white p-8 h-full justify-center items-center place-content-center">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">
                  İstirahətiniz bizim peşəkarlığımızdır!
                </h2>
                
                {/* Separator Line with Dot */}
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-px bg-[#8B4513]"></div>
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full ml-4"></div>
                </div>
                
                {/* First Paragraph */}
                <p className="text-base text-[#8B7355] leading-relaxed mb-4">
                  "SunCity Hotel Spa Naftalan" Naftalan, Azərbaycanda yerləşən unikal təbii müalicə yerdir. 5 mərtəbəli müasir binada sakit və ya aktiv istirahət üçün lazım olan bütün şəraitlər təmin edilir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib, peşəkar işçi və tibb bacısı tərəfindən xidmət göstərilir. Bu, müasir sağlamlıq kompleksidir və müxtəlif qonaq ehtiyacları və rahatlıq səviyyələrinə uyğun 95 fərqli otaq kateqoriyası təqdim edir.
                </p>
                
                {/* Second Paragraph */}
                <p className="text-base text-[#8B7355] leading-relaxed">
                  Naftalanın sağaldıcı, rahatlıq və qonaqpərverliyini "SunCity Hotel Spa Naftalan"da yaşayın.
                </p>
              </div>
          </div>
        </section>
      </main>

      {/* Restaurant Section */}
      <section className="relative h-screen ml-8  bg-white">
        <div className='relative w-full h-[80%]'>

       
        <div className='absolute top-0 right-0 w-[70%] h-full' style={{backgroundImage: 'url(/images/hotel_xidmetler.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
        <div className='absolute top-0 left-0 w-[40%] h-[50%] bg-white p-8 flex flex-col justify-center'>
          <h3 className="text-2xl font-serif text-[#8B4513] mb-6">Xidmətlərimiz</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-600">95 rahat otel otağı – müxtəlif kateqoriyalarda, tam təchizatlı rahatlıq</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-600">Naftalan yağı müalicəsi – bədəninizi yeniləyən unikal terapiya</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-600">Fizioterapiya prosedurları – peşəkar həkimlər və tibbi personal tərəfindən tətbiq edilir</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-600">Spa və sağlamlıq mərkəzi – sauna, buxar otağı və istirahət zonaları</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-600">Açıq və bağlı hovuzlar – həm sağlamlıq, həm də istirahət üçün</span>
            </li>
          </ul>
        
        </div>
        <div className='absolute bottom-0 left-0 w-[30%] h-[50%] bg-[#C6BFB2] p-8 flex flex-col justify-center'>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-700">Restoran və sağlam qidalanma – menyular dietik və müasir tələblərə uyğun</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-700">Relax zonalar – sakitlik və ruh tarazlığı üçün xüsusi məkanlar</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-700">Kosmetoloji xidmətlər – dəriyə qulluq və gözəllik prosedurları</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-700">Transfer xidməti – hava limanı və dəmir yolu stansiyalarından rahat gediş-gəliş</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-[18px] text-gray-700">Pulsuz Wi-Fi və otaq xidməti – günün 24 saatı</span>
            </li>
          </ul>
        </div>
        </div>
      </section>



      <section className="relative h-screen mb-52">
        {/* Background Image */}
        <div className="absolute inset-0">
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
            {/* Restaurant Name Card - Left Side */}


            {/* Description Card - Right Side */}
            <div className="absolute w-[45%] top-26 right-8 z-20">
              <div className="bg-white h-[254px] p-8 border-gray-200">
                <div className="space-y-4">
                  {/* Check-in time */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-base font-normal text-gray-700">Giriş saatı</span>
                    <span className="text-base font-normal text-gray-700">14:00</span>
                  </div>
                  
                  {/* Check-out time */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-base font-normal text-gray-700">Çıxış saatı</span>
                    <span className="text-base font-normal text-gray-700">14:00</span>
                  </div>
                  
                  {/* Cancellation policy */}
                  <div className="flex justify-between items-start">
                    <span className="text-base font-normal text-gray-700">Rezervasiya ləğvi</span>
                    <div className="text-sm font-normal text-gray-700 text-left max-w-[60%]">
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
      </section>


      <Footer className='mb-26' />

      {/* Sticky Booking Panel (Bottom) */}
      <div className="fixed bottom-0 w-full left-0 mt-10 right-0 z-50 bg-[#BCB09C]/95 backdrop-blur px-3 lg:px-8 py-3 lg:py-2 shadow-[0_-6px_20px_rgba(0,0,0,0.15)]">
        <div className="flex justify-between w-full mx-auto gap-5">
          {/* Arrival Date */}
          <div className="w-1/4">
            <div className="text-white  text-[10px]  mb-1 text-left">Gəliş tarixi</div>
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

    </>
  );
}