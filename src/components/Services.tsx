import React from 'react';
import { 
  Printer, 
  Settings, 
  Wifi, 
  Download, 
  AlertTriangle, 
  Wrench,
  CheckCircle,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="text-blue-600" size={40} />,
      title: "Printer Setup & Installation",
      description: "Complete printer setup support for Windows, MAC OS, and Chromebook. Network and wireless printer configuration.",
      features: ["Windows Installation", "MAC OS Setup", "Network Configuration", "Wireless Setup"]
    },
    {
      icon: <Wifi className="text-green-600" size={40} />,
      title: "Network & Connectivity Issues",
      description: "Resolve Wi-Fi connection problems, network printer setup, and wireless connectivity issues.",
      features: ["Wi-Fi Connection", "Network Setup", "Wireless Printer Help", "Router Configuration"]
    },
    {
      icon: <Download className="text-purple-600" size={40} />,
      title: "Driver Installation & Updates",
      description: "Download and install latest printer drivers, software updates, and firmware upgrades.",
      features: ["Driver Installation", "Software Updates", "Firmware Upgrade", "Compatibility Check"]
    },
    {
      icon: <AlertTriangle className="text-red-600" size={40} />,
      title: "Printer Error Resolution",
      description: "Fix printer offline issues, paper jam problems, spooler errors, and printing quality issues.",
      features: ["Offline Issues", "Paper Jam Fix", "Spooler Errors", "Quality Problems"]
    },
    {
      icon: <Wrench className="text-yellow-600" size={40} />,
      title: "Printer Help & Support",
      description: "Comprehensive printer help for all printer problems and technical support assistance.",
      features: ["Problem Diagnosis", "Technical Support", "Performance Issues", "Error Codes"]
    },
    {
      icon: <Printer className="text-indigo-600" size={40} />,
      title: "All Printer Support",
      description: "Support for all major printer brands and models.",
      features: ["Printer Help", "Printer Support", "Printer Assistance", "All Models"]
    }
  ];

  const commonIssues = [
    "Cannot download printer software",
    "How to activate a new printer",
    "Computer issues caused by printer",
    "How to install printer on MAC?",
    "Printer spooler error",
    "Print quality issues",
    "Diagnose paper feed issues",
    "Faded or no print problem",
    "Update printer firmware",
    "Connecting printer with Wi-Fi",
    "Download & install printer software",
    "Install latest printer drivers"
  ];

  const handleContact = (method: 'call' | 'email') => {
    if (method === 'call') {
      window.location.href = 'tel:+18775933790';
    } else {
      window.location.href = 'mailto:Contact@Geekfixprinter.online';
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
            Our Printer Support Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-serif px-4">
            We provide comprehensive technical support for all types of printer issues. 
            Our professional technicians are available 24/7 to help you resolve any printer problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-serif text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600 font-serif">
                    <CheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleContact('call')}
                className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg hover:from-sky-600 hover:to-indigo-600 hover:scale-105 transition-all duration-300 text-sm sm:text-lg"
              >
                <Phone size={16} className="sm:w-4.5 sm:h-4.5" />
                Get Help Now
              </button>
            </div>
          ))}
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center font-serif">
            Common Printer Issues We Fix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {commonIssues.map((issue, index) => (
              <button 
                key={index} 
                onClick={() => handleContact('call')}
                className="w-full flex items-center bg-gradient-to-r from-white via-blue-50 to-indigo-50 border border-blue-100 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 mb-2"
              >
                <CheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0" size={16} />
                <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{issue}</span>
              </button>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={() => handleContact('call')}
              className="w-full sm:w-auto contact-button bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mx-auto rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              Call Now for Professional Support: +1 (877) 593-3790
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;