'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Collection', href: '/collection' },
  { name: 'Heritage', href: '/heritage' },
  { name: 'Craftsmanship', href: '/craftsmanship' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Optimized scroll handler with throttle
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="font-serif text-2xl md:text-3xl font-light tracking-wider group-hover:opacity-90 transition-opacity">
                <span className="text-text-primary">HA</span>
                <span className="text-accent-gold">ORNE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-sans text-xs letter-luxury uppercase relative py-2 transition-colors ${
                    pathname === item.href
                      ? 'text-accent-gold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-text-secondary hover:text-text-primary transition-colors">
                <Search className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Cart */}
              <button className="relative flex items-center justify-center w-10 h-10 text-text-secondary hover:text-text-primary transition-colors">
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-px bg-text-primary block transition-all ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-5 h-px bg-text-primary block transition-all ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-px bg-text-primary block transition-all ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-40 lg:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-3xl transition-colors ${
                  pathname === item.href ? 'text-accent-gold' : 'text-text-primary'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
