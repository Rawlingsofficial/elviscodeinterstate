// File: src/components/Footer/page.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, Truck, Award, Facebook, Instagram, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

// Custom X (Twitter) icon component
const XIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom TikTok icon component
const TikTokIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const services = [
    'Residential Moving', 'Commercial Relocation', 'Long-Distance Moving', 'Packing Services',
    'Storage Solutions', 'Vehicle Shipping', 'International Moving', 'Specialty Item Handling'
  ];
  
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Company History', path: '/about/history' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      label: 'Facebook', 
      href: 'https://facebook.com/elviscointerstate', 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/elviscointerstatemovers?igsh=MWViMmx5M3N6ZnZhZQ%3D%3D&utm_source=qr', 
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    { 
      icon: XIcon, 
      label: 'X (Twitter)', 
      href: 'https://x.com/bestmoverllc?s=21', 
      color: 'text-gray-300',
      bgColor: 'bg-gray-500/10'
    },
    { 
      icon: TikTokIcon, 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@elviscointerstatemovers0', 
      color: 'text-white',
      bgColor: 'bg-black/20'
    },
  ];

  return (
    <footer className="bg-[#0A2540] text-white relative overflow-hidden border-t border-[#D4AF37]/10">
      {/* Accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="container-custom px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10">
          {/* Brand Column - Minimalist logo */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col items-start space-y-4">
              <Link href="/" className="group">
                <div className="relative transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-16 w-64">
                    <Image
                      src="/logo.svg"
                      alt="Elvisco De Interstate"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 256px, 256px"
                    />
                  </div>
                </div>
              </Link>
              
              <div className="space-y-2">
                <p className="text-white/90 text-sm leading-relaxed">
                  Premium moving services with uncompromising quality and attention to detail.
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37] mr-2"></div>
                    <span className="text-xs font-medium">Licensed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37] mr-2"></div>
                    <span className="text-xs font-medium">Insured</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#D4AF37] mr-2"></div>
                    <span className="text-xs font-medium">A+ Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <p className="text-white/70 text-sm font-medium mb-3">Connect</p>
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-lg ${social.bgColor} border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:scale-105 ${social.color}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-4 text-white flex items-center">
              <Truck className="h-4 w-4 mr-2 text-[#D4AF37]" />
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="flex items-center text-white/70 hover:text-white text-sm transition-colors group py-1.5"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-[#D4AF37]/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-4 text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="flex items-center text-white/70 hover:text-white text-sm transition-colors group py-1.5"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-[#D4AF37]/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-base font-semibold mb-4 text-white">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="p-1.5 rounded bg-[#D4AF37]/10 mr-3 flex-shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs">Address</p>
                    <p className="text-white text-sm mt-0.5">5920 Somerset Rd<br />Riverdale, MD 20737</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1.5 rounded bg-[#D4AF37]/10 mr-3 flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs">Phone</p>
                    <a href="tel:+12403532854" className="text-white text-sm font-medium hover:text-[#D4AF37] transition-colors mt-0.5 block">
                      +1 (240) 353-2854
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1.5 rounded bg-[#D4AF37]/10 mr-3 flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs">Email</p>
                    <a href="mailto:info@elviscodeinterstate.com" className="text-white text-sm hover:text-[#D4AF37] transition-colors mt-0.5 block">
                      info@elviscodeinterstate.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/services/request-quote" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-semibold px-5 py-2.5 rounded-lg text-sm hover:shadow-lg transition-all duration-300 group w-full"
            >
              <span className="flex items-center">
                GET FREE QUOTE
                <svg className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Trust Badges - Minimalist */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-xs">
                © {new Date().getFullYear()} Elvisco De Interstate. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                USDOT #: MC-123456 • Fully Licensed & Insured
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-3.5 w-3.5 text-green-400" />
                <span className="text-white/70 text-xs">Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-white/70 text-xs">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-white/70 text-xs">Award Winning</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link 
                href="/privacy" 
                className="text-white/60 hover:text-[#D4AF37] text-xs transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-white/60 hover:text-[#D4AF37] text-xs transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/sitemap" 
                className="text-white/60 hover:text-[#D4AF37] text-xs transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Hours note */}
        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <Clock className="h-3 w-3 text-[#D4AF37] mr-2" />
              <span className="text-white/60 text-xs">24/7 Emergency Moving Services Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




