// components/Footer.jsx
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

{/* Bottom Copyright with Social Icons */}
<div className="border-t border-orange-500 mt-8 pt-8">
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
    
    {/* Social Media Icons (left) */}
    <div className="flex items-center gap-6 justify-start">
      {/* Email */}
      <a 
        href="mailto:info@ostin.co.ke" 
        className="text-gray-400 hover:text-white transition transform hover:scale-110"
        aria-label="Email"
        title="Email Us"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/254717447792" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition transform hover:scale-110"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* TikTok */}
      <a 
        href="http://tiktok.com/@ostin_offcial" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
        aria-label="TikTok"
        title="Follow us on TikTok"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      </a>
    </div>

    {/* Center: Copyright */}
    <div className="justify-self-center">
      <p className="text-gray-400 text-center">
        &copy; 2025 OSTIN Internet Services. All rights reserved.
      </p>
    </div>

    {/* Right: Empty (balances grid) */}
    <div className="hidden md:block"></div>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;