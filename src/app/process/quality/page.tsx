// File: src/app/process/quality/page.tsx
import {
  Shield,
  Award,
  CheckCircle,
  Users,
  ClipboardCheck,
  BarChart,
  FileText,
  Truck,
  Package,
  Home,
  Target,
  Star,
  Clock
} from 'lucide-react';

export default function QualityPage() {
  const qualityStandards = [
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Comprehensive safety measures for both your belongings and our team.',
      standards: ['OSHA compliance', 'Equipment inspection', 'Safety training'],
      certification: 'ISO 45001 Certified'
    },
    {
      icon: Package,
      title: 'Packing Excellence',
      description: 'Premium materials and techniques for maximum protection.',
      standards: ['Fragile item protocols', 'Climate-sensitive handling', 'Custom crating'],
      certification: 'Certified Packers'
    },
    {
      icon: Truck,
      title: 'Transport Standards',
      description: 'State-of-the-art equipment and maintenance for safe transit.',
      standards: ['GPS tracking', 'Climate control', 'Regular maintenance'],
      certification: 'DOT Certified'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Continuous training and certification for all team members.',
      standards: ['Background checks', 'Skill certification', 'Customer service training'],
      certification: 'Certified Movers'
    }
  ];

  const qualityMetrics = [
    {
      metric: '99.7%',
      label: 'On-Time Delivery',
      description: 'Successful deliveries within promised timeframe',
      icon: CheckCircle,
      color: 'from-emerald-500 to-teal-400'
    },
    {
      metric: '100%',
      label: 'Damage-Free Rate',
      description: 'Items delivered without damage or loss',
      icon: Shield,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      metric: '4.9/5',
      label: 'Customer Rating',
      description: 'Average customer satisfaction score',
      icon: Star,
      color: 'from-amber-500 to-orange-400'
    },
    {
      metric: '24h',
      label: 'Response Time',
      description: 'Average time to address inquiries',
      icon: Clock,
      color: 'from-violet-500 to-purple-400'
    }
  ];

  const inspectionProcess = [
    {
      phase: 'Pre-Move',
      checks: ['Equipment inspection', 'Team briefing', 'Route verification'],
      icon: ClipboardCheck
    },
    {
      phase: 'During Packing',
      checks: ['Material quality check', 'Packing technique audit', 'Inventory verification'],
      icon: Package
    },
    {
      phase: 'During Transit',
      checks: ['GPS monitoring', 'Temperature control', 'Security checks'],
      icon: Truck
    },
    {
      phase: 'Post-Delivery',
      checks: ['Damage assessment', 'Customer feedback', 'Service evaluation'],
      icon: CheckCircle
    }
  ];

  const certifications = [
    {
      name: 'BBB Accreditation',
      level: 'A+ Rating',
      valid: 'Since 2014',
      description: 'Highest rating for ethical business practices'
    },
    {
      name: 'DOT Certified',
      level: 'Full Compliance',
      valid: 'Annually Renewed',
      description: 'Department of Transportation certification'
    },
    {
      name: 'ISO 9001',
      level: 'Quality Management',
      valid: 'Certified 2022',
      description: 'International quality standards certification'
    },
    {
      name: 'EPA SmartWay',
      level: 'Environmental Partner',
      valid: 'Since 2018',
      description: 'Environmental performance recognition'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-[#0d2c4f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Award className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">PREMIUM STANDARDS • CERTIFIED EXCELLENCE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quality <span className="text-secondary">Assurance</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Our commitment to excellence is embedded in every aspect of our service, 
              from initial consultation to final delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${metric.color}`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{metric.metric}</div>
                <div className="font-semibold text-primary mb-2">{metric.label}</div>
                <div className="text-gray-500 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Quality Standards</h2>
            <p className="text-lg text-gray-600">
              Rigorous protocols and continuous improvement ensure exceptional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                    <standard.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full">
                    <span className="text-secondary font-semibold text-sm">{standard.certification}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">{standard.title}</h3>
                <p className="text-gray-600 mb-6">{standard.description}</p>
                
                <div className="space-y-3">
                  {standard.standards.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">4-Phase Quality Inspection</h2>
            <p className="text-lg text-gray-600">
              Multiple checkpoints ensure quality at every stage of your move.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary via-secondary/50 to-transparent hidden lg:block"></div>

            {/* Process Steps */}
            <div className="space-y-12">
              {inspectionProcess.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Phase Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-gradient-to-b from-white to-accent rounded-3xl p-8 shadow-xl">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mr-4">
                          <phase.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{phase.phase}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {phase.checks.map((check, idx) => (
                          <div key={idx} className="flex items-center text-primary">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            <span>{check}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phase Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Accreditations & Certifications</h2>
            <p className="text-lg text-gray-600">
              Official recognition of our commitment to industry standards and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{cert.name}</h3>
                <div className="text-secondary font-semibold mb-2">{cert.level}</div>
                <div className="text-gray-500 text-sm mb-4">{cert.valid}</div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-secondary mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-8">Continuous Improvement</h2>
            
            <div className="text-xl text-white/80 space-y-6 mb-12">
              <p>
                Quality is not a destination but a journey. We continuously collect feedback, 
                analyze performance metrics, and implement improvements to enhance our services.
              </p>
              <p>
                Our quality assurance team meets weekly to review customer feedback, 
                incident reports, and performance data, ensuring we're always raising our standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <BarChart className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-white font-semibold">Monthly Performance Reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-white font-semibold">Customer Feedback Analysis</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <FileText className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-white font-semibold">Process Optimization</div>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
            >
              Experience Premium Quality
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

