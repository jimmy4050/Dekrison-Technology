import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';
import { Lightbulb, ShieldCheck, Truck } from 'lucide-react';
// FIX: Imported Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';

const HomePage: React.FC = () => {

  // FIX: Explicitly typed with Variants to ensure correct type inference for transition properties.
  const heroContentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly typed with Variants to ensure correct type inference for transition properties.
  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-background/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
           <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
           >
            <motion.h1 
              variants={heroItemVariants}
              className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            >
              Dekrison Technology
            </motion.h1>
            <AnimatedText 
              text="Light up the wild, shine with quality." 
              className="text-xl md:text-2xl font-light mb-8 drop-shadow-md italic" 
            />
            <motion.div variants={heroItemVariants}>
              <Link to="/products" className="bg-[#FFD447] text-[#0A2342] font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 inline-block">
                Explore Our Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-12">Why Choose Dekrison?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#FFD447]/20 rounded-full mb-4">
                <Lightbulb className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0A2342] mb-2">Innovative Designs</h3>
              <p className="text-gray-600 max-w-xs">Cutting-edge technology meets user-friendly design for the ultimate lighting experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#FFD447]/20 rounded-full mb-4">
                <ShieldCheck className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0A2342] mb-2">Built to Last</h3>
              <p className="text-gray-600 max-w-xs">Rugged, durable, and reliable. Our products are tested to withstand the toughest conditions.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#FFD447]/20 rounded-full mb-4">
                <Truck className="h-10 w-10 text-[#FFD447]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0A2342] mb-2">Global Shipping</h3>
              <p className="text-gray-600 max-w-xs">We deliver quality and brightness to your doorstep, wherever you are in the world.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Us Preview */}
      <AnimatedSection className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/teamwork/800/600" alt="Team working on electronics" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">Pioneering Outdoor Illumination</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Founded in Shenzhen, the heart of technological innovation, Dekrison Technology is dedicated to creating high-performance, reliable outdoor lighting solutions. We believe that quality light is essential for every adventure.
            </p>
            <Link to="/about" className="text-[#0A2342] font-semibold hover:text-[#FFD447] transition-colors duration-300">
              Learn More About Us &rarr;
            </Link>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default HomePage;