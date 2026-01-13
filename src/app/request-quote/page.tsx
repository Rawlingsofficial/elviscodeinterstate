// File: src/app/process/page.tsx
// OR as a component: src/components/sections/Process.tsx
import {
  ClipboardCheck,
  Calendar,
  Package,
  Map,
  Truck,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Award,
  BarChart,
  Target
} from 'lucide-react';

export default function ProcessPage() {
  const processSteps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Request a Move',
      description: 'Start by submitting your move details through our easy-to-use form. Provide pickup and delivery locations, shipment size, and preferred schedule.',
      color: 'from-blue-600 to-cyan-500',
      features: ['Online quote form', 'Phone consultation', 'Free estimate']
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Scheduling & Planning',
      description: 'Once your request is received, we plan the optimal route and schedule your move, ensuring timely and efficient transportation.',
      color: 'from-emerald-600 to-teal-500',
      features: ['Flexible scheduling', 'Route optimization', 'Resource allocation']
    },
    {
      number: '03',
      icon: Package,
      title: 'Pickup & Loading',
      description: 'Our team arrives on time to carefully load your goods onto our truck, ensuring everything is secure for the journey.',
      color: 'from-violet-600 to-purple-500',
      features: ['Professional packing', 'Secure loading', 'Inventory checklist']
    },
    {
      number: '04',
      icon: Map,
      title: 'Transit & Real-Time Tracking',
      description: 'Your shipment is transported safely, and you can track its progress in real-time from pickup to delivery.',
      color: 'from-amber-600 to-orange-500',
      features: ['GPS tracking', 'SMS updates', '24/7 monitoring']
    },
    {
      number: '05',
      icon: Truck,
      title: 'Delivery & Confirmation',
      description: 'Upon arrival, our team unloads your goods carefully, confirms completion, and ensures your satisfaction with the service.',
      color: 'from-rose-600 to-pink-500',
      features: ['Careful unloading', 'Damage inspection', 'Customer sign-off']
    }
  ];

  const processFeatures = [
    {
      icon: Shield,
      title: 'Flexible Scheduling',
      description: 'Choose a delivery time that works for you - same day, next day, or scheduled interstate moves. We make moving on your schedule easy.',
      stat: '99.7%'
    },
    {
      icon: Map,
      title: 'Efficient Routes',
      description: 'We plan the fastest, safest route for your move, considering distance and road conditions, so your goods arrive on time.',
      stat: 'Optimized'
    },
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      description: 'Stay updated with real-time tracking of your shipment from pickup to delivery, giving you peace of mind every step of the way.',
      stat: '24/7'
    },
    {
      icon: CheckCircle,
      title: 'Safe & Reliable Delivery',
      description: 'Your belongings are our priority. We ensure every shipment is securely loaded, transported, and delivered without damage.',
      stat: '100%'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Truck, value: '5,000+', label: 'Successful Moves' },
    { icon: Award, value: '99.7%', label: 'On-Time Delivery' },
    { icon: BarChart, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-48 -translate-x-48"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-secondary">Premium Process</span>
            </h1>
            <p className="text-xl text-white/80 mb-10">
              A valuable, transparent process designed for customer satisfaction and peace of mind.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Target className="h-5 w-5 text-secondary" />
              <span className="text-white font-medium">Proven Methodology • 5-Step Process</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our <span className="text-secondary">5-Step Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              From initial request to final delivery, we ensure a seamless moving experience every step of the way.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary via-secondary/50 to-transparent hidden lg:block"></div>

            {/* Process Steps */}
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} lg:w-1/2`}>
                    <div className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl ${
                      index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                    }`}>
                      <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <ul className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            {index % 2 === 0 ? (
                              <>
                                <span>{feature}</span>
                                <CheckCircle className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                              </>
                            ) : (
                              <>
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connector Dots */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-secondary/20 to-secondary/10">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Start Your Stress-Free Move Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the Elvisco difference with our premium moving process designed for your comfort and convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/services/request-quote"
                className="bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
              >
                Begin Your Journey
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-primary to-[#1a3a5f] text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300"
              >
                Speak to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

