
import React, { useState } from 'react';
import { MenuItem } from '../types';

const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'Beldi Breakfast',
    description: 'Traditional platter with Msemen, Harcha, organic eggs, and local Atlas honey.',
    price: '45 DH',
    category: 'Breakfast',
  },
  {
    id: '2',
    name: 'Black Iris Burger',
    description: 'Aged Angus beef, white truffle mayo, caramelized onion jam, and local fontina.',
    price: '65 DH',
    category: 'Lunch',
  },
  {
    id: '3',
    name: 'Signature Nous-Nous',
    description: 'Our secret blend of espresso and perfectly textured micro-foam milk.',
    price: '15 DH',
    category: 'Coffee',
  },
  {
    id: '4',
    name: 'Pistachio Baklava',
    description: 'Layers of delicate filo, pure honey, and premium Moroccan pistachios.',
    price: '30 DH',
    category: 'Pastries',
  },
  {
    id: '5',
    name: 'Salmon Toast',
    description: 'Sourdough bread, smoked salmon, capers, and dill cream cheese.',
    price: '55 DH',
    category: 'Breakfast',
  },
  {
    id: '6',
    name: 'V60 Pour Over',
    description: 'Single-origin beans curated for the season.',
    price: '25 DH',
    category: 'Coffee',
  }
];

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuItem['category'] | 'All'>('All');

  const filteredItems = activeTab === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-beige/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-dark-green mb-4">Curated Selections</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['All', 'Breakfast', 'Coffee', 'Lunch', 'Pastries'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat as any)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === cat 
                    ? 'bg-dark-green text-white shadow-lg' 
                    : 'bg-white text-dark-green hover:bg-gold hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-gold group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl text-dark-green group-hover:text-gold transition-colors">{item.name}</h3>
                <span className="text-gold font-bold">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{item.category}</span>
                <button className="text-dark-green font-bold text-sm hover:translate-x-1 transition-transform">
                    View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
