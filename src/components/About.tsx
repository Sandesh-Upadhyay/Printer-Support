import React from 'react';
import { CheckCircle, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="text-blue-600"> AllitExpert</span>?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over a decade, we've been partnering with forward-thinking organizations 
              to solve complex challenges and unlock new opportunities for growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    Over 500 successful projects delivered across diverse industries with measurable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Hand-picked professionals with deep industry knowledge and cutting-edge expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tailored Solutions
                  </h3>
                  <p className="text-gray-600">
                    Custom-designed strategies that align with your unique goals and constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Target className="text-blue-600 mx-auto mb-4" size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Lightbulb className="text-yellow-500 mx-auto mb-4" size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Industries Served</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Users className="text-green-600 mx-auto mb-4" size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Expert Consultants</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <CheckCircle className="text-purple-600 mx-auto mb-4" size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;