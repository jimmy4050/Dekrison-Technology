import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Eye, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      {/* Page Header */}
      <div className="bg-[#0A2342] text-white py-20 md:py-24 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dekrison Technology</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Innovating the way you experience light in the great outdoors.
          </p>
        </AnimatedSection>
      </div>

      {/* Our Story Section */}
      <AnimatedSection className="py-16 md:py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              Dekrison Technology was born from a passion for adventure and a recognition of the need for reliable, high-quality outdoor lighting. Based in the global tech hub of Shenzhen, China, we've dedicated ourselves to engineering lighting products that don't just illuminate—they inspire confidence.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              From rugged flashlights that pierce the darkest nights to ambient camping lights that create a home away from home, every Dekrison product is a testament to our commitment to quality, innovation, and the spirit of exploration.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/shenzhen-skyline/800/600" 
              alt="Mountain landscape at night" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-16 md:py-20 bg-[#F8F9FA] dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="inline-block p-4 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2342] dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower adventurers, workers, and families with dependable, innovative, and beautifully designed lighting solutions that enhance safety and enjoyment in any environment.
              </p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full mb-4">
                <Eye className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2342] dark:text-white mb-3">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be the world's most trusted brand in portable lighting, known for our unwavering commitment to quality and our passion for lighting up the world's adventures.
              </p>
            </div>
            <div className="p-6">
               <div className="inline-block p-4 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2342] dark:text-white mb-3">Our Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A diverse group of engineers, designers, and outdoor enthusiasts united by a single goal: creating products we're proud to use on our own adventures.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;