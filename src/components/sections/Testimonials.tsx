// File: src/components/sections/Testimonials.tsx
'use client';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Los Angeles to New York',
    rating: 5,
    content: 'The team at Elvisco made our cross-country move seamless. They handled everything with care and kept us updated throughout the journey.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    location: 'Chicago to Miami',
    rating: 5,
    content: 'Professional, punctual, and incredibly careful with our belongings. The pricing was transparent with no surprises.',
    avatar: 'MC',
  },
  {
    name: 'The Williams Family',
    location: 'Seattle to Austin',
    rating: 5,
    content: 'Moving with three kids was stressful, but Elvisco handled everything perfectly. Their packing service was worth every penny.',
    avatar: 'WF',
  },
  {
    name: 'Jessica Miller',
    location: 'Boston to Denver',
    rating: 5,
    content: 'The GPS tracking feature gave us peace of mind. We could see exactly where our belongings were at all times.',
    avatar: 'JM',
  },
  {
    name: 'Robert Garcia',
    location: 'Office Relocation',
    rating: 5,
    content: 'They moved our entire office over the weekend with zero downtime. Incredible efficiency and professionalism.',
    avatar: 'RG',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0A2540]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] font-semibold rounded-full text-sm mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#D4AF37]">Customers Say</span>
          </h2>
          <p className="text-xl text-white/80">
            Don't just take our word for it. Here's what families and businesses have to say about their moving experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                  index === current
                    ? 'opacity-100 translate-x-0 z-20'
                    : index < current
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-3xl p-10 shadow-2xl">
                  <Quote className="h-12 w-12 text-[#D4AF37]/20 mb-6" />
                  
                  <div className="flex items-center mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-[#0A2540]">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed italic mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-3 h-0.5 bg-[#D4AF37] mr-2"></div>
                    Verified Customer • Move completed in 2024
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? 'bg-[#D4AF37] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/80">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">A+</div>
              <div className="text-white/80">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Top 10</div>
              <div className="text-white/80">National Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

