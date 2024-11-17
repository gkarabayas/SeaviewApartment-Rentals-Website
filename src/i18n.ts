import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './i18n/locales/en.json';
import grTranslations from './i18n/locales/gr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      gr: { translation: grTranslations }
    },
    lng: 'en', // force default to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Handle URL-based language switching
const path = window.location.pathname;
if (path.startsWith('/gr')) {
  i18n.changeLanguage('gr');
}

export default i18n;