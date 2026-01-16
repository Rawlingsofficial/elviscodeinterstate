'use client';

import { Rocket, Zap, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  future?: boolean;
}

export default function CompanyHistory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones: Milestone[] = [
    { year: '2019', title: 'Maryland Launch', description: 'Started with 2 trucks', icon: Rocket, color: '#D4AF37' },
    { year: '2021', title: 'Expansion', description: 'Serving all major US cities', icon: Zap, color: '#0A2540' },
    { year: '2023', title: 'National Growth', description: 'Interstate moves started', icon: Target, color: '#D4AF37' },
    { year: '2024', title: 'Industry Recognition', description: '95% customer satisfaction', icon: Star, color: '#0A2540' },
    // Future / Ambitious notes
    { year: '2025+', title: 'Continuous Improvement', description: 'Coming soon...', icon: Zap, color: '#00BFFF', future: true },
    { year: '2026+', title: 'Continuous Improvement', description: 'Coming soon...', icon: Rocket, color: '#00FF7F', future: true },
    { year: '2027+', title: 'Continuous Improvement', description: 'Coming soon...', icon: Star, color: '#FFD700', future: true },
    { year: '2028+', title: 'Continuous Improvement', description: 'Coming soon...', icon: Target, color: '#FF69B4', future: true },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#D4AF37]">Journey</span> & Future Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Explore our past milestones and ambitious future plans.
          </motion.p>
        </div>

        {/* Slideshow Timeline */}
        <div ref={ref} className="relative">
          <div className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="flex-shrink-0 w-80 md:w-96 snap-start relative"
              >
                <div
                  className={`p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col items-center ${
                    milestone.future
                      ? 'bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <div
                    className="p-4 rounded-full mb-4"
                    style={{ background: milestone.color }}
                  >
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${milestone.future ? 'text-white' : ''}`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{milestone.title}</h3>
                  <p className="text-center text-gray-600 mb-4">
                    {milestone.description}
                  </p>
                  {milestone.future && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-white"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rocket Indicator */}
        <div className="flex justify-center mt-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFB347] rounded-full shadow-lg"
          >
            <Rocket className="w-6 h-6 text-white animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
