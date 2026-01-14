// File: src/components/sections/MiniGallery.tsx
"use client";

import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Home, Building, Package, Truck, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Gallery categories with icons
const galleryCategories = [
  { id: 'residential', label: 'Residential Moves', icon: Home, color: 'text-blue-500' },
  { id: 'commercial', label: 'Commercial Moves', icon: Building, color: 'text-green-500' },
  { id: 'packing', label: 'Packing Process', icon: Package, color: 'text-amber-500' },
  { id: 'fleet', label: 'Our Fleet', icon: Truck, color: 'text-red-500' },
  { id: 'team', label: 'Our Team', icon: Users, color: 'text-purple-500' },
];

// Sample gallery images (you can replace with your actual images)
const galleryImages = {
  residential: [
    { src: '/gallery/residential1.jpeg', alt: 'Residential Move 1' },
    { src: '/gallery/residential2.jpeg', alt: 'Residential Move 2' },
    { src: '/gallery/residential3.jpeg', alt: 'Residential Move 3' },
    { src: '/gallery/residential4.jpeg', alt: 'Residential Move 4' },
    { src: '/gallery/residential5.jpeg', alt: 'Residential Move 5' },
    { src: '/gallery/residential6.jpeg', alt: 'Residential Move 6' },
    { src: '/gallery/residential7.jpeg', alt: 'Residential Move 7' },
  ],
  commercial: [
    { src: '/gallery/commercial1.jpeg', alt: 'Commercial Move 1' },
    { src: '/gallery/commercial2.jpeg', alt: 'Commercial Move 2' },
    { src: '/gallery/commercial3.jpeg', alt: 'Commercial Move 3' },
    { src: '/gallery/commercial4.jpeg', alt: 'Commercial Move 4' },
    { src: '/gallery/commercial5.jpeg', alt: 'Commercial Move 5' },
    { src: '/gallery/commercial6.jpeg', alt: 'Commercial Move 6' },
    { src: '/gallery/commercial7.jpeg', alt: 'Commercial Move 7' },
  ],
  packing: [
    { src: '/gallery/pakaging1.jpeg', alt: 'Packing Process 1' },
    { src: '/gallery/pakaging2.jpeg', alt: 'Packing Process 2' },
    { src: '/gallery/pakaging3.jpeg', alt: 'Packing Process 3' },
    { src: '/gallery/pakaging4.jpeg', alt: 'Packing Process 4' },
    { src: '/gallery/pakaging5.jpeg', alt: 'Packing Process 5' },
    { src: '/gallery/pakaging6.jpeg', alt: 'Packing Process 6' },
    { src: '/gallery/pakaging7.jpeg', alt: 'Packing Process 7' },
  ],
  fleet: [
    { src: '/gallery/fleet.jpeg', alt: 'Our Fleet 1' },
    { src: '/gallery/fleet1.jpeg', alt: 'Our Fleet 2' },
    { src: '/gallery/fleet5.jpeg', alt: 'Our Fleet 3' },
    { src: '/gallery/fleet7.jpeg', alt: 'Our Fleet 4' },
  ],
  team: [
    { src: '/gallery/team.jpeg', alt: 'Our Team 1' },
    { src: '/gallery/team2.jpeg', alt: 'Our Team 2' },
    { src: '/gallery/team3.jpeg', alt: 'Our Team 3' },
  ],
};

export default function MiniGallery() {
  const [selectedCategory, setSelectedCategory] = useState('residential');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = galleryImages[selectedCategory as keyof typeof galleryImages] || [];
  const totalImages = images.length;

  // Auto slide effect
  useEffect(() => {
    if (isHovered || totalImages === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalImages]);

  // Scroll to selected image
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = container.scrollWidth / totalImages;
      container.scrollTo({
        left: currentIndex * imageWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, totalImages]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full text-sm mb-4">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Gallery Preview
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our professional moving services. Scroll through or let it auto-play.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white text-[#0A2540] shadow-sm'
                      : 'text-gray-600 hover:text-[#0A2540]'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${category.color}`} />
                  <span className="text-sm font-medium">{category.label}</span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                    {galleryImages[category.id as keyof typeof galleryImages]?.length || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
            disabled={totalImages === 0}
          >
            <ChevronLeft className="h-5 w-5 text-[#0A2540]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
            disabled={totalImages === 0}
          >
            <ChevronRight className="h-5 w-5 text-[#0A2540]" />
          </button>

          {/* Image Slider */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-4 min-w-max px-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative flex-shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalImages > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#D4AF37] w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* View Full Gallery Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition-colors group"
          >
            <span className="font-medium">View Full Gallery</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-500 text-sm mt-2">
            Browse all {Object.values(galleryImages).flat().length}+ photos
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}



