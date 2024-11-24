import React from 'react';
import { Navigation2, Wine, Wifi, Tv } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PulsatingButton from "./ui/pulsating-button.tsx";
import AnimatedGradientText from "./ui/animated-gradient-text";

const textAnimationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

export function Hero() {
  const { t, i18n } = useTranslation();
  
  console.log('Hero - Current language:', i18n.language);
  console.log('Hero - Translation test:', t('hero.title'));

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = textAnimationStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <div className="flex items-center gap-2 mb-6">
          <AnimatedGradientText>
            <span className="text-5xl font-bold">
              {t('hero.title1')}
            </span>
          </AnimatedGradientText>
          <span className="text-5xl font-bold text-white">
            {t('hero.title2')}
          </span>
        </div>
        <p 
          className="text-xl mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]">
            <Navigation2 className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{t('hero.location')}</h3>
            <p className="transform transition-all duration-500 group-hover:translate-x-2">{t('hero.locationDesc')}</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]">
            <Wine className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:-rotate-12" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{t('hero.welcome')}</h3>
            <p className="transform transition-all duration-500 group-hover:translate-x-2">{t('hero.welcomeDesc')}</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]">
            <Tv className="w-8 h-8 mb-4 text-blue-400 transform transition-transform duration-500 group-hover:rotate-6" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{t('hero.entertainment')}</h3>
            <p className="transform transition-all duration-500 group-hover:translate-x-2">{t('hero.entertainmentDesc')}</p>
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
