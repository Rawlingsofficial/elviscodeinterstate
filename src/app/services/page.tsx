// File: src/app/services/page.tsx
import { Truck, Clock, MapPin, Shield, Package, Building, Car, Warehouse, Globe, Home, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Interstate Truck Moving',
      description: 'Professional long-distance truck transport across cities and states. We handle all shipments with care and ensure timely delivery.',
      features: ['Door-to-door service', 'Climate control available', 'GPS tracking'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Flexible Delivery Options',
      description: 'Choose from same-day, next-day, or scheduled deliveries based on your needs. We work around your timeline for a stress-free move.',
      features: ['Same-day service', 'Next-day delivery', 'Custom scheduling'],
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Real-Time Shipment Tracking',
      description: 'Monitor your shipment in real-time from pickup to delivery. Stay informed at every stage of the move.',
      features: ['Live GPS tracking', 'SMS updates', 'Delivery notifications'],
      gradient: 'from-violet-600 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Safe & Secure Handling',
      description: 'Your goods are carefully loaded, secured, and transported to prevent damage. We prioritize safety and reliability above all.',
      features: ['Cargo insurance', 'Professional packing', 'Secure transit'],
      gradient: 'from-amber-600 to-orange-500',
    },
    {
      icon: Home,
      title: 'Residential Moving',
      description: 'Complete home relocation with careful handling of all your belongings and furniture.',
      features: ['Full packing service', 'Furniture disassembly', 'Setup assistance'],
      gradient: 'from-rose-600 to-pink-500',
    },
    {
      icon: Building,
      title: 'Commercial Relocation',
      description: 'Minimize business downtime with our efficient office moving solutions.',
      features: ['After-hours moving', 'IT equipment handling', 'Minimal disruption'],
      gradient: 'from-indigo-600 to-blue-500',
    },
    {
      icon: Package,
      title: 'Packing Services',
      description: 'Professional packing using premium materials for maximum protection of your items.',
      features: ['Fragile item packing', 'Labeling system', 'Unpacking service'],
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      icon: Warehouse,
      title: 'Storage Solutions',
      description: 'Secure short-term and long-term storage with climate control and 24/7 security.',
      features: ['Climate controlled', '24/7 security', 'Easy access'],
      gradient: 'from-amber-600 to-yellow-500',
    },
    {
      icon: Car,
      title: 'Vehicle Shipping',
      description: 'Safe transport of your vehicles anywhere in the country with enclosed transport.',
      features: ['Enclosed transport', 'Insurance included', 'Door-to-door service'],
      gradient: 'from-red-600 to-orange-500',
    },
    {
      icon: Globe,
      title: 'International Moving',
      description: 'Global relocation services with customs clearance and international logistics.',
      features: ['Customs assistance', 'Documentation help', 'Global coverage'],
      gradient: 'from-purple-600 to-pink-500',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Premium <span className="text-secondary">Moving Services</span>
          </h1>
          <p className="text-xl text-white/80 mb-10">
            Reliable and efficient moving solutions for individuals and businesses nationwide.
          </p>
          <a href="tel:2148972420" className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 font-bold text-2xl text-white hover:text-secondary transition-colors">
            <Phone className="h-6 w-6 text-secondary mr-3" />
            (214) 897-2420
          </a>
        </div>
      </section>

      {/* Services Slider */}
      <section className="py-24">
        <div className="container-custom text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From local moves to cross-country relocations, we provide comprehensive, high-quality solutions for every customer.
          </p>
        </div>

        <div className="overflow-x-auto flex gap-6 px-4 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-[300px] md:w-[360px] bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
              <div className={`p-4 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg inline-flex`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/request-quote"
                className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-secondary to-amber-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Request Quote
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-secondary/20 text-secondary font-semibold px-6 py-3 rounded-full mb-8">
            <Truck className="h-5 w-5 mr-2" />
            24/7 SERVICE AVAILABLE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready for a Stress-Free Move?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Get a personalized quote in minutes with our transparent pricing and no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services/request-quote"
              className="bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:2148972420"
              className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Now: (214) 897-2420
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

