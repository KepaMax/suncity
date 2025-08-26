import React from 'react';

export default function Footer(props: { className?: string }) {
  return (
    <footer className={`${props.className}`}>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
        {/* Left Section - Contact Information */}
        <div className="bg-[#F5F5DC] p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-700">+994102267700</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-700">example@suncity.az</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Gəncə-Daşkəsən rayonu, Naftalan</span>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-8">
            Veb-sayt Webonly tərəfindən hazırlanıb.
          </div>
        </div>

        {/* Middle Section - Logo and Social Media */}
        <div className="bg-[#8B7355] p-8 flex flex-col items-center justify-center text-white">
          <div className="text-center mb-6">
            {/* Sunburst Icon */}
            <div className="w-16 h-16 mx-auto mb-4">
              <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                <path d="M32 0c-2.1 0-4.2 0.4-6.2 1.2C19.8 4.4 12.4 11.8 9.2 25.8C8.4 27.8 8 29.9 8 32s0.4 4.2 1.2 6.2C12.4 52.2 19.8 59.6 25.8 62.8C27.8 63.6 29.9 64 32 64s4.2-0.4 6.2-1.2C44.2 59.6 51.6 52.2 54.8 38.2C55.6 36.2 56 34.1 56 32s-0.4-4.2-1.2-6.2C51.6 11.8 44.2 4.4 38.2 1.2C36.2 0.4 34.1 0 32 0zM32 56c-1.8 0-3.6-0.3-5.3-0.9C22.4 53.2 16.8 47.6 14.9 37.3C14.3 35.6 14 33.8 14 32s0.3-3.6 0.9-5.3C16.8 16.4 22.4 10.8 26.7 8.9C28.4 8.3 30.2 8 32 8s3.6 0.3 5.3 0.9C41.6 10.8 47.2 16.4 49.1 26.7C49.7 28.4 50 30.2 50 32s-0.3 3.6-0.9 5.3C47.2 47.6 41.6 53.2 37.3 55.1C35.6 55.7 33.8 56 32 56z"/>
                <path d="M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">SUNCITY HOTEL & SPA NAFTALAN</h2>
          </div>
          
          <div className="text-center mb-8">
            <div className="h-px bg-white w-16 mx-auto mb-2"></div>
            <h3 className="text-lg font-semibold">Bizimlə Əlaqə</h3>
            <div className="h-px bg-white w-16 mx-auto mt-2"></div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.018.243-.275.324-.69.287-.602-.046-.77-.287-.948-.54-.065-.095-.065-.095-.065-.095s.065.095.065.095c.178.253.346.494.948.54.415.037.672.044.69.287.016.166-.004.379-.02.472a.506.506 0 0 1-.171.325c-.144.117-.365.142-.465.14h-.016a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h.016zm-8.78 0c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.018.243-.275.324-.69.287-.602-.046-.77-.287-.948-.54-.065-.095-.065-.095-.065-.095s.065.095.065.095c.178.253.346.494.948.54.415.037.672.044.69.287.016.166-.004.379-.02.472a.506.506 0 0 1-.171.325c-.144.117-.365.142-.465.14h-.016a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h.016z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="bg-[#F5F5DC] p-8 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">ANA SƏHİFƏ</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">HAQQIMIZDA</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">ƏLAQƏ</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">RESTORAN</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">SPA</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">HOVUZ & HOTEL</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">XİDMƏTLƏR</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">OTAQLAR</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355] transition-colors">RESERVASİYA</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#F5F5DC] py-4 text-center">
        <p className="text-sm text-gray-600">
          Copywrite @2025. Bütün hüquqlar qorunur. Suncity Hotel Naftalan
        </p>
      </div>
    </footer>
  );
}

