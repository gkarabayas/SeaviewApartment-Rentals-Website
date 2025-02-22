import React, { useState } from 'react';
import { Home, Train, Bus, Wine, Church, Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Host() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="host">
      <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="focus:outline-none transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] rounded-full"
            >
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o="
                alt={t('host.hostsImageAlt')}
                className="w-80 h-56 rounded-full object-cover" // Changed from rounded-2xl and adjusted height
              />
            </button>

            {/* Expanded image modal */}
            {isExpanded && (
              <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o="
                  alt={t('host.hostsImageAlt')}
                  className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain transform transition-transform duration-500 scale-100"
                />
              </div>
            )}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">{t('host.title')}</h2>
            <h3 className="text-2xl mb-4">{t('host.hosts')}</h3>
            <p className="text-white/90">{t('host.description')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Home className="text-blue-400" />
              {t('host.locationHighlights')}
            </h3>
            <ul className="space-y-2 text-white/90">
              {t('host.locationItems', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Ticket className="text-blue-400" />
              {t('host.attractions')}
            </h3>
            <ul className="space-y-2 text-white/90">
              {t('host.attractionItems', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bus className="text-blue-400" />
              {t('host.transportation')}
            </h3>
            <ul className="space-y-2 text-white/90">
              {t('host.transportItems', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10">
            <h3 className="text-xl font-semibold mb-4">{t('host.welcomePackage')}</h3>
            <p className="text-white/90">{t('host.welcomeDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}