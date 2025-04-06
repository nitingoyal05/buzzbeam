import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="logo.jpg" 
              alt="Buzzbeam Media logo" 
              className="mr-2" 
              width="70" 
              height="60"
            />
            <span className="font-bold text-lg">BUZZBEAM MEDIA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 px-3 py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="https://calendly.com/mediabuzzbeam/30min" 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 ml-2"
            >
              Book call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-2">
            {navLinks.map((link) => (
              <Link 
                key={`mobile-${link.name}`}
                to={link.path} 
                className="block py-3 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="https://calendly.com/mediabuzzbeam/30min" 
              className="block mx-4 my-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Book call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;