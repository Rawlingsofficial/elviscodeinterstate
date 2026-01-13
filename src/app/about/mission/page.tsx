// File: src/app/about/mission/page.tsx
import { Target, Award, Shield, Users, Heart, Globe } from 'lucide-react';

export default function MissionPage() {
  const missionPoints = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To transform the moving experience through exceptional service, transparent pricing, and meticulous attention to detail, making relocation stress-free for every customer.',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To be the most trusted name in moving services nationwide, setting new standards for reliability, innovation, and customer satisfaction in the logistics industry.',
      color: 'from-emerald-600 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, reliability, customer focus, and excellence guide every decision we make and every service we provide.',
      color: 'from-violet-600 to-purple-500'
    }
  ];

  const commitments = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of your belongings and our team above all else.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your satisfaction drives everything we do, from planning to delivery.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every move, no matter the size or distance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-20 w-20 text-secondary mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-secondary">Mission & Vision</span>
            </h1>
            <p className="text-xl text-white/80">
              Driving innovation in moving services while maintaining our commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl mb-8 bg-gradient-to-br ${point.color}`}>
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">{point.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Commitment to You</h2>
            <p className="text-lg text-gray-600">
              These principles guide every aspect of our service delivery and company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6">
                  <commitment.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Award className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">Industry Recognition • Customer Trust</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Making a Difference in Moving
            </h2>
            <div className="text-xl text-white/80 space-y-6 mb-12">
              <p>
                Our mission extends beyond just moving boxes. We're committed to reducing the stress 
                associated with relocation, providing eco-friendly moving solutions, and contributing 
                positively to the communities we serve.
              </p>
              <p>
                Through innovative technology, sustainable practices, and community engagement, 
                we're building a moving company that not only transports belongings but also 
                enriches lives and protects our environment.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

