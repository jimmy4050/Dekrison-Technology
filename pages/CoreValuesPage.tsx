
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Gem, Lightbulb, Shield, Users } from 'lucide-react';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center h-full">
    <div className="inline-block p-5 bg-[#FFD447]/20 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#0A2342] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CoreValuesPage: React.FC = () => {
  return (
    <div className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A2342]">Our Core Values</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            The principles that guide our work, our partnerships, and our commitment to you.
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Shield className="h-10 w-10 text-[#FFD447]" />}
            title="Integrity & Reliability"
            description="We keep promises and value long-term trust. Our products perform when you need them most."
          />
          <ValueCard 
            icon={<Lightbulb className="h-10 w-10 text-[#FFD447]" />}
            title="Innovation & Design"
            description="We focus on user experience and product aesthetics, creating smart, user-centric lighting solutions."
          />
          <ValueCard 
            icon={<Gem className="h-10 w-10 text-[#FFD447]" />}
            title="Quality First"
            description="Every item is tested and certified before shipment. Our focus is on exceptional, long-lasting quality."
          />
          <ValueCard 
            icon={<Users className="h-10 w-10 text-[#FFD447]" />}
            title="Customer Success"
            description="Your adventure is our priority. Your satisfaction and success are the true measures of our own."
          />
        </AnimatedSection>

        <AnimatedSection className="mt-24 text-center">
          <p className="text-3xl font-semibold text-[#0A2342] italic">"Light up the wild, shine with quality."</p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CoreValuesPage;
