import React from 'react';

const Hero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white min-h-screen flex items-center relative overflow-hidden">
      {/* Top-left quarter of big orange circle */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[500px] overflow-hidden">
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            backgroundColor: '#FF8000',
            transform: 'translate(-50%, 50%)',
          }}
        ></div>
      </div>

      {/* NEW Top-left Purple Circle */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full transform -translate-x-1/3 -translate-y-1/3"
        style={{ backgroundColor: '#251464' }}
      ></div>

      {/* Decorative right-side circles */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full transform translate-x-24 -translate-y-12"
        style={{ backgroundColor: '#FF8000' }}
      ></div>

      <div
        className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full transform translate-x-40 translate-y-8"
        style={{ backgroundColor: '#251464' }}
      ></div>

      {/* Subtle hexagonal overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23251464' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Tagline bubble */}
          <div
            className="inline-block bg-white rounded-full px-6 py-3 mb-8 shadow-lg border-2"
            style={{ borderColor: '#1bc3ff' }}
          >
            <p className="text-lg font-medium" style={{ color: '#251464' }}>
              Where Fast Internet Meets Real Affordability
            </p>
          </div>

          {/* Logo */}
          <h1 className="mb-6 flex justify-center">
            <img
              src="/logo.jpeg"
              alt="logo hero section"
              className="w-full max-w-[500px] object-contain mx-auto"
            />
          </h1>

          {/* Gradient line */}
          <div
            className="h-2 w-full max-w-[400px] mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1bc3ff, #4ade80, #FF8000, #FF0000)',
            }}
          ></div>

          <p className="text-xl md:text-2xl font-bold mb-8" style={{ color: '#000000' }}>
            HOME FIBRE
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#FF0000' }}></span>
              <span className="text-lg font-bold" style={{ color: '#FF0000' }}>
                Free Installation
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#FF0000' }}></span>
              <span className="text-lg font-bold" style={{ color: '#FF0000' }}>
                Free Router
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto" style={{ color: '#251464' }}>
            Experience lightning-fast internet speeds with our premium fiber optic network. Choose from our
            flexible packages designed to fit every need and budget.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToPackages}
              className="px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg"
              style={{ backgroundColor: '#1bc3ff', color: 'white' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0ea5e9')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#1bc3ff')}
            >
              View Packages
            </button>
            <a
              href="tel:0719771913"
              className="border-2 px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg bg-white"
              style={{ borderColor: '#251464', color: '#251464' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#251464';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#251464';
              }}
            >
              Call Now: 0717 447 792
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
