'use client';

import { useState } from 'react';

interface ContentSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  onLearnMore?: () => void;
}

export default function ContentSection({ 
  imageSrc,
  imageAlt = "Hotel Lobby",
  onLearnMore 
}: ContentSectionProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      // Default behavior - scroll to next section or show modal
      console.log('Learn more clicked');
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Hotel Lobby Image */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`aspect-[4/3] w-full object-cover transition-opacity duration-500 ${
                    isImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={handleImageLoad}
                />
              ) : (
                /* Placeholder for hotel lobby image - replace with actual image */
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Hotel Lobby Image</p>
                    <p className="text-xs">Replace with actual image</p>
                  </div>
                </div>
              )}
              
              {/* Image overlay effects */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Loading indicator */}
              {!isImageLoaded && imageSrc && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#8B7355] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Azerbaijani Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#8B7355] rounded-full animate-pulse"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] underline decoration-[#8B7355] decoration-2 underline-offset-4">
                İstirahətiniz bizim peşəkarlığımızdır!
              </h2>
            </div>

            {/* First Paragraph */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#8B7355]">Sun City Hotel Spa Naftalan</strong> 5 mərtəbəli binada yerləşir və sakit və ya aktiv istirahət üçün lazım olan bütün şəraitləri təmin edir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib və peşəkar işçi heyəti və tibb bacılarından xidmət göstərir. Bu, müasir sağlamlıq kompleksidir.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Müalicə və sağlamlıq kompleksində müxtəlif kateqoriyalarda <strong className="text-[#8B7355]">95 otel otağı</strong> var. Müalicə əsasən <strong className="text-[#8B7355]">Naftalan yağından</strong> istifadə edir və əlavə fizioterapevtik prosedurları əhatə edir. Əsas yerlərə məsafələr: Bakı (Heydar Əliyev Beynəlxalq Hava Limanı) - <strong>340 km</strong>, Gəncə Hava Limanı - <strong>50 km</strong>, Goran dəmir yolu stansiyası - <strong>20 km</strong>.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button 
                onClick={handleLearnMore}
                className="bg-[#8B7355] hover:bg-[#A0522D] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-opacity-50"
              >
                Ətraflı Məlumat
              </button>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#8B7355]">95</div>
                <div className="text-sm text-gray-600">Otel Otağı</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#8B7355]">5</div>
                <div className="text-sm text-gray-600">Mərtəbə</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#8B7355]">24/7</div>
                <div className="text-sm text-gray-600">Xidmət</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
