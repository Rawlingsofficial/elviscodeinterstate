"use client";

import { Truck, DollarSign, ShieldCheck, Headphones, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    icon: Truck,
    title: "Reliable Logistics",
    text: "Modern fleet, trained crews, and structured processes that prevent delays and mistakes.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    text: "No hidden fees. Clear quotes. You know exactly what you’re paying for.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    text: "Your belongings are protected with comprehensive coverage from start to finish.",
  },
  {
    icon: Headphones,
    title: "Real Human Support",
    text: "Direct access to our team before, during, and after your move.",
  },
  {
    icon: Clock,
    title: "On-Time Commitment",
    text: "We respect your schedule and deliver within the agreed timeframe.",
  },
  {
    icon: Award,
    title: "Proven Reputation",
    text: "Trusted by families and businesses for consistent, high-quality service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-wide">
            WHY CHOOSE ELVISCO
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mt-4 mb-6">
            Built on trust, not shortcuts
          </h2>

          <p className="text-lg text-gray-600">
            Every move is handled with structure, accountability, and respect for your time and belongings.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-shadow hover:shadow-md"
              >
                <Icon className="h-6 w-6 text-[#D4AF37] mb-4" />

                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-600 text-lg">
            Ready to move with confidence?
          </p>

          <Link
            href="/contact"
            className="bg-[#0A2540] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#143a61] transition"
          >
            Get Your Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
