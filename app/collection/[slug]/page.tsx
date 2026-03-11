'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Heart, ZoomIn } from 'lucide-react';
import { sampleWatches } from '@/lib/types/watch';
import { notFound } from 'next/navigation';

// This would normally be dynamic based on slug
const watchData = sampleWatches[0];

export default function ProductDetailPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const specsRef = useRef<HTMLElement>(null);
  const isSpecsInView = useInView(specsRef, { once: true, margin: '-100px' });

  const images = [
    watchData.images.thumbnail,
    ...watchData.images.gallery,
    ...(watchData.images.macro4K || []),
  ];

  const specItems = [
    { label: 'Movement', value: watchData.specifications.movement.type },
    { label: 'Caliber', value: watchData.specifications.movement.caliber },
    { label: 'Case Diameter', value: watchData.specifications.case.diameter },
    { label: 'Water Resistance', value: watchData.specifications.waterResistance },
    { label: 'Power Reserve', value: watchData.specifications.powerReserve },
    { label: 'Crystal', value: watchData.specifications.case.crystal },
  ];

  const detailSpecs = [
    {
      title: 'Movement',
      icon: '⚙️',
      specs: [
        { label: 'Type', value: watchData.specifications.movement.type },
        { label: 'Caliber', value: watchData.specifications.movement.caliber },
        { label: 'Frequency', value: watchData.specifications.movement.frequency },
        { label: 'Jewels', value: watchData.specifications.movement.jewels.toString() },
        { label: 'Power Reserve', value: `${watchData.specifications.movement.powerReserve} hours` },
      ],
    },
    {
      title: 'Case',
      icon: '⌚',
      specs: [
        { label: 'Material', value: watchData.specifications.case.material },
        { label: 'Diameter', value: watchData.specifications.case.diameter },
        { label: 'Thickness', value: watchData.specifications.case.thickness },
        { label: 'Finish', value: watchData.specifications.case.finish },
        { label: 'Case Back', value: watchData.specifications.case.caseBack },
      ],
    },
    {
      title: 'Dial',
      icon: '🎯',
      specs: [
        { label: 'Color', value: watchData.specifications.dial.color },
        { label: 'Markers', value: watchData.specifications.dial.markers },
        { label: 'Hands', value: watchData.specifications.dial.hands },
        { label: 'Indices', value: watchData.specifications.dial.indices },
      ],
    },
    {
      title: 'Bracelet',
      icon: '🔗',
      specs: [
        { label: 'Material', value: watchData.specifications.bracelet.material },
        { label: 'Color', value: watchData.specifications.bracelet.color },
        { label: 'Clasp', value: watchData.specifications.bracelet.clasp },
        { label: 'Width', value: watchData.specifications.bracelet.width },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-accent-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/collection" className="hover:text-accent-gold transition-colors">
              Collection
            </Link>
            <span>/</span>
            <span className="text-text-primary">{watchData.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Gallery & Info */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image with 4K Support */}
              <div className="relative aspect-square overflow-hidden bg-surface2 border border-border group">
                <motion.div
                  className="relative h-full w-full cursor-zoom-in"
                  animate={isZoomed ? { scale: 2 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <Image
                    src={images[selectedImageIndex]}
                    alt={`${watchData.name} - View ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority={selectedImageIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={selectedImageIndex > 2 ? 100 : 85} // Higher quality for macro images
                  />
                </motion.div>

                {/* Zoom hint */}
                {!isZoomed && (
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
                  </div>
                )}

                {/* Close zoom button */}
                {isZoomed && (
                  <button
                    onClick={() => setIsZoomed(false)}
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 z-10 hover:bg-accent-gold hover:text-background transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-accent-gold'
                        : 'border-border hover:border-accent-gold/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <div>
                <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-2">
                  {watchData.collection.replace('-', ' ')}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
                  {watchData.name}
                </h1>
                <p className="font-sans text-text-secondary text-lg">
                  {watchData.shortDescription}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <p className="font-sans text-3xl text-accent-gold">
                  ${watchData.price.toLocaleString()}
                </p>
                <p className="font-sans text-text-muted">
                  Reference: {watchData.reference}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-text-secondary leading-relaxed">
                {watchData.fullDescription}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                {specItems.map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-sans text-xs text-text-muted uppercase tracking-wider">
                      {spec.label}
                    </p>
                    <p className="font-sans text-text-primary">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-accent-gold text-background py-4 font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  Add to Cart
                </button>
                <button className="px-6 py-4 border border-border text-text-primary font-sans text-sm letter-luxury uppercase hover:border-accent-gold hover:text-accent-gold transition-colors">
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <p className="font-sans text-xs text-text-muted uppercase tracking-wider">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {watchData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="font-sans text-text-secondary flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section ref={specsRef} className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSpecsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              Technical Excellence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Specifications
            </h2>
          </motion.div>

          {/* Staggered Spec Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailSpecs.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isSpecsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: sectionIndex * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-surface2 border border-border p-6 hover:border-accent-gold/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-serif text-xl text-text-primary">
                    {section.title}
                  </h3>
                </div>

                <dl className="space-y-4">
                  {section.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="font-sans text-xs text-text-muted uppercase tracking-wider">
                        {spec.label}
                      </dt>
                      <dd className="font-sans text-text-secondary mt-1">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Collection */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="font-sans text-sm letter-luxury uppercase">
              Back to Collection
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
