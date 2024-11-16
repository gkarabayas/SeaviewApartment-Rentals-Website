import React from 'react';
import { Navigation2, Wine, Wifi, Tv } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-5xl font-bold mb-6">Luxury Living in Patra</h2>
        <p className="text-xl mb-8">98m² of elegance with breathtaking sea and mountain views, just 2km from Patra Plage.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 p-6 rounded-xl">
            <Navigation2 className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p>150m from beachfront, near University</p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl">
            <Wine className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Welcome Package</h3>
            <p>Complimentary wine and fruits</p>
          </div>
          <div className="bg-black/30 p-6 rounded-xl">
            <Tv className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
            <p>WiFi & Smart TV with streaming services</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Book Your Stay Now
          </button>
        </div>
      </div>
    </section>
  );
}
