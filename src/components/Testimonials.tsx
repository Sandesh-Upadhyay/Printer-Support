import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rob Miller",
      content: "I'm happy with your service so far & don't have any ideas. Thanks for being there to fix any problems that may arise. Take Care n God Bless.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Rob+Miller&background=0D8ABC&color=fff"
    },
    {
      name: "David G",
      content: "I am happy that the professional who helped me was very nice and did a very good job in fixing my problem. Thank you.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=David+G&background=0D8ABC&color=fff"
    },
    {
      name: "Mary Jane",
      content: "As usual, your technician was great. She was extremely competent and polite as well. Thank you very much.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Mary+Jane&background=0D8ABC&color=fff"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our satisfied customers have to say about our printer support services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <Quote className="text-blue-600 mx-auto mb-6" size={48} />
              
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="tel:+18884046710"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors inline-flex items-center gap-3"
          >
            Call Now for Instant Support: +1-(888) 404-6710
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;