import React from 'react';

const Hero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white min-h-screen flex items-center relative overflow-hidden">
      {/* Bottom-left orange circle */}
      <div className="absolute bottom-0 left-0 w-[120px] h-[240px] sm:w-[180px] sm:h-[360px] lg:w-[250px] lg:h-[500px] overflow-hidden">
        <div
          className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full"
          style={{
            backgroundColor: '#FF8000',
            transform: 'translate(-50%, 50%)',
          }}
        ></div>
      </div>

      {/* Top-left Purple Circle */}
      <div
        className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] rounded-full transform -translate-x-1/3 -translate-y-1/3"
        style={{ backgroundColor: '#251464' }}
      ></div>

      {/* Decorative right-side circles */}
    <div
  className="absolute top-0 right-0 
             w-[100px] h-[100px] 
             sm:w-[160px] sm:h-[160px] 
             lg:w-[240px] lg:h-[240px] 
             rounded-full transform 
             translate-x-12 sm:translate-x-20 lg:translate-x-24 
             -translate-y-16 sm:-translate-y-20 lg:-translate-y-24 
             z-0"
  style={{ backgroundColor: '#251464' }}
></div>




      <div
        className="absolute bottom-1/4 right-0 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] rounded-full transform translate-x-16 sm:translate-x-28 lg:translate-x-40 translate-y-4 sm:translate-y-6 lg:translate-y-8"
        style={{ backgroundColor: '#FF8000' }}
      ></div>

      {/* Subtle hexagonal overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23251464' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Tagline bubble */}
          <div
            className="inline-block bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg border-2"
            style={{ borderColor: '#1bc3ff' }}
          >
            <p className="text-base sm:text-lg md:text-xl font-medium" style={{ color: '#251464' }}>
              Where Fast Internet Meets Real Affordability
            </p>
          </div>

          {/* Logo */}
          <h1 className="mb-4 sm:mb-6 flex justify-center">
            <img
              src="/logo.jpeg"
              alt="logo hero section"
              className="w-full max-w-[220px] sm:max-w-[350px] md:max-w-[500px] object-contain mx-auto"
            />
          </h1>

          {/* Gradient line */}
          <div
            className="h-1 sm:h-2 w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1bc3ff, #4ade80, #FF8000, #FF0000)',
            }}
          ></div>

          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8" style={{ color: '#000000' }}>
            HOME FIBRE
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3" style={{ backgroundColor: '#FF0000' }}></span>
              <span className="text-sm sm:text-lg font-bold" style={{ color: '#FF0000' }}>
                Free Installation
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3" style={{ backgroundColor: '#FF0000' }}></span>
              <span className="text-sm sm:text-lg font-bold" style={{ color: '#FF0000' }}>
                Free Router
              </span>
            </div>
          </div>

         <p 
  className="relative z-10 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto" 
  style={{ color: '#251464' }}
>
  Experience lightning-fast internet speeds with our premium fiber optic network. 
  Choose from our flexible packages designed to fit every need and budget.
</p>


          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <button
              onClick={scrollToPackages}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition shadow-lg"
              style={{ backgroundColor: '#1bc3ff', color: 'white' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0ea5e9')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#1bc3ff')}
            >
              View Packages
            </button>
            <a
              href="tel:0717447792"
              className="border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition shadow-lg bg-white"
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
