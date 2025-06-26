
import { MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CP</span>
              </div>
              <span className="text-xl font-bold">Camping Principata</span>
            </div>
            <p className="text-forest-100 mb-4">
              Escape to nature and create unforgettable memories at our family-friendly 
              camping site near the beautiful lake. Your adventure awaits!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-forest-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-forest-200 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-forest-200 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-forest-200 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/pricing" className="text-forest-200 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="/gallery" className="text-forest-200 hover:text-white transition-colors duration-200">Gallery</a></li>
              <li><a href="/contact" className="text-forest-200 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-forest-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-forest-200">123 Nature Lane</p>
                  <p className="text-forest-200">Lakeside, Italy 12345</p>
                </div>
              </div>
              <div>
                <p className="text-forest-200">Email: info@campingprincipata.com</p>
                <p className="text-forest-200">Phone: +39 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center">
          <p className="text-forest-200">
            © 2024 Camping Principata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
