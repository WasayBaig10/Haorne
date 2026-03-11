'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { sampleWatches } from '@/lib/types/watch';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuredWatches = sampleWatches.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y, scale }}
        >
          <Image
            src="https://images.unsplash.com/photo-1622434641406-a158123450f9?w=2000&q=80"
            alt="Haorne Luxury Watch"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.p
            className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Swiss Haute Horlogerie
          </motion.p>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-text-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Timeless<br />
            <span className="text-gradient">Elegance</span>
          </motion.h1>

          <motion.p
            className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Where precision engineering meets artistic mastery. Discover
            timepieces crafted for those who appreciate the extraordinary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link
              href="/collection"
              className="group px-10 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors flex items-center gap-2"
            >
              Discover Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
            <Link
              href="/heritage"
              className="px-10 py-4 border border-border text-text-primary font-sans text-sm letter-luxury uppercase hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Our Heritage
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="font-sans text-xs letter-luxury text-text-secondary/60 uppercase">
            Scroll
          </p>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-accent-gold to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Fade Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
          style={{ opacity }}
        />
      </section>

      {/* Featured Collection */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              Exceptional Timepieces
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Featured Collection
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch, index) => (
              <motion.div
                key={watch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <Link href={`/collection/${watch.slug}`}>
                  <div className="group relative aspect-[4/5] overflow-hidden bg-surface2 border border-border hover:border-accent-gold/30 transition-all duration-500">
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={watch.images.thumbnail}
                        alt={watch.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-2xl text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                        {watch.name}
                      </h3>
                      <p className="font-sans text-text-secondary text-sm mb-4 line-clamp-2">
                        {watch.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-lg text-accent-gold">
                          ${watch.price.toLocaleString()}
                        </span>
                        <span className="font-sans text-xs text-text-muted letter-luxury uppercase">
                          Explore
                        </span>
                      </div>
                    </div>

                    {watch.isNew && (
                      <span className="absolute top-4 left-4 bg-accent-gold text-background px-3 py-1 font-sans text-xs letter-luxury uppercase">
                        New
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 px-10 py-4 border border-border text-text-primary font-sans text-sm letter-luxury uppercase hover:border-accent-gold hover:text-accent-gold transition-colors group"
            >
              View Full Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Teaser */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=2000&q=80"
            alt="Watch Movement"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
                The Art of Watchmaking
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
                Swiss Craftsmanship
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Each Haorne timepiece represents over 300 hours of meticulous
                handwork. Our master watchmakers combine traditional techniques
                with cutting-edge innovation to create watches that will be
                treasured for generations.
              </p>
              <Link
                href="/craftsmanship"
                className="inline-flex items-center gap-2 text-accent-gold font-sans text-sm letter-luxury uppercase hover:text-accent-goldLight transition-colors group"
              >
                Discover Our Craft
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
            </motion.div>

            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="absolute inset-0 border-2 border-accent-gold/20 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-8 border border-accent-gold/10 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
              <Image
                src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=800&q=80"
                alt="Watch Movement Detail"
                fill
                className="object-cover rounded-full p-12"
                sizes="50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Teaser */}
      <section className="py-24 md:py-32 bg-surface border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
                Since 1892
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
                A Legacy of Excellence
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                For over a century, Haorne has been at the forefront of Swiss
                watchmaking. Our heritage is built on unwavering dedication to
                quality, innovation, and the pursuit of perfection.
              </p>
              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 px-10 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors group"
              >
                Explore Our History
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-2xl mx-auto text-center border border-border p-12 bg-surface"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
              Stay Informed
            </h2>
            <p className="font-sans text-text-secondary mb-8">
              Subscribe to receive exclusive updates, new collection previews,
              and invitations to private events.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-background border border-border px-6 py-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
