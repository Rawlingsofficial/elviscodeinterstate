// File: src/components/sections/Testimonials.tsx
'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Los Angeles → New York',
    content:
      'The move was handled professionally from start to finish. Communication was clear and everything arrived on time.',
  },
  {
    name: 'Michael Chen',
    location: 'Chicago → Miami',
    content:
      'Transparent pricing and careful handling. No surprises, no stress.',
  },
  {
    name: 'Williams Family',
    location: 'Seattle → Austin',
    content:
      'They packed, transported, and delivered everything perfectly. Highly recommended.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
          Trusted by Customers Nationwide
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
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

          {/* Navigation */}
          <div className="absolute -bottom-6 right-8 flex gap-2">
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % testimonials.length)
              }
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex justify-center gap-10 items-center opacity-80">
          <img src="/badges/google.svg" alt="Google Reviews" className="h-8" />
          <img src="/badges/trustpilot.svg" alt="Trustpilot" className="h-8" />
          <img src="/badges/yelp.svg" alt="Yelp" className="h-8" />
        </div>
      </div>
    </section>
  );
}
