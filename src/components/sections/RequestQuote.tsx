// File: src/components/sections/RequestQuote.tsx
"use client";

import { motion } from 'framer-motion';
import { Truck, Phone } from 'lucide-react';
import { useState } from 'react';

export default function RequestQuote() {
  const [selectedSize, setSelectedSize] = useState<string>('1-2 Bed');

  const homeSizes = [
    { label: 'Studio/Apt', value: 'studio' },
    { label: '1-2 Bed', value: '1-2' },
    { label: '3-4 Bed', value: '3-4' },
    { label: '5+ Bed', value: '5+' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full text-sm mb-4">
                GET A QUOTE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
                Ready to Move?
                <br />
                <span className="text-[#D4AF37]">Get Your Free Quote</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out our quick form and get a personalized moving quote in minutes. No hidden fees, just honest pricing.
              </p>
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Prefer to Call?</h4>
                  <p className="text-white/80 text-sm">Speak directly with our moving experts</p>
                </div>
              </div>
              <a 
                href="tel:+1234567890" 
                className="text-2xl font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-3"
              >
                <Truck className="h-6 w-6 text-[#D4AF37]" />
                (555) 123-4567
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-gray-700 font-medium">No commitment required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-gray-700 font-medium">Price match guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-gray-700 font-medium">30-minute response time</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Quick Quote Form</h3>
            
            <form className="space-y-5">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Move Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">From</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">To</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Home Size *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {homeSizes.map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      onClick={() => setSelectedSize(size.value)}
                      className={`py-3 rounded-lg border transition-all ${
                        selectedSize === size.value
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#0A2540] font-medium'
                          : 'border-gray-300 hover:border-gray-400 text-gray-600'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Move Date *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                  placeholder="Any special items or requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold py-4 rounded-lg text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
              >
                Get Free Quote
              </motion.button>

              <p className="text-center text-gray-500 text-xs md:text-sm">
                We'll contact you within 30 minutes. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





