// components/PaymentSection.jsx
import React from 'react';

const PaymentSection = ({ leftAd, rightAd }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-start">
          {/* Left Advertisement Sidebar */}
          {leftAd && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-100 rounded-xl p-4 shadow-lg">
                <img 
                  src={leftAd.image} 
                  alt={leftAd.title || "Advertisement"} 
                  className="w-full h-auto rounded-lg mb-3"
                />
                {leftAd.title && (
                  <h3 className="font-bold text-gray-800 mb-2">{leftAd.title}</h3>
                )}
                {leftAd.description && (
                  <p className="text-sm text-gray-600 mb-3">{leftAd.description}</p>
                )}
                {leftAd.link && (
                  <a 
                    href={leftAd.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Main Payment Content */}
          <div className="flex-1">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Easy Payment Options</h2>
              <p className="text-xl text-gray-600">Pay conveniently using M-Pesa</p>
            </div>

            <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">M-Pesa Paybill</h3>
                <p className="opacity-90">Quick and secure payments</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Paybill Number</h4>
                  <p className="text-2xl font-bold">4167741</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Account Number</h4>
                  <p className="text-lg">Input your Account Number</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm">
                  <strong>How to pay:</strong> Go to M-Pesa → Lipa na M-Pesa → Pay Bill → 
                  Enter Paybill: 4167741 → Account: Your Account Number → Amount → PIN
                </p>
              </div>
            </div>
          </div>

          {/* Right Advertisement Sidebar */}
          {rightAd && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-100 rounded-xl p-4 shadow-lg">
                <img 
                  src={rightAd.image} 
                  alt={rightAd.title || "Advertisement"} 
                  className="w-full h-auto rounded-lg mb-3"
                />
                {rightAd.title && (
                  <h3 className="font-bold text-gray-800 mb-2">{rightAd.title}</h3>
                )}
                {rightAd.description && (
                  <p className="text-sm text-gray-600 mb-3">{rightAd.description}</p>
                )}
                {rightAd.link && (
                  <a 
                    href={rightAd.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
