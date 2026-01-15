// File: src/app/process/page.tsx
"use client";

import { useState } from 'react';
import {
  ClipboardCheck,
  Calendar,
  Package,
  Map as MapIcon,
  Truck,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Award,
  BarChart,
  Target,
  Phone,
  MessageSquare,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Star,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Request a Move',
      description: 'Start by submitting your move details through our easy-to-use form. Provide pickup and delivery locations, shipment size, and preferred schedule.',
      color: 'from-blue-500 to-cyan-400',
      features: ['Online quote form', 'Phone consultation', 'Free estimate'],
      details: ['Instant quote generation', 'No hidden fees', 'Multiple service options']
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Scheduling & Planning',
      description: 'Once your request is received, we plan the optimal route and schedule your move, ensuring timely and efficient transportation.',
      color: 'from-emerald-500 to-teal-400',
      features: ['Flexible scheduling', 'Route optimization', 'Resource allocation'],
      details: ['Custom timeline planning', 'Weather consideration', 'Traffic analysis']
    },
    {
      number: '03',
      icon: Package,
      title: 'Pickup & Loading',
      description: 'Our team arrives on time to carefully load your goods onto our truck, ensuring everything is secure for the journey.',
      color: 'from-violet-500 to-purple-400',
      features: ['Professional packing', 'Secure loading', 'Inventory checklist'],
      details: ['Fragile item handling', 'Weight distribution', 'Safety protocols']
    },
    {
      number: '04',
      icon: MapIcon,
      title: 'Transit & Real-Time Tracking',
      description: 'Your shipment is transported safely, and you can track its progress in real-time from pickup to delivery.',
      color: 'from-amber-500 to-orange-400',
      features: ['GPS tracking', 'SMS updates', '24/7 monitoring'],
      details: ['Live location updates', 'Driver communication', 'Route adjustments']
    },
    {
      number: '05',
      icon: Truck,
      title: 'Delivery & Confirmation',
      description: 'Upon arrival, our team unloads your goods carefully, confirms completion, and ensures your satisfaction with the service.',
      color: 'from-rose-500 to-pink-400',
      features: ['Careful unloading', 'Damage inspection', 'Customer sign-off'],
      details: ['Assembly services', 'Placement assistance', 'Final walkthrough']
    }
  ];

  const processFeatures = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Every move is protected with comprehensive insurance coverage for complete peace of mind.',
      stat: '100% Coverage'
    },
    {
      icon: Clock,
      title: 'On-Time Guarantee',
      description: 'We commit to timely delivery with a 99.7% on-time record across thousands of moves.',
      stat: '99.7% On-Time'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our trained professionals handle every aspect of your move with care and expertise.',
      stat: 'Expert Crews'
    },
    {
      icon: Award,
      title: 'Premium Service',
      description: 'From start to finish, we provide white-glove service for a stress-free experience.',
      stat: '5-Star Rated'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers', sublabel: 'and growing daily' },
    { icon: Truck, value: '5,000+', label: 'Successful Moves', sublabel: 'coast to coast' },
    { icon: Award, value: '99.7%', label: 'On-Time Delivery', sublabel: 'guarantee' },
    { icon: MessageSquare, value: '4.9/5', label: 'Customer Rating', sublabel: 'based on reviews' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York to Florida',
      text: 'The process was seamless from start to finish. The team kept me updated every step of the way.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      location: 'California to Texas',
      text: 'Professional, efficient, and careful with our belongings. Will definitely use again.',
      rating: 5
    },
    {
      name: 'Jessica Williams',
      location: 'Chicago to Atlanta',
      text: 'The real-time tracking gave us peace of mind during our cross-country move.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Improved */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#1a365d] to-[#0A2540] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-white">PREMIUM MOVING PROCESS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[#D4AF37]">Premium</span>
              <br />
              Moving Process
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Experience a stress-free move with our transparent 5-step process designed for customer satisfaction and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/services/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 group"
              >
                Start Your Move
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-3 text-white">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">Rated 4.9/5 by 1,000+ customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Banner - Mobile Friendly */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5">
                      <Icon className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-[#0A2540]">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features - Improved Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Choose Our Process
            </h2>
            <p className="text-gray-600">
              Our comprehensive approach ensures every move is handled with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5">
                      <Icon className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#D4AF37] mb-1">{feature.stat}</div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
              <Target className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37]">OUR METHODOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our <span className="text-[#D4AF37]">5-Step</span> Moving Process
            </h2>
            <p className="text-gray-600">
              From initial request to final delivery, we ensure a seamless moving experience.
            </p>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
              
              <div className="space-y-8 pl-12">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-6 w-6 h-6 bg-white rounded-full border-4 border-[#D4AF37] shadow-lg"></div>
                      
                      {/* Step card */}
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500">Step {step.number}</div>
                            <h3 className="text-xl font-bold text-[#0A2540]">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        
                        <div className="space-y-3">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop View - Alternating Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Center timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
              
              <div className="space-y-24">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Step content */}
                      <div className={`w-5/12 ${isEven ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div className={isEven ? 'text-right flex-1' : 'text-left flex-1'}>
                              <div className="text-sm font-medium text-gray-500">Step {step.number}</div>
                              <h3 className="text-2xl font-bold text-[#0A2540]">{step.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6">{step.description}</p>
                          
                          <div className="space-y-3">
                            {step.features.map((feature, idx) => (
                              <div key={idx} className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} text-gray-700`}>
                                {isEven ? (
                                  <>
                                    <span className="mr-3">{feature}</span>
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#D4AF37] shadow-xl"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Customer Experiences
            </h2>
            <p className="text-gray-600">
              See what our customers say about our moving process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#0A2540]">{testimonial.name}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Improved */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#1a365d] to-[#0A2540]">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for a Stress-Free Move?
              </h2>
              
              <p className="text-lg text-white/80 mb-8">
                Start your journey with Elvisco today and experience premium moving service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/services/request-quote"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 group w-full sm:w-auto justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="hidden sm:block w-0.5 h-8 bg-white/30"></div>
                  
                  <a
                    href="tel:+12403532854"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Phone className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm text-white/70">Call Us Now</div>
                      <div className="font-bold">+1 (240) 353-2854</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <p className="text-white/60 text-sm mt-8">
                Available 24/7 • Free Consultations • No Hidden Fees
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



