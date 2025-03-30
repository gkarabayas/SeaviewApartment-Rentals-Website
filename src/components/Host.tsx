import React, { useState } from 'react';
import { Home, Train, Bus, Wine, Church, Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Host() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="page-section" id="host">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl text-gray-900 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div>
            <h2 className="section-title text-4xl font-semibold mb-4 text-left">{t('host.title')}</h2>
            <h3 className="text-2xl font-semibold mb-4">{t('host.hosts')}</h3>
            
            <div className="relative w-full md:hidden mb-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="focus:outline-none transform transition-all duration-500 hover:scale-110 hover:shadow-lg w-full"
              >
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o="
                  alt={t('host.hostsImageAlt')}
                  className="w-full h-56 rounded-2xl object-cover"
                />
              </button>
            </div>

            <p className="text-gray-600">{t('host.description')}</p>
          </div>

          <div className="relative w-full md:w-auto hidden md:block">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="focus:outline-none transform transition-all duration-500 hover:scale-110 hover:shadow-lg w-full md:w-auto"
            >
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o="
                alt={t('host.hostsImageAlt')}
                className="w-full md:w-80 h-56 rounded-2xl object-cover"
              />
            </button>
          </div>

          {/* Expanded image modal */}
          {isExpanded && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer hover:shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Home className="text-[#006CE4]" />
              {t('host.locationHighlights')}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {(t('host.locationItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer hover:shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Ticket className="text-[#006CE4]" />
              {t('host.attractions')}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {(t('host.attractionItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer hover:shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bus className="text-[#006CE4]" />
              {t('host.transportation')}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {(t('host.transportItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer hover:shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wine className="text-[#006CE4]" />
              {t('host.welcomePackage')}
            </h3>
            <p className="text-gray-600">{t('host.welcomeDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
