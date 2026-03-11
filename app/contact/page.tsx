'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@haorne.com',
    link: 'mailto:contact@haorne.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+41 22 310 18 92',
    link: 'tel:+41223101892',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Rue du Rhône 48, 1204 Geneva, Switzerland',
    link: '#',
  },
];

const boutiques = [
  { city: 'Geneva', address: 'Rue du Rhône 48' },
  { city: 'Paris', address: 'Place Vendôme 12' },
  { city: 'London', address: 'Old Bond Street 156' },
  { city: 'New York', address: 'Fifth Avenue 725' },
  { city: 'Tokyo', address: 'Ginza 4-chome 6-16' },
];

const inquiryTypes = [
  'General Inquiry',
  'Purchase Assistance',
  'Servicing & Repairs',
  'Press & Media',
  'Partnership',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    newsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        newsletter: false,
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev.newsletter : value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Split Section */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Image Side */}
        <motion.div
          className="lg:w-1/2 relative h-[50vh] lg:h-screen"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=1600&q=80"
            alt="Haorne Timepiece"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:via-background/50 lg:to-background/20" />

          {/* Overlay Quote */}
          <div className="absolute bottom-12 left-12 right-12">
            <motion.blockquote
              className="border-l-2 border-accent-gold pl-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
                "Every timepiece tells a story. We invite you to become part
                of ours."
              </p>
              <cite className="font-sans text-accent-gold text-sm letter-luxury uppercase not-italic">
                — The Haorne Family
              </cite>
            </motion.blockquote>
          </div>
        </motion.div>

        {/* Form Side */}
        <div className="lg:w-1/2 bg-background flex flex-col justify-center px-6 py-16 lg:px-20">
          <motion.div
            className="max-w-xl mx-auto w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Contact Us
            </h1>
            <p className="font-sans text-text-secondary mb-12">
              Whether you seek guidance on a timepiece, require servicing, or
              wish to explore our heritage, we are here to assist.
            </p>

            {/* Contact Info Cards */}
            <div className="grid gap-4 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-surface border border-border hover:border-accent-gold/30 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-surface2 group-hover:bg-accent-gold/10 transition-colors">
                      <Icon className="w-5 h-5 text-accent-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-text-muted uppercase tracking-wider">
                        {info.title}
                      </p>
                      <p className="font-sans text-text-primary">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block font-sans text-xs text-text-muted uppercase tracking-wider mb-2"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select...</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-xs text-text-muted uppercase tracking-wider mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="How can we assist you?"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 bg-surface border border-border accent-accent-gold cursor-pointer"
                />
                <label
                  htmlFor="newsletter"
                  className="font-sans text-sm text-text-secondary cursor-pointer"
                >
                  Subscribe to our newsletter for exclusive updates and event
                  invitations.
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-accent-gold text-background py-4 font-sans text-sm letter-luxury uppercase hover:bg-accent-goldLight transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" strokeWidth={2} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Boutiques Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-accent-gold text-sm letter-luxury uppercase tracking-widest mb-4">
              Worldwide Presence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Our Boutiques
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {boutiques.map((boutique, index) => (
              <motion.div
                key={boutique.city}
                className="bg-background border border-border p-6 hover:border-accent-gold/30 transition-colors text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                  {boutique.city}
                </h3>
                <p className="font-sans text-text-secondary text-sm">
                  {boutique.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
