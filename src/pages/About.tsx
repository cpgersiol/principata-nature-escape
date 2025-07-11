
import { useState, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [visibleStats, setVisibleStats] = useState(false);

  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Guests' },
    { number: '4.8', label: 'Average Rating' },
    { number: 'May - Sep', label: 'Season Open', isTextStat: true }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Camping Principata was founded with a simple vision: to provide a perfect nature escape for families and adventurers.'
    },
    {
      year: '2023',
      title: 'Facility Expansion',
      description: 'Added modern shower facilities, electrical hookups, and expanded the camping area to accommodate more guests.'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Introduced WiFi throughout the grounds and online booking system for better guest experience.'
    },
    {
      year: '2025',
      title: 'Sustainability Focus',
      description: 'Launched eco-friendly initiatives including solar power and waste reduction programs.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
            alt="Misty mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the passion and dedication behind Camping Principata, 
              where nature meets comfort and memories are made.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-8">
                Our Mission & Vision
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide an exceptional outdoor experience that connects people with nature 
                  while offering modern comforts and sustainable practices. We strive to create 
                  lasting memories for families, couples, and solo adventurers in a safe and 
                  welcoming environment.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the premier eco-friendly camping destination in the region, 
                  where guests can disconnect from the digital world and reconnect with nature, 
                  family, and themselves.
                </p>
              </div>

              <div className="bg-sage-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    <span>Environmental Stewardship</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    <span>Family-Friendly Atmosphere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    <span>Authentic Nature Experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    <span>Exceptional Guest Service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Deer in nature"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Pine forest"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Lake surrounded by trees"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Sunlight through trees"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  visibleStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`font-bold text-earth-400 mb-2 ${
                  stat.isTextStat 
                    ? 'text-2xl md:text-3xl' 
                    : 'text-4xl md:text-5xl'
                }`}>
                  {stat.number}
                </div>
                <div className="text-lg text-forest-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4 animate-fade-in">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              From humble beginnings to becoming a premier camping destination
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-forest-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                  {item.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-forest-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                Perfect Location
              </h2>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="text-forest-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>Vau i Dejës - Koman Road, 3.8 KM from the Cathedral</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Strategically located just 2 hours from the city center, our camping site 
                    offers easy accessibility while maintaining the serenity of untouched nature. 
                    Surrounded by pristine wilderness and overlooking the crystal-clear waters 
                    of Lake Principata.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-sage-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-forest-700 mb-2">Nearby Attractions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hiking trails (5 min)</li>
                    <li>• Fishing spots (2 min)</li>
                    <li>• Village center (15 min)</li>
                  </ul>
                </div>
                <div className="bg-sage-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-forest-700 mb-2">Transportation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Parking available</li>
                    <li>• Airport (2 hours)</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/X4JUPR5LeuiSxxFt8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Directions
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>

            <div className="animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.3993209912587!2d19.661221899999994!3d42.0204782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351ffc8475776df%3A0x5b61dff108866a88!2sCamping%20Principata!5e1!3m2!1sen!2s!4v1752268214450!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Camping Principata Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-earth-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Experience Nature?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied guests who have made unforgettable memories at Camping Principata.
          </p>
          <a
            href="https://wa.me/355683204350"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-earth-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Book Your Adventure
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
