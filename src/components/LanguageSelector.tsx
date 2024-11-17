import React from 'react';
import { useTranslation } from 'react-i18next';
import { GR, GB } from 'country-flag-icons/react/3x2';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'gr' ? 'en' : 'gr';
    i18n.changeLanguage(newLang).then(() => {
      console.log('Language changed to:', newLang);
      console.log('Translation test:', i18n.t('hero.title'));
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      aria-label="Toggle language"
    >
      {i18n.language === 'gr' ? (
        <GB className="w-6 h-4" title="Switch to English" />
      ) : (
        <GR className="w-6 h-4" title="Switch to Greek" />
      )}
    </button>
  );
}