// File: src/components/sections/HeroSection.tsx
'use client';
import { useState, useEffect } from 'react';
import { ChevronRight, Shield, Clock, DollarSign } from 'lucide-react';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    '/images/hero/moving-truck-1.jpg',
    '/images/hero/team-working.jpg',
    '/images/hero/happy-family.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Images with Fade Effect */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.85), rgba(10, 37, 64, 0.75)), url('${img}')` }}
        />
      ))}
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-white text-sm font-medium">Trusted by 1000+ Families</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Move You
            <span className="block text-[#D4AF37] mt-2">Anywhere in the U.S.</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Premium moving services with care, precision, and reliability. Experience stress-free relocation with our expert team handling every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center group">
              Get Instant Quote
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300">
              Watch Our Story
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-white/80 text-sm">Cities Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 flex items-center">
                <Clock className="h-5 w-5 text-[#D4AF37] mr-2" />
                99.7%
              </div>
              <div className="text-white/80 text-sm">On-Time Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 flex items-center">
                <DollarSign className="h-5 w-5 text-[#D4AF37] mr-2" />
                1K+
              </div>
              <div className="text-white/80 text-sm">Moves Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

