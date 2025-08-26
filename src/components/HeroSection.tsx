'use client';

import { useEffect, useState } from 'react';

interface HeroSectionProps {
  backgroundImage?: string;
  headingText?: string;
  onScrollDown?: () => void;
}

export default function HeroSection({ 
  backgroundImage = "/hotel-lobby-bg.jpg",
  headingText = "Heading Text",
  onScrollDown 
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      // Default scroll behavior
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355] to-[#A0522D]">
        {/* Background image with fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: isVisible ? 0.8 : 0
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Sunburst Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Main Logo Text */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-2">
          Suncity Hotel & Spa
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider mb-4">
          Naftalan
        </h2>

        {/* Primary Heading */}
        <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wide mb-4">
          Sun City Hotel & Spa Naftalan, Naftalan
        </h3>

        {/* Separator Line */}
        <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl font-medium uppercase tracking-wide mb-8">
          {headingText}
        </p>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm uppercase tracking-wider">scroll down</span>
          <button 
            onClick={handleScrollDown}
            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-bounce-slow hover:border-[#8B7355] transition-colors duration-300 cursor-pointer"
            aria-label="Scroll down"
          />
        </div>
      </div>

      {/* Bottom White Section Preview */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-8 text-center shadow-lg">
        <h4 className="text-[#8B7355] text-xl md:text-2xl uppercase tracking-wide mb-2">
          Sun City Hotel & Spa Naftalan,
        </h4>
        <h5 className="text-[#8B7355] text-2xl md:text-3xl uppercase font-bold tracking-wide">
          Naftalan
        </h5>
      </div>
    </section>
  );
}
