import React from 'react';

const Contact = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-purple-950" >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Connected Today</h2>
          <p className="text-xl mb-12">
            Ready to experience fast, affordable internet? Our team is standing by to help you get connected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-orange-400 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-lg">0717 447 792</p>
            </div>

            <div className="bg-orange-400 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Care</h3>
              <p className="text-lg">24/7 Support Available</p>
            </div>

            <div className="bg-orange-400 backdrop-blur-lg rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-lg">Kitengela & Surrounding Areas</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="tel:0717447792"
              className="bg-orange-400 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-300 transition pulse-animation"
            >
              Call Now: 0717447792
            </a>
            <button 
              onClick={scrollToPackages}
              className="bg-orange-400 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 hover:text-purple-950 transition"
            >
              Choose Your Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
