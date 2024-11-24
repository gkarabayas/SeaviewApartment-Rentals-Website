import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import ShimmerButton from "./ui/shimmer-button";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setShowGallery: (show: boolean) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'map') {
        const offset = 184;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.host'), href: '#host' },
    { name: t('nav.location'), href: '#map' }
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-white text-xl md:text-2xl font-bold">Sea View Apartment</h1>
            <div className="md:hidden">
              <LanguageSelector />
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name.toLowerCase()}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-white hover:text-blue-400 transition-colors ${
                  activeSection === item.href.substring(1) ? 'border-b-2 border-blue-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <ShimmerButton
              onClick={() => scrollToSection('contact')}
              className="shadow-lg"
              background="rgb(37,99,235)"
              shimmerSize="0.2em"
                          >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                {t('nav.bookNow')}
              </span>
            </ShimmerButton>
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 opacity-100' : '-top-96 opacity-0'
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name.toLowerCase()}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-white hover:text-blue-400 transition-colors text-left py-2 ${
                  activeSection === item.href.substring(1) ? 'text-blue-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <ShimmerButton
              onClick={() => scrollToSection('contact')}
              className="w-full shadow-lg"
              background="rgb(37,99,235)"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                {t('nav.bookNow')}
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </nav>
  );
}