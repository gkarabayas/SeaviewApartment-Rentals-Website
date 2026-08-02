import React, { useEffect, useState } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import X from 'lucide-react/dist/esm/icons/x.js';
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
  const [hasScrolled, setHasScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'map' ? 184 : 96;
      const elementPosition = element.getBoundingClientRect().top;

      window.scrollTo({
        top: Math.max(0, elementPosition + window.pageYOffset - offset),
        behavior: 'smooth'
      });
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
    <>
      <nav className={`fixed inset-x-0 z-[2000] transition-all duration-300 ${
      hasScrolled
        ? 'top-0 border-b border-white/10 bg-slate-950/75 shadow-lg backdrop-blur-md'
        : 'top-3 border-b border-transparent bg-transparent shadow-none backdrop-blur-none'
    }`}>
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="site-title text-white text-2xl md:text-3xl font-semibold italic tracking-wide -ml-4">
            Sea View Apartment<sub className="ml-1 text-xs font-medium not-italic tracking-normal">Patras</sub>
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
              className="rounded-xl bg-[#006CE4] px-7 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#0052b3]"
            >
              {t('nav.bookNow')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-white transition-colors hover:bg-white/15"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        </div>
      </nav>

      {/* Mobile side drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[2100] transition-opacity duration-300 ${
            isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <button
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 cursor-default bg-slate-950/65 backdrop-blur-[2px]"
          />
          <aside
            id="mobile-navigation"
            className={`absolute bottom-0 right-0 top-0 flex w-[min(92vw,24rem)] flex-col border-l border-white/10 bg-slate-950 px-5 pb-7 pt-6 shadow-2xl transition-transform duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="site-title text-xl font-semibold italic tracking-wide text-white">Sea View Apartment</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <X size={21} />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              {navigation.map((item) => (
                <button
                  key={item.name.toLowerCase()}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`rounded-xl px-4 py-4 text-left text-base font-semibold transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 w-full rounded-xl bg-[#006CE4] px-6 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#0052b3]"
            >
              {t('nav.bookNow')}
            </button>
          </aside>
      </div>
    </>
  );
}
