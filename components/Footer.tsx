
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green text-beige py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold mb-2">Black Iris</h2>
            <p className="text-sm opacity-60 italic">Crafted hospitality since 2023</p>
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Careers</a>
          </div>

          <div className="text-center md:text-right text-xs opacity-50">
            <p>&copy; {new Date().getFullYear()} Black Iris Cafeteria Meknes.</p>
            <p>All Rights Reserved. Moroccan Heritage & Global Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
