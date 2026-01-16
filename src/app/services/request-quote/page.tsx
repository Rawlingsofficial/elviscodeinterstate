// File: src/app/services/request-quote/page.tsx
'use client';
import { toast } from 'sonner';
import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
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
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

// Custom form components
type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary: 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] hover:shadow-xl',
  outline: 'border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540]/5',
  secondary: 'bg-[#0A2540] text-white hover:shadow-xl',
} as const;

const Button = ({ children, variant = 'primary', className = '', disabled = false, ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: any) => (
  <div className={`bg-white rounded-2xl shadow-xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: any) => (
  <div className={`p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

const Input = ({ className = '', ...props }: any) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all ${className}`}
    {...props}
  />
);

const Label = ({ children, className = '' }: any) => (
  <label className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}>
    {children}
  </label>
);

const Checkbox = ({ checked, onChange, className = '' }: any) => (
  <div className="flex items-center">
    <div
      onClick={onChange}
      className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer ${checked ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-gray-300'} ${className}`}
    >
      {checked && <CheckCircle className="h-4 w-4 text-white" />}
    </div>
  </div>
);

const Textarea = ({ className = '', ...props }: any) => (
  <textarea
    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all ${className}`}
    {...props}
  />
);

const Select = ({ value, onChange, children, className = '' }: any) => (
  <select
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all ${className}`}
  >
    {children}
  </select>
);

const Progress = ({ value }: any) => (
  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div 
      className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-500 transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);

const Separator = () => (
  <div className="h-px bg-gray-200 my-4" />
);

