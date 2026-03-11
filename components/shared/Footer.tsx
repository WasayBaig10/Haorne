'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Collection',
    links: [
      { name: 'All Timepieces', href: '/collection' },
      { name: 'New Arrivals', href: '/collection?sort=new' },
      { name: 'Limited Editions', href: '/collection?filter=limited' },
      { name: 'Pre-Owned', href: '/collection?filter=preowned' },
    ],
  },
  {
    title: 'Craftsmanship',
    links: [
      { name: 'Our Artisans', href: '/craftsmanship' },
      { name: 'Materials', href: '/craftsmanship#materials' },
      { name: 'Movement', href: '/craftsmanship#movement' },
      { name: 'Guarantee', href: '/craftsmanship#guarantee' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Heritage', href: '/heritage' },
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Shipping', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              className="font-serif text-3xl font-light tracking-wider mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-text-primary">HA</span>
              <span className="text-accent-gold">ORNE</span>
            </motion.div>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Exceptional timepieces crafted with unwavering dedication to Swiss
              horological tradition since 1892.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@haorne.com"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">contact@haorne.com</span>
              </a>
              <a
                href="tel:+41223101892"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors group"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">+41 22 310 18 92</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">Geneva, Switzerland</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-sans text-xs letter-luxury text-accent-gold uppercase mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-text-muted">
              © {currentYear} HAORNE. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-text-muted hover:text-accent-gold transition-colors"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>

            <p className="font-sans text-xs text-text-muted hidden md:block">
              Swiss Made Since 1892
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
