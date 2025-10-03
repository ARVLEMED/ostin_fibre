import React from 'react';

const PackageCard = ({ package: pkg }) => {
  const handleSubscribe = () => {
    const phoneNumber = "254717447792"; 
    const message = encodeURIComponent(
      `Hello, I’d like to get connected to the ${pkg.name} package at ${pkg.price} per month.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${pkg.popular ? 'ring-4 ring-purple-500' : ''}`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 text-sm font-semibold">
          MOST POPULAR
        </div>
      )}
      
      <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white ${pkg.popular ? 'mt-8' : ''}`}>
        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
        <p className="text-lg opacity-90 mb-4">{pkg.speed}</p>
        <div className="text-3xl font-bold">{pkg.price}</div>
        <p className="text-sm opacity-75">per month</p>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button 
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition"
        >
          GET CONNECTED
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
