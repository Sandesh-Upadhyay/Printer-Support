import React from 'react';
import { Phone, Clock, Shield, Users, Printer } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0a1a2a] via-[#0a2a3a] to-[#0a3a4a] text-[#e0f7ff] py-20">
      {/* Printer-themed background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0a1a2a]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0a3a4a]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Printer icon (printer-themed) */}
          <div className="inline-flex items-center justify-center p-4 mb-6 bg-[#0a1a2a] rounded-full shadow-lg">
            <Printer size={48} className="text-[#e0f7ff]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Printer Customer Support
            <span className="block text-yellow-400">Phone Number</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#e0f7ff] mb-8 max-w-4xl mx-auto leading-relaxed">
            All IT Expert is the leading Independent Printer Support Service provider that 
            dedicatedly focuses on delivering World-class Technical Support for printers, 
            scanners, and photocopy machines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:+18884046710"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Call Now: +1-(888) 404-6710
            </a>
            <button 
              onClick={scrollToContact}
              className="border-2 border-[#e0f7ff] text-[#e0f7ff] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e0f7ff] hover:text-[#0a1a2a] transition-all duration-300"
            >
              Get Free Quote
            </button>
          </div>

          <div className="bg-[#0a1a2a] text-[#e0f7ff] px-6 py-3 rounded-full inline-block font-bold text-lg mb-12">
            🔥 24/7 Toll-Free Printer Support Available
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <Users className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2">50,000+</div>
            <div className="text-[#e0f7ff]">Satisfied Users</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <Clock className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-[#e0f7ff]">Support Available</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <Shield className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2">FREE</div>
            <div className="text-[#e0f7ff]">Problem Diagnosis</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <Phone className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2">99%</div>
            <div className="text-[#e0f7ff]">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;