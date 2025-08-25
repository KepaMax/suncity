'use client';

import { useState } from 'react';

interface PoolSectionProps {
  poolImageSrc?: string;
  hotelImageSrc?: string;
  onPoolClick?: () => void;
}

export default function PoolSection({ 
  poolImageSrc,
  hotelImageSrc,
  onPoolClick 
}: PoolSectionProps) {
  const [isPoolHovered, setIsPoolHovered] = useState(false);
  const [isHotelHovered, setIsHotelHovered] = useState(false);

  const handlePoolClick = () => {
    if (onPoolClick) {
      onPoolClick();
    } else {
      // Default behavior - could open a modal or navigate to pool details
      console.log('Pool section clicked');
    }
  };

  return (
    <section id="amenities" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Otel Təchizatları
          </h2>
          <p className="text-lg text-gray-600">
            Rahatlıq və əyləncə üçün ideal məkanlar
          </p>
        </div>

        {/* Main Layout - Three Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column - Swimming Pool */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setIsPoolHovered(true)}
              onMouseLeave={() => setIsPoolHovered(false)}
              onClick={handlePoolClick}
            >
              {poolImageSrc ? (
                <img
                  src={poolImageSrc}
                  alt="Suncity Hotel Swimming Pool"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                /* Placeholder for swimming pool image */
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center relative">
                  {/* Pool water effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-300/50 to-blue-500/50"></div>
                  
                  {/* Pool text overlay simulation */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="text-blue-800 font-bold text-xl mb-2">SUNCITY NAFTALAN</div>
                    <div className="flex justify-center space-x-2">
                      <span className="text-yellow-400 text-2xl">★</span>
                      <span className="text-yellow-400 text-2xl">★</span>
                    </div>
                  </div>
                  
                  {/* Pool ladders simulation */}
                  <div className="absolute bottom-2 right-4 w-8 h-16 bg-gray-300 rounded-t-lg"></div>
                  <div className="absolute bottom-2 right-12 w-8 h-16 bg-gray-300 rounded-t-lg"></div>
                  
                  {/* Lounge chairs simulation */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-16 bg-white rounded-lg shadow-md"></div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                isPoolHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg px-4 py-2 text-[#2C2C2C] font-semibold">
                    Hovuzu Böyüt
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Text Overlay */}
          <div className="relative z-10">
            <div className="bg-[#F5F5DC] rounded-2xl p-8 shadow-xl border border-[#8B7355]/20">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6 text-center">
                Sərinləyici və Təmiz Hovuz
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.
              </p>
              
              {/* Interactive Pool Button */}
              <div className="text-center">
                <button 
                  onClick={handlePoolClick}
                  className="inline-flex flex-col items-center space-y-2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <span className="text-sm font-bold text-[#2C2C2C]">HOVUZ</span>
                  <svg className="w-4 h-4 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Hotel Building */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHotelHovered(true)}
              onMouseLeave={() => setIsHotelHovered(false)}
            >
              {hotelImageSrc ? (
                <img
                  src={hotelImageSrc}
                  alt="Suncity Hotel Building"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                /* Placeholder for hotel building image */
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-300 flex items-center justify-center relative">
                  {/* Building facade simulation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-400"></div>
                  
                  {/* Building structure */}
                  <div className="absolute inset-x-4 top-4 bottom-4 bg-amber-300 rounded-lg">
                    {/* Windows */}
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-8 h-6 bg-blue-200 rounded border border-amber-400"></div>
                      ))}
                    </div>
                    
                    {/* Entrance */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-blue-300 rounded-t-lg border border-amber-400"></div>
                    
                    {/* Signage */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-amber-600 font-bold text-xs">SUN CITY</div>
                      <div className="text-amber-600 font-bold text-xs">NAFTALAN</div>
                    </div>
                  </div>
                  
                  {/* Foreground elements */}
                  <div className="absolute bottom-2 left-4 w-12 h-6 bg-green-300 rounded"></div>
                  <div className="absolute bottom-2 right-4 w-8 h-4 bg-gray-400 rounded"></div>
                </div>
              )}
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                isHotelHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg px-4 py-2 text-[#2C2C2C] font-semibold">
                    Otel Binası
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Amenities Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">Restoran</h4>
              <p className="text-gray-600">SunCity Restoranında dadlı yeməklər</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">İstirahət</h4>
              <p className="text-gray-600">Rahat və sakit istirahət məkanları</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">Xidmət</h4>
              <p className="text-gray-600">Peşəkar və keyfiyyətli xidmət</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
