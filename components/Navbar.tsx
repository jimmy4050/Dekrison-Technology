import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Company Profile', path: '/profile' },
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

  const linkClasses = "text-gray-700 dark:text-gray-300 hover:text-[#FFD447] dark:hover:text-[#FFD447] transition-colors duration-300 py-2";

  return (
    <header className="bg-white/90 dark:bg-[#0A2342]/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm dark:shadow-gray-800">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-[#FFD447]" />
          <span className="text-2xl font-bold text-[#0A2342] dark:text-white">Dekrison</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
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
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-[#0A2342] dark:text-white">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-white dark:bg-[#0A2342] flex flex-col items-center space-y-4 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
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
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;