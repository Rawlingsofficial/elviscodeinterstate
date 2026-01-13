// File: src/app/about/team/page.tsx
import { Users, Award, Briefcase, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Johnathan Smith',
      role: 'CEO & Founder',
      image: 'JS',
      bio: 'With 15+ years in logistics, Johnathan founded Elvisco with a vision to revolutionize moving services.',
      specialties: ['Operations', 'Strategic Planning', 'Customer Experience'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      image: 'MC',
      bio: 'Michael oversees all moving operations, ensuring efficiency and quality across every project.',
      specialties: ['Logistics', 'Team Management', 'Process Optimization'],
      color: 'from-emerald-600 to-teal-500'
    },
    {
      name: 'Sarah Johnson',
      role: 'Customer Success Manager',
      image: 'SJ',
      bio: 'Sarah leads our customer support team, ensuring every client receives exceptional service.',
      specialties: ['Client Relations', 'Problem Solving', 'Service Training'],
      color: 'from-violet-600 to-purple-500'
    },
    {
      name: 'Robert Garcia',
      role: 'Head of Logistics',
      image: 'RG',
      bio: 'Robert manages our nationwide network and ensures timely, safe deliveries.',
      specialties: ['Route Planning', 'Fleet Management', 'Safety Protocols'],
      color: 'from-amber-600 to-orange-500'
    },
    {
      name: 'Jessica Miller',
      role: 'Quality Assurance Lead',
      image: 'JM',
      bio: 'Jessica ensures every move meets our premium standards through rigorous quality checks.',
      specialties: ['Quality Control', 'Training', 'Standards Development'],
      color: 'from-rose-600 to-pink-500'
    },
    {
      name: 'David Wilson',
      role: 'Business Development',
      image: 'DW',
      bio: 'David expands our partnerships and brings premium moving solutions to new markets.',
      specialties: ['Partnerships', 'Market Strategy', 'Growth Planning'],
      color: 'from-indigo-600 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl text-white/80">
              Behind every successful move is our team of dedicated professionals committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to providing premium moving services nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-32 bg-gradient-to-r ${member.color}`}></div>
                <div className="px-8 pb-8">
                  <div className="relative -mt-16 mb-6">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-4xl font-bold border-8 border-white`}>
                      {member.image}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <div className="flex items-center text-secondary mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{member.role}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent text-primary rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="p-2 bg-accent rounded-full hover:bg-secondary/10 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </button>
                    <button className="p-2 bg-accent rounded-full hover:bg-secondary/10 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </button>
                    <button className="p-2 bg-accent rounded-full hover:bg-secondary/10 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Our Team Culture</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At Elvisco, we believe our team is our greatest asset. We foster a culture of collaboration, 
                  continuous improvement, and mutual respect where every team member's contribution is valued.
                </p>
                <p>
                  We invest in ongoing training, professional development, and creating an environment where 
                  excellence is not just expected but celebrated.
                </p>
                <p>
                  Our team members share a common commitment to making every move a premium experience, 
                  combining their expertise with genuine care for our customers' needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <Users className="h-16 w-16 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-8">
                We're always looking for talented individuals who share our passion for exceptional service.
              </p>
              <a
                href="/careers"
                className="inline-block bg-gradient-to-r from-primary to-[#1a3a5f] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                View Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


