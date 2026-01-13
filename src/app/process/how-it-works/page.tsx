// File: src/app/process/how-it-works/page.tsx
import {
  ClipboardList,
  Calendar,
  Package,
  Map,
  Truck,
  CheckCircle,
  Shield,
  Clock,
  Users,
  FileText,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function HowItWorksPage() {
  const processSteps = [
    {
      step: '01',
      icon: ClipboardList,
      title: 'Initial Consultation',
      description: 'Share your moving details through our easy online form or phone consultation.',
      features: ['Free quote', 'Inventory assessment', 'Timeline discussion'],
      color: 'from-blue-600 to-cyan-500',
      duration: '15-30 min'
    },
    {
      step: '02',
      icon: Calendar,
      title: 'Custom Planning',
      description: 'We create a personalized moving plan based on your specific needs and timeline.',
      features: ['Route optimization', 'Resource allocation', 'Schedule coordination'],
      color: 'from-emerald-600 to-teal-500',
      duration: '24-48 hours'
    },
    {
      step: '03',
      icon: Package,
      title: 'Professional Packing',
      description: 'Our trained team carefully packs your belongings using premium materials.',
      features: ['Fragile item protection', 'Labeling system', 'Digital inventory'],
      color: 'from-violet-600 to-purple-500',
      duration: '1-2 days'
    },
    {
      step: '04',
      icon: Truck,
      title: 'Secure Loading',
      description: 'Items are safely loaded onto our climate-controlled trucks with GPS tracking.',
      features: ['Secure strapping', 'Climate control', 'Weight distribution'],
      color: 'from-amber-600 to-orange-500',
      duration: '2-4 hours'
    },
    {
      step: '05',
      icon: Map,
      title: 'Real-Time Transit',
      description: 'Monitor your shipment in real-time with 24/7 tracking and updates.',
      features: ['Live GPS tracking', 'SMS notifications', 'Driver communication'],
      color: 'from-rose-600 to-pink-500',
      duration: '1-7 days'
    },
    {
      step: '06',
      icon: CheckCircle,
      title: 'Delivery & Setup',
      description: 'Careful unloading, placement, and setup at your new location.',
      features: ['Furniture assembly', 'Box placement', 'Final walkthrough'],
      color: 'from-indigo-600 to-blue-500',
      duration: '2-4 hours'
    }
  ];

  const communicationMethods = [
    {
      icon: Phone,
      title: 'Dedicated Move Coordinator',
      description: 'A single point of contact available throughout your move journey.',
      availability: '24/7 Support'
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Updates',
      description: 'Get instant notifications via SMS, email, or our mobile app.',
      availability: 'Instant Updates'
    },
    {
      icon: Users,
      title: 'Customer Portal',
      description: 'Access all documents, tracking, and communications in one place.',
      availability: 'Online 24/7'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-32 translate-y-32"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <ClipboardList className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">6-STEP PROCESS • STRESS-FREE MOVING</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              How Our <span className="text-secondary">Process Works</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl">
              Experience a seamless, transparent moving process designed for your convenience 
              and peace of mind. From initial consultation to final delivery, we handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our 6-Step Moving Process</h2>
            <p className="text-lg text-gray-600">
              A comprehensive approach that ensures efficiency, safety, and satisfaction at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white to-accent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Step Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                    {step.duration}
                  </div>
                </div>

                {/* Step Number */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${step.color}`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>

                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-primary">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Stay Connected Every Step</h2>
            <p className="text-lg text-gray-600">
              We believe in transparent communication throughout your moving journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communicationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full">
                  <Clock className="h-4 w-4 text-secondary mr-2" />
                  <span className="text-secondary font-semibold">{method.availability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Flow */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">What Makes Our Process Different</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Digital Inventory System</h3>
                    <p className="text-gray-600">
                      Every item is cataloged digitally with photos and descriptions, ensuring 
                      complete transparency and accountability throughout the move.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <Map className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Route Optimization</h3>
                    <p className="text-gray-600">
                      Advanced algorithms calculate the most efficient routes considering 
                      traffic, weather, and road conditions for timely delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Paperless Documentation</h3>
                    <p className="text-gray-600">
                      All contracts, insurance documents, and communications are handled 
                      digitally for convenience and environmental sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-[#0d2c4f] rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">Start-to-Finish Timeline</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center">
                    <ClipboardList className="h-5 w-5 text-secondary mr-3" />
                    <span>Planning Phase</span>
                  </div>
                  <span className="text-secondary font-semibold">1-3 days</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-secondary mr-3" />
                    <span>Packing Phase</span>
                  </div>
                  <span className="text-secondary font-semibold">1-2 days</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-secondary mr-3" />
                    <span>Transit Phase</span>
                  </div>
                  <span className="text-secondary font-semibold">1-7 days</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>Delivery Phase</span>
                  </div>
                  <span className="text-secondary font-semibold">1 day</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="text-3xl font-bold mb-2">Total Time: 4-13 days</div>
                <p className="text-white/80">Average complete moving process duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Experience Our Process?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've experienced our streamlined, transparent moving process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/services/request-quote"
              className="bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
            >
              Start Your Move
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


