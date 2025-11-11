
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Core Values', path: '/values' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    color: '#FFD447',
    fontWeight: '600',
  };

  const linkClasses = "text-gray-700 hover:text-[#FFD447] transition-colors duration-300 py-2";

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-[#FFD447]" />
          <span className="text-2xl font-bold text-[#0A2342]">Dekrison</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={linkClasses}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-[#0A2342]">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white flex flex-col items-center space-y-2 pb-6 pt-2 border-t border-gray-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={linkClasses + " text-lg"}
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
