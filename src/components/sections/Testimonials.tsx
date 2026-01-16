'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AUTO_SCROLL_DELAY = 3000;

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Los Angeles → New York',
    content: 'The entire process was smooth and professional. Everything arrived on time and in perfect condition.',
  },
  {
    name: 'Michael Chen',
    location: 'Chicago → Miami',
    content: 'Clear pricing, excellent communication, and careful handling. Highly recommended.',
  },
  {
    name: 'Williams Family',
    location: 'Seattle → Austin',
    content: 'Moving with kids is stressful, but they made it easy. Great experience.',
  },
  {
    name: 'Jessica Miller',
    location: 'Boston → Denver',
    content: 'Professional team and very responsive. The GPS tracking was a big plus.',
  },
  {
    name: 'Robert Garcia',
    location: 'Office Relocation',
    content: 'They moved our entire office over a weekend without any disruption.',
  },
  {
    name: 'Daniel Wright',
    location: 'Phoenix → San Diego',
    content: 'Efficient, friendly, and reliable. Would absolutely use them again.',
  },
  {
    name: 'Amanda Lewis',
    location: 'Dallas → Atlanta',
    content: 'Packing service was excellent. Everything was labeled and organized.',
  },
  {
    name: 'Chris Patel',
    location: 'San Jose → Portland',
    content: 'No surprises, no delays. Exactly how a moving company should operate.',
  },
  {
    name: 'Emily Thompson',
    location: 'San Diego → Las Vegas',
    content: 'Very professional from booking to delivery. Great customer service.',
  },
  {
    name: 'Mark Robinson',
    location: 'Local Move',
    content: 'Quick, careful, and affordable. Couldn’t ask for more.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setTimeout(() => {
      next();
    }, AUTO_SCROLL_DELAY);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearTimeout(autoScrollRef.current);
    }
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    startAutoScroll();
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
          Trusted by Customers Nationwide
        </h2>

        {/* Slider */}
        <div
          className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                “{testimonials[current].content}”
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#0A2540]">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[current].location}
                  </div>
                </div>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[#D4AF37] fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute right-6 bottom-6 flex gap-2">
            <button
              onClick={prev}
              className="p-2 border rounded-full hover:bg-gray-100 transition"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="p-2 border rounded-full hover:bg-gray-100 transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex justify-center gap-10 items-center opacity-80">
          <img src="/badges/google.svg" alt="Google Reviews" className="h-8" />
          <img src="/badges/trustpilot.svg" alt="Trustpilot" className="h-8" />
          <img src="/badges/yelp.svg" alt="Yelp" className="h-8" />
        </div>
      </div>
    </section>
  );
}
