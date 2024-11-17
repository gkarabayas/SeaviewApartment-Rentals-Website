import React from 'react';
import { Navigation2, Wine, Wifi, Tv } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Remove the glowingCardStyles and useEffect hook
// const glowingCardStyles = `
//   @keyframes glowingBorder {
//     0% { background-position: 0% 0%; }
//     50% { background-position: 200% 0%; }
//     100% { background-position: 0% 0%; }
//   }

//   .glowing-border {
//     position: relative;
//     /* Remove background from inside the cards */
//     /* background: rgba(0, 0, 0, 0.3); */
//     z-index: 1;
//   }

//   .glowing-border::before {
//     content: '';
//     position: absolute;
//     inset: -2px;
//     background: linear-gradient(
//       90deg,
//       #60a5fa,
//       #3b82f6,
//       #2563eb,
//       #1d4ed8,
//       #3b82f6,
//       #60a5fa
//     );
//     background-size: 300% 100%;
//     animation: glowingBorder 3s linear infinite;
//     border-radius: inherit;
//     z-index: -1;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   .glowing-border:hover::before {
//     opacity: 1;
//   }

//   .glowing-border > * {
//     position: relative;
//     z-index: 2;
//   }
// `;

// React.useEffect(() => {
//   // Inject the styles
//   const style = document.createElement('style');
//   style.textContent = glowingCardStyles;
//   document.head.appendChild(style);
//   return () => style.remove();
// }, []);

export function Hero() {
  const { t, i18n } = useTranslation();
  
  console.log('Hero - Current language:', i18n.language);
  console.log('Hero - Translation test:', t('hero.title'));

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-5xl font-bold mb-6">{t('hero.title')}</h2>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
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
