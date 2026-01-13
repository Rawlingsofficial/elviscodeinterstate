// File: src/components/Header/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Users, Target, Workflow } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
    },
    { 
      name: 'Process', 
      href: '/process',
      submenu: [
        { name: 'Our Process', href: '/process', icon: Workflow },
        { name: 'How It Works', href: '/process/how-it-works', icon: Workflow },
        { name: 'Quality Assurance', href: '/process/quality', icon: Target },
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/about/team', icon: Users },
        { name: 'Our Mission', href: '/about/mission', icon: Target },
        { name: 'Company History', href: '/about/history', icon: Target },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
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
    }, 200); // Small delay to allow clicking
  };

  const handleDropdownClick = (itemName: string) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemName);
    }
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A2540] py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-200 flex items-center justify-center font-bold text-[#0A2540] text-lg border-2 border-white/30">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight">Elvisco De Interstate</span>
            <span className="text-[#D4AF37] text-xs font-medium tracking-wider">PREMIUM COAST-TO-COAST RELOCATION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
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
                  className="text-white/90 hover:text-[#D4AF37] font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
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
              
              {/* Dropdown Menu - Now stays open when hovering over it */}
              {item.submenu && openDropdown === item.name && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="flex items-center px-6 py-4 text-[#0A2540] hover:bg-[#D4AF37]/10 transition-colors duration-200 group"
                        onClick={() => {
                          setOpenDropdown(null);
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current);
                          }
                        }}
                      >
                        <subitem.icon className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-semibold group-hover:text-[#D4AF37] transition-colors truncate">
                            {subitem.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center space-x-2 pl-8 border-l border-white/20">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <a href="tel:2148972420" className="text-white font-semibold text-sm hover:text-[#D4AF37] transition-colors">
              (214) 897-2420
            </a>
          </div>
          <Link href="/services/request-quote" className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
            GET A QUOTE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full w-full bg-[#0A2540] border-t border-white/10 shadow-2xl">
          <div className="container-custom py-6">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-white/5">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="flex items-center justify-between w-full text-white text-lg py-4 focus:outline-none"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-center text-white/80 hover:text-[#D4AF37] py-2 pl-2"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            <subitem.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className="block text-white text-lg py-4 hover:text-[#D4AF37]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6 space-y-4">
              <a 
                href="tel:2148972420" 
                className="flex items-center text-[#D4AF37] font-semibold text-lg hover:text-[#D4AF37]/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="mr-3" /> (214) 897-2420
              </a>
              <Link 
                href="/services/request-quote" 
                className="block bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-full text-center w-full hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

