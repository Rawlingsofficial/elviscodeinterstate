// File: src/app/gallery/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Truck,
  Package,
  Home,
  Building,
  Users,
  MapPin,
  Award,
  Filter,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: Filter, count: 56 },
    { id: 'residential', label: 'Residential Moves', icon: Home, count: 24 },
    { id: 'commercial', label: 'Commercial Moves', icon: Building, count: 18 },
    { id: 'packing', label: 'Packing Process', icon: Package, count: 12 },
    { id: 'team', label: 'Our Team', icon: Users, count: 8 },
    { id: 'equipment', label: 'Our Fleet', icon: Truck, count: 14 }
  ];

  const galleryImages = [
    // Residential Moves
    { id: 1, category: 'residential', title: 'Family Home Relocation', description: 'Complete home move with careful furniture handling' },
    { id: 2, category: 'residential', title: 'Apartment Moving', description: 'Efficient studio apartment relocation' },
    { id: 3, category: 'residential', title: 'Luxury Home Move', description: 'High-end furniture transport and setup' },
    { id: 4, category: 'residential', title: 'Cross-Country Family Move', description: 'Long-distance family relocation service' },
    
    // Commercial Moves
    { id: 5, category: 'commercial', title: 'Office Relocation', description: 'Complete business office move' },
    { id: 6, category: 'commercial', title: 'Medical Equipment Transport', description: 'Specialized medical facility move' },
    { id: 7, category: 'commercial', title: 'Retail Store Move', description: 'Store inventory and fixture relocation' },
    { id: 8, category: 'commercial', title: 'Warehouse Relocation', description: 'Industrial equipment and inventory move' },
    
    // Packing Process
    { id: 9, category: 'packing', title: 'Fragile Item Packing', description: 'Artwork and delicate item protection' },
    { id: 10, category: 'packing', title: 'Professional Packing', description: 'Systematic packing with premium materials' },
    { id: 11, category: 'packing', title: 'Labeling System', description: 'Color-coded labeling for organized unpacking' },
    { id: 12, category: 'packing', title: 'Custom Crating', description: 'Special crating for unique items' },
    
    // Team
    { id: 13, category: 'team', title: 'Moving Team', description: 'Our professional moving crew' },
    { id: 14, category: 'team', title: 'Training Session', description: 'Team training and certification' },
    { id: 15, category: 'team', title: 'Safety Briefing', description: 'Pre-move safety protocols' },
    { id: 16, category: 'team', title: 'Customer Service', description: 'Dedicated support team' },
    
    // Equipment
    { id: 17, category: 'equipment', title: 'Modern Fleet', description: 'GPS-equipped moving trucks' },
    { id: 18, category: 'equipment', title: 'Climate Control', description: 'Temperature-controlled vehicles' },
    { id: 19, category: 'equipment', title: 'Moving Equipment', description: 'Professional moving tools and equipment' },
    { id: 20, category: 'equipment', title: 'Safety Gear', description: 'Protective equipment for safe moving' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Award className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">BEHIND THE SCENES • PREMIUM SERVICE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Take a visual journey through our premium moving services, professional team, 
              and successful relocations across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-lg">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-secondary to-amber-500 text-primary'
                    : 'bg-accent text-primary hover:bg-gray-100'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                <span className="font-semibold">{category.label}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-primary/20 text-primary'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {String(image.id).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Nationwide Service</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                    <button className="mt-4 flex items-center text-secondary font-semibold">
                      <Maximize2 className="h-4 w-4 mr-2" />
                      View Full Size
                    </button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                    {categories.find(c => c.id === image.category)?.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5K+</div>
              <div className="text-gray-600">Successful Moves</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Modern Trucks</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">80+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready for Your Premium Move?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Experience the Elvisco difference with our professional team and premium moving services.
          </p>
          <a
            href="/services/request-quote"
            className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
          >
            Schedule Your Move Today
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <div className="max-w-4xl w-full">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-8xl font-bold text-primary/20 mb-8">
                    {String(filteredImages[selectedImage].id).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-primary font-semibold">
                      {categories.find(c => c.id === filteredImages[selectedImage].category)?.label}
                    </span>
                  </div>
                  <div className="text-primary">
                    {selectedImage + 1} / {filteredImages.length}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-8">
                    This image represents our commitment to excellence in {filteredImages[selectedImage].category} services. 
                    Each photo showcases our professional approach and attention to detail.
                  </p>
                  
                  <a
                    href="/services/request-quote"
                    className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Book Similar Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

