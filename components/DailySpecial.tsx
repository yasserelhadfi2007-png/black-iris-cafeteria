
import React, { useState, useEffect } from 'react';
import { generateDailySpecial } from '../services/geminiService';
import { SpecialItem } from '../types';

const DailySpecial: React.FC = () => {
  const [special, setSpecial] = useState<SpecialItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecial = async () => {
      try {
        const item = await generateDailySpecial();
        setSpecial(item);
      } catch (err) {
        console.error("Failed to generate special:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecial();
  }, []);

  if (loading) return (
    <div className="py-24 bg-white text-center">
      <div className="animate-pulse inline-block p-8 bg-beige rounded-2xl">
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-64 w-96 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  if (!special) return null;

  return (
    <section id="daily-special" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Today's Highlight</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2 text-dark-green">Chef's Inspiration</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-beige rounded-[2rem] overflow-hidden shadow-xl">
          <div className="w-full lg:w-1/2 h-[400px]">
            <img 
              src={special.imageUrl} 
              alt={special.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <h3 className="font-serif text-3xl text-dark-green mb-4">{special.name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {special.description}
            </p>
            <div className="flex items-center gap-4">
                <span className="text-gold font-bold text-2xl">Limited availability</span>
                <div className="h-[2px] flex-grow bg-gold/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailySpecial;
