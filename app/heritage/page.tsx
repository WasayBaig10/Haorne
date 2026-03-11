'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Award, Globe, Heart } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1892',
    title: 'The Founding',
    description: 'Henri Haorne establishes his watchmaking atelier in Geneva, Switzerland, with a vision to create timepieces of exceptional quality and timeless beauty.',
    icon: <Clock className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    year: '1912',
    title: 'First Patent',
    description: 'Haorne receives its first patent for an innovative winding mechanism that would become the foundation for future calibers.',
    icon: <Award className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    year: '1947',
    title: 'Post-War Renaissance',
    description: 'After the challenges of war, Haorne emerges with a new collection that defines the modern aesthetic of the mid-20th century.',
  },
  {
    year: '1973',
    title: 'Global Expansion',
    description: 'Haorne opens boutiques in Paris, London, and New York, bringing Swiss excellence to discerning clients around the world.',
    icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    year: '1992',
    title: 'Centenary Celebration',
    description: 'One hundred years of uninterrupted watchmaking excellence. The Limited Edition Centenary collection commemorates this milestone.',
  },
  {
    year: '2010',
    title: 'In-House Movement',
    description: 'After five years of development, Haorne unveils its first in-house caliber, the H-50, featuring a revolutionary power reserve system.',
  },
  {
    year: '2020',
    title: 'Modern Era',
    description: 'Haorne embraces contemporary design while honoring its heritage, introducing new collections that resonate with the next generation of collectors.',
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
  },
];

export default function HeritagePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Line height based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
            Since 1892
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-text-primary mb-6">
            Our Heritage
          </h1>
          <p className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            For over a century, Haorne has been crafting timepieces that
            transcend generations. Our story is one of unwavering dedication
            to excellence, innovation, and the art of watchmaking.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="py-24 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line that draws itself */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
              {/* Animated Progress Line */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-gold via-accent-gold to-transparent"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
                Timeless Excellence
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed">
                Every Haorne timepiece is a testament to our commitment to
                excellence. We believe that true luxury lies in the details—in
                the precise alignment of hands, the perfect finish of a case,
                and the silent confidence of a movement that has been
                meticulously assembled by master watchmakers.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                {
                  title: 'Craftsmanship',
                  description: 'Each watch requires over 300 hours of meticulous hand-finishing.',
                },
                {
                  title: 'Innovation',
                  description: 'Continuously pushing the boundaries of horological possibility.',
                },
                {
                  title: 'Heritage',
                  description: 'Honoring tradition while embracing the future of watchmaking.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="text-left space-y-4 p-6 border border-border hover:border-accent-gold/30 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-text-primary">
                    {value.title}
                  </h3>
                  <p className="font-sans text-text-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isEven: boolean;
}

function TimelineItem({ event, index, isEven }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-16 mb-16 md:mb-24 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-accent-gold z-10 flex-shrink-0" />

      {/* Year Badge */}
      <div className="md:hidden pl-12 pt-1">
        <span className="font-serif text-4xl text-accent-gold">
          {event.year}
        </span>
      </div>

      {/* Content */}
      <div className={`${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} w-full md:w-1/2 pt-2`}>
        {/* Year Badge for Desktop */}
        <div className="hidden md:block mb-6">
          <motion.span
            className="font-serif text-6xl text-accent-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            {event.year}
          </motion.span>
        </div>

        {/* Card */}
        <div className="bg-surface2 border border-border p-8 hover:border-accent-gold/30 transition-colors">
          {/* Icon */}
          {event.icon && (
            <div className="mb-6 text-accent-gold">{event.icon}</div>
          )}

          <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            {event.title}
          </h3>

          <p className="font-sans text-text-secondary leading-relaxed">
            {event.description}
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-px bg-gradient-to-r from-accent-gold to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
          />
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
