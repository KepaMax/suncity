'use client';

import Link from "next/link";
import Image from "next/image";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {

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

        <Image className="object-cover" src="/images/hotel_xidmetler.jpg" alt="francischiello_itinerari_top" fill />
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
          <h2 className="text-[#BCB09C] text-3xl font-normal mb-2">ƏLAQƏ</h2>
          <h3 className="text-black text-xl font-normal">Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.</h3>
        </div>
      </div>

      {/* Contact Section with Form and Map */}
      <div className="relative z-10 bg-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form - Left Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-[#BCB09C] mb-4">Bizimlə Əlaqə Saxlayın</h3>
                <p className="text-gray-600 text-lg">Suallarınız üçün formu doldurun və biz sizinlə əlaqə saxlayacağıq.</p>
              </div>

              <form className="space-y-6">
                <div className="">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">AD</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Adınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">SOYAD</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Soyadınızı daxil edin"
                    />
                  </div>
                </div>

                <div className="">
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">TELEFON</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Telefon nömrənizi daxil edin"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Email ünvanınızı daxil edin"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">SUALINIZ</label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors resize-none"
                    placeholder="Suallarınızı və ya mesajınızı yazın"
                  ></textarea>
                </div>

                <div className="flex justify-start flex-row items-baseline">
                  <button
                    type="submit"
                    className="bg-[#C6BFB2] hover:bg-gray-400 text-white w-[90px] h-[90px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-sm text-white font-medium">Göndər</span>
                  
                  </button>
                  <Icon icon="mynaui:arrow-long-right" className="w-4 h-4 ml-2" />
                </div>
              </form>
            </div>

            <div className="relative w-full h-full flex justify-center items-center bg-[#ECE7DF]">
              <div className="absolute -left-4 -top-4 w-full h-[80%] p-4 bg-white">
                <div className="bg-gray-100 overflow-hidden w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.1234567890123!2d46.12345678901234!3d40.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzM0LjQiTiA0NsKwMDcnMzQuNCJF!5e0!3m2!1sen!2saz!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sun City Hotel & Spa Naftalan Location"
                  ></iframe>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#ECE7DF] p-8 w-full">
                <div className="grid grid-cols-12 gap-8">
                  {/* Phone Numbers - Left Column (Thinner) */}
                  <div className="col-span-4 flex items-center gap-3">
                    <Icon icon="mynaui:phone" className="w-5 h-5 text-gray-700" />
                    <div className="text-gray-700">
                      <p>+994 10 226 77 00</p>
                      <p>+994 10 226 77 00</p>
                    </div>
                  </div>

                  {/* Email - Middle Column */}
                  <div className="col-span-4 flex items-center gap-3 justify-center">
                    <Icon icon="mynaui:mail" className="w-5 h-5 text-gray-700" />
                    <p className="text-gray-700">example@suncity.az</p>
                  </div>

                  {/* Address - Right Column */}
                  <div className="col-span-4 flex items-center gap-3 justify-end">
                    <Icon icon="mynaui:location" className="w-5 h-5 text-gray-700" />
                    <p className="text-gray-700">Gəncə-Daşkəsən rayonu, Naftalan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky decorative strips on left and right */}
      <div className="fixed left-0 top-0 w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <div className="fixed right-0 top-0 w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <Footer />
    </>
  );
}
