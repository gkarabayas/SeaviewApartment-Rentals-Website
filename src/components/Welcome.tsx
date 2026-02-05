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
              src="/images/award_2025.png"
              alt="Booking Award 2025"
              className="rounded-2xl shadow-lg w-3/4 max-w-md mx-auto transform transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
