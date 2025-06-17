import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to transform your business? Get in touch with our professionals and 
            discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Our team is ready to discuss your project requirements and provide 
                tailored solutions that drive results. Reach out today for a professional consultation.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Mail className="text-blue-600 sm:w-6 sm:h-6" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</div>
                  <a href="mailto:Contact@Geekfixprinter.online" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                    Contact@Geekfixprinter.online
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Phone className="text-blue-600 sm:w-6 sm:h-6" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</div>
                  <a href="tel:+18775933790" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                    +1 (877) 593-3790
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <MapPin className="text-blue-600 sm:w-6 sm:h-6" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</div>
                  <div className="text-gray-600 text-sm sm:text-base">123 Business Ave, Suite 100<br />New York, NY 10001</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white relative">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-3xl font-bold">
                24/7
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Professional Consultation</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Schedule a 30-minute consultation with one of our professionals to discuss your project needs.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
                  Book Now
                </button>
                <a href="tel:+18775933790" className="text-xl sm:text-2xl font-bold hover:text-blue-200 transition-colors">
                  +1 (877) 593-3790
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4 sm:w-16 sm:h-16" size={48} />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Thank You!</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="business-strategy">Business Strategy</option>
                      <option value="financial-consulting">Financial Consulting</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="performance-optimization">Performance Optimization</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="data-analytics">Data Analytics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project requirements and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;