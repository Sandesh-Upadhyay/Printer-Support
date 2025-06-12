import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PrinterTypes from './components/PrinterTypes';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Printer, Phone, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen printer-bug-theme">
      <Header />
      <Hero />
      <Services />
      <PrinterTypes />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Bottom fixed button - Modern Design */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="tel:+18884046710"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-t-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-2">
              <Printer className="text-yellow-300" size={24} />
              <span className="font-bold text-lg">Printer Support Toll Free:</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Phone className="text-yellow-300" size={20} />
              <span className="font-bold text-lg tracking-wide">+1-(888) 404-6710</span>
            </div>
          </a>
        </div>
      </div>

      {/* Right side fixed button - Modern Design */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4">
          {/* Phone Support Button */}
          <a
            href="tel:+18884046710"
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 flex items-center gap-3"
          >
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
              <Phone className="text-yellow-300" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-yellow-300">Call Now</span>
              <span className="font-bold">+1-(888) 404-6710</span>
            </div>
          </a>

          {/* Chat Support Button */}
          <button
            onClick={() => window.location.href = '#contact'}
            className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 flex items-center gap-3"
          >
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
              <MessageCircle className="text-yellow-300" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-yellow-300">Chat Now</span>
              <span className="font-bold">Live Support</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;