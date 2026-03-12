'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for smooth performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for outline
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  // Scale value for hover effect
  const scaleValue = useMotionValue(1);
  const smoothScale = useSpring(scaleValue, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const shouldHover =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]');

      setIsHovering(shouldHover);
      scaleValue.set(shouldHover ? 1.5 : 1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, scaleValue]);

  return (
    <>
      {/* Main cursor dot - crisp and precise */}
      <motion.div
        className="cursor-dot hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Expanding outline - smooth, luxurious follow */}
      <motion.div
        className="cursor-outline hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          scale: smoothScale,
        }}
      />
    </>
  );
}
