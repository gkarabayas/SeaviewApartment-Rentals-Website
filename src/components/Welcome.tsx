import React from 'react';
import { useTranslation } from 'react-i18next';

export function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f8f6f1] py-6 md:py-8">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.22fr_0.78fr]">
          <div className="flex flex-col justify-center px-7 py-9 md:px-12 md:py-12 lg:px-16 lg:py-14">
            <h2 className="max-w-3xl font-['Playfair_Display'] text-4xl font-medium leading-[1.02] text-slate-950 md:text-5xl lg:text-6xl">
              {t('welcome.title')}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {t('welcome.description')}
            </p>
          </div>

          <div className="group relative flex min-h-[250px] items-center justify-center p-4 md:min-h-[340px] md:p-6">
            <img
              src="/images/award_2025.png"
              alt="Booking Award 2025"
              className="w-[88%] max-w-md rounded-2xl shadow-lg transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
