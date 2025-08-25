import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RoomsPage() {
  const roomTypes = [
    {
      id: 1,
      name: "Standart Otaq",
      description: "Rahat və funksional standart otaq, ən yaxşı qiymətə keyfiyyətli xidmət təqdim edir.",
      price: "150 AZN",
      capacity: "2 nəfər",
      size: "25 m²",
      amenities: ["Wi-Fi", "TV", "Kondisioner", "Dəhliz", "Hamam"],
      image: "/standard-room.jpg"
    },
    {
      id: 2,
      name: "Deluxe Otaq",
      description: "Geniş və lüks deluxe otaq, əlavə rahatlıq və gözəllik üçün dizayn edilib.",
      price: "250 AZN",
      capacity: "3 nəfər",
      size: "35 m²",
      amenities: ["Wi-Fi", "TV", "Kondisioner", "Dəhliz", "Hamam", "Balkon", "Hovuz görünüşü"],
      image: "/deluxe-room.jpg"
    },
    {
      id: 3,
      name: "Suit Otaq",
      description: "Ən yüksək keyfiyyətli suit otaq, tam rahatlıq və xüsusi xidmət üçün.",
      price: "400 AZN",
      capacity: "4 nəfər",
      size: "50 m²",
      amenities: ["Wi-Fi", "TV", "Kondisioner", "Dəhliz", "Hamam", "Balkon", "Hovuz görünüşü", "Mini bar", "Jacuzzi"],
      image: "/suite-room.jpg"
    },
    {
      id: 4,
      name: "Ailə Otağı",
      description: "Geniş ailə otağı, uşaqlar və böyüklər üçün ayrı yataq sahələri ilə.",
      price: "300 AZN",
      capacity: "5 nəfər",
      size: "45 m²",
      amenities: ["Wi-Fi", "TV", "Kondisioner", "Dəhliz", "Hamam", "Balkon", "2 yataq sahəsi"],
      image: "/family-room.jpg"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#8B7355] to-[#A67B5B] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Otaqlarımız</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Suncity Hotel & Spa Naftalan-da 95 otaqdan ibarət geniş seçim. 
              Hər otaq rahatlıq və keyfiyyət üçün xüsusi dizayn edilib.
            </p>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Otaq Növləri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Müxtəlif tələblərə uyğun otaq seçimləri. Hər otaq növü öz xüsusiyyətləri ilə 
                fərqlənir və sizin rahatlığınız üçün hazırlanıb.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {roomTypes.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-[#8B7355] to-[#A67B5B] flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-80">Şəkil əlavə ediləcək</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
                      <span className="text-3xl font-bold text-[#8B7355]">{room.price}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{room.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <span className="text-gray-700">{room.size}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Təchizatlar:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#F5F5DC] text-[#8B7355] rounded-full text-sm font-medium"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#8B7355] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#A67B5B] transition-colors duration-300">
                      Rezervasiya Et
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Otaq Təchizatları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bütün otaqlarımızda mövcud olan əsas təchizatlar və xidmətlər
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "wifi", title: "Pulsuz Wi-Fi", description: "Yüksək sürətli internet" },
                { icon: "tv", title: "Smart TV", description: "Kabel və streaming xidmətləri" },
                { icon: "ac", title: "Kondisioner", description: "İstilik və soyuq tənzimləmə" },
                { icon: "bathroom", title: "Şəxsi Hamam", description: "Dəhliz və hamam" },
                { icon: "bed", title: "Yumşaq Yataq", description: "Keyfiyyətli yataq və yorğan" },
                { icon: "cleaning", title: "Gündəlik Təmizlik", description: "Professional təmizlik xidməti" },
                { icon: "security", title: "24/7 Təhlükəsizlik", description: "Daimi təhlükəsizlik xidməti" },
                { icon: "service", title: "Otaq Xidməti", description: "24 saat otaq xidməti" }
              ].map((amenity, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-[#F5F5DC] transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#8B7355] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#8B7355] to-[#A67B5B] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Otağınızı Rezervasiya Edin</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Suncity Hotel & Spa Naftalan-da unudulmaz təcrübə yaşamaq üçün 
              otağınızı indi rezervasiya edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#8B7355] py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                Online Rezervasiya
              </button>
              <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B7355] transition-colors duration-300">
                Əlaqə Saxlayın
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

