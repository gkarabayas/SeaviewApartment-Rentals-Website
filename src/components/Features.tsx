import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bed, Bath, UtensilsCrossed, Car, Wifi, Mountain, Waves, Flame, Wind, Tv, Utensils, Coffee } from 'lucide-react';

export function Features() {
  const { t } = useTranslation();

  const features = [
    { icon: <Bed className="w-8 h-8 text-blue-400" />, title: t('features.bedrooms.title'), desc: t('features.bedrooms.desc'), details: t('features.bedrooms.details') },
    { icon: <Bath className="w-8 h-8 text-blue-400" />, title: t('features.bathrooms.title'), desc: t('features.bathrooms.desc'), details: t('features.bathrooms.details') },
    { icon: <UtensilsCrossed className="w-8 h-8 text-blue-400" />, title: t('features.kitchen.title'), desc: t('features.kitchen.desc'), details: t('features.kitchen.details') },
    { icon: <Flame className="w-8 h-8 text-blue-400" />, title: t('features.fireplace.title'), desc: t('features.fireplace.desc'), details: t('features.fireplace.details') },
    { icon: <Waves className="w-8 h-8 text-blue-400" />, title: t('features.seaview.title'), desc: t('features.seaview.desc'), details: t('features.seaview.details') },
    { icon: <Mountain className="w-8 h-8 text-blue-400" />, title: t('features.mountainview.title'), desc: t('features.mountainview.desc'), details: t('features.mountainview.details') },
    { icon: <Wind className="w-8 h-8 text-blue-400" />, title: t('features.airconditioning.title'), desc: t('features.airconditioning.desc'), details: t('features.airconditioning.details') },
    { icon: <Utensils className="w-8 h-8 text-blue-400" />, title: t('features.bbq.title'), desc: t('features.bbq.desc'), details: t('features.bbq.details') },
    { icon: <Car className="w-8 h-8 text-blue-400" />, title: t('features.parking.title'), desc: t('features.parking.desc'), details: t('features.parking.details') },
    { icon: <Wifi className="w-8 h-8 text-blue-400" />, title: t('features.wifi.title'), desc: t('features.wifi.desc'), details: t('features.wifi.details') },
    { icon: <Tv className="w-8 h-8 text-blue-400" />, title: t('features.tv.title'), desc: t('features.tv.desc'), details: t('features.tv.details') },
    { icon: <Coffee className="w-8 h-8 text-blue-400" />, title: t('features.coffeestation.title'), desc: t('features.coffeestation.desc'), details: t('features.coffeestation.details') }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="features">
      <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-2">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              </div>
              <p className="text-sm text-white/90 transition-all duration-300">
                <span className="block group-hover:hidden">{feature.desc}</span>
                <span className="hidden group-hover:block">{feature.details}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}