const Badge = ({ children, variant = 'default', className = '' }: { children: ReactNode; variant?: 'default' | 'outline'; className?: string }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  const variants: Record<'default' | 'outline', string> = {
    default: 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A25440]',
    outline: 'border border-[#D4AF37] text-[#D4AF37]',
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default function RequestQuotePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    moveType: '',
    homeSize: '',
    movingDate: '',
    timeline: 'standard',
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    additionalServices: [] as string[],
    specialRequirements: '',
    termsAccepted: false,
  });

  const moveTypes = [
    { value: 'residential', icon: Home, label: 'Residential', description: 'House or apartment move' },
    { value: 'commercial', icon: Building, label: 'Commercial', description: 'Office or business move' },
    { value: 'long-distance', icon: Truck, label: 'Long Distance', description: 'Cross-country relocation' },
    { value: 'vehicle', icon: Car, label: 'Vehicle Shipping', description: 'Car or motorcycle transport' },
  ];

  const homeSizes = [
    { value: 'studio', label: 'Studio / 1 Bed', estimate: '$800 - $1,500' },
    { value: '2-3bed', label: '2-3 Bedroom', estimate: '$1,500 - $3,000' },
    { value: '4plus', label: '4+ Bedroom', estimate: '$3,000 - $6,000' },
    { value: 'large', label: 'Large Home', estimate: '$6,000+' },
  ];

  const additionalServices = [
    { id: 'packing', label: 'Professional Packing', price: '+$400-$800' },
    { id: 'storage', label: 'Storage Solutions', price: '+$200/month' },
    { id: 'assembly', label: 'Furniture Assembly', price: '+$150-$300' },
    { id: 'cleaning', label: 'Move-Out Cleaning', price: '+$200-$400' },
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    if (formData.homeSize === 'studio') base = 1200;
    if (formData.homeSize === '2-3bed') base = 2500;
    if (formData.homeSize === '4plus') base = 4500;
    if (formData.homeSize === 'large') base = 6500;

    const serviceCost = formData.additionalServices.length * 300;
    const distanceCost = formData.origin && formData.destination ? 500 : 0;

    return base + serviceCost + distanceCost;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToast = toast.loading('Submitting your quote request...', {
      description: 'Please wait while we process your request.',
    });
    
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit quote');
      }

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success('Quote Request Submitted!', {
        description: 'We have received your request and will contact you within 30 minutes.',
        duration: 5000,
      });

      // Redirect after a short delay
      setTimeout(() => {
        router.push('/quote-submitted');
      }, 2000);

    } catch (error: any) {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error('Submission Failed', {
        description: error.message || 'Please try again or contact us directly.',
        duration: 5000,
      });
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: 'Move Type' },
    { number: 2, title: 'Home Details' },
    { number: 3, title: 'Services' },
    { number: 4, title: 'Contact Info' },
    { number: 5, title: 'Review & Submit' },
  ];

  const progress = (step / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a3a5f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Calculator className="h-4 w-4 mr-2" />
              FREE QUOTE • NO OBLIGATION
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Get Your <span className="text-[#D4AF37]">Free Quote</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Receive a detailed, transparent moving quote in minutes. No hidden fees, just premium service pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container-custom py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                {steps.map((stepItem) => (
                  <div key={stepItem.number} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      stepItem.number <= step 
                        ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-white' 
                        : stepItem.number === step
                        ? 'border-2 border-[#D4AF37] bg-white text-[#0A2540]'
                        : 'bg-gray-100 text-gray-400'
                    } font-bold transition-all duration-300`}>
                      {stepItem.number}
                    </div>
                    <span className={`text-xs font-medium ${
                      stepItem.number <= step ? 'text-[#0A2540]' : 'text-gray-500'
                    }`}>
                      {stepItem.title}
                    </span>
                  </div>
                ))}
              </div>
              <Progress value={progress} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent>
                    {/* Step 1: Move Type */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                            What type of move do you need?
                          </h2>
                          <p className="text-gray-600">Select the type of move that best fits your needs</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {moveTypes.map((type) => (
                            <button
                              key={type.value}
                              onClick={() => {
                                handleInputChange('moveType', type.value);
                                handleNext();
                              }}
                              className={`p-6 border-2 rounded-xl text-left transition-all duration-300 ${
                                formData.moveType === type.value
                                  ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                                  : 'border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5'
                              }`}
                            >
                              <div className="flex items-start mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37] to-amber-500">
                                  <type.icon className="h-5 w-5 text-white" />
                                </div>
                              </div>
                              <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                                {type.label}
                              </h3>
                              <p className="text-gray-600 text-sm">{type.description}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Home Details */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                            What size is your home?
                          </h2>
                          <p className="text-gray-600">Select your home size for an accurate estimate</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {homeSizes.map((size) => (
                            <button
                              key={size.value}
                              onClick={() => {
                                handleInputChange('homeSize', size.value);
                                handleNext();
                              }}
                              className={`p-6 border-2 rounded-xl text-left transition-all duration-300 ${
                                formData.homeSize === size.value
                                  ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                                  : 'border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5'
                              }`}
                            >
                              <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                                {size.label}
                              </h3>
                              <Badge>{size.estimate}</Badge>
                            </button>
                          ))}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Moving Date</Label>
                            <Input
                              type="date"
                              value={formData.movingDate}
                              onChange={(e: any) => handleInputChange('movingDate', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <Label>Timeline</Label>
                            <Select
                              value={formData.timeline}
                              onChange={(e: any) => handleInputChange('timeline', e.target.value)}
                            >
                              <option value="standard">Standard (2-4 weeks)</option>
                              <option value="expedited">Expedited (1-2 weeks)</option>
                              <option value="urgent">Urgent (3-7 days)</option>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="flex justify-between pt-6">
                          <Button variant="outline" onClick={handlePrev}>
                            <ArrowLeft className="inline h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            onClick={handleNext}
                            disabled={!formData.homeSize || !formData.movingDate}
                          >
                            Next Step
                            <ArrowRight className="inline h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Additional Services */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                            Additional Services
                          </h2>
                          <p className="text-gray-600">Select any additional services you need</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {additionalServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleServiceToggle(service.id)}
                              className={`p-6 border-2 rounded-xl text-left transition-all duration-300 ${
                                formData.additionalServices.includes(service.id)
                                  ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                                  : 'border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-[#0A2540]">{service.label}</h3>
                                <Checkbox
                                  checked={formData.additionalServices.includes(service.id)}
                                  onChange={() => handleServiceToggle(service.id)}
                                />
                              </div>
                              <Badge>{service.price}</Badge>
                            </button>
                          ))}
                        </div>
                        
                        <div>
                          <Label>Special Requirements (Optional)</Label>
                          <Textarea
                            value={formData.specialRequirements}
                            onChange={(e: any) => handleInputChange('specialRequirements', e.target.value)}
                            placeholder="Any special items, parking restrictions, building access requirements, etc."
                            rows={4}
                          />
                        </div>
                        
                        <div className="flex justify-between pt-6">
                          <Button variant="outline" onClick={handlePrev}>
                            <ArrowLeft className="inline h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button onClick={handleNext}>
                            Next Step
                            <ArrowRight className="inline h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Contact Info */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                            Your Contact Information
                          </h2>
                          <p className="text-gray-600">We'll use this information to send your quote</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Full Name *</Label>
                            <Input
                              value={formData.name}
                              onChange={(e: any) => handleInputChange('name', e.target.value)}
                              placeholder="John Smith"
                            />
                          </div>
                          
                          <div>
                            <Label>Phone Number *</Label>
                            <Input
                              value={formData.phone}
                              onChange={(e: any) => handleInputChange('phone', e.target.value)}
                              placeholder="(123) 456-7890"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label>Email Address *</Label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e: any) => handleInputChange('email', e.target.value)}
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Moving From *</Label>
                            <Input
                              value={formData.origin}
                              onChange={(e: any) => handleInputChange('origin', e.target.value)}
                              placeholder="City, State or ZIP"
                            />
                          </div>
                          
                          <div>
                            <Label>Moving To *</Label>
                            <Input
                              value={formData.destination}
                              onChange={(e: any) => handleInputChange('destination', e.target.value)}
                              placeholder="City, State or ZIP"
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between pt-6">
                          <Button variant="outline" onClick={handlePrev}>
                            <ArrowLeft className="inline h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button onClick={handleNext}>
                            Review Your Quote
                            <ArrowRight className="inline h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Review & Submit */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                            Review Your Quote
                          </h2>
                          <p className="text-gray-600">Please review your information before submitting</p>
                        </div>
                        
                        <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl border p-6 space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-bold text-[#0A2540]">Move Details</h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Move Type:</span>
                                  <span className="font-semibold">
                                    {moveTypes.find(t => t.value === formData.moveType)?.label}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Home Size:</span>
                                  <span className="font-semibold">
                                    {homeSizes.find(s => s.value === formData.homeSize)?.label}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Moving Date:</span>
                                  <span className="font-semibold">
                                    {new Date(formData.movingDate).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Route:</span>
                                  <span className="font-semibold">
                                    {formData.origin} → {formData.destination}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-bold text-[#0A2540]">Additional Services</h3>
                              <div className="space-y-2">
                                {formData.additionalServices.length > 0 ? (
                                  formData.additionalServices.map(serviceId => {
                                    const service = additionalServices.find(s => s.id === serviceId);
                                    return service ? (
                                      <div key={serviceId} className="flex justify-between">
                                        <span className="text-gray-600">{service.label}:</span>
                                        <span className="font-semibold">{service.price}</span>
                                      </div>
                                    ) : null;
                                  })
                                ) : (
                                  <div className="text-gray-500">No additional services selected</div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-[#0A2540] mb-1">
                              Estimated Total: ${calculateEstimate().toLocaleString()}
                            </div>
                            <p className="text-gray-600 text-sm">Inclusive of all selected services</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.termsAccepted}
                              onChange={() => handleInputChange('termsAccepted', !formData.termsAccepted)}
                            />
                            <label className="text-sm text-gray-700">
                              I agree to the{' '}
                              <a href="/terms" className="text-[#D4AF37] hover:underline">
                                terms of service
                              </a>{' '}
                              and{' '}
                              <a href="/privacy" className="text-[#D4AF37] hover:underline">
                                privacy policy
                              </a>
                            </label>
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            <Mail className="inline h-4 w-4 mr-2" />
                            Your quote will be sent to: {formData.email || 'your email'}
                          </div>
                        </div>
                        
                        <div className="flex justify-between pt-6">
                          <Button variant="outline" onClick={handlePrev}>
                            <ArrowLeft className="inline h-4 w-4 mr-2" />
                            Edit Details
                          </Button>
                          <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting || !formData.termsAccepted}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="inline h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              'Submit Quote Request'
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Benefits */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Choose Elvisco</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                      <div>
                        <div className="font-semibold">Fully Insured</div>
                        <div className="text-white/80 text-sm">$1M liability coverage</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                      <div>
                        <div className="font-semibold">24/7 Support</div>
                        <div className="text-white/80 text-sm">Always available for you</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                      <div>
                        <div className="font-semibold">Price Match</div>
                        <div className="text-white/80 text-sm">Best price guaranteed</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-white/80 text-sm">10+ years experience</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">Need Immediate Help?</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-gray-600 text-sm mb-1">Call us now</div>
                      <a
                        href="tel:2403532854"
                        className="text-xl font-bold text-[#0A2540] hover:text-[#D4AF37] transition-colors"
                      >
                        (240) 353-2854
                      </a>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="text-gray-600 text-sm mb-1">Email us</div>
                      <a
                        href="mailto:info@elviscodeinterstate.com"
                        className="text-[#0A2540] hover:text-[#D4AF37] transition-colors break-all"
                      >
                        info@elviscodeinterstate.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">What's Included</h3>
                  
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
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Real-time tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Quote?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our moving experts are ready to help you understand every detail and customize your moving plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2403532854"
              className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0A2540] font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
            >
              Call for Immediate Help
            </a>
            <a
              href="mailto:info@elviscodeinterstate.com"
              className="bg-transparent border-2 border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

