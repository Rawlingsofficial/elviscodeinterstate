// File: src/app/services/page.tsx
import {
  Truck,
  Clock,
  MapPin,
  Shield,
  Package,
  Building,
  Car,
  Warehouse,
  Globe,
  Home,
  CheckCircle,
  Phone
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Interstate Truck Moving',
      description: 'Professional long-distance truck transport across cities and states. We handle all shipments with care and ensure timely delivery.',
      features: ['Door-to-door service', 'Climate control available', 'GPS tracking'],
      gradient: 'from-blue-600 to-cyan-500',
      link: '#interstate'
    },
    {
      icon: Clock,
      title: 'Flexible Delivery Options',
      description: 'Choose from same-day, next-day, or scheduled deliveries based on your needs. We work around your timeline for a stress-free move.',
      features: ['Same-day service', 'Next-day delivery', 'Custom scheduling'],
      gradient: 'from-emerald-600 to-teal-500',
      link: '#flexible'
    },
    {
      icon: MapPin,
      title: 'Real-Time Shipment Tracking',
      description: 'Monitor your shipment in real-time from pickup to delivery. Stay informed at every stage of the move.',
      features: ['Live GPS tracking', 'SMS updates', 'Delivery notifications'],
      gradient: 'from-violet-600 to-purple-500',
      link: '#tracking'
    },
    {
      icon: Shield,
      title: 'Safe & Secure Handling',
      description: 'Your goods are carefully loaded, secured, and transported to prevent damage. We prioritize safety and reliability above all.',
      features: ['Cargo insurance', 'Professional packing', 'Secure transit'],
      gradient: 'from-amber-600 to-orange-500',
      link: '#secure'
    },
    {
      icon: Home,
      title: 'Residential Moving',
      description: 'Complete home relocation with careful handling of all your belongings and furniture.',
      features: ['Full packing service', 'Furniture disassembly', 'Setup assistance'],
      gradient: 'from-rose-600 to-pink-500',
      link: '#residential'
    },
    {
      icon: Building,
      title: 'Commercial Relocation',
      description: 'Minimize business downtime with our efficient office moving solutions.',
      features: ['After-hours moving', 'IT equipment handling', 'Minimal disruption'],
      gradient: 'from-indigo-600 to-blue-500',
      link: '#commercial'
    },
    {
      icon: Package,
      title: 'Packing Services',
      description: 'Professional packing using premium materials for maximum protection of your items.',
      features: ['Fragile item packing', 'Labeling system', 'Unpacking service'],
      gradient: 'from-green-600 to-emerald-500',
      link: '#packing'
    },
    {
      icon: Warehouse,
      title: 'Storage Solutions',
      description: 'Secure short-term and long-term storage with climate control and 24/7 security.',
      features: ['Climate controlled', '24/7 security', 'Easy access'],
      gradient: 'from-amber-600 to-yellow-500',
      link: '#storage'
    },
    {
      icon: Car,
      title: 'Vehicle Shipping',
      description: 'Safe transport of your vehicles anywhere in the country with enclosed transport.',
      features: ['Enclosed transport', 'Insurance included', 'Door-to-door service'],
      gradient: 'from-red-600 to-orange-500',
      link: '#vehicle'
    },
    {
      icon: Globe,
      title: 'International Moving',
      description: 'Global relocation services with customs clearance and international logistics.',
      features: ['Customs assistance', 'Documentation help', 'Global coverage'],
      gradient: 'from-purple-600 to-pink-500',
      link: '#international'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Premium <span className="text-secondary">Moving Services</span>
            </h1>
            <p className="text-xl text-white/80 mb-10">
              Reliable and efficient truck moving services for individuals and businesses across the nation.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <Phone className="h-6 w-6 text-secondary mr-3" />
              <a href="tel:2148972420" className="text-2xl font-bold text-white hover:text-secondary transition-colors">
                (214) 897-2420
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our <span className="text-secondary">Premium Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              From local moves to cross-country relocations, we offer comprehensive solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-gray-100 to-white rounded-full flex items-center justify-center text-gray-400 font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action button */}
                <a
                  href={service.link}
                  className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-primary to-[#1a3a5f] text-white font-bold rounded-xl hover:from-secondary hover:to-amber-500 transition-all duration-300 group-hover:shadow-lg"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-secondary/20 text-secondary font-semibold px-6 py-3 rounded-full mb-8">
              <Truck className="h-5 w-5 mr-2" />
              24/7 SERVICE AVAILABLE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for a Stress-Free Move?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Get a personalized quote in minutes with our transparent pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/services/request-quote"
                className="bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
              >
                Request Free Quote
              </a>
              <a
                href="tel:2148972420"
                className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300"
              >
                Call Now: (214) 897-2420
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

