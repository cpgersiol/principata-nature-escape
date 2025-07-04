
import { Tent, ParkingMeter, User, Baby, Droplets, Shirt, Umbrella, Flame, Boat, Caravan } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const accommodationPrices = [
    {
      icon: Tent,
      title: 'Tent Space',
      price: '€15',
      period: 'per night',
      description: 'Spacious camping spot for your tent with easy access to facilities',
      features: [
        'Level ground with drainage',
        'Close to restroom facilities',
        'Fire pit area nearby',
        'Picnic table included'
      ],
      popular: true
    },
    {
      icon: ParkingMeter,
      title: 'Parking Space',
      price: '€5',
      period: 'per night',
      description: 'Secure parking space for your vehicle during your stay',
      features: [
        'Safe and secure area',
        '24/7 access',
        'Well-lit parking',
        'CCTV surveillance'
      ],
      popular: false
    }
  ];

  const guestPrices = [
    {
      icon: User,
      title: 'Adult',
      price: '€5',
      period: 'per night',
      description: 'For guests aged 11 and above',
      features: [
        'Access to all facilities',
        'WiFi included',
        'Activity area access',
        'Lake access'
      ],
      popular: false
    },
    {
      icon: Baby,
      title: 'Children (0-10)',
      price: 'FREE',
      period: '',
      description: 'Kids under 10 stay completely free!',
      features: [
        'Free accommodation',
        'Playground access',
        'Kid-friendly facilities',
        'Family activities'
      ],
      popular: true
    }
  ];

  const extraAccommodationPrices = [
    {
      icon: Tent,
      title: 'Tent for 2 Persons',
      price: '€30',
      period: 'per night',
      description: 'Comfortable tent rental for couples',
      features: [
        'Fully equipped tent',
        'Free access to all camping facilities',
        'Bedding included',
        'Weather-resistant'
      ],
      popular: false
    },
    {
      icon: Tent,
      title: 'Tent for 4 Persons',
      price: '€40',
      period: 'per night',
      description: 'Spacious family tent rental',
      features: [
        'Large family tent',
        'Free access to all camping facilities',
        'Bedding for 4 included',
        'Extra space for comfort'
      ],
      popular: false
    },
    {
      icon: Caravan,
      title: 'Caravan (2-Person)',
      price: '€40',
      period: 'per night',
      description: 'Cozy caravan for two guests',
      features: [
        'Private caravan',
        'Free access to all camping facilities',
        'Basic kitchenette',
        'Comfortable sleeping area'
      ],
      popular: false
    },
    {
      icon: Caravan,
      title: 'Caravan (5-Person)',
      price: '€50',
      period: 'per night',
      description: 'Large caravan for families',
      features: [
        'Spacious family caravan',
        'Free access to all camping facilities',
        'Full kitchenette',
        'Multiple sleeping areas'
      ],
      popular: true
    },
    {
      icon: Boat,
      title: 'Boat (2-Person)',
      price: '€50',
      period: 'per night',
      description: 'Unique boat camping experience',
      features: [
        'Boat accommodation',
        'Free access to all camping facilities',
        'Waterfront location',
        'Unique camping experience'
      ],
      popular: false
    }
  ];

  const servicePrices = [
    {
      icon: Droplets,
      title: 'Electricity',
      price: '€3',
      period: 'per day',
      description: 'Power hookup for your camping needs'
    },
    {
      icon: Droplets,
      title: 'Hot Showers',
      price: '€2',
      period: 'per use',
      description: 'Clean, hot shower facilities'
    },
    {
      icon: Shirt,
      title: 'Laundry Service',
      price: '€3',
      period: 'per load',
      description: 'Washing machine access'
    },
    {
      icon: User,
      title: 'Day access to the beach',
      price: '€2',
      period: 'per person',
      description: 'Day access to our beautiful beach area'
    },
    {
      icon: Boat,
      title: 'Rowboat rental',
      price: '€10',
      period: 'per hour',
      description: 'Peaceful rowboat for lake exploration'
    },
    {
      icon: Boat,
      title: 'Speedboat (Max 2 persons)',
      price: '€30',
      period: 'per hour',
      description: 'Exciting speedboat with driver included'
    },
    {
      icon: Boat,
      title: 'Mini Yacht (Max 8 persons)',
      price: '€60',
      period: 'per hour',
      description: 'Luxury mini yacht with driver included'
    },
    {
      icon: ParkingMeter,
      title: '4x4 Off-road Vehicle Rental',
      price: 'Contact us',
      period: 'per day',
      description: 'Max 6 persons - Contact for pricing'
    },
    {
      icon: Boat,
      title: 'Boat Ramp',
      price: '€10',
      period: 'per use',
      description: 'Launch your boat in the lake'
    }
  ];

  const equipmentPrices = [
    {
      icon: Umbrella,
      title: 'Sun Loungers + Umbrella',
      price: '€10',
      period: 'per day',
      description: '2 comfortable sun loungers with beach umbrella'
    },
    {
      icon: Flame,
      title: 'BBQ + Table',
      price: '€10',
      period: 'per day',
      description: 'BBQ grill with picnic table for outdoor cooking'
    }
  ];

  const PriceCard = ({ item, delay = 0 }) => (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in ${
        item.popular ? 'ring-2 ring-forest-500' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {item.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-forest-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <item.icon size={32} className="text-forest-600" />
          </div>
          <h3 className="text-xl font-bold text-forest-800 mb-2">{item.title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-forest-600">{item.price}</span>
            {item.period && <span className="text-gray-500 ml-2">{item.period}</span>}
          </div>
          <p className="text-gray-600">{item.description}</p>
        </div>

        {item.features && (
          <div className="mb-6">
            <ul className="space-y-2">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          href="https://wa.me/355683204350"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 block ${
            item.popular
              ? 'bg-forest-600 text-white hover:bg-forest-700'
              : 'border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white'
          }`}
        >
          Book Now
        </a>
      </div>
    </div>
  );

  const ServiceCard = ({ item, delay = 0 }) => (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mr-4">
            <item.icon size={24} className="text-sage-600" />
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-forest-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-forest-600">{item.price}</span>
            {item.period && <div className="text-xs text-gray-500">{item.period}</div>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-sage-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Affordable rates for an unforgettable nature experience. 
              No hidden fees, just honest pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Accommodation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your perfect camping spot with our flexible accommodation options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accommodationPrices.map((item, index) => (
              <PriceCard key={index} item={item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Guest Pricing */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Guest Rates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Family-friendly pricing that makes camping accessible for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guestPrices.map((item, index) => (
              <PriceCard key={index} item={item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Accommodation Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Extra Accommodation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete rental options including tents, caravans, and unique boat camping experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extraAccommodationPrices.map((item, index) => (
              <PriceCard key={index} item={item} delay={index * 0.2} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-forest-50 rounded-xl border-l-4 border-forest-500 max-w-4xl mx-auto">
            <h4 className="font-semibold text-forest-700 mb-2">Important Note</h4>
            <p className="text-forest-600">
              All Extra Accommodation options include free access to all camping facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Equipment */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your camping experience with our convenient services and equipment rental
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center lg:text-left">
                Essential Services
              </h3>
              <div className="space-y-4">
                {servicePrices.map((item, index) => (
                  <ServiceCard key={index} item={item} delay={index * 0.1} />
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center lg:text-left">
                Equipment Rental
              </h3>
              <div className="space-y-4">
                {equipmentPrices.map((item, index) => (
                  <ServiceCard key={index} item={item} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide to Shala River */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              🌄 Guide to Shala River
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Camping Principata to Shala River
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-sage-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-6">Description</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To reach Shala River from our campsite, follow this route:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Take a boat from Vau Dejes Lake to Komani Lake</li>
                <li>Drive to the shore of Komani Lake</li>
                <li>Take a second boat from Komani Lake to Shala River</li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">Travel Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-forest-50 rounded-xl p-6">
                  <h4 className="font-semibold text-forest-700 mb-3">Regular Ticket</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Vau Dejes to Shala River (07:00AM-18:00PM)
                  </p>
                  <div className="text-2xl font-bold text-forest-600 mb-4">€50 per person</div>
                  <a
                    href="https://wa.me/355683204350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-forest-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-forest-700 transition-colors duration-200 text-center block"
                  >
                    Book via WhatsApp
                  </a>
                </div>

                <div className="bg-earth-50 rounded-xl p-6">
                  <h4 className="font-semibold text-earth-700 mb-3">Private Taxi Boat</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Maximum 8 persons
                  </p>
                  <div className="text-2xl font-bold text-earth-600 mb-4">€400 total</div>
                  <a
                    href="https://wa.me/355683204350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-earth-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-earth-700 transition-colors duration-200 text-center block"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-sage-50 rounded-xl border-l-4 border-sage-500">
                <h4 className="font-semibold text-sage-700 mb-2">Custom Travel Arrangements</h4>
                <p className="text-sage-600 text-sm">
                  Contact the team on-site for availability and pricing of custom travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">
              Important Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-forest-700 mb-4">Booking Policy</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Minimum stay: 1 night</li>
                  <li>• Check-in: 3:00 PM - 8:00 PM</li>
                  <li>• Check-out: 8:00 AM - 11:00 AM</li>
                  <li>• Advance booking recommended</li>
                  <li>• Payment on arrival accepted</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-forest-700 mb-4">What's Included</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Access to all common areas</li>
                  <li>• WiFi throughout the grounds</li>
                  <li>• Restroom and basic shower facilities</li>
                  <li>• Playground and activity areas</li>
                  <li>• Lake access for swimming</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-earth-50 rounded-xl border-l-4 border-earth-500">
              <h4 className="font-semibold text-earth-700 mb-2">Special Offers</h4>
              <p className="text-earth-600 text-sm">
                Weekly stays (7+ nights): 10% discount on accommodation rates. 
                Groups of 5+ families: Contact us for special group pricing. 
                Seasonal promotions available - check our contact page for current offers!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Contact us today to reserve your spot and start planning your perfect camping adventure.
          </p>
          <a
            href="https://wa.me/355683204350"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
