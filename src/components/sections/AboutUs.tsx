// File: src/components/sections/AboutUs.tsx
import { CheckCircle, Package, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-24 bg-[#0A2540]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] font-semibold rounded-full text-sm mb-6">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Moving With <span className="text-[#D4AF37]">Care</span> & <span className="text-[#D4AF37]">Precision</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              At Elvisco De Interstate, we provide reliable, affordable, and careful moving services across the U.S., 
              making every move stress-free while personally handling your belongings with attention and care.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                    <Package className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Professional Packing</h3>
                  <p className="text-white/70">
                    We pack your items carefully using premium materials to ensure they arrive safely.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                    <Calendar className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pre-Move Planning</h3>
                  <p className="text-white/70">
                    We help you plan every step with detailed checklists and timelines for a smooth move.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-white">Background-Checked Team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-white">GPS Tracking</span>
              </div>
            </div>
          </div>
          
          {/* Right Image/Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#D4AF37] to-amber-200 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-8xl font-bold text-[#0A2540]/90 mb-4">80+</div>
                  <div className="text-2xl font-bold text-[#0A2540]">Years Combined Experience</div>
                  <p className="text-[#0A2540]/70 mt-4">Our team brings decades of expertise to every move</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-bold text-[#0A2540] mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-white/90">Successful Moves</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

