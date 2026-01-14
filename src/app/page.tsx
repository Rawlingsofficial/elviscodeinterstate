// File: src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import CompanyHistory from '@/components/sections/CompanyHistory';
import Testimonials from '@/components/sections/Testimonials';
import RequestQuote from '@/components/sections/RequestQuote';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* About Us */}
      <AboutUs />
      
      {/* Services */}
      <Services />
      
      {/* Request Quote */}
      <RequestQuote />

      {/* Company History */}
      <CompanyHistory />
      
      {/* Testimonials */}
      <Testimonials />
      
      
      {/* FAQ */}
      <FAQ />
    </div>
  );
}

