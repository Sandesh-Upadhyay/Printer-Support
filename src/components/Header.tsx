import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

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

      <header className="sticky top-0 z-50 transition-all duration-300 shadow-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/Printer-Logo.jpg" alt="Logo" style={{ height: '44px', marginRight: '14px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
              <div className="text-2xl font-extrabold text-black tracking-wide drop-shadow-md">
                All IT Expert
              </div>
              <div className="ml-2 hidden sm:block">
                <button
                  className="text-sm font-medium text-black bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded transition-colors border border-blue-200 mr-2"
                  onClick={() => navigate('/printer-support-system')}
                >
                  Printer Support System
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('printers')}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Printer Types
              </button>
              {/* <button
                onClick={() => scrollToSection('about')}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                About
              </button> */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-md border border-blue-600"
              >
                Get Support Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:text-blue-600"
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
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('printers')}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Printer Types
                </button>
                {/* <button
                  onClick={() => scrollToSection('about')}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  About
                </button> */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-md border border-blue-600 w-full"
                >
                  Get Support Now
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/printer-support-system');
                  }}
                  className="block text-black bg-blue-100 hover:bg-blue-200 font-semibold transition-colors px-3 py-1 rounded border border-blue-200 w-full"
                >
                  Printer Support System
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