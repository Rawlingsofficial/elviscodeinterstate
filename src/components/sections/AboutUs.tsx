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

  // Human/team animation states
  const teamMembers = [
    { initial: 'M', color: 'from-blue-500 to-cyan-400', role: 'Mover' },
    { initial: 'J', color: 'from-emerald-500 to-teal-400', role: 'Driver' },
    { initial: 'S', color: 'from-violet-500 to-purple-400', role: 'Packer' },
    { initial: 'R', color: 'from-amber-500 to-orange-400', role: 'Coordinator' },
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
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0d2c4f] to-[#0A2540]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating human silhouettes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [100, -100, 100],
              opacity: [0, 0.1, 0],
              x: Math.sin(i) * 50
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute text-white/5"
            style={{
              left: `${20 + (i * 15)}%`,
              fontSize: '8rem'
            }}
          >
            👤
          </motion.div>
        ))}

        {/* Moving dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ x: -100, y: Math.random() * 100 }}
            animate={{ 
              x: ['0%', '100%', '0%'],
              y: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content with Animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-[#D4AF37] mr-3 animate-pulse" />
              <span className="text-[#D4AF37] font-bold text-lg">ABOUT OUR TEAM</span>
            </motion.div>

            {/* Animated Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
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
                className="bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Families
              </motion.span>
              , Not{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity
                }}
                className="text-[#D4AF37]"
              >
                Furniture
              </motion.span>
            </motion.h2>

            {/* Animated Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl text-white/80 mb-12 leading-relaxed"
            >
              At Elvisco, we don't just move boxes—we move lives. Every item we handle represents someone's story, 
              and we treat it with the care and respect it deserves.
            </motion.p>

            {/* Animated Human Team Display */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-[#D4AF37] mr-4" />
                <h3 className="text-2xl font-bold text-white">Meet Our Moving Family</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.8 + (index * 0.1)
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white/20 group-hover:border-white/40 transition-all`}>
                      {member.initial}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm text-white bg-black/50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {member.role}
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Plus more indicator */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-white/60 text-2xl font-bold border-2 border-dashed border-white/20 backdrop-blur-sm cursor-pointer group"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full rounded-2xl border border-[#D4AF37]/30"
                  />
                  <span className="relative">40+</span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/70">
                    Team Members
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Benefits Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Rotating Stat Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Stat Card */}
              <motion.div
                animate={{ 
                  scale: pulse ? 1.02 : 1,
                  boxShadow: pulse 
                    ? '0 0 60px rgba(212, 175, 55, 0.3)' 
                    : '0 0 30px rgba(212, 175, 55, 0.2)'
                }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-3xl p-12 text-center relative overflow-hidden"
              >
                {/* Animated background pattern - FIXED SVG URL */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 opacity-10"
                >
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '60px 60px'
                    }}
                  />
                </motion.div>

                {/* Rotating Stat */}
                <motion.div
                  key={activeStat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="text-9xl font-black text-[#0A2540] mb-6 leading-none">
                    {rotatingStats[activeStat].value}
                  </div>
                  <div className="text-2xl font-bold text-[#0A2540] mb-4">
                    {rotatingStats[activeStat].label}
                  </div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {(() => {
                      const IconComponent = rotatingStats[activeStat].icon;
                      return <IconComponent className="h-12 w-12 text-[#0A2540] mx-auto" />;
                    })()}
                  </motion.div>
                </motion.div>

                {/* Progress dots */}
                <div className="flex justify-center space-x-3 mt-8">
                  {rotatingStats.map((_, index) => (
                    <motion.div
                      key={index}
                      animate={{ 
                        scale: activeStat === index ? 1.5 : 1,
                        backgroundColor: activeStat === index ? '#0A2540' : 'rgba(10, 37, 64, 0.5)'
                      }}
                      className="w-3 h-3 rounded-full cursor-pointer"
                      style={{
                        backgroundColor: activeStat === index ? '#0A2540' : 'rgba(10, 37, 64, 0.5)'
                      }}
                      onClick={() => {
                        setActiveStat(index);
                        setPulse(true);
                        setTimeout(() => setPulse(false), 500);
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                    className="text-4xl font-black text-[#0A2540] mb-2"
                  >
                    100%
                  </motion.div>
                  <div className="text-gray-700 font-semibold">Satisfaction Guarantee</div>
                  <Heart className="h-5 w-5 text-red-500 mt-2 mx-auto" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl p-6 shadow-2xl text-white"
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
                    className="absolute -top-3 -right-3"
                  >
                    <Award className="h-8 w-8 text-[#D4AF37]" />
                  </motion.div>
                  <div className="text-4xl font-black mb-2">7+</div>
                  <div className="text-white/90 font-semibold">Years Experience</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all group"
                >
                  {(() => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        animate={feature.animation === 'bounce' ? {
                          y: [0, -10, 0]
                        } : feature.animation === 'pulse' ? {
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 mb-4"
                      >
                        <IconComponent className="h-6 w-6 text-[#D4AF37]" />
                      </motion.div>
                    );
                  })()}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 40px rgba(212, 175, 55, 0.5)',
                    '0 0 20px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-10 py-4 rounded-full text-lg w-full hover:shadow-2xl transition-all"
              >
                <span className="flex items-center justify-center">
                  Meet Our Team
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-3"
                  >
                    👥
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating moving truck animation */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-0 text-4xl opacity-10"
      >
        🚚
      </motion.div>
    </section>
  );
}

