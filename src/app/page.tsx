'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import { Icon } from "@iconify/react";
export default function ItinerariPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Simple animation for header
    const siteHeader = document.getElementById("site_header");
    if (siteHeader) {
      setTimeout(() => {
        siteHeader.classList.remove("-translate-y-full");
      }, 800);
    }
  }, []);

  useEffect(() => {
    // Auto-slide images when drawer is open
    if (isDrawerOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 10); // 10 images total
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    // Handle scroll-based navbar visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
                <a href="/" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">HOME</a>
                <a href="/hotel" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">HOTEL</a>
                <a href="/camere" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">CAMERE</a>
                <a href="/ristorante" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">RISTORANTE</a>
                <a href="/piscina" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">PISCINA</a>
                <a href="/cerimonie" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">CERIMONIE</a>
                <a href="/benessere" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">BENESSERE</a>
                <a href="/itinerari" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">ITINERARI</a>
                <a href="/offerte-speciali" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">OFFERTE SPECIALI</a>
                <a href="/contatti" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">CONTATTI</a>
                <a href="/privacy-policy" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">PRIVACY</a>
                <a href="/cookie-policy" className="block text-zinc-700 hover:text-zinc-900 text-xl transition-colors">COOKIE</a>
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

      <main>
        <div className="relative h-screen">
          <a href="/" className="absolute inset-x-0 top-11 z-10 mx-auto block w-fit">
            <Image className="block mx-auto" src="/images/logo_small.png" alt="Francischiello Logo" width={471} height={247} />
          </a>

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
        <div className="relative z-10 bg-white px-8 py-6 shadow-lg -mt-8 mb-16 w-1/3 mx-auto">
          <div className="text-center">
            <h2 className="text-[#BCB09C] text-3xl font-medium mb-2">Sun City Hotel & Spa Naftalan,</h2>
            <h3 className="text-black text-3xl font-bold">Naftalan</h3>
          </div>
        </div>

        {/* Sticky decorative strips on left and right */}
        <div className="fixed left-0 top-0 w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <div className="fixed right-0 top-0 w-8 h-full z-0 pointer-events-none">
          <div className="w-full h-full bg-[#BCB09C]/10"></div>
        </div>

        <section className="relative mx-8 py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center max-w-7xl mx-auto">
            {/* Left side - Hotel Image */}
            <div className="relative shadow-2xl lg:col-span-3">
              <Image
                src="/images/hotel-lobby.png"
                alt="Sun City Hotel Lobby"
                width={1100}
                height={740}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right side - Hotel Description */}
            <div className=" lg:col-span-2">
              <div className="flex items-end justify-end flex-col">
                <h2 className="text-3xl mb-5 font-regular w-full text-[#3A2C0C]">
                  İstirahətiniz bizim peşəkarlığımızdır!
                </h2>
{/* 
                <div className='flex-row justify-center items-end bg-green-400 w-full'>
                  <div className="w-2 h-2 rounded-full bg-[#BCB09C] mt-3 flex-shrink-0"></div>
                </div> */}
                <div className="bg-zinc-700 relative my-5 mt-2 h-px w-full">
                  <div className="absolute w-2 h-2 rounded-full bg-[#BCB09C] flex-shrink-0 -top-8 right-0"></div>
                </div>
              </div>

              <div className=" text-gray-800">
                <div className="flex items-start gap-3">
                  <p className="text-lg leading-relaxed">
                    "Sun City Hotel Spa Naftalan" 5 mərtəbəli binada sakit və ya aktiv istirahət üçün lazım olan bütün şəraitlər təmin edilir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib, peşəkar işçi və tibb bacısı tərəfindən xidmət göstərilir. Bu, müasir sağlamlıq kompleksidir.
                  </p>
                </div>

                <p className="text-lg mt-8 leading-relaxed">
                  Müalicə və sağlamlıq kompleksində müxtəlif kateqoriyalarda 95 otel otağı var. Müalicə əsasən Naftalan yağı ilə aparılır, əlavə olaraq fizioterapevtik prosedurlar tətbiq edilir. Bakıya (H. Əliyev Beynəlxalq Hava Limanı) - 340 km, Gəncə Hava Limanına - 50 km, Goran dəmir yolu stansiyasına - 20 km məsafədə yerləşir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl bg-white px-4 mt-12">
          <p className="text-lg">La posizione particolarmente felice, adagiata sul promontorio estremo della penisola che si protende verso Capri, esattamente al centro tra le due costiere, Sorrentina e Amalfitana, ne fa il centro ideale di una vacanza dedicata a scoprire tutte le località e tutti gli aspetti di questo territorio ricco di attrattive.</p>
        </section>

        <section className="mt-12 max-w-6xl mx-auto grid gap-12">
          <div className="relative px-4 group">
            <div className="relative">
              <h3 className="text-zinc-700 px-4 text-2xl uppercase">
                Costiera amalfitana
              </h3>
            </div>
            <div className="mt-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative overflow-hidden aspect-[3/2]">
                <Image className="object-cover" src="https://www.francischiello.it/wp-content/uploads/2025/07/francischiello_itinerari_amalfi.jpg" alt="francischiello_itinerari_amalfi" fill />
              </div>
              <div className="p-8 relative bg-gray-100">
                <div className="bg-white p-8">
                  <p className="text-sm">
                    La Divina Costiera è punteggiata di località che sono vere e proprie perle di bellezza e di cultura. Positano, con le sue casette bianche a cascata sulla roccia, il blu intenso del mare e del cielo e i colori brillanti della cupola maiolicata che si vede da ogni suo angolo; Ravello, tanto amata da Wagner, con gli incantevoli giardini di Villa Ruffolo e il Belvedere dell'infinito di Villa Cimbrone; Amalfi, antica e nobile Repubblica Marinara, che custodisce uno dei gioielli più belli dell'architettura italiana, il celeberrimo Chiostro del Paradiso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-4 group">
            <div className="relative">
              <h3 className="text-zinc-700 px-4 text-2xl uppercase">
                Pompei
              </h3>
            </div>
            <div className="mt-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative overflow-hidden aspect-[3/2]">
                <Image className="object-cover" src="https://www.francischiello.it/wp-content/uploads/2025/07/francischiello_itinerari_pompei.jpg" alt="francischiello_itinerari_pompei" fill />
              </div>
              <div className="p-8 relative bg-gray-100">
                <div className="bg-white p-8">
                  <p className="text-sm">
                    A una trentina di Km da Massalubrense si trova uno dei siti archeologici più famosi e più visitati al mondo. Solo a Pompei è possibile fare l'esperienza di passeggiare per le strade di una città di duemila anni fa, tra case e negozi, ville e templi, entrare nel foro e nella piazza del mercato, raffigurarsi il vapore delle terme e lo schiamazzo dei giochi nell'anfiteatro. Non è difficile così immaginare la vita pullulare per le strade della cittadina sovrastata dal profilo del Vesuvio, ed anche chi non è esperto di archeologia qui non può fare a meno di sentire il profumo della storia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-4 group">
            <div className="relative">
              <h3 className="text-zinc-700 px-4 text-2xl uppercase">
                Napoli
              </h3>
            </div>
            <div className="mt-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative overflow-hidden aspect-[3/2]">
                <Image className="object-cover" src="https://www.francischiello.it/wp-content/uploads/2025/07/francischiello_itinerari_napoli.jpg" alt="francischiello_itinerari_napoli" fill />
              </div>
              <div className="p-8 relative bg-gray-100">
                <div className="bg-white p-8">
                  <p className="text-sm">
                    Antica capitale del sud Italia, Napoli presenta nel suo tessuto urbano le mille stratificazioni della sua lunga storia. Grande centro di cultura e di sperimentazione artistica, presenta una sorprendente commistione tra antico e moderno, nei palazzi e nelle chiese, ma anche nell'animo della sua gente, che ad uno spirito fortemente contemporaneo unisce l'amore e il rispetto per le proprie radici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="relative h-screen">
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
          <div className="max-w-[85%] px-8 relative w-full">
            {/* Restaurant Name Card - Left Side */}
            <div className="absolute w-[50%] top-1/2 h-[254px] left-4 transform -translate-y-1/2 z-30">
              <div className="bg-white p-10 shadow-2xl px-20 border-gray-100 h-[80%] flex flex-col justify-center">
                <h2 className="text-[32px] font-serif text-amber-800 mb-3 text-right leading-tight">
                  SUNCITY HOTEL RESTORAN
                </h2>
                <p className="text-2xl font-serif text-black text-right leading-tight">
                  NAFTALANIN LƏZZƏT MƏRKƏZİ
                </p>
              </div>
            </div>

            {/* Description Card - Right Side */}
            <div className="absolute right-4 w-[55%] top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-[#D2CDC3] h-[254px] p-10 shadow-2xl border-gray-200 flex items-center">
                <div className=" w-[30%] h-full"></div>
                <p className="text-base leading-relaxed text-black text-left font-normal">
                  SunCity Restoranı, həm Naftalan müalicəvi xüsusiyyətlərini nəzərə alan sağlam yeməkləri, həm də geniş çeşidli beynəlxalq menyusu ilə xidmətinizdədir. İsti və səmimi mühitdə, xüsusi günlənizi və gündəlik istirahətinizi dəyərləndirin.
                </p>
              </div>
              
              {/* Circular Button - Bottom Right */}
              <div className="absolute -bottom-12 -right-12 z-30">
                <button className="bg-white w-[147px] h-[147px] rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-100">
                  <span className="text-[22px] font-normal text-black mb-1">RESTORAN</span>
                  <svg className="w-6 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          
        </div>
      </section>

      <Footer />

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