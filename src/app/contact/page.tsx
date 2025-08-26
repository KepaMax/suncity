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

        <Image className="object-cover" src="/images/hotel_xidmetler.jpg" alt="francischiello_itinerari_top" fill />
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
          <h2 className="text-[#BCB09C] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1 sm:mb-2 leading-tight">ƏLAQƏ</h2>
          <h3 className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-tight">
            Sun City Hotel Spa Naftalan ən son tibbi və texnoloji avadanlıqlarla təchiz olunub, otelin peşəkar heyəti və tibb bacıları tərəfindən xidmət göstərir. bu müasir bir sağlamlıq kompleksidir.
          </h3>
        </div>
      </div>

      {/* Contact Section with Form and Map */}
      <div className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">

            {/* Contact Form - Left Side */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#BCB09C] mb-3 sm:mb-4 leading-tight">Bizimlə Əlaqə Saxlayın</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Suallarınız üçün formu doldurun və biz sizinlə əlaqə saxlayacağıq.
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">AD</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Adınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label htmlFor="surname" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">SOYAD</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Soyadınızı daxil edin"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">TELEFON</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Telefon nömrənizi daxil edin"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors"
                      placeholder="Email ünvanınızı daxil edin"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="question" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">SUALINIZ</label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#BCB09C] focus:border-transparent transition-colors resize-none"
                    placeholder="Suallarınızı və ya mesajınızı yazın"
                  ></textarea>
                </div>

                <div className="flex justify-start flex-row items-baseline">
                  <button
                    type="submit"
                    className="bg-[#C6BFB2] hover:bg-gray-400 text-white w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-xs sm:text-sm text-white font-medium">Göndər</span>
                  </button>
                  <Icon icon="mynaui:arrow-long-right" className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </div>
              </form>
            </div>

            {/* Map and Contact Info - Right Side */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full flex justify-center items-center bg-[#ECE7DF]">
              <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-full h-[80%] p-2 sm:p-4 bg-white">
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
              
              {/* Contact Info Bottom Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#ECE7DF] p-4 sm:p-6 md:p-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* Phone Numbers */}
                  <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                    <Icon icon="mynaui:phone" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 flex-shrink-0" />
                    <div className="text-gray-700 text-xs sm:text-sm">
                      <p>+994 10 226 77 00</p>
                      <p>+994 10 226 77 00</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 sm:gap-3 justify-center">
                    <Icon icon="mynaui:mail" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 flex-shrink-0" />
                    <p className="text-gray-700 text-xs sm:text-sm">example@suncity.az</p>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-end">
                    <Icon icon="mynaui:location" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 flex-shrink-0" />
                    <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-right">
                      Gəncə-Daşkəsən rayonu, Naftalan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky decorative strips on left and right */}
      <div className="fixed left-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <div className="fixed right-0 top-0 w-2 sm:w-4 md:w-6 lg:w-8 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[#BCB09C]/10"></div>
      </div>

      <Footer />

    </>
  );
}
