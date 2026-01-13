// File: src/app/about/page.tsx
import { Users, Target, Award, Clock, Shield, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in transparent pricing and honest communication throughout your moving journey.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Timely deliveries and consistent quality service you can count on every single time.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'From packing to delivery, we maintain the highest standards of service quality.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-secondary">Elvisco</span>
            </h1>
            <p className="text-xl text-white/80 mb-10">
              For over a decade, we've been transforming the moving experience with premium service, 
              innovative solutions, and unwavering commitment to customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-white/80">Cities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-white">5K+</div>
                <div className="text-white/80">Successful Moves</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2010, Elvisco De Interstate began with a simple mission: to make long-distance 
                  moving stress-free and reliable. What started with two trucks and a commitment to quality 
                  has grown into a nationwide moving service trusted by thousands of families and businesses.
                </p>
                <p>
                  Our journey has been marked by continuous innovation in logistics, investment in premium 
                  equipment, and most importantly, building a team of dedicated professionals who share our 
                  passion for exceptional service.
                </p>
                <p>
                  Today, we're proud to be recognized as a leader in the moving industry, known for our 
                  reliability, transparency, and customer-focused approach.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary to-amber-500 rounded-3xl p-12 text-center">
                <Target className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90">
                  To be the most trusted name in moving services, setting new standards for excellence 
                  in customer experience and reliability.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-8 shadow-2xl">
                <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                <div className="text-3xl font-bold">99.7%</div>
                <div>Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Join Thousands of Satisfied Customers</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Experience the Elvisco difference with our premium moving services designed for your peace of mind.
          </p>
          <a
            href="/services/request-quote"
            className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
          >
            Start Your Move Today
          </a>
        </div>
      </section>
    </div>
  );
}


