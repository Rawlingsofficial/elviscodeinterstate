// File: src/components/sections/HeroSection.tsx
"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1623298317882-8e6a1df0c0c0?auto=format&fit=crop&w=1920&q=80', // Professional moving truck
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=80', // Movers packing
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80', // Packing boxes
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80', // Truck on highway
];

const stats = [
  { number: '30+', label: 'Cities Covered', icon: Users, color: 'text-[#D4AF37]' },
  { number: '99.7%', label: 'On-Time Delivery', icon: Clock, color: 'text-[#D4AF37]' },
  { number: '1K+', label: 'Moves Completed', icon: Award, color: 'text-[#D4AF37]' },
  { number: '24/7', label: 'Support', icon: Shield, color: 'text-[#D4AF37]' },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#1a3a5f]/95 z-10" />
        
        {/* Background images */}
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${img}')`,
              backgroundPosition: 'center center'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated moving elements */}
        <motion.div
          animate={{ 
            x: ['-100%', '200%'],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 text-6xl opacity-10"
        >
          🚚
        </motion.div>
        
        <motion.div
          animate={{ 
            x: ['200%', '-100%'],
            y: [50, 0, 50],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
          className="absolute bottom-1/4 right-0 text-6xl opacity-10"
        >
          📦
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Badge - Simple and clean */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Premium Coast-to-Coast Moving Services</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Move With</span>
            <span className="block">Confidence,</span>
            <motion.span 
              className="bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Move With Elvisco
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional moving services for homes and businesses across the nation. 
            Experience stress-free relocation with our expert team handling every detail.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                Get Free Quote
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white/30 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="h-5 w-5" />
              <span>Our Services</span>
            </motion.button>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                      {stat.number}
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-[#D4AF37] to-amber-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}