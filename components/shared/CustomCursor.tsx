'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const outlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct position for dot (no lag)
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      // Smooth interpolation for outline
      setOutlinePosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
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
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <>
      {/* Main cursor dot - positioned at center of mouse */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Expanding outline - smooth follow */}
      <div
        ref={outlineRef}
        className="cursor-outline hidden md:block"
        style={{
          left: `${outlinePosition.x}px`,
          top: `${outlinePosition.y}px`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderWidth: isHovering ? '1px' : '1px',
          borderColor: isHovering ? 'rgba(212, 175, 55, 0.6)' : 'rgba(229, 229, 229, 0.4)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  );
}
