# StickyBookingBar Component

A responsive, mobile-first sticky booking bar component with mobile bottom sheet functionality.

## Features

- **Responsive Design**: Adapts from mobile to desktop seamlessly
- **Mobile Bottom Sheet**: Expandable bottom sheet on mobile devices
- **Customizable**: Configurable dates, guests, and callbacks
- **Reusable**: Can be used across all pages
- **Touch Friendly**: Optimized for mobile interactions

## Basic Usage

```tsx
import StickyBookingBar from '../components/StickyBookingBar';

// Basic usage with default values
<StickyBookingBar />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `showPromoCode` | `boolean` | `true` | Whether to show promo code section |
| `customDates` | `object` | `undefined` | Custom arrival/departure dates |
| `customGuests` | `object` | `undefined` | Custom guest count |
| `onBookNow` | `function` | `undefined` | Callback for booking button |
| `onPromoCode` | `function` | `undefined` | Callback for promo code button |

## Examples

### Basic Usage (Current Page)
```tsx
<StickyBookingBar />
```

### Custom Dates and Guests
```tsx
<StickyBookingBar 
  customDates={{
    arrival: { day: '15', month: 'sentyabr', year: '2025', time: '14:00' },
    departure: { day: '18', month: 'sentyabr', year: '2025', time: '11:00' }
  }}
  customGuests={{ adults: 3, children: 2 }}
/>
```

### With Custom Callbacks
```tsx
<StickyBookingBar 
  onBookNow={() => {
    // Navigate to booking page
    router.push('/reservation');
  }}
  onPromoCode={() => {
    // Open promo code modal
    setShowPromoModal(true);
  }}
/>
```

### Without Promo Code
```tsx
<StickyBookingBar showPromoCode={false} />
```

### With Custom Styling
```tsx
<StickyBookingBar className="custom-booking-bar" />
```

## Mobile Behavior

On mobile devices, the component shows:
1. **Collapsed State**: Compact view with basic info and expand button
2. **Expanded State**: Full bottom sheet with form fields and actions

### Mobile Features
- Touch-friendly bottom sheet
- Smooth animations
- Overlay background
- Handle bar for dragging
- Responsive form layout

## Desktop Behavior

On desktop devices, the component shows:
1. **Full Layout**: All booking fields visible
2. **Horizontal Layout**: Side-by-side arrangement
3. **Hover Effects**: Interactive elements with hover states

## File Structure

```
src/
├── components/
│   ├── StickyBookingBar.tsx    # Main component
│   └── README.md               # This documentation
└── app/
    ├── page.tsx                # Home page (uses component)
    ├── hotel/
    │   └── page.tsx            # Hotel page (can use component)
    ├── rooms/
    │   └── page.tsx            # Rooms page (can use component)
    └── services/
        └── page.tsx            # Services page (can use component)
```

## Usage in Other Pages

### Hotel Page
```tsx
// src/app/hotel/page.tsx
import StickyBookingBar from '../../components/StickyBookingBar';

export default function HotelPage() {
  return (
    <div>
      {/* Hotel content */}
      <StickyBookingBar />
    </div>
  );
}
```

### Rooms Page
```tsx
// src/app/rooms/page.tsx
import StickyBookingBar from '../../components/StickyBookingBar';

export default function RoomsPage() {
  return (
    <div>
      {/* Rooms content */}
      <StickyBookingBar 
        customDates={{
          arrival: { day: '1', month: 'oktyabr', year: '2025', time: '15:00' },
          departure: { day: '5', month: 'oktyabr', year: '2025', time: '10:00' }
        }}
      />
    </div>
  );
}
```

### Services Page
```tsx
// src/app/services/page.tsx
import StickyBookingBar from '../../components/StickyBookingBar';

export default function ServicesPage() {
  return (
    <div>
      {/* Services content */}
      <StickyBookingBar 
        showPromoCode={false}
        onBookNow={() => alert('Redirecting to services booking...')}
      />
    </div>
  );
}
```

## Styling

The component uses Tailwind CSS classes and can be customized with:
- Custom `className` prop
- CSS custom properties
- Tailwind utility classes

## Accessibility

- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Touch target sizes (44px minimum)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance

- Lazy loading of icons
- Optimized animations
- Minimal re-renders
- Efficient state management
