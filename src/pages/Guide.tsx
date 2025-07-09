
import React from 'react';

const Guide = () => {
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
              Travel Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the breathtaking journey to Shala River and explore the pristine beauty of Albanian nature.
            </p>
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
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="River between mountains"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="River surrounded by rock formation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-6">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To reach the Shala River from Camping Principata, the journey begins at 7:30 AM with a minibus ride to Komani Lake. Once there, you'll board a boat that takes you through the stunning scenery of the lake, eventually arriving at the Shala River around 10:30 AM. After enjoying your time there, the return trip begins at 2:30 PM, with the group expected back at the campsite by 6:00 PM, following the same route.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">Travel Options</h3>
              
              <div className="max-w-md mx-auto">
                <div className="bg-forest-50 rounded-xl p-6">
                  <h4 className="font-semibold text-forest-700 mb-3 text-lg">Regular Ticket</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    2 way trip
                  </p>
                  <div className="text-3xl font-bold text-forest-600 mb-6">€35 per person</div>
                  <a
                    href="https://wa.me/355683204350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-forest-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-forest-700 transition-colors duration-200 text-center block"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide to Fierza Reservoir */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              🌊 Guide to Fierza Reservoir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Camping Principata to Fierza Reservoir
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Reservoir surrounded by mountains"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Mountain lake reservoir"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-6">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Your adventure to the Fierza Reservoir begins at 7:30 AM with a minibus ride from Camping Principata to Komani Lake.
                Once there, you'll board a boat that travels across the lake to reach Fierza by 11:30 AM.
                After exploring and relaxing by the reservoir, the return journey begins at 2:30 PM, arriving back at the campsite by 6:00 PM.
                If you decide you'd like to stay in Fierza for a night or two, you can still use the same ticket for the return trip on a following day.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">Travel Options</h3>
              
              <div className="max-w-md mx-auto">
                <div className="bg-forest-50 rounded-xl p-6">
                  <h4 className="font-semibold text-forest-700 mb-3 text-lg">Standard Ticket</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    2 way trip
                  </p>
                  <div className="text-3xl font-bold text-forest-600 mb-6">€40 per person</div>
                  <a
                    href="https://wa.me/355683204350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-forest-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-forest-700 transition-colors duration-200 text-center block"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide to Valbona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              🏔️ Guide to Valbona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Camping Principata to Valbona River
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Mountain valley with river"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Alpine mountain landscape"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="bg-sage-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-6">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Your journey to the beautiful Valbona River begins at 7:30 AM with a minibus ride from Camping Principata to Komani Lake. From there, you'll enjoy a scenic boat ride across the lake to Fierza, followed by a ferry trip through the mountain-lined route to Valbona, arriving around 1:00 PM.
                Please note: Round trips to Valbona cannot be completed in one day.
                If you decide you'd like to stay for a night or two, you can find accommodation there, and your return can be arranged separately. The ticket is valid for one way, and only the trip is provided by us.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">Travel Details</h3>
              
              <div className="max-w-md mx-auto">
                <div className="bg-forest-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-forest-600 mb-4">€30 per person (one way)</div>
                  <p className="text-sm text-gray-600 mb-6">
                    Only the trip is provided (no accommodation included)
                  </p>
                  <a
                    href="https://wa.me/355683204350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-forest-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-forest-700 transition-colors duration-200 text-center block"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Travel Information */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forest-800 mb-8 text-center">
              Travel Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-forest-700 mb-4">What to Bring</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Comfortable walking shoes</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                  <li>• Camera for stunning photos</li>
                  <li>• Light jacket (mountain weather changes)</li>
                  <li>• Water bottle</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-forest-700 mb-4">Trip Schedule</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 7:30 AM - Departure from campsite</li>
                  <li>• 8:30 AM - Arrive at Komani Lake</li>
                  <li>• 9:00 AM - Board boat to Shala River</li>
                  <li>• 10:30 AM - Arrive at Shala River</li>
                  <li>• 2:30 PM - Return journey begins</li>
                  <li>• 6:00 PM - Back at campsite</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-sage-50 rounded-xl border-l-4 border-sage-500">
              <h4 className="font-semibold text-sage-700 mb-2">Custom Travel Arrangements</h4>
              <p className="text-sage-600 text-sm">
                Contact the team on-site for availability and pricing of custom travel arrangements.
              </p>
            </div>

            <div className="mt-8 p-6 bg-earth-50 rounded-xl border-l-4 border-earth-500">
              <h4 className="font-semibold text-earth-700 mb-2">Important Notes</h4>
              <p className="text-earth-600 text-sm">
                Weather conditions may affect departure times. All guests will be notified of any schedule changes the evening before departure. 
                The trip includes boat transportation on Komani Lake and guided access to Shala River. 
                Food and beverages are not included but can be purchased at local vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready for an Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Book your Shala River expedition today and experience one of Albania's most spectacular natural wonders.
          </p>
          <a
            href="https://wa.me/355683204350"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Book Your Trip
          </a>
        </div>
      </section>
    </div>
  );
};

export default Guide;
