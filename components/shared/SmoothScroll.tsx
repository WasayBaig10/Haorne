'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

// Ultra-light smooth scroll for maximum performance
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        // Faster duration for more responsive feel
        duration: 0.8,
        // Simpler easing function
        easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        // Lower multiplier for better control
        mouseMultiplier: 0.6,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
        // Performance optimizations
        normalizeWheel: true,
        wheelMultiplier: 0.6,
      }}
      raf={(time: number) => {
        // Minimal raf implementation
        return typeof window === 'undefined' ? true : !document.hidden;
      }}
    >
      {children}
    </ReactLenis>
  );
}
