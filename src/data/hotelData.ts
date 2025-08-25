import { HotelInfo, HeroContent, ContentSectionData, PoolSectionData } from '@/types';

export const hotelInfo: HotelInfo = {
  name: "Suncity Hotel & Spa",
  location: "Naftalan",
  fullName: "Sun City Hotel & Spa Naftalan, Naftalan",
  description: "Modern health complex with professional medical services",
  features: [
    "5-story building",
    "95 hotel rooms",
    "Latest medical equipment",
    "Professional staff",
    "Naftalan oil therapy",
    "Physiotherapy procedures"
  ],
  rooms: 95,
  floors: 5,
  services: [
    "Medical treatment",
    "Spa services",
    "Recreation facilities",
    "Professional nursing",
    "Modern technology"
  ],
  distances: {
    baku: 340,
    ganja: 50,
    goran: 20
  }
};

export const heroContent: HeroContent = {
  title: "Suncity Hotel & Spa",
  subtitle: "Naftalan",
  description: "Sun City Hotel & Spa Naftalan, Naftalan",
  headingText: "Heading Text",
  backgroundImage: "/hotel-lobby-bg.jpg"
};

export const contentSectionData: ContentSectionData = {
  title: "İstirahətiniz bizim peşəkarlığımızdır!",
  paragraphs: [
    "Sun City Hotel Spa Naftalan 5 mərtəbəli binada yerləşir və sakit və ya aktiv istirahət üçün lazım olan bütün şəraitləri təmin edir. Otel ən son tibbi və texnoloji avadanlıqlarla təchiz edilib və peşəkar işçi heyəti və tibb bacılarından xidmət göstərir. Bu, müasir sağlamlıq kompleksidir.",
    "Müalicə və sağlamlıq kompleksində müxtəlif kateqoriyalarda 95 otel otağı var. Müalicə əsasən Naftalan yağından istifadə edir və əlavə fizioterapevtik prosedurları əhatə edir. Əsas yerlərə məsafələr: Bakı (Heydar Əliyev Beynəlxalq Hava Limanı) - 340 km, Gəncə Hava Limanı - 50 km, Goran dəmir yolu stansiyası - 20 km."
  ],
  imageSrc: "/hotel-lobby.jpg",
  imageAlt: "Sun City Hotel & Spa Naftalan Lobby",
  stats: {
    rooms: 95,
    floors: 5,
    service: "24/7"
  }
};

export const poolSectionData: PoolSectionData = {
  title: "Sərinləyici və Təmiz Hovuz",
  description: "SunCity Restoranının həyətində yerləşən hovuz, təmiz suyu və müntəzəm baxımı ilə rahatlıq və sərinlik bəxş edir. İstər istirahət, istər isə əyləncə üçün ideal məkan.",
  poolImageSrc: "/pool-image.jpg",
  hotelImageSrc: "/hotel-building.jpg",
  amenities: [
    {
      icon: "restaurant",
      title: "Restoran",
      description: "SunCity Restoranında dadlı yeməklər"
    },
    {
      icon: "relaxation",
      title: "İstirahət",
      description: "Rahat və sakit istirahət məkanları"
    },
    {
      icon: "service",
      title: "Xidmət",
      description: "Peşəkar və keyfiyyətli xidmət"
    }
  ]
};

export const navigationItems = [
  { id: 'home', label: 'Ana Səhifə', href: '#home' },
  { id: 'about', label: 'Haqqımızda', href: '#about' },
  { id: 'amenities', label: 'Təchizatlar', href: '#amenities' },
  { id: 'services', label: 'Xidmətlər', href: '#services' },
  { id: 'rooms', label: 'Otaqlar', href: '/rooms' },
  { id: 'contact', label: 'Əlaqə', href: '#contact' }
];
