// File: src/components/sections/HeroSection.tsx
"use client";

import { ChevronRight, Shield, Clock, DollarSign, Users, Trophy, Star, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1623298317882-8e6a1df0c0c0?auto=format&fit=crop&w=1920&q=80&blend=000000&blend-alpha=20&blend-mode=multiply',
  'https://images.unsplash.com/photo-1600881331365-16d4d6e89d5b?auto=format&fit=crop&w=1920&q=80&blend=000000&blend-alpha=20&blend-mode=multiply',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80&blend=000000&blend-alpha=20&blend-mode=multiply',
];

const blackWhitePeopleImages = [
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80&blend=000000&blend-alpha=10',
  'https://images.unsplash.com/photo-1519452639340-94fcedd16f13?auto=format&fit=crop&w=800&q=80&blend=000000&blend-alpha=10',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab454?auto=format&fit=crop&w=800&q=80&blend=000000&blend-alpha=10',
];

const stats = [
  { number: '30+', label: 'Cities Covered', icon: Shield, color: 'text-[#D4AF37]' },
  { number: '99.7%', label: 'On-Time Delivery', icon: Clock, color: 'text-[#D4AF37]' },
  { number: '1K+', label: 'Moves Completed', icon: Users, color: 'text-[#D4AF37]' },
  { number: '24/7', label: 'Customer Support', icon: Shield, color: 'text-[#D4AF37]' },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Black & White Images */}
      <div className="absolute inset-0">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#1a3a5f]/95 z-10" />
        
        {/* Main background images with crossfade */}
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${img}')`,
              transform: `scale(${1 + scrollY * 0.0002})`
            }}
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating black & white people images */}
        {blackWhitePeopleImages.map((img, index) => (
          <motion.div
            key={`person-${index}`}
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: 'clamp(150px, 20vw, 300px)',
              height: 'clamp(200px, 30vw, 400px)',
              top: `${20 + index * 25}%`,
              right: `${10 + index * 5}%`,
              transform: `translateY(${scrollY * 0.1}px) rotate(${index * 5}deg)`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [index * 5, index * 5 + 2, index * 5],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
              style={{ backgroundImage: `url('${img}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        ))}
        
        {/* Animated elements */}
        <motion.div
          animate={{ 
            x: ['-100%', '200%'],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25, 
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
            duration: 30, 
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
          className="absolute bottom-1/4 right-0 text-6xl opacity-10"
        >
          📦
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6 md:mb-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="text-white text-sm font-medium">Trusted by 1,000+ Families Nationwide</span>
            <Trophy className="h-4 w-4 text-[#D4AF37] ml-2" />
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Moving Made</span>
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
              Effortlessly Premium
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience stress-free relocation with our expert team. We handle every detail with care, precision, 
            and the highest standards of service excellence.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Get Instant Quote
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.div>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white/30 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="h-5 w-5" />
              <span>Meet Our Team</span>
            </motion.button>
          </motion.div>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white ${stat.color}`}>
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
                  
                  {/* Animated progress bar */}
                  <motion.div 
                    className="h-1 bg-white/20 rounded-full overflow-hidden mt-3"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  >
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${stat.color.includes('text-[#D4AF37]') ? 'from-[#D4AF37] to-amber-500' : 'from-[#0A2540] to-[#1a3a5f]'}`}
                      animate={{ 
                        x: ['-100%', '100%']
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-current" />
              ))}
              <span className="text-white/90 text-sm md:text-base">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm md:text-base">Award Winning Service</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
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