import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
  src="/logo.jpeg" 
  alt="Ostin Logo" 
  className="h-16 max-w-xl object-contain" 
/>

          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition">Home</a>
            <a href="#packages" className="text-gray-700 hover:text-purple-600 transition">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition py-2">Home</a>
              <a href="#packages" className="text-gray-700 hover:text-purple-600 transition py-2">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
