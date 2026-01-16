// File: src/components/sections/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, bank transfers, PayPal, Zelle, Cash App, and Venmo.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on distance, shipment size, weight, and any additional services requested. All quotes are transparent with no hidden fees.',
  },
  {
    question: 'Are there items you cannot transport?',
    answer:
      'We cannot transport hazardous materials, flammable liquids, perishables, plants, or live animals.',
  },
  {
    question: 'Can I track my move in real time?',
    answer:
      'Yes. We provide real-time GPS tracking so you can monitor your shipment throughout the move.',
  },
  {
    question: 'Do you provide packing materials?',
    answer:
      'Yes, we offer professional-grade packing materials and full packing services if needed.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations are free up to 48 hours before your scheduled move.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Clear answers to common questions about our moving services.
        </p>

        <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-5 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#0A2540]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="tel:+12403532854"
            className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#143a63] transition"
          >
            Speak with our team
          </a>
        </div>
      </div>
    </section>
  );
}
