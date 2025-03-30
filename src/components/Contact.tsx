import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SendMessage } from './SendMessage';

export function Contact() {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [nights, setNights] = useState(0);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const nightsDiff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      setNights(nightsDiff);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  const checkAvailability = async () => {
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate check
    setIsChecking(false);
    return true;
  };

  const handleBooking = async () => {
    if (checkIn && checkOut && nights >= 2) {
      const available = await checkAvailability();
      if (available) {
        setShowDiscountPopup(true);
      }
    }
  };

  const handleBookingContinue = () => {
    const bookingUrl = `https://www.booking.com/hotel/gr/sea-view-apartment-patra2.en-gb.html?checkin=${checkIn}&checkout=${checkOut}`;
    window.open(bookingUrl, '_blank');
    setShowDiscountPopup(false);
  };

  const handleContactMessage = () => {
    setShowMessageForm(true);
    setShowDiscountPopup(false);
  };

  const handleBack = () => {
    setShowMessageForm(false);
    setShowDiscountPopup(false);
  };

  return (
    <>
      {showMessageForm ? (
        <SendMessage 
          checkIn={checkIn} 
          checkOut={checkOut} 
          onBack={handleBack}  // Pass the handler
        />
      ) : (
        <section className="relative" id="contact">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="section-title text-4xl font-semibold mb-12 text-center text-gray-900">{t('contact.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#006CE4]" />
                  <p className="text-gray-700">+30 6984610117</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#006CE4]" />
                  <p className="text-gray-700">roswitharied@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#006CE4]" />
                  <p className="text-gray-700">Lefkotheas 8, 264 42 Patra, Greece</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl mt-6 border border-gray-100 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('contact.locationHighlights')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {(t('contact.nearbyPlaces', { returnObjects: true }) as string[]).map((place: string, index: number) => (
                      <li key={index}>• {place}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md">
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900">
                    <Calendar className="w-6 h-6 mr-2 text-[#006CE4]" />
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
                        className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-700 focus:outline-none focus:border-[#006CE4] focus:ring-1 focus:ring-[#006CE4] cursor-pointer"
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
                        className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-700 focus:outline-none focus:border-[#006CE4] focus:ring-1 focus:ring-[#006CE4] cursor-pointer"
                        min={checkIn || new Date().toISOString().split('T')[0]}
                      />
                    </label>
                    {nights > 0 && nights < 2 && ( // Add this conditional rendering
                      <p className="text-red-400 text-sm mt-1">{t('contact.minimumStay')}</p>
                    )}
                    <button
                      onClick={handleBooking}
                      className="w-full bg-[#006CE4] hover:bg-[#0052b3] text-white font-semibold py-3 px-6 
                        rounded-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-md
                        flex items-center justify-center space-x-2"
                      disabled={!checkIn || !checkOut || isChecking || Boolean(checkIn && checkOut && 
                        new Date(checkOut).getTime() - new Date(checkIn).getTime() < 2 * 24 * 60 * 60 * 1000)}
                    >
                      {isChecking ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                          <span>{t('contact.checking')}</span>
                        </div>
                      ) : (
                        t('contact.checkAvailability')
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discount Popup */}
          {showDiscountPopup && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
                <button 
                  onClick={() => setShowDiscountPopup(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{t('contact.discountPopup.title')}</h3>
                <p className="text-gray-600 text-center mb-8">
                  {t('contact.discountPopup.description')}
                </p>
                <div className="space-y-4">
                  <button
                    onClick={handleContactMessage}
                    className="w-full bg-[#006CE4] text-white text-lg font-semibold py-4 px-6 
                      rounded-lg relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300
                      shadow-lg hover:bg-[#0052b3]
                      tracking-wider"
                  >
                    ✨ {t('contact.discountPopup.messageButton')} 🎉
                  </button>
                  <button
                    onClick={handleBookingContinue}
                    className="w-full border border-gray-200 hover:border-[#006CE4] text-gray-700 hover:text-[#006CE4] font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    {t('contact.discountPopup.bookingButton')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
