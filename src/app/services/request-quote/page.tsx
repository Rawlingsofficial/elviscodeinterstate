// File: src/app/services/request-quote/page.tsx
'use client';
import { useState } from 'react';
import {
  Calculator,
  Clock,
  ShieldCheck,
  Truck,
  Package,
  Home,
  Building,
  Car,
  MapPin,
  Calendar,
  CheckCircle,
  DollarSign,
  Users,
  Phone
} from 'lucide-react';

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    moveType: '',
    homeSize: '',
    movingDate: '',
    origin: '',
    destination: '',
    name: '',
    email: '',
    phone: '',
    additionalServices: [] as string[]
  });

  const moveTypes = [
    { icon: Home, label: 'Residential', description: 'House or apartment move' },
    { icon: Building, label: 'Commercial', description: 'Office or business move' },
    { icon: Truck, label: 'Long Distance', description: 'Cross-country relocation' },
    { icon: Car, label: 'Vehicle Shipping', description: 'Car or motorcycle transport' }
  ];

  const homeSizes = [
    { label: 'Studio / 1 Bed', rooms: '1-2 rooms', estimate: '$800 - $1,500' },
    { label: '2-3 Bedroom', rooms: '3-5 rooms', estimate: '$1,500 - $3,000' },
    { label: '4+ Bedroom', rooms: '6+ rooms', estimate: '$3,000 - $6,000' },
    { label: 'Large Home', rooms: '8+ rooms', estimate: '$6,000+' }
  ];

  const additionalServices = [
    { id: 'packing', label: 'Professional Packing', price: '+$400-$800' },
    { id: 'storage', label: 'Storage Solutions', price: '+$200/month' },
    { id: 'assembly', label: 'Furniture Assembly', price: '+$150-$300' },
    { id: 'cleaning', label: 'Move-Out Cleaning', price: '+$200-$400' }
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }));
  };

  const calculateEstimate = () => {
    let base = 0;
    if (formData.homeSize === 'Studio / 1 Bed') base = 1200;
    if (formData.homeSize === '2-3 Bedroom') base = 2500;
    if (formData.homeSize === '4+ Bedroom') base = 4500;
    if (formData.homeSize === 'Large Home') base = 6500;

    const serviceCost = formData.additionalServices.length * 300;
    const distanceCost = formData.origin && formData.destination ? 500 : 0;

    return base + serviceCost + distanceCost;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-32 translate-y-32"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Calculator className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">FREE QUOTE • NO OBLIGATION • TRANSPARENT PRICING</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get Your <span className="text-secondary">Free Quote</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Receive a detailed, transparent moving quote in minutes. No hidden fees, just premium service pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  stepNumber <= step 
                    ? 'bg-gradient-to-r from-secondary to-amber-500 text-primary' 
                    : 'bg-gray-100 text-gray-400'
                } font-bold`}>
                  {stepNumber}
                </div>
                {stepNumber < 5 && (
                  <div className={`w-24 h-1 mx-4 ${
                    stepNumber < step ? 'bg-secondary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <div className={step >= 1 ? 'text-primary font-semibold' : ''}>Move Details</div>
            <div className={step >= 2 ? 'text-primary font-semibold' : ''}>Home Size</div>
            <div className={step >= 3 ? 'text-primary font-semibold' : ''}>Services</div>
            <div className={step >= 4 ? 'text-primary font-semibold' : ''}>Contact Info</div>
            <div>Review & Submit</div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                  {/* Step 1: Move Details */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-8">What type of move do you need?</h2>
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {moveTypes.map((type) => (
                          <button
                            key={type.label}
                            onClick={() => {
                              setFormData({...formData, moveType: type.label});
                              handleNext();
                            }}
                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                              formData.moveType === type.label
                                ? 'border-secondary bg-secondary/5'
                                : 'border-gray-200 hover:border-secondary hover:bg-secondary/5'
                            }`}
                          >
                            <type.icon className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-2">{type.label}</h3>
                            <p className="text-gray-600">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Home Size */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-8">What size is your home?</h2>
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {homeSizes.map((size) => (
                          <button
                            key={size.label}
                            onClick={() => {
                              setFormData({...formData, homeSize: size.label});
                              handleNext();
                            }}
                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                              formData.homeSize === size.label
                                ? 'border-secondary bg-secondary/5'
                                : 'border-gray-200 hover:border-secondary hover:bg-secondary/5'
                            }`}
                          >
                            <h3 className="text-xl font-bold text-primary mb-2">{size.label}</h3>
                            <p className="text-gray-600 mb-2">{size.rooms}</p>
                            <div className="text-secondary font-bold">{size.estimate}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Additional Services */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-8">Additional Services</h2>
                      <p className="text-gray-600 mb-8">Select any additional services you need:</p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {additionalServices.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                              formData.additionalServices.includes(service.id)
                                ? 'border-secondary bg-secondary/5'
                                : 'border-gray-200 hover:border-secondary hover:bg-secondary/5'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-bold text-primary">{service.label}</h3>
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.additionalServices.includes(service.id)
                                  ? 'border-secondary bg-secondary'
                                  : 'border-gray-300'
                              }`}>
                                {formData.additionalServices.includes(service.id) && (
                                  <CheckCircle className="h-4 w-4 text-white" />
                                )}
                              </div>
                            </div>
                            <div className="text-secondary font-bold mt-2">{service.price}</div>
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Moving Date</label>
                          <input
                            type="date"
                            value={formData.movingDate}
                            onChange={(e) => setFormData({...formData, movingDate: e.target.value})}
                            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Timeline</label>
                          <select className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                            <option>Standard (2-4 weeks)</option>
                            <option>Expedited (1-2 weeks)</option>
                            <option>Urgent (3-7 days)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300"
                      >
                        Continue to Contact Info
                      </button>
                    </div>
                  )}

                  {/* Step 4: Contact Info */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-8">Your Contact Information</h2>
                      
                      <div className="space-y-6 mb-12">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                              placeholder="John Smith"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                              placeholder="(123) 456-7890"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                            placeholder="john@example.com"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Moving From *</label>
                            <input
                              type="text"
                              value={formData.origin}
                              onChange={(e) => setFormData({...formData, origin: e.target.value})}
                              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                              placeholder="City, State or ZIP"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">Moving To *</label>
                            <input
                              type="text"
                              value={formData.destination}
                              onChange={(e) => setFormData({...formData, destination: e.target.value})}
                              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                              placeholder="City, State or ZIP"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={handlePrev}
                          className="flex-1 border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          onClick={handleNext}
                          className="flex-1 bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                          Review Your Quote
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Review & Submit */}
                  {step === 5 && (
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-8">Review Your Quote</h2>
                      
                      <div className="bg-gradient-to-b from-accent to-white rounded-2xl p-8 mb-12">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Move Details</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Move Type:</span>
                                <span className="font-semibold">{formData.moveType}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Home Size:</span>
                                <span className="font-semibold">{formData.homeSize}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Moving Date:</span>
                                <span className="font-semibold">{formData.movingDate || 'Not selected'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Route:</span>
                                <span className="font-semibold">{formData.origin} → {formData.destination}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Additional Services</h3>
                            <div className="space-y-3">
                              {formData.additionalServices.map(serviceId => {
                                const service = additionalServices.find(s => s.id === serviceId);
                                return service ? (
                                  <div key={serviceId} className="flex justify-between">
                                    <span className="text-gray-600">{service.label}:</span>
                                    <span className="font-semibold">{service.price}</span>
                                  </div>
                                ) : null;
                              })}
                              {formData.additionalServices.length === 0 && (
                                <div className="text-gray-500">No additional services selected</div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-2xl font-bold text-primary">Estimated Total</div>
                              <div className="text-gray-600">Inclusive of all selected services</div>
                            </div>
                            <div className="text-4xl font-bold text-secondary">
                              ${calculateEstimate().toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input type="checkbox" id="agreement" className="rounded border-gray-300 text-secondary focus:ring-secondary/20 mr-3" />
                          <label htmlFor="agreement" className="text-gray-700">
                            I agree to the terms of service and privacy policy
                          </label>
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={handlePrev}
                            className="flex-1 border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                          >
                            Edit Details
                          </button>
                          <button
                            onClick={() => {
                              // Handle form submission
                              alert('Quote request submitted successfully!');
                            }}
                            className="flex-1 bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
                          >
                            Submit Quote Request
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Benefits */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary to-[#0d2c4f] rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Elvisco</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <ShieldCheck className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Fully Insured</div>
                        <div className="text-white/80 text-sm">$1M liability coverage</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">24/7 Support</div>
                        <div className="text-white/80 text-sm">Always available for you</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Price Match</div>
                        <div className="text-white/80 text-sm">Best price guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-primary mb-6">Need Immediate Help?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-secondary mr-3" />
                      <div>
                        <div className="text-gray-600 text-sm">Call us now</div>
                        <a href="tel:2148972420" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                          (214) 897-2420
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-gray-600 text-sm mb-2">Average response time:</div>
                      <div className="text-2xl font-bold text-secondary">30 minutes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-accent to-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Free in-home estimate</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">No hidden fees</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Binding price guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">24-hour cancellation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Questions About Your Quote?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Our moving experts are ready to help you understand every detail and customize your moving plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:2148972420"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300"
            >
              Call for Immediate Help
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


