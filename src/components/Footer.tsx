
import { MapPin, Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-800 text-white py-12 overflow-hidden">
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
                href="https://www.instagram.com/camping_principata?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer" 
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
                  <p className="text-forest-200">Vau i Dejes - Koman Road</p>
                  <p className="text-forest-200">3.8KM from the Cathedral, main ex</p>
                </div>
              </div>
              <div className="md:space-y-2">
                {/* Email - centered on mobile */}
                <div className="flex items-center space-x-2 md:justify-start justify-center md:text-left text-center">
                  <Mail size={18} className="text-forest-400 flex-shrink-0 md:block hidden" />
                  <a 
                    href="mailto:campingprincipata@gmail.com"
                    className="text-forest-200 hover:text-white transition-colors duration-200"
                  >
                    campingprincipata@gmail.com
                  </a>
                </div>
                {/* Phone - centered on mobile and clickable */}
                <div className="flex items-center space-x-2 md:justify-start justify-center md:text-left text-center">
                  <Phone size={18} className="text-forest-400 flex-shrink-0 md:block hidden" />
                  <a 
                    href="tel:+355683204350"
                    className="text-forest-200 hover:text-white transition-colors duration-200"
                  >
                    +355 68 320 4350
                  </a>
                </div>
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
