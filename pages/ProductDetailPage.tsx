import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from './ProductsPage';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowLeft, CheckCircle, X } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === id);
  const [isZoomed, setIsZoomed] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsZoomed(false);
      }
      // Basic focus trap for the modal.
      if (isZoomed && event.key === 'Tab') {
        event.preventDefault(); // Prevent tabbing out of the modal.
        closeButtonRef.current?.focus();
      }
    };

    if (isZoomed) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      // Allow the modal to render and animate before setting focus.
      const timerId = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(timerId);
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
        // Restore focus to the element that opened the modal.
        triggerRef.current?.focus();
      };
    }
  }, [isZoomed]);


  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-[#0A2342] dark:text-white">Product Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">We couldn't find the product you're looking for.</p>
        <Link to="/products" className="mt-8 inline-block bg-[#0A2342] text-white px-6 py-3 rounded-md hover:bg-[#FFD447] hover:text-[#0A2342] dark:bg-[#FFD447] dark:text-[#0A2342] dark:hover:bg-yellow-300 transition-colors font-semibold">
          Back to Products
        </Link>
      </div>
    );
  }

  const defaultSpecs = {
    'Lumens': 'Varies',
    'Battery': 'Rechargeable Li-ion',
    'Waterproof': 'IPX7 Rated',
    'Modes': 'High, Medium, Low, Strobe',
  };

  const specs = product.specs || defaultSpecs;

  const handleEnquiry = () => {
    navigate('/contact');
  };

  return (
    <>
      <AnimatePresence>
        {isZoomed && product && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} zoomed image`}
          >
            <button
              ref={closeButtonRef}
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              aria-label="Close image view"
            >
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <Link to="/products" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#0A2342] dark:hover:text-white font-semibold transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Products
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div 
                ref={triggerRef}
                className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsZoomed(true); } }}
                tabIndex={0}
                role="button"
                aria-label={`View larger image of ${product.name}`}
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" 
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">{product.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] dark:text-white mt-2">{product.name}</h1>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
              
              <div className="border-t dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white mb-4">Key Specifications</h3>
                  <ul className="space-y-3">
                      {Object.entries(specs).map(([key, value]) => (
                          <li key={key} className="flex items-center text-gray-600 dark:text-gray-400">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="font-semibold mr-2 text-gray-700 dark:text-gray-300">{key}:</span> {value}
                          </li>
                      ))}
                  </ul>
              </div>

              <button 
                onClick={handleEnquiry}
                className="w-full bg-[#FFD447] text-[#0A2342] font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 shadow-md"
              >
                Make an Enquiry
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;