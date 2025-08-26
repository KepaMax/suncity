'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import StickyBookingBar from '../components/StickyBookingBar';
import { Icon } from "@iconify/react";

export default function ItinerariPage() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
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

          <Image className="object-cover" src="/images/main.png" alt="francischiello_itinerari_top" fill />
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
            <h2 className="text-[#BCB09C] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2 leading-tight">
              Sun City Hotel & Spa Naftalan,
            </h2>
            <h3 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">Naftalan</h3>
          </div>
        </div>

        {/* Sticky decorative strips on left and right */}
        <div className="fixed left-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <div className="fixed right-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        {/* Hotel Description Section */}
        <section className="relative mx-0 sm:mx-6 md:mx-8 py-12 sm:py-16 md:py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left side - Hotel Image */}
            <div className="relative shadow-2xl lg:col-span-3 order-2 lg:order-1">
              <Image
                src="/images/hotel-lobby.png"
                alt="Sun City Hotel Lobby"
                width={1100}
                height={740}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right side - Hotel Description */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="flex items-end justify-end flex-col">
                <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-5 font-regular w-full text-[#3A2C0C] leading-tight">
                  İstirahətiniz bizim peşəkarlığımızdır!
                </h2>
                <div className="bg-zinc-700 relative my-3 sm:my-4 md:mb-5 mt-1 sm:mt-2 h-px w-full">
                  <div className="absolute w-2 h-2 rounded-full bg-[#BCB09C] flex-shrink-0 -top-6 sm:-top-7 md:-top-8 right-0"></div>
                </div>
              </div>

              <div className="text-gray-800">
                <div className="flex items-start gap-3">
                  <p className="text-base sm:text-lg leading-relaxed">
                    &ldquo;Sun City Hotel Spa Naftalan&rdquo; 5 mərtəbəli binada sakit və ya aktiv istirahət üçün lazım olan bütün şəraitlər təmin edilir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib, peşəkar işçi və tibb bacısı tərəfindən xidmət göstərilir. Bu, müasir sağlamlıq kompleksidir.
                  </p>
                </div>

                <p className="text-base sm:text-lg mt-6 sm:mt-8 leading-relaxed">
                  Müalicə və sağlamlıq kompleksində müxtəlif kateqoriyalarda 95 otel otağı var. Müalicə əsasən Naftalan yağı ilə aparılır, əlavə olaraq fizioterapevtik prosedurlar tətbiq edilir. Bakıya (H. Əliyev Beynəlxalq Hava Limanı) - 340 km, Gəncə Hava Limanına - 50 km, Goran dəmir yolu stansiyasına - 20 km məsafədə yerləşir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Section */}
        <section className="relative h-screen min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="Sun City Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] px-4 sm:px-6 md:px-8 relative w-full">
              {/* Restaurant Name Card - Left Side */}
              <div className="absolute w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] top-1/2 h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[254px] left-2 sm:left-4 transform -translate-y-1/2 z-30">
                <div className="bg-white p-6 sm:p-8 md:p-10 shadow-2xl px-6 sm:px-12 md:px-16 lg:px-20 border-gray-100 h-full flex flex-col justify-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-serif text-amber-800 mb-2 sm:mb-3 text-center sm:text-right leading-tight">
                    SUNCITY HOTEL RESTORAN
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-black text-center sm:text-right leading-tight">
                    NAFTALANIN LƏZZƏT MƏRKƏZİ
                  </p>
                </div>
              </div>

              {/* Description Card - Right Side */}
              <div className="absolute right-0 sm:right-4 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] top-1/2 transform -translate-y-1/2 z-20">
                <div className="bg-[#D2CDC3] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[254px] p-6 sm:p-8 md:p-10 shadow-2xl border-gray-200 flex items-center">
                  <div className="hidden sm:block w-[20%] md:w-[25%] lg:w-[30%] h-full"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-black text-left font-normal">
                    SunCity Restoranı, həm Naftalan müalicəvi xüsusiyyətlərini nəzərə alan sağlam yeməkləri, həm də geniş çeşidli beynəlxalq menyusu ilə xidmətinizdədir. İsti və səmimi mühitdə, xüsusi günlənizi və gündəlik istirahətinizi dəyərləndirin.
                  </p>
                </div>

                {/* Circular Button - Bottom Right */}
                <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 -right-8 sm:-right-10 md:-right-12 z-30">
                  <button className="bg-white w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[147px] lg:h-[147px] rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-black mb-1">RESTORAN</span>
                    <svg className="w-5 h-6 sm:w-6 sm:h-7 md:w-6 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Experience Section */}
        <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Title Section */}
            <div className="flex relative items-end mb-6 sm:mb-8 w-full sm:w-[90%] md:w-[80%]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#BCB09C] mr-4 sm:mr-6 md:mr-8 leading-tight">
                Unudulmaz Dadlar Təcrübəsi
              </h2>
              <div className="flex-1 h-px bg-[#514639]"></div>
              <div className="absolute top-1 right-0 w-2 h-2 bg-[#C6BFB2] rounded-full ml-2 sm:ml-4"></div>
            </div>

            {/* Content Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {/* Left Text Block */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-[#3A2C0C] leading-relaxed">
                  Hər zövqə uyğun, təzə və keyfiyyətli məhsullardan hazırlanmış yeməklər sizi gözləyir. Peşəkar aşpaz komandamız ənənəvi və müasir dadları bir araya gətirir.
                </p>
              </div>

              {/* Middle Text Block */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-[#3A2C0C] leading-relaxed">
                  Geniş və rahat məkanımız, müasir dizayn elementləri ilə bəzədilmişdir. Dostlarla görüşmək, ailə ilə vaxt keçirmək və ya xüsusi günlərinizi qeyd etmək üçün ideal yerdir.
                </p>
              </div>

              {/* Right Text Block */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-[#3A2C0C] leading-relaxed">
                  Müştəri məmnuniyyəti bizim üçün önəmlidir. Səmimi və diqqətli xidmət heyətimiz hər an sizin rahatlığınızı təmin etmək üçün hazırdır.
                </p>
              </div>

              {/* Circular Button with Arrow */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-center justify-center">
                <div className="relative">
                  <button className="bg-[#C6BFB2] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full flex flex-col items-center justify-center hover:bg-gray-300 transition-all duration-300 group">
                    <span className="text-base sm:text-lg font-normal text-white">Menyu</span>
                  </button>
                  {/* Arrow extending from button */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full hidden lg:block">
                    <svg className="w-16 h-4 text-[#C6BFB2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pool Section with Two Main Containers */}
        <section className="relative mb-12 sm:mb-16 md:mb-20 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
          {/* Left Container - Smaller with Image and Text */}
          <div className="absolute left-0 px-4 sm:px-6 md:px-8 top-1/2 transform -translate-y-1/2 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[514px] z-20">
            <div className="relative h-full p-4 sm:p-6 bg-white">
              <div className="bg-[#D2CDC3] p-4 sm:p-6 md:p-8 h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                  {/* Left Column - Image */}
                  <div className="relative h-full order-2 sm:order-1">
                    <Image
                      src="/images/pool-2.jpg"
                      alt="Sun City Pool"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Column - Text and Button */}
                  <div className="relative flex flex-col justify-center items-center p-2 sm:p-4 order-1 sm:order-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#514639] mb-2 sm:mb-4 text-center sm:text-left">
                        Sərinləyici və Təmiz Hovuz
                      </h3>
                      <p className="text-sm sm:text-base text-[#514639] leading-relaxed text-center sm:text-left">
                        SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-2 sm:-bottom-3 right-1/2 sm:right-1/2 translate-x-1/2 order-3 col-span-1 sm:col-span-2 z-40">
                    <button className="bg-white w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                      <span className="text-sm sm:text-base font-normal text-black mb-1">HOVUZ</span>
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
          <div className="absolute right-0 sm:right-4 md:right-8 top-0 w-full sm:w-[50%] h-full z-10">
            <Image
              src="/images/pool-image.jpg"
              alt="Sun City Naftalan Hotel"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* SPA Section */}
        <section className="relative h-screen min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/spa-background.png"
              alt="Sun City Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex">
            <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] relative w-full">
              {/* Description Card - Right Side */}
              <div className="absolute w-full sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[55%] top-16 sm:top-20 md:top-24 lg:top-26 transform z-20">
                <div className="bg-white h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[254px] p-6 sm:p-8 md:p-10 border-gray-200 flex flex-col items-center justify-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#C6BFB2] text-center sm:text-start w-full mb-3 sm:mb-4">
                    Rahatlıq və Təravət Mərkəzi
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-[#C6BFB2] text-center sm:text-left font-normal">
                    SunCity Restoranı, həm Naftalan müalicəvi xüsusiyyətlərini nəzərə alan sağlam yeməkləri, həm də geniş çeşidli beynəlxalq menyusu ilə xidmətinizdədir. İsti və səmimi mühitdə, xüsusi günlənizi və gündəlik istirahətinizi dəyərləndirin.
                  </p>
                </div>

                {/* Circular Button - Bottom Right */}
                <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 -right-8 sm:-right-10 md:-right-12 z-30">
                  <button className="bg-white w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                    <span className="text-base sm:text-lg md:text-[20px] mt-2 sm:mt-3 md:mt-4 font-normal text-black">SPA</span>
                    <svg className="w-5 h-6 sm:w-6 sm:h-7 md:w-6 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className='relative h-auto min-h-screen bg-[#F8F8F8] py-12 sm:py-16 md:py-20'>
          <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto px-4 sm:px-6 md:px-8">
            {/* Title Section */}
            <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
              <div className="flex items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#BCB09C] mr-4 sm:mr-6 md:mr-8 leading-tight">
                  SPECIAL OFFERS
                </h2>
                <div className="flex-1 h-px bg-[#BCB09C]"></div>
                <div className="w-2 h-2 bg-[#BCB09C] rounded-full ml-2 sm:ml-4"></div>
              </div>
            </div>

            {/* Three Offer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-15">
              {/* Card 1: Open and Closed Pools */}
              <div className="relative bg-[#ECE7DF]">
                {/* Image positioned above and to the left */}
                <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-full z-20">
                  <Image src="/images/specialOffers-1.jpg" alt="Sun City Pool" fill className="object-cover" />
                </div>

                {/* Text Card */}
                <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                  <div className='w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] bg-[#ECE7DF]'></div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col mb-2 justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-[#60470F] mb-2 leading-tight">
                        AÇIQ VƏ QAPALI HOVUZLAR
                      </h3>
                      <div className="flex h-[1px] w-full bg-white relative">
                        <div className="absolute rounded-full bg-white w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] right-2 -top-3 sm:-top-4"></div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8B7355] leading-relaxed mb-3 sm:mb-4">
                      A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                    </p>
                    <div className="flex w-full justify-center items-center px-3 sm:px-4 py-2 border-[1px] border-white">
                      <span className="text-lg sm:text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                    </div>
                    <div className="border-[1px] border-white px-3 sm:px-4 py-2 text-center">
                      <span className="text-[#3A2C0C] text-base sm:text-lg font-medium">Detaylı</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Naftalan Bath */}
              <div className="relative">
                {/* Image positioned above and to the left */}
                <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-full z-20">
                  <Image src="/images/specialOffers-2.jpg" alt="Sun City Pool" fill className="object-cover" />
                </div>

                {/* Text Card */}
                <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                  <div className='w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] bg-[#ECE7DF]'></div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col mb-2 justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-[#60470F] mb-2 leading-tight">
                        NAFTALAN VANNASI
                      </h3>
                      <div className="flex h-[1px] w-full bg-white relative">
                        <div className="absolute rounded-full bg-white w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] right-2 -top-3 sm:-top-4"></div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8B7355] leading-relaxed mb-3 sm:mb-4">
                      A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                    </p>
                    <div className="flex w-full justify-center items-center px-3 sm:px-4 py-2 border-[1px] border-white">
                      <span className="text-lg sm:text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                    </div>
                    <div className="border-[1px] border-white px-3 sm:px-4 py-2 text-center">
                      <span className="text-[#3A2C0C] text-base sm:text-lg font-medium">Detaylı</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Paraffin Therapy */}
              <div className="relative sm:col-span-2 lg:col-span-1">
                <div className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2 z-30">
                  <div className="flex flex-col gap-2">
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#60470F] transition-colors duration-200">
                      <Icon icon="mdi:arrow-left" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 border border-[#ECE7DF]">
                      <Icon icon="mdi:arrow-right" className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B7355]" />
                    </button>
                  </div>
                </div>
                
                {/* Image positioned above and to the left */}
                <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-full z-20">
                  <Image src="/images/specialOffers-3.jpg" alt="Sun City Pool" fill className="object-cover" />
                </div>

                {/* Text Card */}
                <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                  <div className='w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] bg-[#ECE7DF]'></div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col mb-2 justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-[#60470F] mb-2 leading-tight">
                        PARAFİN TERAPIYASI
                      </h3>
                      <div className="flex h-[1px] w-full bg-white relative">
                        <div className="absolute rounded-full bg-white w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] right-2 -top-3 sm:-top-4"></div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8B7355] leading-relaxed mb-3 sm:mb-4">
                      A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                    </p>
                    <div className="flex w-full justify-center items-center px-3 sm:px-4 py-2 border-[1px] border-white">
                      <span className="text-lg sm:text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                    </div>
                    <div className="border-[1px] border-white px-3 sm:px-4 py-2 text-center">
                      <span className="text-[#3A2C0C] text-base sm:text-lg font-medium">Detaylı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className='relative my-12 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8' style={{ height: '60vh', minHeight: '400px' }}>
          <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='col-span-1 relative flex justify-center items-center h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                <div className='w-full h-[60%] flex flex-col justify-between bg-[#C6BFB2] p-3 sm:p-4'>
                  <div className='flex flex-col justify-between items-center'>
                    <span className='text-xl sm:text-2xl md:text-3xl font-bold w-full text-start text-white leading-tight'>Delux Queen</span>
                    <span className='text-lg sm:text-xl md:text-2xl font-bold w-full text-end mt-4 sm:mt-6 text-white leading-tight'>Delux Queen</span>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-2">
                      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B7355] rounded-full flex items-center justify-center hover:bg-[#60470F] transition-colors duration-200">
                        <Icon icon="mdi:arrow-left" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 border border-[#ECE7DF]">
                        <Icon icon="mdi:arrow-right" className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B7355]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='col-span-1 sm:col-span-2'>
              <Image src="/images/rooms-1-1.png"
                alt="room"
                width={1000}
                height={1000}
                className="w-full h-full object-cover" />
            </div>
            
            <div className='col-span-1'>
              <div className='w-full h-full flex flex-col justify-between relative p-3 sm:p-4'>
                <div className='bg-white h-[60%] w-full absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-8 md:-left-10'>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 z-30">
                    <button className="bg-[#C6BFB2] w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-white hover:text-[#C6BFB2] transition-all duration-300 hover:scale-105 border border-gray-100">
                      <span className="text-base sm:text-lg md:text-[20px] font-normal text-white hover:text-[#C6BFB2]">More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer className='mb-26' />

        {/* Sticky Booking Bar Component */}
        <StickyBookingBar />

      </main>
    </>
  );
}