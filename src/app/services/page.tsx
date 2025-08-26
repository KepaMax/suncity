'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Footer from '../../components/Footer';

export default function ServicesPage() {
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

                <Image className="object-cover" src="/images/lobbi-bar.jpg" alt="francischiello_itinerari_top" fill />
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
            <div className="relative z-10 bg-white px-8 py-6 shadow-lg -mt-8 mb-16 w-1/2 mx-auto">
                <div className="text-center">
                    <h2 className="text-[#BCB09C] text-3xl font-normal mb-2">Xİdmətlər</h2>
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

            <section className='relative h-screen bg-[#F8F8F8] py-20'>
                <div className="max-w-[85%] mx-auto px-8">
                    <div className="grid relative grid-cols-3 gap-15 w ">
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-30">
                    <div className="flex flex-col gap-2">
                        <button className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center  hover:bg-[#60470F] transition-colors duration-200">
                            <Icon icon="mdi:arrow-left" className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center  hover:bg-gray-100 transition-colors duration-200 border border-[#ECE7DF]">
                            <Icon icon="mdi:arrow-right" className="w-5 h-5 text-[#8B7355]" />
                        </button>
                    </div>
                </div>
                        {/* Card 1: Open and Closed Pools */}
                        <div className="relative bg-[#ECE7DF] ">
                            {/* Image positioned above and to the left */}
                            <div className="absolute -top-8 -left-8 h-[320px] w-full z-20">
                                <Image src="/images/specialOffers-1.jpg" alt="Sun City Pool" fill className="object-cover" />
                            </div>

                            {/* Text Card */}
                            <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                                <div className='w-full h-[320px] bg-[#ECE7DF]'></div>
                                <div className="p-6">
                                    <div className="flex flex-col mb-2 justify-between">
                                        <h3 className="text-xl font-bold text-[#60470F] mb-2">
                                            AÇIQ VƏ QAPALI HOVUZLAR
                                        </h3>
                                        <div className="flex h-[1px] w-full bg-white relative">
                                            <div className="absolute rounded-full bg-white w-[10px] h-[10px] right-2 -top-4"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#8B7355] leading-relaxed mb-4">
                                        A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                                    </p>
                                    <div className=" flex w-full justify-center items-center px-4 py-2 border-[1px] border-white">
                                        <span className="text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                                    </div>
                                    <div className=" border-[1px] border-white px-4 py-2 text-center">
                                        <span className="text-[#3A2C0C] text-lg font-medium">Detaylı</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Naftalan Bath */}
                        <div className="relative">
                            {/* Image positioned above and to the left */}
                            <div className="absolute -top-8 -left-8 h-[320px] w-full z-20">
                                <Image src="/images/specialOffers-2.jpg" alt="Sun City Pool" fill className="object-cover" />
                            </div>

                            {/* Text Card */}
                            <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                                <div className='w-full h-[320px] bg-[#ECE7DF]'></div>
                                <div className="p-6">
                                    <div className="flex flex-col mb-2 justify-between">
                                        <h3 className="text-xl font-bold text-[#60470F] mb-2">
                                            NAFTALAN VANNASI
                                        </h3>
                                        <div className="flex h-[1px] w-full bg-white relative">
                                            <div className="absolute rounded-full bg-white w-[10px] h-[10px] right-2 -top-4"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#8B7355] leading-relaxed mb-4">
                                        A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                                    </p>
                                    <div className=" flex w-full justify-center items-center px-4 py-2 border-[1px] border-white">
                                        <span className="text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                                    </div>
                                    <div className=" border-[1px] border-white px-4 py-2 text-center">
                                        <span className="text-[#3A2C0C] text-lg font-medium">Detaylı</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Paraffin Therapy */}
                        <div className="relative">
                            {/* Image positioned above and to the left */}
                            <div className="absolute -top-8 -left-8 h-[320px] w-full z-20">
                                <Image src="/images/specialOffers-3.jpg" alt="Sun City Pool" fill className="object-cover" />
                            </div>

                            {/* Text Card */}
                            <div className="bg-[#ECE7DF] shadow-lg overflow-hidden">
                                <div className='w-full h-[320px] bg-[#ECE7DF]'></div>
                                <div className="p-6">
                                    <div className="flex flex-col mb-2 justify-between">
                                        <h3 className="text-xl font-bold text-[#60470F] mb-2">
                                            PARAFİN TERAPIYASI
                                        </h3>
                                        <div className="flex h-[1px] w-full bg-white relative">
                                            <div className="absolute rounded-full bg-white w-[10px] h-[10px] right-2 -top-4"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#8B7355] leading-relaxed mb-4">
                                        A San Valentino regala un&apos;esperienza davvero unica! Una notte in Camera Comfort con balcone fronte Capri, con prima colazione, SPA e cena ad un prezzo davvero speciale!
                                    </p>
                                    <div className=" flex w-full justify-center items-center px-4 py-2 border-[1px] border-white">
                                        <span className="text-xl font-medium text-[#3A2C0C]">429,00 euro</span>
                                    </div>
                                    <div className=" border-[1px] border-white px-4 py-2 text-center">
                                        <span className="text-[#3A2C0C] text-lg font-medium">Detaylı</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
