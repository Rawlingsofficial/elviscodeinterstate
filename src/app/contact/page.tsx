// File: src/app/contact/page.tsx
"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Shield,
  Award,
  Send,
  CheckCheck,
  AlertCircle,
  Star,
  Sparkles,
  Navigation,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

// Horizontal Auto-Scrolling Contact Cards Component
function ContactInfoSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (240) 353-2854'],
      description: 'Available 24/7 for urgent moving inquiries',
      color: 'from-blue-400 to-cyan-300',
      bgColor: 'bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm',
      iconColor: 'text-blue-500',
      action: 'tel:+12403532854'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@elviscodeinterstate.com'],
      description: 'Response within 2 hours during business hours',
      color: 'from-emerald-400 to-teal-300',
      bgColor: 'bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm',
      iconColor: 'text-emerald-500',
      action: 'mailto:contact@elviscodeinterstate.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['5920 Somerset Rd', 'Riverdale, MD 20737'],
      description: 'Main headquarters - By appointment only',
      color: 'from-violet-400 to-purple-300',
      bgColor: 'bg-gradient-to-br from-violet-50/80 to-purple-50/80 backdrop-blur-sm',
      iconColor: 'text-violet-500',
      action: 'https://maps.google.com/?q=5920+Somerset+Rd+Riverdale+MD+20737'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sun: 24/7 Support', 'Office: 8AM-8PM EST'],
      description: 'Emergency moving services available 24/7',
      color: 'from-amber-400 to-orange-300',
      bgColor: 'bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm',
      iconColor: 'text-amber-500'
    }
  ];

  // Auto scroll effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contactInfo.length);
      
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 320;
        const scrollAmount = cardWidth;
        
        container.scrollTo({
          left: (currentIndex + 1) * scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, contactInfo.length]);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 320;
    const scrollAmount = cardWidth * (direction === 'right' ? 1 : -1);

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    const newIndex = direction === 'right' 
      ? (currentIndex + 1) % contactInfo.length 
      : (currentIndex - 1 + contactInfo.length) % contactInfo.length;
    setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 320;
    
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0A2540]/5 to-[#D4AF37]/5 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#0A2540]">CONTACT OPTIONS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our premium moving services team
            </p>
          </motion.div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 hidden md:block"
          >
            <ChevronLeft className="h-5 w-5 text-[#0A2540]" />
          </button>

          <button
            onClick={() => scrollTo('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 hidden md:block"
          >
            <ChevronRight className="h-5 w-5 text-[#0A2540]" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 min-w-max px-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative flex-shrink-0 w-[300px] snap-center"
                  >
                    <div className={`relative rounded-2xl p-6 ${info.bgColor} border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl group overflow-hidden`}>
                      {/* Animated background */}
                      <div className={`absolute inset-0 ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className="mb-5 relative z-10">
                        <div className={`inline-flex p-3 rounded-xl bg-white ${info.iconColor} shadow-sm`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#0A2540] mb-3 relative z-10">{info.title}</h3>
                      
                      <div className="space-y-2 mb-4 relative z-10">
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-base font-semibold text-[#0A2540]">
                            {detail}
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-5 relative z-10">{info.description}</p>
                      
                      {info.action && (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`inline-flex items-center text-sm font-medium ${info.iconColor} hover:opacity-80 transition-opacity group/action relative z-10`}
                        >
                          {info.icon === Phone ? 'Call Now' : 
                           info.icon === Mail ? 'Send Email' : 
                           info.icon === MapPin ? 'Get Directions' : 'View Hours'}
                          <div className={`ml-2 p-1 rounded-full ${info.iconColor}/20 group-hover/action:${info.iconColor}/30 transition-colors`}>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {contactInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#D4AF37] w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-scroll indicator */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-gray-300' : 'bg-[#D4AF37] animate-pulse'}`}></div>
              <span>{isHovered ? 'Hover to pause' : 'Auto-scrolling'}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    subscribe: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
          subscribe: true
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or call us at +1 (240) 353-2854.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Maps embed URL
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.1414525312613!2d-76.919692!3d38.957631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c81d5c1d5b5b%3A0x5c9c8c9c8c9c8c9c!2s5920%20Somerset%20Rd%2C%20Riverdale%2C%20MD%2020737!5e0!3m2!1sen!2sus!4v1699386000000!5m2!1sen!2sus";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#1a365d] to-[#0A2540] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-white">24/7 SUPPORT • IMMEDIATE RESPONSE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl">
              Have questions about your move? Our dedicated team is ready to assist you 
              with personalized moving solutions and expert guidance.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-[#D4AF37] fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">Rated 4.9/5 by 1,000+ customers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Auto-Scrolling Contact Cards */}
      <ContactInfoSlider />

      {/* Contact Form & Real Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <AnimatePresence>
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-xl ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <div className="flex items-start">
                      {submitStatus.type === 'success' ? (
                        <CheckCheck className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      )}
                      <div>
                        <p className={`font-medium ${
                          submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {submitStatus.type === 'success' ? 'Message Sent Successfully!' : 'Message Failed'}
                        </p>
                        <p className={`text-sm mt-1 ${
                          submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A2540] font-medium mb-2 text-sm">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white"
                      placeholder="John Smith"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A2540] font-medium mb-2 text-sm">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A2540] font-medium mb-2 text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white"
                      placeholder="+1 (240) 353-2854"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A2540] font-medium mb-2 text-sm">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white"
                      disabled={isSubmitting}
                    >
                      <option>General Inquiry</option>
                      <option>Get a Quote</option>
                      <option>Service Question</option>
                      <option>Claim Support</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#0A2540] font-medium mb-2 text-sm">Message *</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white"
                    placeholder="Tell us about your moving needs, preferred dates, and any special requirements..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.subscribe}
                    onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                    className="rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]/20 mr-3 mt-1"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="newsletter" className="text-gray-700 text-sm">
                    Subscribe to our newsletter for moving tips, special offers, and updates.
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-4 rounded-lg text-base hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-[#0A2540] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </motion.div>

            {/* Real Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Interactive Google Map */}
              <div className="bg-gradient-to-br from-[#0A2540] to-[#1a365d] rounded-2xl p-6 text-white overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#D4AF37] mr-3" />
                    <h3 className="text-xl font-bold">Our Location</h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=5920+Somerset+Rd+Riverdale+MD+20737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-amber-400 transition-colors"
                  >
                    Open in Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                {/* Google Maps Embed */}
                <div className="h-64 md:h-80 rounded-xl overflow-hidden mb-6 relative">
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elvisco De Interstate Location"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 pointer-events-none border-2 border-white/20 rounded-xl"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-[#D4AF37]/20 mr-4 flex-shrink-0">
                      <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Address</p>
                      <p className="font-medium">5920 Somerset Rd, Riverdale, MD 20737</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-[#D4AF37]/20 mr-4 flex-shrink-0">
                      <Clock className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Hours</p>
                      <p className="font-medium">By appointment: Mon-Fri 9AM-5PM</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://maps.google.com/?q=5920+Somerset+Rd+Riverdale+MD+20737&dir_action=navigate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-4 py-2 rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex-1 justify-center"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </a>
                    
                    <a
                      href="tel:+12403532854"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-all duration-300 flex-1 justify-center"
                    >
                      <Phone className="h-4 w-4" />
                      Call Before Visit
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 mr-4">
                    <Phone className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540]">Need to Speak Now?</h3>
                    <p className="text-gray-600 text-sm">Direct line to our support team</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A2540] mb-1">+1 (240) 353-2854</div>
                    <div className="text-sm text-gray-500">24/7 Emergency Support</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+12403532854"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A2540] to-[#1a365d] text-white font-medium px-4 py-3 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    
                    <a
                      href="sms:+12403532854"
                      className="inline-flex items-center justify-center gap-2 bg-gray-100 text-[#0A2540] font-medium px-4 py-3 rounded-lg text-sm hover:bg-gray-200 transition-all duration-300"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Text Us
                    </a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Average response time: <span className="font-bold text-[#D4AF37]">15 minutes</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Why Trust Elvisco</h2>
            <p className="text-gray-600">
              Thousands of satisfied customers have experienced our premium moving services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5">
                <Shield className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive coverage for your peace of mind</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5">
                <CheckCircle className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">99.7% Satisfaction</h3>
              <p className="text-gray-600">Consistently high customer satisfaction ratings</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5">
                <Award className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">Award Winning</h3>
              <p className="text-gray-600">Industry recognition for excellence in service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immediate Assistance */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0A2540] to-[#1a365d]">
        <div className="container-custom px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              For urgent moving requests or last-minute bookings, call us now.
            </p>
            
            <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-8">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 mr-4">
                  <Phone className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div className="text-left">
                  <div className="text-white/80 text-sm">24/7 Emergency Line</div>
                  <a href="tel:+12403532854" className="text-2xl md:text-3xl font-bold text-white hover:text-[#D4AF37] transition-colors">
                    +1 (240) 353-2854
                  </a>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              
              <div>
                <div className="text-white/80 text-sm mb-2">Average Response Time</div>
                <div className="text-xl font-bold text-[#D4AF37]">15 minutes</div>
                <div className="text-white/60 text-xs mt-1">For urgent inquiries</div>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white/80">
                <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-sm">No commitment required</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Shield className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-sm">Fully licensed & insured</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Award className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-sm">Award-winning service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


