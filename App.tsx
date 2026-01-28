
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import AiAssistant from './components/AiAssistant';
import DailySpecial from './components/DailySpecial';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <DailySpecial />
        <About />
        <Menu />
        <Contact />
      </main>

      <Footer />

      {/* Persistent Floating Chat Trigger */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Ask Iris
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isAssistantOpen && (
        <AiAssistant onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
};

export default App;
