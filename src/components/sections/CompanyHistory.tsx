// File: src/components/sections/CompanyHistory.tsx
'use client';
import { Award, TrendingUp, Users, Truck, MapPin, Rocket, Star, Zap, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CompanyHistory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const milestones = [
    { 
      year: '2019', 
      title: 'Maryland Launch', 
      description: 'Began with 2 trucks in Dallas-Fort Worth',
      stats: '2 trucks • 3 employees',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-400',
      animation: 'rocket'
    },
    { 
      year: '2021', 
      title: 'Maryland Expansion', 
      description: 'Expanded to serve all major US cities',
      stats: '8 trucks • 12 employees',
      icon: Zap,
      color: 'from-emerald-500 to-teal-400',
      animation: 'zap'
    },
    { 
      year: '2023', 
      title: 'National Growth', 
      description: 'Started interstate moves to neighboring states',
      stats: '15 trucks • 25 employees',
      icon: Target,
      color: 'from-violet-500 to-purple-400',
      animation: 'target'
    },
    { 
      year: '2024', 
      title: 'Industry Recognition', 
      description: '95% customer satisfaction rating achieved',
      stats: '25 trucks • 40 employees',
      icon: Star,
      color: 'from-amber-500 to-orange-400',
      animation: 'star'
    },
  ];

  const stats = [
    { value: '7', label: 'Years Experience', suffix: '+', icon: TrendingUp, delay: 0 },
    { value: '25', label: 'Moving Trucks', suffix: '+', icon: Truck, delay: 0.1 },
    { value: '40', label: 'Team Members', suffix: '+', icon: Users, delay: 0.2 },
    { value: '95', label: 'Satisfaction', suffix: '%', icon: Award, delay: 0.3 },
  ];

  // Rocket animation variants
  const rocketVariants: Variants = {
    hidden: { x: -100, y: 100, rotate: -45, opacity: 0 },
    visible: { 
      x: 0, 
      y: 0, 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Header with floating particles */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          {/* Animated background particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="absolute inset-0 overflow-hidden"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={isInView ? { 
                  y: [0, -20, 0],
                  opacity: [0, 0.3, 0]
                } : {}}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
                style={{
                  left: `${10 + (i * 10)}%`,
                  top: `${30 + (i * 5)}%`
                }}
              />
            ))}
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full text-sm mb-6 relative z-10"
          >
            <Rocket className="h-4 w-4 text-[#D4AF37] mr-2 animate-pulse" />
            <span className="text-[#D4AF37] font-semibold">🚀 7-YEAR JOURNEY</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 relative z-10"
          >
            From <span className="text-[#D4AF37]">Maryland</span> to{' '}
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={isInView ? { backgroundPosition: '100% 50%' } : {}}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-[#0A2540] via-[#D4AF37] to-[#0A2540] bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Nationwide
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 relative z-10"
          >
            Our 7-year rocket-fueled journey to becoming a trusted national moving service
          </motion.p>
        </div>

        {/* Animated Stats with particle effects */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              
              <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <motion.div
                  animate={isInView ? { 
                    rotate: [0, 10, -10, 0],
                  } : {}}
                  transition={{ 
                    delay: stat.delay + 0.5,
                    duration: 0.5
                  }}
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0A2540]/5 to-[#0A2540]/10 mb-4"
                >
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-[#0A2540]" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: stat.delay + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-2"
                >
                  {stat.value}<span className="text-[#D4AF37]">{stat.suffix}</span>
                </motion.div>
                
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Timeline with Rocket Animation */}
        <div ref={ref} className="relative">
          {/* Animated Timeline Rocket Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px md:w-0.5">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full w-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"
            />
            
            {/* Rocket flying along the timeline */}
            <motion.div
              variants={rocketVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: '0%' }}
            >
              <motion.div
                animate={isInView ? {
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                <Rocket className="h-8 w-8 md:h-12 md:w-12 text-[#D4AF37]" />
                {/* Rocket trail */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 0.5 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-l from-[#D4AF37] to-transparent"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Content */}
          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 80
                }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group"
                  >
                    {/* Card Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
                    
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                      {/* Year with animated icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <motion.div
                            animate={isInView ? {
                              rotate: 360
                            } : {}}
                            transition={{
                              delay: index * 0.3 + 0.5,
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className={`p-3 rounded-2xl bg-gradient-to-br ${milestone.color} mr-4`}
                          >
                            <milestone.icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div className="text-3xl font-bold text-[#D4AF37]">{milestone.year}</div>
                        </div>
                        
                        {/* Animated progress indicator */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : {}}
                          transition={{ delay: index * 0.3 + 0.8, duration: 1 }}
                          className="hidden md:block relative w-24 h-2 bg-gray-200 rounded-full overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full`} />
                        </motion.div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-[#0A2540] font-semibold bg-gray-50 px-4 py-2 rounded-lg">
                          {milestone.stats}
                        </div>
                        
                        {/* Animated sparkles */}
                        <motion.div
                          animate={isInView ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          } : {}}
                          transition={{
                            delay: index * 0.3 + 1,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          className="text-[#D4AF37]"
                        >
                          <Star className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot with Animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      delay: index * 0.3 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative"
                  >
                    {/* Pulsing ring effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={isInView ? { 
                        scale: [0, 1.5, 2],
                        opacity: [1, 0.5, 0]
                      } : {}}
                      transition={{
                        delay: index * 0.3 + 0.7,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.color}`}
                    />
                    
                    <div className={`relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${milestone.color} border-4 border-white shadow-2xl flex items-center justify-center`}>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Empty spacer for desktop layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Today & Future Card with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1, 
              delay: 1.8,
              type: "spring",
              stiffness: 100
            }}
            className="mt-32 text-center"
          >
            {/* Animated orbit rings */}
            <div className="relative flex items-center justify-center mb-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { 
                    scale: 1,
                    rotate: 360
                  } : {}}
                  transition={{
                    delay: 2 + (i * 0.2),
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute border border-[#D4AF37]/30 rounded-full"
                  style={{
                    width: `${100 + (i * 80)}px`,
                    height: `${100 + (i * 80)}px`
                  }}
                />
              ))}
              
              <motion.div
                animate={isInView ? {
                  y: [0, -10, 0],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] flex items-center justify-center shadow-2xl">
                  <Rocket className="h-12 w-12 text-[#D4AF37]" />
                </div>
              </motion.div>
            </div>

            <div className="inline-block bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-[#D4AF37]/20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2 }}
                className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center"
              >
                <Zap className="h-8 w-8 text-[#D4AF37] mr-4 animate-pulse" />
                Today & The Future
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.4 }}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                Now serving <span className="text-[#D4AF37] font-bold">80+ cities</span> with the same passion 
                and dedication that launched our journey in 2019.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { value: '80+', label: 'Cities', color: 'from-blue-500 to-cyan-400' },
                  { value: '5K+', label: 'Moves', color: 'from-emerald-500 to-teal-400' },
                  { value: '99%', label: 'On Time', color: 'from-violet-500 to-purple-400' },
                  { value: '24/7', label: 'Support', color: 'from-amber-500 to-orange-400' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}