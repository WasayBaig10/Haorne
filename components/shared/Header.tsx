'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

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
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.9)']
  );

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 glassmorphism"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                className="font-serif text-2xl md:text-3xl font-light tracking-wider"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-text-primary">HA</span>
                <span className="text-accent-gold">ORNE</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-xs letter-luxury text-text-secondary hover:text-text-primary transition-colors uppercase relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-500 ease-luxury" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <motion.button
                className="hidden md:flex items-center justify-center w-10 h-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4 text-text-secondary hover:text-text-primary transition-colors" strokeWidth={1.5} />
              </motion.button>

              {/* Cart */}
              <motion.button
                className="relative flex items-center justify-center w-10 h-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-4 h-4 text-text-secondary hover:text-text-primary transition-colors" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-gold text-background text-xs rounded-full flex items-center justify-center font-sans">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="w-5 h-px bg-text-primary block"
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-px bg-text-primary block"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-px bg-text-primary block"
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-background z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif text-3xl hover:text-accent-gold transition-colors ${
                    pathname === item.href ? 'text-accent-gold' : 'text-text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
