// File: src/components/sections/Services.tsx
import { Truck, Home, Building, Package, Warehouse, Car, Globe, Box } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Complete home relocation with careful handling of all your belongings.',
    features: ['Full packing', 'Furniture disassembly', 'Secure transport'],
  },
  {
    icon: Building,
    title: 'Commercial Relocation',
    description: 'Minimize business downtime with our efficient office moving solutions.',
    features: ['After-hours moving', 'IT equipment handling', 'Minimal disruption'],
  },
  {
    icon: Truck,
    title: 'Long-Distance Moving',
    description: 'Coast-to-coast moving with real-time tracking and updates.',
    features: ['GPS tracking', 'Climate control', 'Multi-stop routes'],
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing using premium materials for maximum protection.',
    features: ['Fragile item packing', 'Labeling system', 'Unpacking service'],
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description: 'Secure short-term and long-term storage with climate control.',
    features: ['24/7 security', 'Climate controlled', 'Easy access'],
  },
  {
    icon: Car,
    title: 'Vehicle Shipping',
    description: 'Safe transport of your vehicles anywhere in the country.',
    features: ['Enclosed transport', 'Insurance included', 'Door-to-door service'],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#0A2540]/10 text-[#0A2540] font-semibold rounded-full text-sm mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-[#0A2540]">Moving Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From local moves to cross-country relocations, we offer tailored services for every need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] rounded-2xl mb-6 group-hover:from-[#D4AF37] group-hover:to-amber-500 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#0A2540]">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white font-bold rounded-xl hover:from-[#D4AF37] hover:to-amber-500 transition-all duration-300 group-hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4AF37] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37] rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready for a Stress-Free Move?
            </h3>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Get a personalized quote in minutes. No hidden fees, just transparent pricing.
            </p>
            <button className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

