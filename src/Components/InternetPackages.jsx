import React from 'react';
import PackageCard from './PackageCard';

const InternetPackages = () => {
  const packages = [
    {
      name: "SILVER",
      speed: "UP TO 5 MBPS",
      price: "KES 1,069",
      color: "from-gray-400 to-gray-600",
      features: ["Basic browsing", "Social media", "Email", "Light streaming"]
    },
    {
      name: "GOLD",
      speed: "UP TO 10 MBPS",
      price: "KES 1,299",
      color: "from-yellow-400 to-yellow-600",
      features: ["HD streaming", "Video calls", "Online gaming", "Multiple devices"],
      popular: true
    },
    {
      name: "DIAMOND",
      speed: "UP TO 15 MBPS",
      price: "KES 1,729",
      color: "from-blue-400 to-blue-600",
      features: ["4K streaming", "Fast downloads", "Heavy usage", "Smart home devices"]
    },
    {
      name: "PLATINUM",
      speed: "UP TO 20 MBPS",
      price: "KES 2,359",
      color: "from-purple-400 to-purple-600",
      features: ["Ultra-fast speeds", "Business use", "Large file transfers", "Premium experience"]
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Bottom-left orange circle continuation */}
      <div className="absolute top-0 left-0 w-[120px] h-[240px] sm:w-[180px] sm:h-[360px] lg:w-[250px] lg:h-[500px] overflow-hidden">
        <div
          className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full"
          style={{
            backgroundColor: '#FF8000',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            All plans include free installation, free router, and 24/7 customer support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternetPackages;
