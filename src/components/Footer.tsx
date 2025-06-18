import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              AllitExpert
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Transforming businesses through expert consulting and innovative solutions. 
              Partner with us to unlock your organization's full potential.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors">
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experts')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Experts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 sm:mr-3 text-blue-400 sm:w-4.5 sm:h-4.5" size={18} />
                <a href="mailto:Contact@Geekfixprinter.online" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">
                  Contact@Geekfixprinter.online
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 sm:mr-3 text-blue-400 sm:w-4.5 sm:h-4.5" size={18} />
                <a href="tel:+18775933790" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">
                  +1 (877) 593-3790
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 sm:mr-3 text-blue-400 mt-1 sm:w-4.5 sm:h-4.5" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-0">
              © 2024 AllitExpert. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;