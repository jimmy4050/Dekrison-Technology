
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2342] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Sun className="h-9 w-9 text-[#FFD447]" />
              <span className="text-2xl font-bold text-white">Dekrison Technology</span>
            </Link>
            <p className="text-gray-400 italic">"Light up the wild, shine with quality."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#FFD447] transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-[#FFD447] transition-colors">Products</Link></li>
              <li><Link to="/values" className="hover:text-[#FFD447] transition-colors">Core Values</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFD447] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#FFD447] transition-colors"><Linkedin size={24} /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#FFD447] transition-colors"><Facebook size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#FFD447] transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          {/* FIX: Corrected copyright year to be the current year. */}
          <p>&copy; {new Date().getFullYear()} Shenzhen Dekrison Technology Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
