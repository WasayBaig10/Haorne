'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { sampleWatches } from '@/lib/types/watch';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const featuredWatches = sampleWatches.slice(0, 3);

  return (
    <>
      {/* Hero Section - Premium parallax and animations */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background with smooth parallax */}
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1622434641406-a158123450f9?w=2000&q=80"
            alt="Haorne Luxury Watch"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>

        {/* Hero Content - Premium reveal animations */}
        <motion.div
          className="relative z-10 container mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-text-primary mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Timeless<br />
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Elegance
            </motion.span>
          </motion.h1>

          <motion.p
            className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Where precision engineering meets artistic mastery. Discover
            timepieces crafted for those who appreciate the extraordinary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/collection"
                className="group px-10 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors flex items-center gap-2"
              >
                Discover Collection
                <motion.div
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/heritage"
                className="px-10 py-4 border border-border text-text-primary font-sans text-sm letter-luxury uppercase hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                Our Heritage
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - Premium animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="font-sans text-xs letter-luxury text-text-secondary/60 uppercase">
            Scroll
          </p>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-accent-gold to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Featured Collection - Premium Framer Motion animations */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              Exceptional Timepieces
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Featured Collection
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {featuredWatches.map((watch) => (
              <motion.div
                key={watch.id}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                <Link href={`/collection/${watch.slug}`}>
                  <motion.div
                    className="group relative aspect-[4/5] overflow-hidden bg-surface2 border border-border hover:border-accent-gold/30 transition-all duration-700"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.div
                      className="relative h-full w-full overflow-hidden"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={watch.images.thumbnail}
                        alt={watch.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.h3
                        className="font-serif text-2xl text-text-primary mb-2"
                        whileHover={{ color: "rgb(212, 175, 55)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {watch.name}
                      </motion.h3>
                      <p className="font-sans text-text-secondary text-sm mb-4 line-clamp-2">
                        {watch.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-lg text-accent-gold">
                          ${watch.price.toLocaleString()}
                        </span>
                        <motion.span
                          className="font-sans text-xs text-text-muted letter-luxury uppercase"
                          whileHover={{ x: 4, color: "rgb(212, 175, 55)" }}
                          transition={{ duration: 0.3 }}
                        >
                          Explore
                        </motion.span>
                      </div>
                    </div>

                    {watch.isNew && (
                      <motion.span
                        className="absolute top-4 left-4 bg-accent-gold text-background px-3 py-1 font-sans text-xs letter-luxury uppercase"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        New
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 px-10 py-4 border border-border text-text-primary font-sans text-sm letter-luxury uppercase hover:border-accent-gold hover:text-accent-gold transition-colors group"
            >
              View Full Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Teaser - Premium animations */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=2000&q=80"
            alt="Watch Movement"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-background/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/craftsmanship"
                  className="inline-flex items-center gap-2 text-accent-gold font-sans text-sm letter-luxury uppercase hover:text-accent-goldLight transition-colors group"
                >
                  Discover Our Craft
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-accent-gold/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border border-accent-gold/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <Image
                src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=800&q=80"
                alt="Watch Movement Detail"
                fill
                className="object-cover rounded-full p-12"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Teaser - Premium animations */}
      <section className="py-24 md:py-32 bg-surface border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 px-10 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors group"
              >
                Explore Our History
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - Premium animations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-2xl mx-auto text-center border border-border p-12 bg-surface"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
            transition={{ duration: 0.4 }}
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
              <motion.button
                type="submit"
                className="px-8 py-4 bg-accent-gold text-background font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
