"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const images = [
  "/gallery/residential1.jpeg",
  "/gallery/residential2.jpeg",
  "/gallery/commercial1.jpeg",
  "/gallery/commercial2.jpeg",
  "/gallery/packing1.jpeg",
  "/gallery/fleet.jpeg",
  "/gallery/team.jpeg",
];

export default function MiniGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Gentle auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.3;
      container.scrollLeft = scrollAmount;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Real moves. Real crews. Real results.
          </h2>
          <p className="text-gray-600">
            A quick look at our team, our trucks, and the work we do every day.
          </p>
        </motion.div>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[300px] h-[220px] rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                src={src}
                alt="Elvisco Moving Gallery"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/gallery"
            className="inline-block text-[#0A2540] font-semibold hover:underline"
          >
            View full gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
