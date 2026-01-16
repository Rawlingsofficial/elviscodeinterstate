// File: src/components/sections/WhyChooseUs.tsx
"use client";

import { Rocket, DollarSign, Shield, Headphones, Clock, Award } from 'lucide-react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

const features = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'We ensure your belongings reach their destination quickly and efficiently, without delays.',
    gradient: 'from-blue-500 to-cyan-400',
    stats: '98% on-time delivery',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Quality moving services that fit your budget, no hidden fees, just fair pricing.',
    gradient: 'from-emerald-500 to-teal-400',
    stats: '30% lower than competitors',
  },
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Your items are handled with care from start to finish, ensuring they arrive safely.',
    gradient: 'from-violet-500 to-purple-400',
    stats: '99.9% safe delivery rate',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service to address your concerns anytime during the move.',
    gradient: 'from-amber-500 to-orange-400',
    stats: '2 min avg response time',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description: 'We guarantee delivery within the promised timeframe or you get a discount.',
    gradient: 'from-rose-500 to-pink-400',
    stats: '100% money-back guarantee',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as top movers in customer satisfaction and service excellence.',
    gradient: 'from-[#D4AF37] to-amber-400',
    stats: '5-star rated service',
  },
];

// Animation Variants
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
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
    }
  },
};

const floatingVariants: Variants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const gradientTextVariants: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    }
  },
};

const cardVariants: Variants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  hover: { 
    scale: 1.02,
    y: -5,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    }
  },
};

const underlineVariants: Variants = {
  rest: { width: 0 },
  hover: { 
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Floating particles data
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${(i * 7 + 10) % 100}%`,
    top: `${(i * 10 + 20) % 100}%`,
    delay: i * 0.2,
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8F9FA] to-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#D4AF37]/5 to-amber-500/5 rounded-full blur-3xl" />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            variants={floatingVariants}
            animate="float"
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-[#D4AF37]/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="inline-block mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 text-[#D4AF37] font-semibold rounded-full text-sm md:text-base tracking-wider border border-[#D4AF37]/20">
              ✨ WHY CHOOSE US ✨
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4">
            <span className="block mb-2">Premium Moving</span>
            <motion.span 
              className="text-[#0A2540] bg-gradient-to-r from-[#0A2540] via-[#1D4ED8] to-[#0A2540] bg-clip-text text-transparent bg-[length:200%_auto] inline-block"
              variants={gradientTextVariants}
              animate="animate"
            >
              Experience Excellence
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We combine cutting-edge logistics with meticulous care to deliver moving experiences that redefine industry standards.
          </motion.p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border border-gray-200/50 overflow-hidden"
              >
                {/* Gradient Border Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent, transparent), 
                                linear-gradient(135deg, ${feature.gradient.includes('from-blue-500') ? '#3b82f6' : 
                                 feature.gradient.includes('from-emerald-500') ? '#10b981' :
                                 feature.gradient.includes('from-violet-500') ? '#8b5cf6' :
                                 feature.gradient.includes('from-amber-500') ? '#f59e0b' :
                                 feature.gradient.includes('from-rose-500') ? '#f43f5e' : '#D4AF37'}, 
                                ${feature.gradient.includes('to-cyan-400') ? '#22d3ee' :
                                 feature.gradient.includes('to-teal-400') ? '#2dd4bf' :
                                 feature.gradient.includes('to-purple-400') ? '#c084fc' :
                                 feature.gradient.includes('to-orange-400') ? '#fb923c' :
                                 feature.gradient.includes('to-pink-400') ? '#f472b6' : '#fbbf24'})`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: '1px',
                  }}
                />
                
                {/* Icon Section */}
                <div className="relative mb-6 md:mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <motion.div 
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`relative inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                  >
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
                  </motion.div>
                </div>
                
                {/* Title with Animated Underline */}
                <div className="relative mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 inline-block">
                    {feature.title}
                  </h3>
                  <motion.div 
                    variants={underlineVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  />
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Stats Badge */}
                <motion.div 
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-50 rounded-full border border-gray-200 mb-5 md:mb-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-2"
                    style={{ 
                      background: feature.gradient.includes('from-blue-500') ? 'linear-gradient(135deg, #3b82f6, #22d3ee)' :
                                 feature.gradient.includes('from-emerald-500') ? 'linear-gradient(135deg, #10b981, #2dd4bf)' :
                                 feature.gradient.includes('from-violet-500') ? 'linear-gradient(135deg, #8b5cf6, #c084fc)' :
                                 feature.gradient.includes('from-amber-500') ? 'linear-gradient(135deg, #f59e0b, #fb923c)' :
                                 feature.gradient.includes('from-rose-500') ? 'linear-gradient(135deg, #f43f5e, #f472b6)' :
                                 'linear-gradient(135deg, #D4AF37, #fbbf24)'
                    }}
                  />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    {feature.stats}
                  </span>
                </motion.div>
                
                {/* Learn More Button */}
                <motion.button 
                  className="flex items-center justify-between w-full text-sm md:text-base font-semibold px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span 
                    className="text-gray-700 group-hover:text-transparent group-hover:bg-clip-text"
                    style={{ 
                      backgroundImage: feature.gradient.includes('from-blue-500') ? 'linear-gradient(135deg, #3b82f6, #22d3ee)' :
                                     feature.gradient.includes('from-emerald-500') ? 'linear-gradient(135deg, #10b981, #2dd4bf)' :
                                     feature.gradient.includes('from-violet-500') ? 'linear-gradient(135deg, #8b5cf6, #c084fc)' :
                                     feature.gradient.includes('from-amber-500') ? 'linear-gradient(135deg, #f59e0b, #fb923c)' :
                                     feature.gradient.includes('from-rose-500') ? 'linear-gradient(135deg, #f43f5e, #f472b6)' :
                                     'linear-gradient(135deg, #D4AF37, #fbbf24)'
                    }}
                  >
                    Discover More
                  </span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 ml-3 text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Changed from "Start Your Premium Journey" to "Contact Us" */}
        <motion.div 
          className="mt-16 md:mt-20 lg:mt-24 text-center px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="/contact">
            <motion.button 
              className="relative px-6 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-[#0A2540] via-[#1D4ED8] to-[#0A2540] text-white font-bold rounded-xl md:rounded-2xl text-base md:text-lg lg:text-xl shadow-xl overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -15px rgba(10, 37, 64, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundSize: "200% 200%" }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Contact Us
                <motion.svg 
                  className="w-5 h-5 md:w-6 md:h-6 ml-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </Link>
          
          <motion.p 
            className="mt-4 md:mt-6 text-gray-500 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Get in touch for a personalized moving consultation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}