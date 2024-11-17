import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleBooking = () => {
    if (checkIn && checkOut) {
      const bookingUrl = `https://www.booking.com/hotel/gr/sea-view-apartment-patra2.en-gb.html?checkin=${checkIn}&checkout=${checkOut}`;
      window.open(bookingUrl, '_blank');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="contact">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <p>+30 6984610117</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <p>info@seaviewpatra.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <p>Lefkotheas 8, 264 42 Patra, Greece</p>
            </div>
            <div className="bg-black/30 p-6 rounded-xl mt-6">
              <h3 className="text-xl font-semibold mb-4">{t('contact.locationHighlights')}</h3>
              <ul className="space-y-2">
                {t('contact.nearbyPlaces', { returnObjects: true }).map((place: string, index: number) => (
                  <li key={index}>• {place}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-white-400" />
                {t('contact.checkAvailability')}
              </h3>
              <div className="space-y-4">
                <label className="block cursor-pointer" onClick={() => document.getElementById('check-in')?.click()}>
                  <span className="block text-sm mb-2">{t('contact.checkIn')}</span>
                  <input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 rounded-lg bg-blue-400/30 border border-gray-600 text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </label>
                <label className="block cursor-pointer" onClick={() => document.getElementById('check-out')?.click()}>
                  <span className="block text-sm mb-2">{t('contact.checkOut')}</span>
                  <input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 rounded-lg bg-blue-400/30 border border-gray-600 text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                    min={checkIn || new Date().toISOString().split('T')[0]}
                  />
                </label>
                <button
                  onClick={handleBooking}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
                  disabled={!checkIn || !checkOut}
                >
                  {t('contact.checkAvailability')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
