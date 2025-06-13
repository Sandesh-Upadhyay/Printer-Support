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
        className="w-full px-4 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16 w-full">
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
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Printer Customer Support
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-black mb-8 w-full mx-auto leading-relaxed"
          >
            All IT Expert is the leading Independent Printer Support Service provider that 
            dedicatedly focuses on delivering World-class Technical Support for printers, 
            scanners, and photocopy machines.
          </motion.p>

          {/* CTA Buttons Section */}
          <motion.div variants={itemVariants} className="w-full mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="tel:+18884046710"
                  className="relative flex items-center justify-center w-full px-8 py-4 bg-slate-900 rounded-lg"
                >
                  <Phone className="w-6 h-6 mr-2 text-emerald-400" size={24} />
                  <span className="text-lg font-medium text-white group-hover:text-emerald-200 transition-colors">
                    Call Now: +1-(888) 404-6710
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
                  className="relative flex items-center justify-center w-full px-8 py-4 bg-slate-900 rounded-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2 text-teal-400" size={24} />
                  <span className="text-lg font-medium text-white group-hover:text-teal-200 transition-colors">
                    Chat with Expert
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-4 mx-auto mt-20"
          >
            {[
              { 
                number: "24/7", 
                text: "Support Available", 
                gradient: "from-emerald-500 to-green-500",
                bgColor: "bg-emerald-500/10",
                icon: <Clock className="text-emerald-500" size={32} />
              },
              { 
                number: "15k+", 
                text: "Issues Resolved", 
                gradient: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-500/10",
                icon: <CheckCircle className="text-blue-500" size={32} />
              },
              { 
                number: "99%", 
                text: "Customer Satisfaction", 
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10",
                icon: <Award className="text-purple-500" size={32} />
              },
              { 
                number: "<2h", 
                text: "Response Time", 
                gradient: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500/10",
                icon: <Clock className="text-orange-500" size={32} />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
                <div className={`relative ${stat.bgColor} backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20`}>
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.h3 
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 animate-float`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-700 font-medium">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Row */}
          <div className="w-full flex flex-wrap justify-center gap-4 mt-16">
            {[
              'Instant Remote Support',
              'All Printer Brands Support',
              'Secure Remote Access',
              'No Hidden Charges',
              'Money-Back Guarantee'
            ].map((feature, idx) => (
              <motion.span
                key={idx}
                className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-4 mx-auto mt-16"
          >
            {[
              { number: "50,000+", text: "Satisfied Users", icon: <Users className="text-yellow-400" size={40} /> },
              { number: "24/7", text: "Support Available", icon: <Clock className="text-yellow-400" size={40} /> },
              { number: "FREE", text: "Problem Diagnosis", icon: <Gift className="text-yellow-400" size={40} /> },
              { number: "99%", text: "Customer Satisfaction", icon: <Award className="text-yellow-400" size={40} /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors"
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                  {stat.number}
                </div>
                <div className="text-gray-700">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Features List */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
                className="flex items-center gap-4 bg-gradient-to-r from-sky-500/10 to-sky-700/10 backdrop-blur-sm p-6 rounded-xl border border-sky-200/20 hover:border-sky-300/30 transition-all duration-300"
                whileHover={{ x: 5, backgroundColor: "rgba(14, 165, 233, 0.15)" }}
              >
                <Printer className="text-sky-500 flex-shrink-0" size={24} />
                <span className="text-sky-900 font-semibold">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;