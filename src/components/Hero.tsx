import React from 'react';
import { Navigation2, Wine, Wifi, Tv } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
        <h2 
          className="text-5xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {t('hero.title')}
        </h2>
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
            {t('hero.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
