import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Ostin Logo" 
                className="h-16 max-w-xl object-contain" 
              />
            </div>
            <p className="text-gray-400">
              Where Fast Internet Meets Real Affordability
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Fiber Internet</li>
              <li>Free Installation</li>
              <li>Free Router</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Phone: 0717 447 792</p>
              <p>Paybill: 4167741</p>
              <p>Service: Kitengela, Kajiado County</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-orange-500 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OSTIN Internet Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
