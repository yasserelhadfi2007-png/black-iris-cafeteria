
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl font-bold transition-colors ${
          isScrolled ? 'text-dark-green' : 'text-white'
        }`}>
          Black Iris
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'Daily Special', 'About', 'Menu', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-semibold hover:text-gold transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Visit Us
          </a>
        </div>

        {/* Mobile menu could go here */}
        <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isScrolled ? 'text-dark-green' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
