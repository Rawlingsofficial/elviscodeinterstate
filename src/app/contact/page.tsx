// File: src/app/contact/page.tsx
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  CheckCircle,
  Shield,
  Award
} from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(214) 897-2420', '(214) 897-2421'],
      description: 'Available 24/7 for urgent moving inquiries',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@elviscodeinterstate.com', 'support@elviscodeinterstate.com'],
      description: 'Response within 2 hours during business hours',
      color: 'from-emerald-600 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Interstate Drive, Suite 100', 'Los Angeles, CA 90001'],
      description: 'Main headquarters - By appointment only',
      color: 'from-violet-600 to-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sun: 24/7 Support', 'Office: 8AM-8PM PST'],
      description: 'Emergency moving services available 24/7',
      color: 'from-amber-600 to-orange-500'
    }
  ];

  const departments = [
    {
      name: 'Customer Service',
      phone: '(214) 897-2420',
      email: 'support@elviscodeinterstate.com',
      hours: '24/7'
    },
    {
      name: 'Sales & Quotes',
      phone: '(214) 897-2421',
      email: 'quotes@elviscodeinterstate.com',
      hours: '8AM-8PM PST'
    },
    {
      name: 'Operations',
      phone: '(214) 897-2422',
      email: 'operations@elviscodeinterstate.com',
      hours: '6AM-10PM PST'
    },
    {
      name: 'Claims & Support',
      phone: '(214) 897-2423',
      email: 'claims@elviscodeinterstate.com',
      hours: '9AM-6PM PST'
    }
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <MessageSquare className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">24/7 SUPPORT • IMMEDIATE RESPONSE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl">
              Have questions about your move? Our dedicated team is ready to assist you 
              with personalized moving solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white to-accent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${info.color}`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">{info.title}</h3>
                
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-lg font-semibold text-primary">
                      {detail}
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>Get a Quote</option>
                      <option>Service Question</option>
                      <option>Claim Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                    placeholder="Tell us about your moving needs..."
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-300 text-secondary focus:ring-secondary/20 mr-3" />
                  <label htmlFor="newsletter" className="text-gray-700">
                    Subscribe to our newsletter for moving tips and special offers
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-xl text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Departments */}
            <div className="space-y-12">
              {/* Map */}
              <div className="bg-gradient-to-br from-primary to-[#0d2c4f] rounded-3xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold">Our Headquarters</h3>
                </div>
                
                <div className="h-64 bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <div className="text-xl font-bold">123 Interstate Drive</div>
                    <div className="text-white/80">Los Angeles, CA 90001</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-secondary mr-3" />
                    <span>Open for appointments: Mon-Fri 9AM-5PM</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary mr-3" />
                    <span>Call ahead: (214) 897-2420</span>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Contact by Department</h3>
                </div>
                
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h4 className="font-bold text-primary mb-2">{dept.name}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Trust Elvisco</h2>
            <p className="text-lg text-gray-600">
              Thousands of satisfied customers have experienced our premium moving services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive coverage for your peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">99.7% Satisfaction</h3>
              <p className="text-gray-600">Consistently high customer satisfaction ratings</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Award Winning</h3>
              <p className="text-gray-600">Industry recognition for excellence in service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Assistance */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Need Immediate Assistance?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            For urgent moving requests or last-minute bookings, call us now.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-secondary mr-4" />
              <div className="text-left">
                <div className="text-white/80 text-sm">24/7 Emergency Line</div>
                <a href="tel:2148972420" className="text-3xl font-bold text-white hover:text-secondary transition-colors">
                  (214) 897-2420
                </a>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            
            <div>
              <div className="text-white/80 text-sm mb-2">Average Response Time</div>
              <div className="text-2xl font-bold text-secondary">15 minutes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

