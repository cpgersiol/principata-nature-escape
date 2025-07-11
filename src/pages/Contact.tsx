
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      title: 'Address',
      details: ['Vau i Dejes - Koman Road', '3.8KM from the Cathedral, main ex'],
      icon: '📍',
      link: 'https://maps.app.goo.gl/X4JUPR5LeuiSxxFt8',
      isExternal: true
    },
    {
      title: 'Phone',
      details: ['+355 68 320 4350'],
      icon: '📞',
      link: 'tel:+355683204350'
    },
    {
      title: 'WhatsApp',
      details: ['+355 68 320 4350'],
      icon: '💬',
      link: 'https://wa.me/355683204350',
      isExternal: true
    },
    {
      title: 'Email',
      details: ['campingprincipata@gmail.com'],
      icon: '✉️'
    },
    {
      title: 'Operating Hours',
      details: ['24/7'],
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
            <MessageCircle size={64} className="mx-auto mb-6 opacity-80" />
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

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-12 text-center">
              Contact Information
            </h2>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.isExternal ? "_blank" : undefined}
                      rel={info.isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-6 bg-sage-50 rounded-2xl hover:bg-sage-100 transition-colors duration-200 cursor-pointer w-full"
                    >
                      <div className="text-2xl flex-shrink-0">{info.icon}</div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-forest-800 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-6 bg-sage-50 rounded-2xl w-full">
                      <div className="text-2xl flex-shrink-0">{info.icon}</div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-forest-800 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-earth-50 p-6 rounded-2xl border-l-4 border-earth-500">
              <h3 className="font-semibold text-earth-700 mb-2">Quick Booking Tip</h3>
              <p className="text-earth-600 text-sm">
                For fastest response, contact us via WhatsApp with your preferred dates, number of guests, 
                and any special requirements. We'll send you a 
                detailed booking confirmation within 24 hours!
              </p>
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
              <div className="rounded-2xl overflow-hidden shadow-lg animate-scale-in">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.3993209912587!2d19.661221899999994!3d42.0204782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351ffc8475776df%3A0x5b61dff108866a88!2sCamping%20Principata!5e1!3m2!1sen!2s!4v1752268214450!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Camping Principata Location"
                  className="lg:h-[500px]"
                />
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
                      Take the road from Vau i Dejës toward Koman, then follow signs for Camping Principata near Lake Koman.
                      Parking available on-site.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2">Public Transport</h4>
                    <p className="text-gray-600 text-sm">
                      Public transportation to this area is limited or unavailable. We recommend arriving by car or arranging private transport in advance.
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

                <a
                  href="https://maps.app.goo.gl/X4JUPR5LeuiSxxFt8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-earth-500 hover:bg-earth-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 block text-center"
                >
                  Get Directions
                </a>
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
              href="https://www.instagram.com/camping_principata?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#"
              className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
