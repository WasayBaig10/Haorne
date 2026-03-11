# HAORNE — Minimalist Luxury Watch Landing Page

A premium, minimalist e-commerce landing page for luxury Swiss watches, built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Design Philosophy

- **Aesthetic**: Quiet luxury, monochromatic palette (Deep Onyx, Soft Bone, Brushed Silver)
- **Typography**: Playfair Display (serif headings) + Montserrat (sans-serif UI)
- **Animations**: Slow-motion reveals, parallax scrolling, smooth layout transitions

## Features

### Implemented Components

1. **Hero Section**
   - Floating watch effect with subtle parallax
   - Split-screen centered layout
   - Animated decorative rings
   - Scroll indicator

2. **Product Specs Grid**
   - 2x2 grid with staggered entrance animations
   - Technical details: Caliber, Power Reserve, Water Resistance, Case Material
   - Hover effects with corner accents

3. **Horizontal Scroll Showcase**
   - Smooth horizontal scrolling for "The Collection"
   - Custom cursor effect on interactive elements
   - Image scale on hover
   - Corner accent animations

4. **Mechanical Reveal**
   - Interactive "View Core" button
   - Blur-to-focus animation transition
   - Animated particle effects
   - Highlighted movement parts on hover

5. **Navigation & Footer**
   - Fixed navigation with scroll-based blur
   - Mobile menu with smooth animations
   - Multi-column footer with luxury branding

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Smooth Scroll**: @studio-freight/react-lenis
- **Fonts**: Playfair Display, Montserrat (via next/font/google)

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Deep Onyx | `#0a0a0a` | Primary background |
| Soft Bone | `#f5f3f0` | Primary text |
| Brushed Silver | `#c8c8c8` | Secondary text, borders |
| Champagne | `#f7e7ce` | Accent color |

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

## Notes

- All images sourced from Unsplash for demonstration purposes
- Smooth scroll disabled on touch devices for better UX
- Custom cursor hidden on mobile/touch devices
