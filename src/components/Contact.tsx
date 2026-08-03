import React, { useState, useEffect } from 'react';
import Phone from 'lucide-react/dist/esm/icons/phone.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import Calendar from 'lucide-react/dist/esm/icons/calendar.js';
import Send from 'lucide-react/dist/esm/icons/send.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import { useTranslation } from 'react-i18next';
import { SendMessage } from './SendMessage';

export function Contact() {
  const { t, i18n } = useTranslation();
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

  const handleEmailClient = () => {
    const formatDate = (dateString: string) => new Intl.DateTimeFormat(
      i18n.language === 'gr' ? 'el' : 'en',
      { day: 'numeric', month: 'long', year: 'numeric' }
    ).format(new Date(dateString));

    const message = t('sendMessage.defaultMessage')
      .replace('{startDate}', formatDate(checkIn))
      .replace('{endDate}', formatDate(checkOut));
    const subject = `Direct booking enquiry: ${checkIn} – ${checkOut}`;

    window.location.href = `mailto:roswitharied@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
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
        <section id="contact">
          <div className="mx-auto w-full max-w-[90rem] px-4 text-gray-900 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:mb-10 md:text-5xl lg:text-6xl">{t('contact.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="space-y-8 bg-[#062842] p-7 text-white md:p-10">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-sky-200" />
                  <p className="text-white">+30 6984610117</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-sky-200" />
                  <p className="text-white">roswitharied@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-sky-200" />
                  <p className="text-white">Lefkotheas 8, 264 42 Patra, Greece</p>
                </div>
                <div className="mt-6 hidden border border-white/15 bg-white/10 p-6 md:block">
                  <h3 className="mb-4 font-['Playfair_Display'] text-2xl text-white">{t('contact.locationHighlights')}</h3>
                  <ul className="space-y-2 text-slate-200">
                    {(t('contact.nearbyPlaces', { returnObjects: true }) as string[]).map((place: string, index: number) => (
                      <li key={index}>• {place}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white p-7 md:p-10">
                <div>
                  <h3 className="mb-6 flex items-center font-['Playfair_Display'] text-2xl text-slate-950 md:text-3xl">
                    <Calendar className="mr-3 h-6 w-6 text-[#0A5275]" />
                    {t('contact.checkAvailability')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="block cursor-pointer" onClick={() => document.getElementById('check-in')?.click()}>
                      <span className="block text-sm mb-2">{t('contact.checkIn')}</span>
                      <input
                        id="check-in"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-700 focus:outline-none focus:border-[#0A5275] focus:ring-1 focus:ring-[#0A5275] cursor-pointer"
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
                        className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-700 focus:outline-none focus:border-[#0A5275] focus:ring-1 focus:ring-[#0A5275] cursor-pointer"
                        min={checkIn || new Date().toISOString().split('T')[0]}
                      />
                    </label>
                    {nights > 0 && nights < 2 && ( // Add this conditional rendering
                      <p className="text-red-400 text-sm mt-1">{t('contact.minimumStay')}</p>
                    )}
                    <button
                      onClick={handleBooking}
                      className="w-full bg-[#0A5275] hover:bg-[#073B56] text-white font-semibold py-3 px-6 md:col-span-2
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
                <aside className="mt-10 hidden border-t border-slate-200 pt-7 lg:block">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A5275]">Direct booking</p>
                  <h4 className="mt-2 font-['Playfair_Display'] text-2xl text-slate-950">{t('contact.discountPopup.title')}</h4>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{t('contact.discountPopup.description')}</p>
                </aside>
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
                    onClick={handleEmailClient}
                    className="w-full bg-[#0A5275] text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all shadow-lg hover:bg-[#073B56] hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>{t('contact.discountPopup.emailButton', { defaultValue: 'Email Us Directly' })}</span>
                  </button>
                  <button
                    onClick={handleContactMessage}
                    className="hidden w-full bg-[#0A5275] text-white text-lg font-semibold py-4 px-6 
                      rounded-lg relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300
                      shadow-lg hover:bg-[#073B56]
                      tracking-wider"
                  >
                    ✨ {t('contact.discountPopup.messageButton')} 🎉
                  </button>
                  <button
                    onClick={handleBookingContinue}
                    className="w-full border border-gray-200 hover:border-[#0A5275] text-gray-700 hover:text-[#0A5275] font-semibold py-3 px-6 rounded-lg transition-colors"
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
