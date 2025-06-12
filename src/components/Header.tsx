import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span className="font-semibold">Toll Free: +1-(888) 404-6710</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>info@allitexpert.com</span>
            </div>
          </div>
          <div className="text-yellow-300 font-medium">
            24/7 Support Available
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                All IT Expert
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Printer Support Services
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('printers')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Printer Types
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Get Support Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-6 space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('printers')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Printer Types
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold"
                >
                  Get Support Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;