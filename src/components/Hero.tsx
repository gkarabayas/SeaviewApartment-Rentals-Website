import React from 'react';
import { Navigation2, Wine, Wifi, Tv } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PulsatingButton from "./ui/pulsating-button.tsx";
import AnimatedGradientText from "./ui/animated-gradient-text";

export function Hero() {
  const { t, i18n } = useTranslation();
  
  console.log('Hero - Current language:', i18n.language);
  console.log('Hero - Translation test:', t('hero.title'));

  return (
    <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-6">
          <AnimatedGradientText>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {t('hero.title1')}
            </span>
          </AnimatedGradientText>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t('hero.title2')}
          </span>
        </div>
        <p 
          className="text-xl mb-8 animate-fade-up [animation-delay:500ms] text-white"
        >
          {t('hero.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <Navigation2 className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">{t('hero.location')}</h3>
            <p className="text-white transform transition-all duration-500 group-hover:translate-x-2">{t('hero.locationDesc')}</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <Wine className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:-rotate-12" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">{t('hero.welcome')}</h3>
            <p className="text-white transform transition-all duration-500 group-hover:translate-x-2">{t('hero.welcomeDesc')}</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <Tv className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:rotate-6" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">{t('hero.entertainment')}</h3>
            <p className="text-white transform transition-all duration-500 group-hover:translate-x-2">{t('hero.entertainmentDesc')}</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <PulsatingButton
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('hero.button')}
          </PulsatingButton>
        </div>
      </div>
    </section>
  );
}
