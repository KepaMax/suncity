# Suncity Hotel & Spa Website

A modern, responsive website for Suncity Hotel & Spa in Naftalan, built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 **Design & UI**
- **Modern Hero Section** with animated content and scroll indicators
- **Responsive Navigation** with mobile hamburger menu
- **Content Sections** with two-column layouts
- **Professional Typography** using Inter and Playfair Display fonts
- **Brand Color Scheme** with brown tones (#8B7355, #A0522D)

### 🚀 **Functionality**
- **Smooth Scrolling** between sections
- **Active Navigation** highlighting current section
- **Interactive Components** with hover effects and animations
- **Mobile-First Design** that works on all devices
- **TypeScript** for type safety and better development experience

### 🏗️ **Architecture**
- **Component-Based Structure** for maintainability
- **Custom Hooks** for state management
- **Data Separation** with centralized content management
- **Reusable UI Components** (Button, Navigation, etc.)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Navigation.tsx       # Navigation bar with mobile menu
│   ├── HeroSection.tsx      # Hero section with animations
│   ├── ContentSection.tsx   # Content section with image and text
│   └── ui/
│       └── Button.tsx       # Reusable button component
├── data/
│   └── hotelData.ts         # Hotel information and content
├── hooks/
│   └── useActiveSection.ts  # Custom hook for navigation state
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🎯 **Components Overview**

### **Navigation Component**
- Fixed navigation bar with logo and menu items
- Responsive mobile menu with hamburger icon
- Active section highlighting
- Smooth scroll navigation

### **Hero Section Component**
- Full-screen hero with background image support
- Animated content entrance
- Scroll indicator with click functionality
- Customizable content through props

### **Content Section Component**
- Two-column layout (image + text)
- Interactive image with hover effects
- Azerbaijani content with proper typography
- Statistics cards and call-to-action button

### **Button Component**
- Multiple variants (primary, secondary, outline)
- Different sizes (sm, md, lg)
- Hover and focus states
- Accessibility features

## 🚀 **Getting Started**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🎨 **Customization**

### **Colors**
- Primary Brown: `#8B7355`
- Secondary Brown: `#A0522D`
- Dark Gray: `#2C2C2C`

### **Content**
- Update hotel information in `src/data/hotelData.ts`
- Modify navigation items and sections
- Replace placeholder images with actual hotel photos

### **Styling**
- Custom CSS variables in `src/app/globals.css`
- Tailwind CSS classes for responsive design
- Custom animations and transitions

## 📱 **Responsive Design**

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** for all screen sizes

## 🔧 **Technical Stack**

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Vite (via Next.js)
- **Package Manager**: npm

## 📝 **Content Management**

All hotel content is centralized in `src/data/hotelData.ts`:
- Hotel information and features
- Hero section content
- Content section data
- Navigation items

## 🎭 **Animations & Interactions**

- **Fade-in animations** for hero content
- **Hover effects** on images and buttons
- **Smooth scrolling** between sections
- **Loading states** for images
- **Interactive navigation** highlighting

## 🔮 **Future Enhancements**

- [ ] Image gallery component
- [ ] Room booking system
- [ ] Contact form
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Analytics integration

## 📄 **License**

This project is built for Suncity Hotel & Spa. All rights reserved.
