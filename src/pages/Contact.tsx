
import { useState } from 'react';
import { MapPin, Contact, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowThankYou(true);
    setFormData({ name: '', email: '', message: '' });

    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };

  const contactInfo = [
    {
      title: 'Address',
      details: ['Vau i Dejes - Koman Road', '3.8KM from the Cathedral, main ex'],
      icon: '📍'
    },
    {
      title: 'Phone',
      details: ['+355 68 320 4350'],
      icon: '📞'
    },
    {
      title: 'Email',
      details: ['campingprincipata@gmail.com'],
      icon: '✉️'
    },
    {
      title: 'Operating Hours',
      details: ['Daily: 8:00 AM - 8:00 PM', 'Emergency: 24/7'],
      icon: '🕒'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-earth-600 to-forest-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
            alt="Sunlight through forest"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Contact size={64} className="mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to book your adventure? Have questions about our facilities? 
              We're here to help make your camping experience perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-forest-800 mb-8">
                Send us a Message
              </h2>
              
              {showThankYou && (
                <div className="mb-8 p-6 bg-forest-50 border border-forest-200 rounded-2xl animate-scale-in">
                  <div className="flex items-center space-x-3">
                    <div className="text-forest-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-800">Thank you!</h3>
                      <p className="text-forest-600">We've received your message and will get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your camping plans, questions, or special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest-600 hover:bg-forest-700 disabled:bg-forest-400 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-forest-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-sage-50 rounded-2xl hover:bg-sage-100 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-forest-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-earth-50 p-6 rounded-2xl border-l-4 border-earth-500">
                <h3 className="font-semibold text-earth-700 mb-2">Quick Booking Tip</h3>
                <p className="text-earth-600 text-sm">
                  For fastest response, include your preferred dates, number of guests, 
                  and any special requirements in your message. We'll send you a 
                  detailed booking confirmation within 24 hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of nature, just 2 hours from the city center. 
              Easy to reach by car with ample parking available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center shadow-lg animate-scale-in">
                <div className="text-center text-gray-500">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-sm">
                    Google Maps integration coming soon!<br />
                    GPS Coordinates: 45.4642° N, 9.1900° E
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="animate-slide-in-right">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-forest-800 mb-4">
                  Getting Here
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2">By Car</h4>
                    <p className="text-gray-600 text-sm">
                      Take Highway A4 Exit 12, follow signs to Lake Principata. 
                      Free parking available on-site.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2">Public Transport</h4>
                    <p className="text-gray-600 text-sm">
                      Bus Line 45 stops 10 minutes walking distance from the camping site. 
                      Runs every 30 minutes from city center.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2">Nearby Landmarks</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Lake Principata Marina (5 min)</li>
                      <li>• Village Center (15 min)</li>
                      <li>• Hiking Trail Start (2 min)</li>
                      <li>• Gas Station (10 min)</li>
                    </ul>
                  </div>
                </div>

                <button className="w-full mt-6 bg-earth-500 hover:bg-earth-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest-800 mb-6">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, seasonal offers, 
            and inspiring photos from our camping community.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
