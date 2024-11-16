import React from 'react';
import { useTranslation } from 'react-i18next';
import { GR, GB } from 'country-flag-icons/react/3x2';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'gr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? (
        <GR className="w-6 h-4" title="Switch to Greek" />
      ) : (
        <GB className="w-6 h-4" title="Switch to English" />
      )}
    </button>
  );
}