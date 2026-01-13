// File: src/components/Footer/page.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, Truck, Award } from 'lucide-react';

export default function Footer() {
  const services = [
    'Residential Moving', 'Commercial Relocation', 'Long-Distance Moving', 'Packing Services',
    'Storage Solutions', 'Vehicle Shipping', 'International Moving', 'Specialty Item Handling'
  ];
  const companyLinks = ['About Us', 'Company History', 'Careers', 'Blog', 'FAQ', 'Testimonials'];

  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-200 flex items-center justify-center font-bold text-[#0A2540] text-2xl border-3 border-white/20">
                E
              </div>
              <div>
                <h2 className="text-2xl font-bold">Elvisco</h2>
                <p className="text-[#D4AF37] text-sm font-medium">De Interstate</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Providing reliable, affordable, and careful moving services across the U.S., making every move stress-free with personal attention.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-[#D4AF37] mr-2" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              <Truck className="h-5 w-5 mr-2 text-[#D4AF37]" /> Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-white/70 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">123 Interstate Drive, Suite 100<br />Los Angeles, CA 90001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors">(123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                <a href="mailto:info@elviscodeinterstate.com" className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors">info@elviscodeinterstate.com</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">Mon-Sun: 24/7 Support</span>
              </div>
            </div>
            {/* CTA Button */}
            <Link href="/services/request-quote" className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 w-full">
              REQUEST A FREE QUOTE
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Elvisco De Interstate. All rights reserved. | USDOT #: MC-123456
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-white/60 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



// File: src/components/Header/page.tsx