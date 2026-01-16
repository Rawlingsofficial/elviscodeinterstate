// File: src/app/quote-submitted/page.tsx
'use client';

import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export default function QuoteSubmittedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom py-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-[#0A2540] mb-4">
              Quote Request Submitted!
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Thank you for choosing <span className="text-[#D4AF37] font-semibold">Elvisco De Interstate</span>. 
              We have received your request and our team is already working on preparing your personalized quote.
            </p>
            
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl border p-6 mb-8">
              <h2 className="text-xl font-bold text-[#0A2540] mb-4">What Happens Next</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0A2540]">Within 30 minutes</h3>
                    <p className="text-gray-600 text-sm">Our moving expert will review your request</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0A2540]">Within 1 hour</h3>
                    <p className="text-gray-600 text-sm">We'll contact you to confirm details</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0A2540]">Within 4 hours</h3>
                    <p className="text-gray-600 text-sm">You'll receive a detailed, transparent quote via email</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:2403532854"
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: (240) 353-2854
              </a>
              
              <a
                href="mailto:info@elviscodeinterstate.com"
                className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white font-bold px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
            
            <div className="space-y-4">
              <Link
                href="/"
                className="block w-full px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-bold rounded-xl hover:bg-[#0A2540]/5 transition-all duration-300"
              >
                Return to Homepage
              </Link>
              
              <p className="text-gray-500 text-sm">
                Need help? Our team is available 24/7 at{' '}
                <a href="tel:2403532854" className="text-[#D4AF37] hover:underline">
                  (240) 353-2854
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

