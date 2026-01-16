// File: src/components/sections/Services.tsx
"use client";

import { Truck, Home, Building, Package, Warehouse, ArrowRight, CheckCircle, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Residential Moving",
    description: "Complete home relocation with careful handling of all your belongings.",
    color: "from-[#D4AF37] to-amber-500",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Building,
    title: "Commercial Relocation",
    description: "Efficient office moves to minimize downtime and disruption.",
    color: "from-[#0A2540] to-[#1a3a5f]",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Truck,
    title: "Long-Distance Moving",
    description: "Coast-to-coast moving with real-time tracking and updates.",
    color: "from-[#D4AF37] to-amber-500",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Professional packing using premium materials for delicate items.",
    color: "from-[#0A2540] to-[#1a3a5f]",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 15 } },
  hover: { scale: 1.05, y: -5 },
};

export default function Services() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm md:text-base font-semibold text-[#D4AF37] tracking-wider uppercase mb-2 inline-block">
            Premium Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Seamless Moving Solutions
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            From local to long-distance moves, we provide tailored services designed for a stress-free experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${service.color} text-white`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <Link href="/services">
                  <motion.button
                    className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 ${
                      service.color.includes("D4AF37")
                        ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-gray-900 hover:shadow-lg"
                        : "bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white hover:shadow-lg"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-3xl p-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/services/request-quote">
              <motion.button
                className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-gray-900 font-bold px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Speak with Expert
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
