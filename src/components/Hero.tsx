import React from 'react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen relative flex items-center justify-center text-center px-10">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('/images/background2.png')] bg-cover bg-center"
        aria-hidden="true"
      />
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8">
          {t('hero.title1')} <span className="block mt-3">{t('hero.title2')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-normal">
          {t('hero.subtitle')}
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#006CE4] text-white px-6 py-4 rounded-2xl text-xl font-semibold hover:bg-[#0052b3] transition-colors shadow-lg"
        >
          {t('hero.button')}
        </button>
      </div>
    </section>
  );
}
