import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
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
              <button onClick={handleLogoClick} className="focus:outline-none">
                <img src="/Printer-Logo.jpg" alt="Logo" style={{ height: '44px', marginRight: '14px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Home
              </button>
              <button
                onClick={() => { navigate('/printer-support-system'); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Printer Support
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Services
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('printers'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded"
              >
                Printer Types
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
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
                  onClick={() => { setIsMenuOpen(false); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/printer-support-system'); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Printer Support
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('printers'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors"
                >
                  Printer Types
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-md border border-blue-600 w-full"
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