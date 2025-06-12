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
      features: ["Wi-Fi Connection", "Network Setup", "Wireless Troubleshooting", "Router Configuration"]
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
      title: "Troubleshooting & Repair",
      description: "Comprehensive troubleshooting for all printer problems and technical repair assistance.",
      features: ["Problem Diagnosis", "Technical Repair", "Performance Issues", "Error Codes"]
    },
    {
      icon: <Printer className="text-indigo-600" size={40} />,
      title: "All Printer Brands Support",
      description: "Support for HP, Canon, Epson, Brother, Dell, Lexmark and all major printer brands.",
      features: ["HP Printers", "Canon Support", "Epson Help", "All Brands"]
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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Printer Support Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technical support for all types of printer issues. 
            Our expert technicians are available 24/7 to help you resolve any printer problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="tel:+18884046710"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Get Help Now
              </a>
            </div>
          ))}
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Printer Issues We Fix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{issue}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="tel:+18884046710"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors inline-flex items-center gap-3"
            >
              <Phone size={20} />
              Call Now for Instant Support: +1-(888) 404-6710
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;