'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Filter, SlidersHorizontal } from 'lucide-react';
import { sampleWatches } from '@/lib/types/watch';

const collections = [
  { id: 'all', name: 'All Timepieces', count: sampleWatches.length },
  { id: 'classic', name: 'Classic', count: 12 },
  { id: 'heritage', name: 'Heritage', count: 8 },
  { id: 'sport', name: 'Sport', count: 15 },
  { id: 'limited-edition', name: 'Limited Edition', count: 3 },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
];

export default function CollectionPage() {
  const [activeCollection, setActiveCollection] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredWatches = sampleWatches.filter((watch) =>
    activeCollection === 'all' ? true : watch.collection === activeCollection
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax - GPU accelerated */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          layout="position"
        >
          <Image
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=2000&q=80"
            alt="Haorne Collection"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          layout="position"
        >
          <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
            Discover
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-text-primary">
            The Collection
          </h1>
          <p className="font-sans text-text-secondary mt-6 max-w-xl mx-auto">
            Exceptional timepieces that transcend generations, where precision
            meets artistry.
          </p>
        </motion.div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-30 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Collection Tabs */}
            <div className="hidden lg:flex items-center gap-8">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setActiveCollection(collection.id)}
                  className={`font-sans text-sm letter-luxury uppercase transition-colors relative py-2 ${
                    activeCollection === collection.id
                      ? 'text-accent-gold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {collection.name}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-accent-gold transition-all duration-300 ${
                      activeCollection === collection.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              className="lg:hidden flex items-center gap-2 text-text-secondary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-sans text-sm letter-luxury uppercase">
                Filter
              </span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="hidden md:flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-sans text-sm letter-luxury uppercase">
                  {sortOptions.find((s) => s.id === sortBy)?.name}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                className="lg:hidden border-t border-border py-4 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {collections.map((collection) => (
                    <button
                      key={collection.id}
                      onClick={() => {
                        setActiveCollection(collection.id);
                        setIsFilterOpen(false);
                      }}
                      className={`font-sans text-sm letter-luxury uppercase text-left py-2 transition-colors ${
                        activeCollection === collection.id
                          ? 'text-accent-gold'
                          : 'text-text-secondary'
                      }`}
                    >
                      {collection.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Watches Grid */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredWatches.map((watch, index) => (
              <motion.div
                key={watch.id}
                variants={itemVariants}
                className="group"
                layout="position"
              >
                <Link href={`/collection/${watch.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface2 border border-border hover:border-accent-gold/30 transition-all duration-500">
                    {/* Image with Parallax Effect - GPU accelerated */}
                    <motion.div
                      className="relative h-full w-full will-change-transform"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={watch.images.thumbnail}
                        alt={watch.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={85}
                      />
                    </motion.div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Quick View Button */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 will-change-transform"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-background/90 backdrop-blur-sm border border-accent-gold/30 py-3 px-4 flex items-center justify-center gap-2 group-hover:bg-accent-gold group-hover:text-background transition-all duration-300">
                        <span className="font-sans text-xs letter-luxury uppercase">
                          View Details
                        </span>
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {watch.isNew && (
                        <span className="bg-accent-gold text-background px-3 py-1 font-sans text-xs letter-luxury uppercase">
                          New
                        </span>
                      )}
                      {watch.isLimited && (
                        <span className="bg-surface border border-accent-gold text-accent-gold px-3 py-1 font-sans text-xs letter-luxury uppercase">
                          Limited
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Info Section */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-serif text-xl text-text-primary group-hover:text-accent-gold transition-colors">
                    {watch.name}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary">
                    {watch.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="font-sans text-lg text-accent-gold">
                      ${watch.price.toLocaleString()}
                    </p>
                    <p className="font-sans text-xs text-text-muted">
                      {watch.reference}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
