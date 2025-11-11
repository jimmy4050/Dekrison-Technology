import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsZoomed(false);
      }
    };
    
    if (isZoomed) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEsc);
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isZoomed]);


  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-[#0A2342]">Product Not Found</h1>
        <p className="text-gray-600 mt-4">We couldn't find the product you're looking for.</p>
        <Link to="/products" className="mt-8 inline-block bg-[#0A2342] text-white px-6 py-3 rounded-md hover:bg-[#FFD447] hover:text-[#0A2342] transition-colors font-semibold">
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} zoomed image`}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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

      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <Link to="/products" className="flex items-center text-gray-600 hover:text-[#0A2342] font-semibold transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Products
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div 
                className="aspect-square bg-gray-100 rounded-lg shadow-lg overflow-hidden group cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
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
                <span className="text-sm font-semibold text-gray-500 uppercase">{product.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mt-2">{product.name}</h1>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
              
              <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Key Specifications</h3>
                  <ul className="space-y-3">
                      {Object.entries(specs).map(([key, value]) => (
                          <li key={key} className="flex items-center text-gray-600">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="font-semibold mr-2">{key}:</span> {value}
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
