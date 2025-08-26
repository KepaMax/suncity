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
