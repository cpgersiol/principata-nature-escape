
import { useState, useEffect } from 'react';
import { ArrowRight, Wifi, User, Baby, Tent } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      icon: User,
      title: 'Family Friendly',
      description: 'Perfect for families with children of all ages'
    },
    {
      icon: Baby,
      title: 'Pet Allowed',
      description: 'Bring your furry friends along for the adventure'
    },
    {
      icon: Tent,
      title: 'Near the Lake',
      description: 'Just steps away from crystal clear waters'
    },
    {
      icon: Wifi,
      title: 'WiFi Available',
      description: 'Stay connected while enjoying nature'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Nature scene ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Escape to Nature
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Your Adventure Awaits at Camping Principata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Book Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Why Choose Camping Principata?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of nature and comfort at our exceptional camping site
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-200 transition-colors duration-300">
                  <feature.icon size={40} className="text-forest-600" />
                </div>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                Your Natural Getaway
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nestled beside the pristine waters of Lake Principata, our camping site offers 
                the perfect escape from city life. For over a decade, we've been welcoming 
                families, couples, and adventurers to experience the tranquility of nature 
                without sacrificing modern comforts.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're seeking a peaceful retreat or an action-packed adventure, 
                our carefully maintained facilities and stunning natural surroundings 
                provide the ideal backdrop for your outdoor experience.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Camping site with beautiful lake view"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-earth-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Pine trees"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready for Your Nature Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Book your stay today and discover why thousands of guests choose 
            Camping Principata for their outdoor getaway.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Book Your Stay Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
