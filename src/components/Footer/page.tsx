// File: src/components/Footer/page.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, Truck, Award, Facebook, Instagram, Sparkles, Star } from 'lucide-react';
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

  // Updated with your actual social media links
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
    <footer className="bg-gradient-to-b from-[#0A2540] to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column - Updated with logo2.png on white background */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <Link href="/" className="relative group">
                {/* White background container */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/20 mb-4">
                  <div className="relative h-32 w-80">
                    <Image
                      src="/logo2.png"
                      alt="Elvisco De Interstate Logo with Company Name"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 320px, 320px"
                      style={{ 
                        maxHeight: '100%',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                </div>
              </Link>
              
              {/* Company tagline below the logo */}
              <div className="text-center w-full">
                <p className="text-white text-sm font-medium mb-1">Elvisco De Interstate</p>
                <p className="text-[#D4AF37] text-xs font-semibold">Premium Moving Services Nationwide</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
              Providing <span className="text-[#D4AF37] font-semibold">premium moving services</span> across the U.S. with uncompromising quality, reliability, and personal attention to detail.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Shield className="h-4 w-4 text-[#D4AF37] mr-2" />
                <span className="text-xs md:text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Award className="h-4 w-4 text-[#D4AF37] mr-2" />
                <span className="text-xs md:text-sm font-medium">A+ Rated</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white flex items-center pb-3 border-b border-[#D4AF37]/30">
              <Truck className="h-5 w-5 md:h-6 md:w-6 mr-3 text-[#D4AF37]" />
              <span className="text-white">Our Services</span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="flex items-center text-white/70 hover:text-white text-xs md:text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white pb-3 border-b border-[#D4AF37]/30">
              <span className="text-white">Quick Links</span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="flex items-center text-white/70 hover:text-white text-xs md:text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white pb-3 border-b border-[#D4AF37]/30">
              <span className="text-white">Contact Us</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-3 flex-shrink-0">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">Address</p>
                  <p className="text-white text-xs md:text-sm mt-1">5920 Somerset Rd<br />Riverdale, MD 20737</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-3 flex-shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">Phone</p>
                  <a href="tel:+12403532854" className="text-white text-xs md:text-sm font-semibold hover:text-[#D4AF37] transition-colors mt-1 block">
                    +1 (240) 353-2854
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-3 flex-shrink-0">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">Email</p>
                  <a href="mailto:info@elviscodeinterstate.com" className="text-white text-xs md:text-sm hover:text-[#D4AF37] transition-colors mt-1 block">
                    info@elviscodeinterstate.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-3 flex-shrink-0">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">Hours</p>
                  <p className="text-white text-xs md:text-sm mt-1">24/7 Emergency Service</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white/80 text-xs md:text-sm font-medium mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${social.bgColor} hover:bg-white/20 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/services/request-quote" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-full text-xs md:text-sm hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group w-full"
            >
              <span className="flex items-center">
                GET FREE QUOTE
                <svg className="w-3 h-3 md:w-4 md:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-xs md:text-sm">
              © {new Date().getFullYear()} Elvisco De Interstate. All rights reserved.
            </p>
            <p className="text-white/50 text-xs mt-1">
              USDOT #: MC-123456 • Fully Licensed & Insured
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-white/60 hover:text-[#D4AF37] text-xs md:text-sm transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/terms" 
              className="text-white/60 hover:text-[#D4AF37] text-xs md:text-sm transition-colors relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/sitemap" 
              className="text-white/60 hover:text-[#D4AF37] text-xs md:text-sm transition-colors relative group"
            >
              Sitemap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="h-3 w-3 md:h-4 md:w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white/70 text-xs">BBB Accredited</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Shield className="h-3 w-3 md:h-4 md:w-4 text-blue-400" />
            </div>
            <span className="text-white/70 text-xs">Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Star className="h-3 w-3 md:h-4 md:w-4 text-amber-400" />
            </div>
            <span className="text-white/70 text-xs">5-Star Rated</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Award className="h-3 w-3 md:h-4 md:w-4 text-purple-400" />
            </div>
            <span className="text-white/70 text-xs">Award Winning</span>
          </div>
        </div>
      </div>
    </footer>
  );
}