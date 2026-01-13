// File: src/components/sections/FAQ.tsx
'use client';
import { useState } from 'react';
import { ChevronDown, CreditCard, Package, AlertCircle, Map } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards (Visa, MasterCard, American Express), bank transfers, PayPal, Zelle, Cash App, and Venmo for your convenience.',
    icon: CreditCard,
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on distance, size/weight of your shipment, and any additional services requested. We provide transparent quotes with no hidden fees.',
    icon: Package,
  },
  {
    question: 'Are there any items you cannot transport?',
    answer: 'For safety reasons, we cannot transport hazardous materials, flammable liquids, perishable items, plants, or live animals. We provide a detailed list during the quote process.',
    icon: AlertCircle,
  },
  {
    question: 'Can I track my move in real-time?',
    answer: 'Yes! We provide real-time GPS tracking so you can monitor your move every step of the way through our customer portal or mobile app.',
    icon: Map,
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes, we offer premium packing materials as part of our packing service. We can also provide materials separately if you prefer to pack yourself.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel free of charge up to 48 hours before your scheduled move. Within 48 hours, a small fee may apply depending on preparations made.',
  },
  {
    question: 'Are your movers insured and background-checked?',
    answer: 'Absolutely. All our team members undergo thorough background checks and are fully insured. We also carry comprehensive liability insurance for your belongings.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 2-4 weeks in advance for best availability, especially during peak moving seasons (May-September).',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#0A2540]/10 text-[#0A2540] font-semibold rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-[#0A2540]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our moving process, pricing, and policies.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    {faq.icon && (
                      <div className="mr-4">
                        <div className="p-2 bg-[#0A2540]/10 rounded-lg">
                          <faq.icon className="h-5 w-5 text-[#0A2540]" />
                        </div>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-[#0A2540]">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl px-8 py-6 text-white">
              <div>
                <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
                <p className="text-white/80">Our team is here to help 24/7</p>
              </div>
              <a
                href="tel:+1234567890"
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

