
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-4xl">
          Elegance in <span className="text-gold italic">Every Sip</span>
        </h1>
        <p className="text-beige text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
          Experience the perfect fusion of artisanal coffee and Moroccan heritage in the heart of the Imperial City.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#menu" className="px-10 py-4 bg-gold text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            View Menu
          </a>
          <a href="#about" className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-dark-green transition-all">
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
