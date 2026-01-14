// File: src/components/Footer/page.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, Truck, Award, Facebook, Instagram, Twitter, Youtube, Linkedin, Sparkles, Star } from 'lucide-react';

export default function Footer() {
  const services = [
    'Residential Moving', 'Commercial Relocation', 'Long-Distance Moving', 'Packing Services',
    'Storage Solutions', 'Vehicle Shipping', 'International Moving', 'Specialty Item Handling'
  ];
  const companyLinks = ['About Us', 'Company History', 'Careers', 'Blog', 'FAQ', 'Testimonials'];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', color: 'text-blue-500' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: 'text-pink-500' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'text-blue-600' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com', color: 'text-red-500' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A2540] to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column - Premium */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#D4AF37] via-amber-300 to-[#D4AF37] flex items-center justify-center font-bold text-[#0A2540] text-3xl border-4 border-white/20 shadow-2xl">
                  E
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
                  Elvisco
                </h2>
                <div className="flex items-center">
                  <p className="text-[#D4AF37] text-lg font-semibold">De Interstate</p>
                  <Star className="h-4 w-4 text-yellow-400 ml-2 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
              Providing <span className="text-[#D4AF37] font-semibold">premium moving services</span> across the U.S. with uncompromising quality, reliability, and personal attention to detail.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Shield className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Award className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-sm font-medium">A+ Rated</span>
              </div>
            </div>
          </div>

          {/* Services Links - Premium */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center pb-3 border-b border-[#D4AF37]/30">
              <Truck className="h-6 w-6 mr-3 text-[#D4AF37]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Our Services
              </span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service} className="group">
                  <Link 
                    href="/services" 
                    className="flex items-center text-white/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - Premium */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white pb-3 border-b border-[#D4AF37]/30">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link} className="group">
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center text-white/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Premium with updated info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white pb-3 border-b border-[#D4AF37]/30">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Contact Us
              </span>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Address</p>
                  <p className="text-white text-sm mt-1">5920 Somerset Rd<br />Riverdale, MD 20737</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Phone</p>
                  <a href="tel:+12403532854" className="text-white text-sm font-semibold hover:text-[#D4AF37] transition-colors mt-1 block">
                    +1 (240) 353-2854
                  </a>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Email</p>
                  <a href="mailto:info@elviscodeinterstate.com" className="text-white text-sm hover:text-[#D4AF37] transition-colors mt-1 block">
                    info@elviscodeinterstate.com
                  </a>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 mr-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Hours</p>
                  <p className="text-white text-sm mt-1">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>

            {/* Social Media - Premium */}
            <div>
              <p className="text-white/80 text-sm font-medium mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button - Premium */}
            <Link 
              href="/services/request-quote" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] bg-[length:200%_auto] text-[#0A2540] font-bold px-8 py-3.5 rounded-full text-sm hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 hover:bg-right group w-full"
            >
              <span className="flex items-center">
                GET FREE QUOTE
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Premium */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Elvisco De Interstate. All rights reserved.
            </p>
            <p className="text-white/50 text-xs mt-1">
              USDOT #: MC-123456 • Fully Licensed & Insured
            </p>
          </div>
          
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/terms" 
              className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white/70 text-xs">BBB Accredited</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Shield className="h-4 w-4 text-blue-400" />
            </div>
            <span className="text-white/70 text-xs">Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Star className="h-4 w-4 text-amber-400" />
            </div>
            <span className="text-white/70 text-xs">5-Star Rated</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Award className="h-4 w-4 text-purple-400" />
            </div>
            <span className="text-white/70 text-xs">Award Winning</span>
          </div>
        </div>
      </div>
    </footer>
  );
}