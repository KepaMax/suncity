'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function ItinerariPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header id="site_header" className="fixed h-16 top-0 inset-x-0 bg-zinc-700/90 px-4 py-2 z-50 flex justify-center -translate-y-full duration-500 transition-all">
        <a href="/" className="h-full opacity-0 duration-150" style={{opacity: 1}}>
          <Image className="h-full" src="https://www.francischiello.it/wp-content/uploads/2025/06/francischiello_logo_small.png" alt="Francischiello Logo" width={64} height={64} />
        </a>
        <div className="absolute left-4 top-2 h-12 grid gap-2 grid-flow-col">
          <button 
            onClick={toggleDrawer}
            className="relative size-12 cursor-pointer text-white hover:text-gray-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute top-1 left-1 size-10 opacity-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span className="hidden lg:block lg:ml-12 font-serif text-xl">menu</span>
          </button>
          <div className="w-24 text-lg uppercase flex justify-center items-center divide-x divide-white/50 my-auto">
            <a href="/itinerari" className="px-4 text-white hover:text-white duration-100">
              <span>It</span>
            </a>
            <a href="/en/itineraries" className="px-4 text-gray-300 hover:text-white duration-100">
              <span>En</span>
            </a>
          </div>
        </div>
        <a href="tel:+390818789181" className="font-serif text-base text-white size-12 absolute right-4 top-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.1" stroke="currentColor" className="absolute top-2 left-2 size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </a>
      </header>

      {/* Navigation Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={toggleDrawer}
        ></div>
        
        {/* Drawer */}
        <div className={`absolute left-0 top-0 h-full w-full lg:w-[560px] bg-white transform transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Drawer Header */}
          <div className="bg-zinc-700 h-16 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleDrawer}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-white font-serif text-lg">menu</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="border-r border-white/30 pr-4">IT</span>
              <span>EN</span>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex h-[calc(100%-4rem)]">
            {/* Navigation Links */}
            <div className="w-full lg:w-1/2 p-8">
              <nav className="space-y-6">
                <a href="/" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">HOME</a>
                <a href="/hotel" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">HOTEL</a>
                <a href="/camere" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">CAMERE</a>
                <a href="/ristorante" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">RISTORANTE</a>
                <a href="/piscina" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">PISCINA</a>
                <a href="/cerimonie" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">CERIMONIE</a>
                <a href="/benessere" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">BENESSERE</a>
                <a href="/itinerari" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">ITINERARI</a>
                <a href="/offerte-speciali" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">OFFERTE SPECIALI</a>
                <a href="/contatti" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">CONTATTI</a>
                <a href="/privacy-policy" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">PRIVACY</a>
                <a href="/cookie-policy" className="block text-zinc-700 hover:text-zinc-900 font-serif text-xl transition-colors">COOKIE</a>
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
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-16">
        <div className="relative h-screen">
          <a href="/" className="absolute inset-x-0 top-24 z-10 mx-auto block w-fit">
            <Image className="block w-16 mx-auto" src="https://www.francischiello.it/wp-content/uploads/2025/06/francischiello_logo_small.png" alt="Francischiello Logo" width={64} height={64} />
            <div className="font-serif text-white text-center text-2xl mt-4 tracking-wide">Hotel Bellavista Francischiello</div>
            <div className="font-serif text-white text-center text-base -mt-1 tracking-tight">HOTEL & SPA – Sorrento & Amalfi Coast</div>
          </a>

          <Image className="object-cover" src="https://www.francischiello.it/wp-content/uploads/2025/07/francischiello_itinerari_top.webp" alt="francischiello_itinerari_top" fill />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="text-white uppercase space-y-2 px-4">
              <p className="text-2xl lg:text-5xl">Viaggio nella bellezza</p>
              <div className="bg-white h-px w-64 mx-auto"></div>
              <p className="text-lg">Una finestra su Capri.</p>
            </div>
          </div>
          
          <div className="absolute bottom-20 w-fit inset-x-0 mx-auto flex flex-col items-center">
            <p className="text-white font-serif text-lg">scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>
          </div>
        </div>

        <section className="relative mx-auto max-w-6xl bg-white py-12 px-4 space-y-8">
          <header>
            <h1 className="font-serif flex flex-col items-center text-center text-4xl uppercase tracking-wide">Itinerari</h1>
          </header>
          <p className="font-serif text-center text-lg">Il fascino di Massalubrense sta nella sua storia e nelle sue tradizioni, nelle sue profonde radici che si perdono nel mito e che la rendono famosa in tutto il mondo come Terra delle Sirene.</p>
        </section>

        <section className="mx-auto max-w-6xl bg-white px-4 mt-12">
          <p className="text-lg">La posizione particolarmente felice, adagiata sul promontorio estremo della penisola che si protende verso Capri, esattamente al centro tra le due costiere, Sorrentina e Amalfitana, ne fa il centro ideale di una vacanza dedicata a scoprire tutte le località e tutti gli aspetti di questo territorio ricco di attrattive.</p>
        </section>

        <section className="mt-12 max-w-6xl mx-auto grid gap-12">
          <div className="relative px-4 group">
            <div className="relative">
              <h3 className="font-serif text-zinc-700 px-4 text-2xl uppercase">
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
              <h3 className="font-serif text-zinc-700 px-4 text-2xl uppercase">
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
              <h3 className="font-serif text-zinc-700 px-4 text-2xl uppercase">
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

      <Footer />
    </>
  );
}