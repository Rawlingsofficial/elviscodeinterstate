'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Truck, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  }),
} as any;

export default function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A2540] to-[#0d2c4f] text-white overflow-hidden">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <motion.span
            className="inline-block mb-4 text-[#D4AF37] font-semibold tracking-wide"
            whileHover={{ letterSpacing: '0.08em' }}
            transition={{ duration: 0.3 }}
          >
            ABOUT US
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Moving with care, clarity, and confidence
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Elvisco is built on trust. From family relocations to commercial moves,
            we focus on reliability, communication, and respect for what matters most.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: '1,000+', label: 'Homes Moved' },
            { value: '500+', label: 'Businesses' },
            { value: '7+', label: 'Years Experience' },
            { value: '100%', label: 'Insured Moves' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="text-3xl font-bold text-[#D4AF37] mb-1 transition-colors group-hover:text-amber-400">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Shield,
              title: 'Fully Insured & Licensed',
              text: 'Every move is protected with full liability coverage and strict safety standards.',
            },
            {
              icon: Users,
              title: 'Professional Team',
              text: 'Background-checked movers trained to handle your belongings with care.',
            },
            {
              icon: Truck,
              title: 'Reliable Logistics',
              text: 'Modern fleet, GPS tracking, and clear scheduling—no guesswork.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 transition-shadow hover:shadow-lg hover:shadow-[#D4AF37]/10"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent, rgba(212,175,55,0.08), transparent)',
                  }}
                />

                <Icon className="h-6 w-6 text-[#D4AF37] mb-4 relative z-10" />
                <h3 className="font-semibold text-lg mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed relative z-10">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 flex items-center justify-between flex-col md:flex-row gap-6"
        >
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
            Transparent pricing • No surprises • Real support
          </div>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition"
          >
            Speak with our team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
