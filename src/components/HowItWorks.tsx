import React from 'react';
import { Phone, UserCheck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Phone className="text-blue-600" size={40} />,
      title: "Call Our Support Number",
      description: "Connect with our professional technicians by calling our support number: +1 (877) 593-3790"
    },
    {
      icon: <UserCheck className="text-green-600" size={40} />,
      title: "Connect with Professional Technician",
      description: "Our professional technicians will guide you through the process and understand your printer issues"
    },
    {
      icon: <CheckCircle className="text-purple-600" size={40} />,
      title: "Relax While We Fix It",
      description: "Our technicians will resolve your printer issues while you sit back and relax"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Professional Team will provide service in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 bg-white rounded-full shadow-md">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="tel:+18775933790"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors inline-flex items-center gap-3"
          >
            Call Now for Professional Support: +1 (877) 593-3790
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 