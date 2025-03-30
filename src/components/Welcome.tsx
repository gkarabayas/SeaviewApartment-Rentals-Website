import React from 'react';
import { useTranslation } from 'react-i18next';

export function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text */}
          <div className="space-y-6">
            <h2 className="section-title text-left text-4xl font-semibold text-gray-900">
              {t('welcome.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('welcome.description')}
            </p>
          </div>
          {/* Right side: Image */}
          <div className="relative group">
            <img 
              src="/images/balcony.png" 
              alt="Balcony View"
              className="rounded-2xl shadow-lg w-full transform transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl border border-[#006CE4]/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
