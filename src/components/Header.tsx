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
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2" />
              <span className="font-semibold text-xs sm:text-sm">Call Us: +1 (877) 593-3790</span>
            </div>
            <div className="flex items-center">
              <Mail size={12} className="sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2" />
              <a href="mailto:Contact@Geekfixprinter.online" className="hover:text-blue-200 transition-colors text-xs sm:text-sm">
                Contact@Geekfixprinter.online
              </a>
            </div>
          </div>
          <div className="text-yellow-300 font-medium text-xs sm:text-sm mt-1 sm:mt-0">
            24/7 Support Available
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 transition-all duration-300 shadow-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <button onClick={handleLogoClick} className="focus:outline-none">
                <img src="/Printer-Logo.jpg" alt="Logo" style={{ height: '36px', marginRight: '10px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} className="sm:h-11 sm:mr-3.5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <button
                onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded text-sm xl:text-base"
              >
                Home
              </button>
              <button
                onClick={() => { navigate('/printer-support-system'); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded text-sm xl:text-base"
              >
                Printer Support
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded text-sm xl:text-base"
              >
                Services
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('printers'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
                className="text-black hover:text-blue-600 font-semibold transition-colors px-2 py-1 rounded text-sm xl:text-base"
              >
                Printer Types
              </button>
              <button
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); setIsMenuOpen(false); }}
                className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-md border border-blue-600 text-sm xl:text-base"
              >
                Get Support Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-blue-600"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/printer-support-system'); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors text-sm sm:text-base"
                >
                  Printer Support
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors text-sm sm:text-base"
                >
                  Services
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('printers'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="block text-black hover:text-blue-600 font-semibold transition-colors text-sm sm:text-base"
                >
                  Printer Types
                </button>
                <button
                  onClick={() => { setIsMenuOpen(false); navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors font-bold shadow-md border border-blue-600 w-full text-sm sm:text-base"
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