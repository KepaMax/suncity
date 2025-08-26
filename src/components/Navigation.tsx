'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navigationItems } from '@/data/hotelData';

interface NavigationProps {
  logo?: string;
  logoText?: string;
}

export default function Navigation({ logo, logoText = "LOGO" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const isRoomsPage = typeof window !== 'undefined' && window.location.pathname === '/rooms';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C] h-16 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center">
        {logo ? (
          <img src={logo} alt="Suncity Hotel Logo" className="h-10 w-auto" />
        ) : (
          <div className="text-white text-xl font-bold">{logoText}</div>
        )}
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {isRoomsPage ? (
          <Link
            href="/"
            className="text-white hover:text-[#8B7355] transition-colors duration-300 font-semibold"
          >
            ← Ana Səhifəyə Qayıt
          </Link>
        ) : (
          navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                if (item.href === '/rooms') {
                  window.location.href = '/rooms';
                } else {
                  scrollToSection(item.href);
                }
              }}
              className={`transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-[#8B7355] font-semibold'
                  : 'text-white hover:text-[#8B7355]'
              }`}
            >
              {item.label}
            </a>
          ))
        )}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#2C2C2C] shadow-lg md:hidden">
          <div className="flex flex-col space-y-0">
            {isRoomsPage ? (
              <Link 
                href="/"
                className="px-6 py-4 text-white hover:bg-[#8B7355] transition-colors duration-300"
              >
                ← Ana Səhifəyə Qayıt
              </Link>
            ) : (
              navigationItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href === '/rooms') {
                      window.location.href = '/rooms';
                    } else {
                      scrollToSection(item.href);
                    }
                  }}
                  className={`px-6 py-4 transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#8B7355] text-white'
                      : 'text-white hover:bg-[#8B7355]'
                  }`}
                >
                  {item.label}
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
