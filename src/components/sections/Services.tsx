// File: src/components/sections/Services.tsx
"use client";

import { Truck, Home, Building, Package, Warehouse, Car, Globe, Box, ArrowRight, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Variants } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Complete home relocation with careful handling of all your belongings. We treat your home like our own.',
    features: ['Full packing service', 'Furniture disassembly', 'Secure transport', 'Unpacking assistance'],
    color: 'from-[#D4AF37] to-amber-500',
    image: 'https://images.unsplash.com/photo-1551524165-6b6e5a6166f3?auto=format&fit=crop&w=800',
  },
  {
    icon: Building,
    title: 'Commercial Relocation',
    description: 'Minimize business downtime with our efficient office moving solutions. Keep your business running smoothly.',
    features: ['After-hours moving', 'IT equipment handling', 'Minimal disruption', 'Weekend service'],
    color: 'from-[#0A2540] to-[#1a3a5f]',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800',
  },
  {
    icon: Truck,
    title: 'Long-Distance Moving',
    description: 'Coast-to-coast moving with real-time tracking and updates. Your belongings are our priority.',
    features: ['GPS tracking', 'Climate control', 'Multi-stop routes', 'Storage options'],
    color: 'from-[#D4AF37] to-amber-500',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800',
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing using premium materials for maximum protection. We handle even the most delicate items.',
    features: ['Fragile item packing', 'Custom labeling system', 'Premium materials', 'Unpacking service'],
    color: 'from-[#0A2540] to-[#1a3a5f]',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800',
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description: 'Secure short-term and long-term storage with climate control. Your items are safe with us.',
    features: ['24/7 security monitoring', 'Climate controlled', 'Easy access', 'Insurance included'],
    color: 'from-[#D4AF37] to-amber-500',
    image: 'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=800',
  },
  {
    icon: Car,
    title: 'Vehicle Shipping',
    description: 'Safe transport of your vehicles anywhere in the country. Enclosed transport for ultimate protection.',
    features: ['Enclosed transport', 'Insurance included', 'Door-to-door service', 'Real-time tracking'],
    color: 'from-[#0A2540] to-[#1a3a5f]',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -10 },
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#D4AF37]/5 to-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#0A2540]/5 to-[#1a3a5f]/5 rounded-full blur-3xl" />
        
        {/* Moving boxes animation */}
        <motion.div
          animate={{ x: ['-100%', '200%'], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 text-4xl opacity-10"
        >
          📦
        </motion.div>
        <motion.div
          animate={{ x: ['-100%', '200%'], y: [10, 0, 10] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-40 left-0 text-4xl opacity-10"
        >
          🚚
        </motion.div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 text-[#D4AF37] font-semibold rounded-full text-sm md:text-base tracking-wider border border-[#D4AF37]/20">
              ✨ OUR PREMIUM SERVICES ✨
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="text-[#0A2540]">Comprehensive Moving</span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] bg-clip-text text-transparent bg-[length:200%_auto] inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Solutions
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From local moves to cross-country relocations, we offer tailored services designed to make your move seamless and stress-free.
          </motion.p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                animate={hoveredCard === index ? "hover" : "rest"}
                className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200/50 transition-all duration-300"
              >
                {/* Background Image with Overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    animate={{ 
                      scale: hoveredCard === index ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  
                  {/* Service Icon */}
                  <div className="absolute top-4 left-4">
                    <motion.div 
                      className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      animate={{ 
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Service Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-[#0A2540]">
                      {service.title.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex-shrink-0 mr-3"
                        >
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                        </motion.div>
                        <span className="text-sm md:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Action Button */}
                  <motion.button 
                    className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 ${service.color.includes('from-[#D4AF37]') ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] hover:shadow-lg hover:shadow-amber-500/30' : 'bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white hover:shadow-lg hover:shadow-[#0A2540]/30'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Service</span>
                    <motion.div
                      animate={{ x: hoveredCard === index ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-16 md:mt-20 lg:mt-24 bg-gradient-to-r from-[#0A2540] via-[#1a3a5f] to-[#0A2540] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 text-6xl"
            >
              🏠
            </motion.div>
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, -50, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
              className="absolute bottom-1/4 right-1/4 text-6xl"
            >
              🚛
            </motion.div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full mb-6 md:mb-8 mx-auto"
            >
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready for a Stress-Free Move?
            </h3>
            
            <p className="text-white/80 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Get a personalized quote in minutes. No hidden fees, just transparent pricing and premium service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-white/30 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-5 w-5" />
                <span>Speak with Expert</span>
              </motion.button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-white/90 text-sm md:text-base">99.7% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-white/90 text-sm md:text-base">Fully Insured & Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-white/90 text-sm md:text-base">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

