// File: src/components/Header/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Truck, Shield, Clock, Package, Workflow, GalleryVertical, Users, Target } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      icon: Truck,
      submenu: [
        { name: 'Residential Moving', href: '/services/residential', icon: Truck },
        { name: 'Commercial Relocation', href: '/services/commercial', icon: Truck },
        { name: 'Long Distance Moving', href: '/services/long-distance', icon: Truck },
        { name: 'Packing Services', href: '/services/packing', icon: Package },
        { name: 'Storage Solutions', href: '/services/storage', icon: Package },
        { name: 'Vehicle Shipping', href: '/services/vehicle', icon: Truck },
      ]
    },
    { 
      name: 'Process', 
      href: '/process',
      icon: Workflow,
      submenu: [
        { name: 'Our Process', href: '/process', icon: Workflow },
        { name: 'How It Works', href: '/process/how-it-works', icon: Workflow },
        { name: 'Quality Assurance', href: '/process/quality', icon: Target },
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      icon: Users,
      submenu: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/about/team', icon: Users },
        { name: 'Our Mission', href: '/about/mission', icon: Target },
        { name: 'Company History', href: '/about/history', icon: Target },
      ]
    },
    { name: 'Gallery', href: '/gallery', icon: GalleryVertical },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (itemName: string) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemName);
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A2540] shadow-2xl py-3' : 'bg-[#0A2540] py-5'}`}>
      {/* Top Trust Bar - Visible on desktop only */}
      <div className={`hidden lg:block border-b border-white/10 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center text-white/90">
              <Clock className="h-4 w-4 text-[#D4AF37] mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center text-white/90">
              <Shield className="h-4 w-4 text-[#D4AF37] mr-2" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center text-white/90">
              <Truck className="h-4 w-4 text-[#D4AF37] mr-2" />
              <span>Coast-to-Coast Service</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-white/90 text-sm">
              Trusted by <span className="text-[#D4AF37] font-bold">1,000+</span> Families
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="tel:2148972420" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium">
              <Phone className="h-4 w-4 inline mr-1" /> (214) 897-2420
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group relative z-10">
          <div className={`relative transition-all duration-500 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-200"></div>
            <div className="absolute inset-1 rounded-full bg-[#0A2540] flex items-center justify-center">
              <span className="font-bold text-[#D4AF37] text-xl">E</span>
            </div>
          </div>
          <div className="flex flex-col transition-all duration-500">
            <span className={`font-bold text-white tracking-tight ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Elvisco De Interstate
            </span>
            <span className={`text-[#D4AF37] font-medium tracking-wider ${isScrolled ? 'text-xs' : 'text-sm'}`}>
              PREMIUM COAST-TO-COAST RELOCATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.submenu && handleDropdownEnter(item.name)}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center">
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className="ml-1 focus:outline-none"
                  >
                    <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {/* Dropdown Menu */}
              {item.submenu && openDropdown === item.name && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-2">
                    {item.submenu.map((subitem) => {
                      const IconComponent = subitem.icon;
                      return (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center px-4 py-3 text-[#0A2540] hover:bg-[#D4AF37]/10 rounded-lg transition-colors duration-200 group"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {IconComponent && <IconComponent className="h-4 w-4 text-[#D4AF37] mr-3" />}
                          <div className="font-medium group-hover:text-[#D4AF37] transition-colors">
                            {subitem.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Button */}
          <Link 
            href="/get-quote" 
            className={`ml-4 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 ${
              isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'
            }`}
          >
            GET QUOTE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden focus:outline-none relative z-10 transition-colors text-white`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute top-0 right-0 h-full w-80 bg-[#0A2540] shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="p-6 border-b border-white/10">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-200 flex items-center justify-center font-bold text-[#0A2540] text-xl">
                  E
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">Elvisco De Interstate</span>
                  <span className="text-[#D4AF37] text-xs">PREMIUM RELOCATION</span>
                </div>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
              {navItems.map((item) => (
                <div key={item.name} className="mb-2">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="flex items-center justify-between w-full text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && <item.icon className="h-5 w-5" />}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-8 mt-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subitem) => {
                            const IconComponent = subitem.icon;
                            return (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="flex items-center text-white/80 hover:text-[#D4AF37] py-2 pl-2 rounded-lg hover:bg-white/5 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {IconComponent && <IconComponent className="h-4 w-4 mr-3" />}
                                {subitem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0A2540]">
              <a 
                href="tel:2148972420" 
                className="flex items-center justify-center gap-3 text-[#D4AF37] font-semibold text-lg mb-4 hover:text-[#D4AF37]/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5" /> (214) 897-2420
              </a>
              <Link 
                href="/get-quote" 
                className="block bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-full text-center w-full hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                GET FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

