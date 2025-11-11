import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Building, Handshake, ShieldCheck, Briefcase, Globe } from 'lucide-react';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 mt-2 p-4 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-[#0A2342] dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

const CompanyProfilePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      {/* Page Header */}
      <div className="relative bg-cover bg-center text-white py-24 md:py-32" style={{ backgroundImage: "url('https://picsum.photos/seed/circuits/1920/1080')" }}>
        <div className="absolute inset-0 bg-[#0A2342]/70"></div>
        <div className="relative container mx-auto px-6 text-center">
            <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">Company Profile</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-sm">
                    Your trusted partner in professional-grade outdoor lighting solutions.
                </p>
            </AnimatedSection>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 md:py-24 bg-[#F8F9FA] dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16">
            <AnimatedSection>
              <InfoCard icon={<Building className="h-8 w-8 text-[#FFD447]" />} title="Who We Are">
                Shenzhen Dekrison Technology Co., Ltd is a professional supplier focusing on the design, development, and export of high-quality LED lighting products, especially camping lights, flashlights, and portable outdoor illumination equipment.
              </InfoCard>
            </AnimatedSection>
            
            <AnimatedSection>
              <InfoCard icon={<Handshake className="h-8 w-8 text-[#FFD447]" />} title="Our Partnership Model">
                Although we do not own a factory ourselves, we have established long-term partnerships with experienced and certified manufacturers in China. This enables us to ensure stable quality, flexible production capacity, and competitive prices for our clients.
              </InfoCard>
            </AnimatedSection>

            <AnimatedSection>
              <InfoCard icon={<ShieldCheck className="h-8 w-8 text-[#FFD447]" />} title="Quality & Compliance">
                All our products comply with international certifications such as CE, FCC, and RoHS, which guarantee both product safety and compliance with global market requirements.
              </InfoCard>
            </AnimatedSection>

            <AnimatedSection>
              <InfoCard icon={<Briefcase className="h-8 w-8 text-[#FFD447]" />} title="Our Expertise">
                With years of experience in product sourcing, quality inspection, and international trade, Dekrison aims to provide our customers with reliable lighting solutions, professional communication, and responsive service.
              </InfoCard>
            </AnimatedSection>

            <AnimatedSection>
              <InfoCard icon={<Globe className="h-8 w-8 text-[#FFD447]" />} title="Global Commitment">
                We are committed to building mutually beneficial partnerships with clients worldwide—from small distributors to established outdoor brands—and to helping more people enjoy safe and inspiring outdoor experiences through light.
              </InfoCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
