'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { useLenis } from '@studio-freight/react-lenis';
import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenis = useLenis();
  const rafId = useRef<number>();

  // Optimized rAF loop for smooth scrolling
  useEffect(() => {
    function raf(time: number) {
      lenis?.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        // Duration for smooth scroll - premium feel
        duration: 1.2,
        // Custom easing function for luxury feel
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        // Optimized mouse multiplier for better control
        mouseMultiplier: 0.8,
        // Disable smooth touch for better mobile performance
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        // Performance optimization: normalize wheel events
        normalizeWheel: true,
        // Reduce wheel rate for smoother scrolling on high-DPI displays
        wheelMultiplier: 0.8,
      }}
    >
      {children}
    </ReactLenis>
  );
}
