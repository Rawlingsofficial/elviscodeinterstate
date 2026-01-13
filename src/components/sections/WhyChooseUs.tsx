// File: src/components/sections/WhyChooseUs.tsx
import { Rocket, DollarSign, Shield, Headphones, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'We ensure your belongings reach their destination quickly and efficiently, without delays.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Quality moving services that fit your budget, no hidden fees, just fair pricing.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Your items are handled with care from start to finish, ensuring they arrive safely.',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service to address your concerns anytime during the move.',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description: 'We guarantee delivery within the promised timeframe or you get a discount.',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as top movers in customer satisfaction and service excellence.',
    gradient: 'from-[#D4AF37] to-amber-400',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full text-sm mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Premium Moving <span className="text-[#0A2540]">Experience</span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine modern logistics with old-fashioned care to deliver exceptional moving experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" 
                   style={{ background: `linear-gradient(to right, ${feature.gradient})` }} />
              
              <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${feature.gradient}`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <div className="flex items-center text-sm font-semibold group-hover:text-[#D4AF37] transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

