"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A2540] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600881331365-16d4d6e89d5b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 to-[#0A2540]/95" />

      {/* Content */}
      <div className="container-custom relative z-10 px-4 pt-24">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-white text-sm">
              Licensed • Insured • Nationwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Professional moving services
            <br />
            <span className="text-[#D4AF37]">you can trust</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
          >
            From local moves to long-distance relocations, Elvisco delivers
            reliable, insured, and stress-free moving solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/services/request-quote"
              className="bg-[#D4AF37] text-[#0A2540] font-semibold px-8 py-4 rounded-lg text-lg text-center hover:bg-amber-500 transition"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg text-center hover:bg-white/10 transition"
            >
              Speak with a Specialist
            </Link>
          </motion.div>

          {/* Proof Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-current" />
              ))}
              <span className="text-sm">5.0 Customer Rating</span>
            </div>

            <span className="hidden sm:block">•</span>

            <span className="text-sm">1,000+ Successful Moves</span>

            <span className="hidden sm:block">•</span>

            <span className="text-sm">24/7 Support</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


