import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Printer, Users, Clock, Gift, Award, MessageCircle, Phone, CheckCircle } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full bg-white">
      {/* Removed animated background elements for a clean white look */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 w-full">
          {/* Animated Printer Icon */}
          <motion.div 
            className="inline-flex items-center justify-center p-3 sm:p-4 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Printer size={32} className="sm:w-12 sm:h-12 text-white" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-black text-center px-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Printer Customer Support
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-black mb-6 sm:mb-8 w-full mx-auto leading-relaxed px-4 sm:px-8 lg:px-16 max-w-4xl"
          >
            All IT Expert is the leading Independent Printer Support Service provider that 
            dedicatedly focuses on delivering World-class Technical Support for printers, 
            scanners, and photocopy machines.
          </motion.p>

          {/* CTA Buttons Section */}
          <motion.div variants={itemVariants} className="w-full mb-12 sm:mb-16 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="tel:+18775933790"
                  className="relative flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-slate-900 rounded-lg"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-emerald-400" size={24} />
                  <span className="text-base sm:text-lg font-medium text-white group-hover:text-emerald-200 transition-colors">
                    Call Now: +1 (877) 593-3790
                  </span>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={() => window.location.href = '#contact'}
                  className="relative flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-slate-900 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-400" size={24} />
                  <span className="text-base sm:text-lg font-medium text-white group-hover:text-teal-200 transition-colors">
                    Chat with Expert
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full px-2 sm:px-4 mx-auto mt-12 sm:mt-16 lg:mt-20"
          >
            {[
              { 
                number: "24/7", 
                text: "Support Available", 
                icon: <Clock className="text-sky-600" size={24} />
              },
              { 
                number: "15k+", 
                text: "Issues Resolved", 
                icon: <CheckCircle className="text-sky-600" size={24} />
              },
              { 
                number: "99%", 
                text: "Customer Satisfaction", 
                icon: <Award className="text-sky-600" size={24} />
              },
              { 
                number: "<2h", 
                text: "Response Time", 
                icon: <Clock className="text-sky-600" size={24} />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-100 hover:border-sky-200 transition-all duration-300">
                  <div className="mb-2 sm:mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 animate-float"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Row */}
          <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-12 sm:mt-16 px-2">
            {[
              'Professional Remote Support',
              'All Printer Brands Support',
              'Secure Remote Access',
              'No Hidden Charges',
              'Quality Service Guarantee'
            ].map((feature, idx) => (
              <motion.span
                key={idx}
                className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Premium Features */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full px-2 sm:px-4 mx-auto mt-12 sm:mt-16"
          >
            {[
              { number: "50,000+", text: "Satisfied Users", icon: <Users className="text-yellow-400" size={32} /> },
              { number: "24/7", text: "Support Available", icon: <Clock className="text-yellow-400" size={32} /> },
              { number: "Professional", text: "Problem Diagnosis", icon: <Gift className="text-yellow-400" size={32} /> },
              { number: "99%", text: "Customer Satisfaction", icon: <Award className="text-yellow-400" size={32} /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 lg:p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 leading-tight">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Features List */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full px-2"
          >
            {[
              "Professional Certified Technicians",
              "Professional Remote Support",
              "All Printer Brands Support",
              "Secure Remote Access",
              "No Hidden Charges",
              "Quality Service Guarantee"
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-sky-500/10 to-sky-700/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl border border-sky-200/20 hover:border-sky-300/30 transition-all duration-300"
                whileHover={{ x: 5, backgroundColor: "rgba(14, 165, 233, 0.15)" }}
              >
                <Printer className="text-sky-500 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base lg:text-lg text-sky-900 font-semibold">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;