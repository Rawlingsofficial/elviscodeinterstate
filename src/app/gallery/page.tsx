// File: src/app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package, Truck, Home, Building, Users, Grid } from 'lucide-react';

/* -------------------- Categories -------------------- */
const categories = [
  { id: 'all', label: 'All', icon: Grid },
  { id: 'residential', label: 'Residential Moves', icon: Home },
  { id: 'commercial', label: 'Commercial Moves', icon: Building },
  { id: 'packing', label: 'Packing Process', icon: Package },
  { id: 'team', label: 'Our Team', icon: Users },
  { id: 'fleet', label: 'Our Fleet', icon: Truck },
];

/* -------------------- Types -------------------- */
interface GalleryImage {
  id: string;
  category: string;
  src: string;
  alt: string;
  fallback: string;
}

/* -------------------- Image Builder -------------------- */
const createImageData = (): GalleryImage[] => {
  const images: GalleryImage[] = [];

  /* Residential: residential1.jpeg → residential22.jpeg */
  const residentialImages = Array.from(
    { length: 22 },
    (_, i) => `residential${i + 1}.jpeg`
  );

  residentialImages.forEach((file, i) =>
    images.push({
      id: `residential-${i}`,
      category: 'residential',
      src: `/gallery/${file}`,
      alt: `Residential Move ${i + 1}`,
      fallback:
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    })
  );

  /* Commercial: commercial1.jpeg → commercial7.jpeg */
  const commercialImages = Array.from(
    { length: 7 },
    (_, i) => `commercial${i + 1}.jpeg`
  );

  commercialImages.forEach((file, i) =>
    images.push({
      id: `commercial-${i}`,
      category: 'commercial',
      src: `/gallery/${file}`,
      alt: `Commercial Move ${i + 1}`,
      fallback:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    })
  );

  /* Packing: pakaging1.jpeg → pakaging25.jpeg */
  const packingImages = Array.from(
    { length: 25 },
    (_, i) => `pakaging${i + 1}.jpeg`
  );

  packingImages.forEach((file, i) =>
    images.push({
      id: `packing-${i}`,
      category: 'packing',
      src: `/gallery/${file}`,
      alt: `Packing Process ${i + 1}`,
      fallback:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    })
  );

  /* Team: team1.jpeg → team3.jpeg */
  const teamImages = Array.from(
    { length: 3 },
    (_, i) => `team${i + 1}.jpeg`
  );

  teamImages.forEach((file, i) =>
    images.push({
      id: `team-${i}`,
      category: 'team',
      src: `/gallery/${file}`,
      alt: `Our Team ${i + 1}`,
      fallback:
        'https://images.unsplash.com/photo-1551836026-d5c2c0b4d4a3?auto=format&fit=crop&w=800&q=80',
    })
  );

  /* Fleet: exact filenames */
  const fleetImages = ['fleet.jpeg', 'fleet1.jpeg', 'fleet5.jpeg', 'fleet7.jpeg'];

  fleetImages.forEach((file, i) =>
    images.push({
      id: `fleet-${i}`,
      category: 'fleet',
      src: `/gallery/${file}`,
      alt: `Our Fleet ${i + 1}`,
      fallback:
        'https://images.unsplash.com/photo-1623298317882-8e6a1df0c0c0?auto=format&fit=crop&w=800&q=80',
    })
  );

  return images;
};

/* -------------------- Page -------------------- */
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] =
    useState<{ src: string; alt: string } | null>(null);

  const allImages = createImageData();

  const filteredImages =
    selectedCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const getCategoryCount = (id: string) =>
    id === 'all'
      ? allImages.length
      : allImages.filter((img) => img.category === id).length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-8 bg-white">
        <div className="container-custom px-4">
          <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Gallery</h1>
          <p className="text-gray-600">Professional moving services</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom px-4 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg relative ${
                selectedCategory === cat.id
                  ? 'bg-[#0A2540] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCategoryCount(cat.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container-custom px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setLightboxImage({ src: img.src, alt: img.alt })}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = img.fallback)
              }
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
