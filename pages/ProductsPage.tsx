import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  specs?: { [key: string]: string };
}

export const productsData: Product[] = [
  {
    id: 'dk-fl-9000',
    name: 'Dekrison Explorer FL-9000',
    category: 'Flashlights',
    imageUrl: 'https://picsum.photos/seed/flashlight/800/600',
    description: 'The ultimate tactical flashlight for serious adventurers. With 9000 lumens, a rugged waterproof body, and 5 lighting modes, it\'s ready for anything.',
  },
  {
    id: 'dk-hl-350',
    name: 'Dekrison Pathfinder HL-350',
    category: 'Headlamps',
    imageUrl: 'https://picsum.photos/seed/headlamp/800/600',
    description: 'Lightweight, powerful, and comfortable. The Pathfinder HL-350 offers 350 lumens of bright, hands-free light with a rechargeable battery.',
  },
  {
    id: 'dk-cl-500',
    name: 'Dekrison Camp Lantern CL-500',
    category: 'Camping Lanterns',
    imageUrl: 'https://picsum.photos/seed/lantern/800/600',
    description: 'Illuminate your entire campsite with 360-degree light. Dimmable, long-lasting, and features a built-in power bank to charge your devices.',
  },
  {
    id: 'dk-bl-120',
    name: 'Dekrison BikeLite BL-120',
    category: 'Bike Lights',
    imageUrl: 'https://picsum.photos/seed/bikelight/800/600',
    description: 'Stay visible and safe on the road. The BikeLite BL-120 is a super-bright, USB-rechargeable light set for any cyclist.',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <span className="text-sm text-gray-500 dark:text-gray-400">{product.category}</span>
      <h3 className="text-xl font-bold text-[#0A2342] dark:text-white mt-1 mb-2">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden flex-grow">{product.description}</p>
      <div className="mt-auto text-right">
        <Link to={`/products/${product.id}`} className="bg-[#0A2342] text-white px-4 py-2 rounded-md hover:bg-[#FFD447] hover:text-[#0A2342] dark:bg-[#FFD447] dark:text-[#0A2342] dark:hover:bg-yellow-300 transition-colors font-semibold">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] dark:bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A2342] dark:text-white">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
            Engineered for performance, built for adventure. Explore our range of premium lighting solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProductsPage;