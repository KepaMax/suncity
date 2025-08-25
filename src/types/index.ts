// Hotel Website Types

export interface HotelInfo {
  name: string;
  location: string;
  fullName: string;
  description: string;
  features: string[];
  rooms: number;
  floors: number;
  services: string[];
  distances: {
    baku: number;
    ganja: number;
    goran: number;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  headingText: string;
  backgroundImage?: string;
}

export interface ContentSectionData {
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  stats: {
    rooms: number;
    floors: number;
    service: string;
  };
}

export interface PoolSectionData {
  title: string;
  description: string;
  poolImageSrc?: string;
  hotelImageSrc?: string;
  amenities: AmenityItem[];
}

export interface AmenityItem {
  icon: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}
