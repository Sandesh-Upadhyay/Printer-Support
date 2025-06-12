import React from 'react';
import { Linkedin, Mail, Star } from 'lucide-react';

const Experts = () => {
  const experts = [
    {
      name: "Sarah Johnson",
      title: "Strategic Business Consultant",
      expertise: "Digital Transformation & Growth Strategy",
      experience: "15+ years",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former McKinsey partner specializing in digital transformation and operational excellence.",
      specialties: ["Digital Strategy", "Process Optimization", "Change Management"]
    },
    {
      name: "Michael Chen",
      title: "Financial Advisory Expert",
      expertise: "Investment Strategy & Risk Management",
      experience: "12+ years",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Goldman Sachs executive with expertise in corporate finance and investment strategy.",
      specialties: ["Investment Planning", "Risk Analysis", "Corporate Finance"]
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Technology Innovation Lead",
      expertise: "AI & Data Analytics Solutions",
      experience: "10+ years",
      rating: 5.0,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "PhD in Computer Science with extensive experience in AI implementation and data strategy.",
      specialties: ["Machine Learning", "Data Architecture", "AI Strategy"]
    },
    {
      name: "David Williams",
      title: "Operations Excellence Director",
      expertise: "Lean Six Sigma & Process Improvement",
      experience: "18+ years",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Certified Master Black Belt with proven track record in operational transformation.",
      specialties: ["Lean Manufacturing", "Quality Management", "Supply Chain"]
    }
  ];

  return (
    <section id="experts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders and subject matter experts ready to tackle your most complex challenges 
            with proven methodologies and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                  <Star className="text-yellow-400 fill-current mr-1" size={14} />
                  <span className="text-sm font-semibold">{expert.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {expert.name}
                </h3>
                
                <div className="text-blue-600 font-semibold mb-2">
                  {expert.title}
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  {expert.expertise}
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {expert.bio}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-1">
                    {expert.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {expert.experience}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;