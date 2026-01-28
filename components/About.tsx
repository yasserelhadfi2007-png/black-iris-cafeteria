
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-green text-beige">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
              alt="Cafeteria Interior" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 mb-8 leading-tight">
              Where History Meets Modernity
            </h2>
            <p className="text-lg font-light leading-relaxed mb-6">
              Located in the heart of Meknes, Black Iris was born from a desire to redefine the Moroccan cafe experience. We believe that coffee is more than just a drink; it's a bridge between traditions.
            </p>
            <p className="text-lg font-light leading-relaxed mb-10">
              Our space is inspired by the intricate details of the Bab Mansour gate and the vibrant atmosphere of the Lahdim square, translated into a contemporary lounge experience.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">100%</h4>
                <p className="text-sm uppercase tracking-widest">Arabica Beans</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">Local</h4>
                <p className="text-sm uppercase tracking-widest">Sourced Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
