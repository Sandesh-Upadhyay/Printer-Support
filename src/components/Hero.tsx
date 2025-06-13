import React, { useEffect, useRef } from 'react';
import { Phone, Clock, Shield, Users, Printer, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#0a1a2a] via-[#0a2a3a] to-[#0a3a4a] text-[#e0f7ff] py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          {/* Animated Printer Icon */}
          <motion.div 
            className="inline-flex items-center justify-center p-4 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Printer size={48} className="text-white" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Printer Customer Support
            </span>
            <span className="block text-yellow-400 mt-2">Phone Number</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#e0f7ff] mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            All IT Expert is the leading Independent Printer Support Service provider that 
            dedicatedly focuses on delivering World-class Technical Support for printers, 
            scanners, and photocopy machines.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a 
              href="tel:+18884046710"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              Call Now: +1-(888) 404-6710
            </motion.a>
            <motion.button 
              onClick={scrollToContact}
              className="group border-2 border-[#e0f7ff] text-[#e0f7ff] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e0f7ff] hover:text-[#0a1a2a] transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm text-[#e0f7ff] px-6 py-3 rounded-full inline-block font-bold text-lg mb-12 border border-white/10"
          >
            🔥 24/7 Toll-Free Printer Support Available
          </motion.div>
        </motion.div>

        {/* Premium Features */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ y: -5 }}
          >
            <Users className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              50,000+
            </div>
            <div className="text-[#e0f7ff]">Satisfied Users</div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ y: -5 }}
          >
            <Clock className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              24/7
            </div>
            <div className="text-[#e0f7ff]">Support Available</div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ y: -5 }}
          >
            <Shield className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              FREE
            </div>
            <div className="text-[#e0f7ff]">Problem Diagnosis</div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
            whileHover={{ y: -5 }}
          >
            <CheckCircle className="text-yellow-400 mx-auto mb-4" size={40} />
            <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              99%
            </div>
            <div className="text-[#e0f7ff]">Customer Satisfaction</div>
          </motion.div>
        </motion.div>

        {/* Premium Features List */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            "Expert Certified Technicians",
            "Instant Remote Support",
            "All Printer Brands Support",
            "Secure Remote Access",
            "No Hidden Charges",
            "Money-Back Guarantee"
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
              whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <CheckCircle className="text-yellow-400 flex-shrink-0" size={20} />
              <span className="text-[#e0f7ff]">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;