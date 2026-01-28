
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-beige rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-12 lg:p-20">
            <h2 className="font-serif text-4xl text-dark-green mb-8">Visit Black Iris</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Location</h4>
                  <p className="text-gray-600">Rue d'Ifrane, Ville Nouvelle,<br />Meknes 50000, Morocco</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Hours</h4>
                  <p className="text-gray-600">Daily: 07:00 AM - 11:00 PM<br />Weekends: 08:00 AM - Midnight</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Inquiries</h4>
                  <p className="text-gray-600">reservations@blackiris-meknes.ma<br />+212 5XX-XXXXXX</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               {/* Social Icons */}
               {['Instagram', 'Facebook', 'TripAdvisor'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 bg-dark-green text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                 </a>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Simple Placeholder for Map */}
             <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')"}}>
                <div className="bg-white/90 p-6 rounded-2xl shadow-xl border border-gold">
                    <p className="font-bold text-dark-green">Meknes Viewpoint</p>
                    <p className="text-sm text-gray-500">Historical Center 2km away</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
