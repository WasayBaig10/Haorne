'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Gem, Settings, Watch } from 'lucide-react';
import Image from 'next/image';

const craftsmanshipSections = [
  {
    id: 'materials',
    title: 'Materials',
    icon: <Gem className="w-8 h-8" strokeWidth={1.5} />,
    description: 'We source only the finest materials from around the world—surgical-grade stainless steel, 18k gold, sapphire crystal, and premium leathers from renowned tanneries.',
    items: [
      { name: '316L Stainless Steel', detail: 'Surgical-grade, corrosion-resistant' },
      { name: '18k Gold', detail: 'Rose, white, and yellow gold options' },
      { name: 'Sapphire Crystal', detail: 'Scratch-resistant with AR coating' },
      { name: 'Alligator Leather', detail: 'CITES-certified, hand-stitched' },
    ],
  },
  {
    id: 'movement',
    title: 'Movement',
    icon: <Settings className="w-8 h-8" strokeWidth={1.5} />,
    description: 'Our in-house calibers represent years of research and development. Each movement is assembled and adjusted by master watchmakers with decades of experience.',
    items: [
      { name: 'Caliber H-51', detail: 'Automatic, 72-hour power reserve' },
      { name: 'Caliber H-52', detail: 'Manual-wind, vintage-inspired' },
      { name: 'Caliber H-T01', detail: 'Tourbillon, 60-second rotation' },
      { name: 'Quality Control', detail: '15-day testing period' },
    ],
  },
  {
    id: 'finishing',
    title: 'Hand-Finishing',
    icon: <Award className="w-8 h-8" strokeWidth={1.5} />,
    description: 'Every surface, visible or hidden, receives meticulous hand-finishing. From beveled edges to polished mirrors, our artisans apply traditional techniques passed down through generations.',
    items: [
      { name: 'Beveling', detail: 'Hand-applied, 45° angles' },
      { name: 'Polishing', detail: 'Mirror finish on steel' },
      { name: 'Côtes de Genève', detail: 'Traditional Geneva stripes' },
      { name: 'Perlage', detail: 'Circular graining on plates' },
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Design',
    description: 'Every Haorne timepiece begins with extensive research and design, combining aesthetic vision with engineering precision.',
  },
  {
    step: '02',
    title: 'Prototyping',
    description: 'Multiple prototypes are created and tested to ensure perfect harmony between form and function.',
  },
  {
    step: '03',
    title: 'Assembly',
    description: 'Master watchmakers assemble each movement by hand, a process that can take several weeks for complicated calibers.',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Each completed timepiece undergoes rigorous testing for accuracy, water resistance, and power reserve.',
  },
  {
    step: '05',
    title: 'Quality Control',
    description: 'A final inspection ensures every detail meets our exacting standards before the watch leaves our atelier.',
  },
  {
    step: '06',
    title: 'Delivery',
    description: 'Each watch is presented in a handcrafted box with documentation and a certificate of authenticity.',
  },
];

export default function CraftsmanshipPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=2000&q=80"
            alt="Haorne Craftsmanship"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
            The Art of Watchmaking
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-text-primary mb-6">
            Craftsmanship
          </h1>
          <p className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Each Haorne timepiece represents over 300 hours of meticulous
            handwork by master artisans. Discover the dedication behind every
            detail.
          </p>
        </motion.div>
      </section>

      {/* Craftsmanship Sections */}
      {craftsmanshipSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                className={index % 2 === 0 ? '' : 'lg:order-2'}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-accent-gold">{section.icon}</div>
                  <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
                    {section.title}
                  </h2>
                </div>

                <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                  {section.description}
                </p>

                <dl className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="border-l-2 border-accent-gold/30 pl-6 hover:border-accent-gold transition-colors">
                      <dt className="font-serif text-xl text-text-primary mb-1">
                        {item.name}
                      </dt>
                      <dd className="font-sans text-text-secondary">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>

              {/* Image */}
              <motion.div
                className={index % 2 === 0 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1614164185128-e4ec99c436d7' : index === 1 ? '1639037687665-4a97656bb54e' : '1523275335684-37898b6baf30'
                    }?w=1200&q=80`}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              From Concept to Reality
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Our Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-surface border border-border p-8 hover:border-accent-gold/30 transition-colors h-full">
                  <span className="font-serif text-5xl text-accent-gold/20 group-hover:text-accent-gold/30 transition-colors">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-2xl text-text-primary mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border group-hover:bg-accent-gold/50 transition-colors" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center">
                  <Watch className="w-10 h-10 text-accent-gold" strokeWidth={1.5} />
                </div>
              </div>

              <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
                Our Promise
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
                5-Year Warranty
              </h2>

              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-12">
                Every Haorne timepiece is backed by a comprehensive 5-year
                international warranty. Our commitment extends beyond the
                purchase—we provide lifetime access to our expert service team
                and genuine parts.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  'Free servicing during warranty period',
                  'International coverage at all boutiques',
                  'Genuine parts guarantee',
                ].map((guarantee, index) => (
                  <div key={index} className="text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-sans text-text-secondary text-sm">
                        {guarantee}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
