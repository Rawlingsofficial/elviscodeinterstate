// File: src/components/sections/AboutUs.tsx
'use client';
import { CheckCircle, Package, Calendar, Users, Shield, Truck, Home, Award, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [activeStat, setActiveStat] = useState(0);
  const [pulse, setPulse] = useState(false);

  // Rotating stats for the changing number
  const rotatingStats = [
    { value: '1,000+', label: 'Families Moved', icon: Home },
    { value: '500+', label: 'Businesses Relocated', icon: Truck },
    { value: '7,500+', label: 'Items Packed Daily', icon: Package },
    { value: '25,000+', label: 'Miles Traveled', icon: Truck },
  ];

  // Features with animations
  const features = [
    {
      icon: Package,
      title: 'Professional Packing',
      description: 'We pack your items carefully using premium materials to ensure they arrive safely.',
      animation: 'bounce'
    },
    {
      icon: Calendar,
      title: 'Pre-Move Planning',
      description: 'We help you plan every step with detailed checklists and timelines for a smooth move.',
      animation: 'pulse'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: '$1M liability coverage for complete peace of mind during your move.',
      animation: 'shield'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Background-checked, trained professionals who care about your belongings.',
      animation: 'team'
    },
  ];

  // Animated checkmarks
  const benefits = [
    'Licensed & Insured',
    'Background-Checked Team',
    'GPS Tracking',
    '24/7 Support',
    'Climate Control',
    'Free Estimates'
  ];

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % rotatingStats.length);
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0d2c4f] to-[#0A2540]">
      {/* Animated background elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating human silhouettes - Reduced on mobile */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [100, -100, 100],
              opacity: [0, 0.05, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute text-white/5 hidden md:block"
            style={{
              left: `${20 + (i * 25)}%`,
              fontSize: 'clamp(4rem, 8vw, 8rem)'
            }}
          >
            👤
          </motion.div>
        ))}

        {/* Moving dots - Reduced on mobile */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ x: -100, y: Math.random() * 100 }}
            animate={{ 
              x: ['0%', '100%', '0%'],
              y: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
            className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-[#D4AF37]/20 rounded-full"
          />
        ))}
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content with Animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Animated badge - Responsive */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6 md:mb-8 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37] mr-2 md:mr-3 animate-pulse" />
              <span className="text-[#D4AF37] font-bold text-sm md:text-lg">ABOUT OUR TEAM</span>
            </motion.div>

            {/* Animated Title - Responsive */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
            >
              We Move{' '}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
              >
                Families
              </motion.span>
              , Not{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity
                }}
                className="text-[#D4AF37] inline-block"
              >
                Furniture
              </motion.span>
            </motion.h2>

            {/* Animated Description - Responsive */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-8 md:mb-12 leading-relaxed"
            >
              At Elvisco, we don't just move boxes—we move lives. Every item we handle represents someone's story, 
              and we treat it with the care and respect it deserves.
            </motion.p>

            {/* Animated Benefits Grid - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37] mr-2 md:mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-white text-xs md:text-sm font-medium truncate">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button for mobile - Stacked layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:hidden text-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={{ 
                  boxShadow: [
                    '0 0 10px rgba(212, 175, 55, 0.3)',
                    '0 0 20px rgba(212, 175, 55, 0.5)',
                    '0 0 10px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base w-full max-w-md mx-auto"
              >
                <span className="flex items-center justify-center">
                  Meet Our Team
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2 md:ml-3"
                  >
                    👥
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Rotating Stat Display - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Stat Card - Responsive padding */}
              <motion.div
                animate={{ 
                  scale: pulse ? 1.01 : 1,
                  boxShadow: pulse 
                    ? '0 0 40px rgba(212, 175, 55, 0.3)' 
                    : '0 0 20px rgba(212, 175, 55, 0.2)'
                }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 text-center relative overflow-hidden"
              >
                {/* Rotating Stat - Responsive text */}
                <motion.div
                  key={activeStat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#0A2540] mb-4 md:mb-6 leading-none">
                    {rotatingStats[activeStat].value}
                  </div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A2540] mb-3 md:mb-4">
                    {rotatingStats[activeStat].label}
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {(() => {
                      const IconComponent = rotatingStats[activeStat].icon;
                      return <IconComponent className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#0A2540] mx-auto" />;
                    })()}
                  </motion.div>
                </motion.div>

                {/* Progress dots - Mobile optimized */}
                <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
                  {rotatingStats.map((_, index) => (
                    <motion.button
                      key={index}
                      animate={{ 
                        scale: activeStat === index ? 1.3 : 1,
                        backgroundColor: activeStat === index ? '#0A2540' : 'rgba(10, 37, 64, 0.5)'
                      }}
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                      style={{
                        backgroundColor: activeStat === index ? '#0A2540' : 'rgba(10, 37, 64, 0.5)'
                      }}
                      onClick={() => {
                        setActiveStat(index);
                        setPulse(true);
                        setTimeout(() => setPulse(false), 500);
                      }}
                      aria-label={`Show stat ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Stats Cards - Repositioned for mobile */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 md:absolute md:-bottom-4 md:-left-4 md:-right-4 md:mt-0">
                {/* Satisfaction Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 md:mb-0 md:mr-0 md:absolute md:-bottom-6 md:-left-6"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-2xl backdrop-blur-sm w-full sm:w-40 md:w-auto"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] mb-1 md:mb-2"
                    >
                      100%
                    </motion.div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold">Satisfaction Guarantee</div>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-500 mt-1 md:mt-2 mx-auto" />
                  </motion.div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-auto sm:ml-4 md:ml-0 md:absolute md:-top-4 md:-right-4"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-2xl text-white w-full sm:w-40 md:w-auto"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -top-2 -right-2 md:-top-3 md:-right-3"
                    >
                      <Award className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-[#D4AF37]" />
                    </motion.div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">7+</div>
                    <div className="text-xs md:text-sm text-white/90 font-semibold">Years Experience</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Features Grid - Mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#D4AF37]/40 transition-all group"
                >
                  {(() => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        animate={feature.animation === 'bounce' ? {
                          y: [0, -5, 0]
                        } : feature.animation === 'pulse' ? {
                          scale: [1, 1.05, 1]
                        } : {}}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 mb-3 md:mb-4"
                      >
                        <IconComponent className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#D4AF37]" />
                      </motion.div>
                    );
                  })()}
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Animation - Hidden on mobile (moved to top) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center pt-4 md:pt-8 hidden lg:block"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={{ 
                  boxShadow: [
                    '0 0 10px rgba(212, 175, 55, 0.3)',
                    '0 0 20px rgba(212, 175, 55, 0.5)',
                    '0 0 10px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg w-full hover:shadow-xl transition-all"
              >
                <span className="flex items-center justify-center">
                  Meet Our Team
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2 md:ml-3"
                  >
                    👥
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating moving truck animation - Mobile optimized */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute bottom-4 md:bottom-10 left-0 text-2xl md:text-4xl opacity-10"
      >
        🚚
      </motion.div>
    </section>
  );
}