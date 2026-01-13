// File: src/components/sections/CompanyHistory.tsx
import { Award, TrendingUp, Users } from 'lucide-react';

const milestones = [
  { year: '2010', title: 'Company Founded', description: 'Started with 2 trucks and a commitment to quality service' },
  { year: '2014', title: 'National Expansion', description: 'Expanded services to cover all 48 contiguous states' },
  { year: '2018', title: 'Fleet Modernization', description: 'Invested in 50 new GPS-equipped moving trucks' },
  { year: '2022', title: 'Award Recognition', description: 'Received "Best Moving Company" industry award' },
  { year: '2024', title: 'Tech Innovation', description: 'Launched real-time tracking app for customers' },
];

export default function CompanyHistory() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full text-sm mb-6">
              COMPANY HISTORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building Trust <span className="text-[#0A2540]">Since 2010</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Elvisco De Interstate began with a mission to make long-distance moving simple and reliable. 
              Today, we're trusted for safe, timely deliveries across cities nationwide.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A2540] mb-2 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#D4AF37] mr-2" />
                  80+
                </div>
                <div className="text-gray-600">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A2540] mb-2 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#D4AF37] mr-2" />
                  5K+
                </div>
                <div className="text-gray-600">Successful Moves</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A2540] mb-2 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-[#D4AF37] mr-2" />
                  99.7%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90">
                To transform the moving experience through exceptional service, transparent pricing, 
                and meticulous attention to detail, making relocation stress-free for every customer.
              </p>
            </div>
          </div>
          
          {/* Right Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-4 top-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-2xl ${index % 2 === 0 ? 'bg-white shadow-xl' : 'bg-gray-50'}`}>
                    <div className="text-2xl font-bold text-[#D4AF37] mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-[#0A2540] mb-3">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

