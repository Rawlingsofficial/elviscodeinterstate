// File: src/app/about/history/page.tsx
import { Calendar, Trophy, Truck, Users, MapPin, Award, TrendingUp, Building } from 'lucide-react';

export default function CompanyHistoryPage() {
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Elvisco De Interstate was founded with just 2 trucks and a vision to revolutionize long-distance moving services.',
      icon: Building,
      achievements: ['Started with 2 moving trucks', 'First office established', 'Served 3 states'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      year: '2012',
      title: 'First Major Expansion',
      description: 'Expanded fleet to 10 trucks and increased service area to cover the entire East Coast.',
      icon: Truck,
      achievements: ['Fleet expanded to 10 trucks', 'Covered entire East Coast', 'Hired first 20 employees'],
      color: 'from-emerald-600 to-teal-500'
    },
    {
      year: '2015',
      title: 'National Recognition',
      description: 'Received "Rising Star in Logistics" award and expanded services nationwide.',
      icon: Trophy,
      achievements: ['National service coverage', 'First industry award', 'Customer base reached 1,000+'],
      color: 'from-amber-600 to-orange-500'
    },
    {
      year: '2018',
      title: 'Technology Revolution',
      description: 'Launched real-time tracking platform and mobile app for enhanced customer experience.',
      icon: Award,
      achievements: ['Real-time GPS tracking', 'Mobile app launched', 'Digital quote system'],
      color: 'from-violet-600 to-purple-500'
    },
    {
      year: '2020',
      title: 'Premium Service Launch',
      description: 'Introduced premium moving packages and expanded into commercial relocation services.',
      icon: Users,
      achievements: ['Premium service tier', 'Commercial moving division', 'Climate-controlled fleet'],
      color: 'from-rose-600 to-pink-500'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as Top 10 Moving Company in the U.S. and expanded to 80+ cities.',
      icon: TrendingUp,
      achievements: ['Top 10 industry ranking', '80+ cities served', '5,000+ successful moves'],
      color: 'from-indigo-600 to-blue-500'
    }
  ];

  const stats = [
    { icon: Truck, value: '50+', label: 'Modern Trucks', description: 'GPS-equipped fleet' },
    { icon: Users, value: '80+', label: 'Team Members', description: 'Trained professionals' },
    { icon: MapPin, value: '80+', label: 'Cities Served', description: 'Nationwide coverage' },
    { icon: Trophy, value: '5K+', label: 'Successful Moves', description: '99.7% satisfaction' }
  ];

  const achievements = [
    {
      title: 'BBB Accredited Business',
      description: 'Maintaining A+ rating since 2014 for exceptional customer service and ethical practices.',
      year: '2014'
    },
    {
      title: 'Green Moving Initiative',
      description: 'Pioneered eco-friendly moving practices with biodegradable packing materials.',
      year: '2017'
    },
    {
      title: 'Safety Excellence Award',
      description: 'Recognized for outstanding safety record and driver training programs.',
      year: '2019'
    },
    {
      title: 'Customer Choice Award',
      description: 'Voted #1 in customer satisfaction among national moving companies.',
      year: '2022'
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
              <Calendar className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">EST. 2010 • 14+ YEARS OF EXCELLENCE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-secondary">Journey</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl">
              From humble beginnings to industry leadership, follow our journey of growth, innovation, 
              and commitment to transforming the moving experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-br from-primary/10 to-primary/5">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-primary mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Milestone Timeline</h2>
            <p className="text-lg text-gray-600">
              Key moments that shaped our journey and defined our commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary via-secondary/50 to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white`}>
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} mt-8 lg:mt-0`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${milestone.color}`}>
                        <milestone.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 mb-6">{milestone.description}</p>
                      
                      <div className="space-y-3">
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className={`flex items-center ${index % 2 === 0 ? 'justify-end' : ''}`}>
                            {index % 2 === 0 ? (
                              <>
                                <span className="text-primary">{achievement}</span>
                                <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                <span className="text-primary">{achievement}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Recognition & Achievements</h2>
            <p className="text-lg text-gray-600">
              Awards and recognitions that validate our commitment to excellence in moving services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-accent to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-6 right-6">
                  <div className="text-3xl font-bold text-secondary/20">{achievement.year}</div>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">AWARD</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-to-r from-primary to-[#0d2c4f]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <TrendingUp className="h-5 w-5 text-secondary mr-2" />
              <span className="text-white font-medium">LOOKING AHEAD • 2025 & BEYOND</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Vision for the Future</h2>
            
            <div className="text-xl text-white/80 space-y-6 mb-12">
              <p>
                As we look to the future, Elvisco De Interstate remains committed to innovation and 
                excellence in moving services. Our roadmap includes expanding into international 
                markets, implementing AI-powered logistics optimization, and furthering our 
                sustainability initiatives.
              </p>
              <p>
                We're investing in electric vehicle fleets, augmented reality moving planning tools, 
                and enhanced customer experience platforms to continue setting new standards in 
                the moving industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">2025</div>
                <div className="text-white/80">International Expansion</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">2026</div>
                <div className="text-white/80">Electric Fleet Rollout</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">2027</div>
                <div className="text-white/80">AI Logistics Platform</div>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
            >
              Join Our Journey
            </a>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Building a Lasting Legacy</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  What began as a two-truck operation has grown into a nationwide moving service 
                  trusted by thousands. Our journey is more than just business growth—it's about 
                  building lasting relationships, creating employment opportunities, and making 
                  meaningful contributions to the communities we serve.
                </p>
                <p>
                  We take pride in knowing that we've helped families start new chapters in their 
                  lives and businesses expand their horizons. Each successful move represents not 
                  just transported belongings, but dreams realized and futures secured.
                </p>
                <p>
                  As we continue to grow, we remain grounded in our founding principles: integrity, 
                  reliability, and an unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-[#0d2c4f] rounded-3xl p-12 text-white">
                <Users className="h-16 w-16 text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    10,000+ families relocated successfully
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    500+ local businesses supported
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    80+ career opportunities created
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    $50,000+ donated to community causes
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary to-amber-500 rounded-2xl p-8 shadow-2xl">
                <div className="text-3xl font-bold text-primary mb-2">14+</div>
                <div className="text-primary font-semibold">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

