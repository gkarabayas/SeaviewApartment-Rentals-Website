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
    <nav className="absolute w-full z-50 pt-6">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="site-title text-white text-2xl md:text-3xl font-semibold italic tracking-wide -ml-4">
            Sea View Apartment
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-10 ml-16">
            {navigation.map((item) => (
              <button
                key={item.name.toLowerCase()}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-white hover:text-white/80 transition-all duration-300 text-base font-semibold ${
                  activeSection === item.href.substring(1) 
                    ? 'border-b-2 border-white' 
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSelector />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#006CE4] text-white px-6 py-3 rounded-2xl text-base font-semibold hover:bg-[#0052b3] transition-colors"
            >
              {t('nav.bookNow')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-black/90 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 opacity-100' : '-top-96 opacity-0'
          }`}
        >
          <div className="flex flex-col py-2">
            {navigation.map((item) => (
              <button
                key={item.name.toLowerCase()}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`text-white hover:text-white/80 hover:bg-white/10 transition-all duration-300 text-left py-4 px-6 text-base font-semibold ${
                  activeSection === item.href.substring(1) 
                    ? 'text-white bg-white/10' 
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#006CE4] text-white py-4 px-6 mx-6 my-4 rounded text-base font-semibold hover:bg-[#0052b3] transition-colors"
            >
              {t('nav.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
