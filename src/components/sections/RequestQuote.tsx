// File: src/components/sections/RequestQuote.tsx
import { Calculator, Clock, ShieldCheck, Truck } from 'lucide-react';

export default function RequestQuote() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full text-sm mb-6">
              GET STARTED
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Request a <span className="text-[#0A2540]">Free Quote</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Get a personalized moving quote in minutes. Our transparent pricing means no surprises, 
              just fair rates for premium service.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-[#0A2540]/10 rounded-xl">
                    <Calculator className="h-6 w-6 text-[#0A2540]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A2540] mb-2">Instant Estimates</h4>
                  <p className="text-gray-600">Get a detailed quote based on your specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-[#0A2540]/10 rounded-xl">
                    <Clock className="h-6 w-6 text-[#0A2540]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A2540] mb-2">No Commitment</h4>
                  <p className="text-gray-600">Get your quote with no obligation to book</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-[#0A2540]/10 rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-[#0A2540]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A2540] mb-2">Price Match Guarantee</h4>
                  <p className="text-gray-600">We'll match any legitimate competitor quote</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-[#D4AF37] mr-4" />
                <h4 className="text-2xl font-bold">Need Immediate Assistance?</h4>
              </div>
              <p className="text-white/90 mb-6">Call us now for urgent moving requests or last-minute bookings</p>
              <a href="tel:+1234567890" className="text-2xl font-bold hover:text-[#D4AF37] transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-8">Get Your Custom Quote</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Move Date *</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Moving From *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="City, State"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Moving To *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Home Size *</label>
                <div className="grid grid-cols-4 gap-3">
                  {['Studio', '1-2 Bed', '3-4 Bed', '5+ Bed'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="py-3 rounded-xl border border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all text-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Additional Services</label>
                <div className="space-y-3">
                  {['Packing Service', 'Storage', 'Furniture Assembly', 'Vehicle Shipping'].map((service) => (
                    <label key={service} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]/20 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Special Instructions</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                  placeholder="Any special items or requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold py-4 rounded-xl text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
              >
                Get My Free Quote
              </button>
              
              <p className="text-center text-gray-500 text-sm">
                By submitting, you agree to our Privacy Policy. We'll contact you within 30 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

