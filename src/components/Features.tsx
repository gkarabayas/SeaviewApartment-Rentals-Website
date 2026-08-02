import React from 'react';
import { useTranslation } from 'react-i18next';
import Bed from 'lucide-react/dist/esm/icons/bed.js';
import Bath from 'lucide-react/dist/esm/icons/bath.js';
import UtensilsCrossed from 'lucide-react/dist/esm/icons/utensils-crossed.js';
import Car from 'lucide-react/dist/esm/icons/car.js';
import Wifi from 'lucide-react/dist/esm/icons/wifi.js';
import Mountain from 'lucide-react/dist/esm/icons/mountain.js';
import Waves from 'lucide-react/dist/esm/icons/waves.js';
import Flame from 'lucide-react/dist/esm/icons/flame.js';
import Wind from 'lucide-react/dist/esm/icons/wind.js';
import Tv from 'lucide-react/dist/esm/icons/tv.js';
import Utensils from 'lucide-react/dist/esm/icons/utensils.js';
import Coffee from 'lucide-react/dist/esm/icons/coffee.js';

export function Features() {
  const { t } = useTranslation();

  const amenities = {
    bedrooms: { icon: Bed, title: t('features.bedrooms.title'), desc: t('features.bedrooms.desc'), details: t('features.bedrooms.details') },
    bathrooms: { icon: Bath, title: t('features.bathrooms.title'), desc: t('features.bathrooms.desc') },
    kitchen: { icon: UtensilsCrossed, title: t('features.kitchen.title'), desc: t('features.kitchen.desc'), details: t('features.kitchen.details') },
    fireplace: { icon: Flame, title: t('features.fireplace.title'), desc: t('features.fireplace.desc') },
    seaview: { icon: Waves, title: t('features.seaview.title'), desc: t('features.seaview.desc'), details: t('features.seaview.details') },
    mountainview: { icon: Mountain, title: t('features.mountainview.title'), desc: t('features.mountainview.desc') },
    airconditioning: { icon: Wind, title: t('features.airconditioning.title'), desc: t('features.airconditioning.desc') },
    bbq: { icon: Utensils, title: t('features.bbq.title'), desc: t('features.bbq.desc') },
    parking: { icon: Car, title: t('features.parking.title'), desc: t('features.parking.desc') },
    wifi: { icon: Wifi, title: t('features.wifi.title'), desc: t('features.wifi.desc') },
    tv: { icon: Tv, title: t('features.tv.title'), desc: t('features.tv.desc') },
    coffee: { icon: Coffee, title: t('features.coffeestation.title'), desc: t('features.coffeestation.desc') },
  };

  const featuredAmenities = [amenities.seaview, amenities.bedrooms, amenities.kitchen];
  const amenityGroups = [
    { title: t('features.groups.comfort'), items: [amenities.bathrooms, amenities.fireplace, amenities.airconditioning] },
    { title: t('features.groups.lifestyle'), items: [amenities.mountainview, amenities.tv, amenities.wifi] },
    { title: t('features.groups.convenience'), items: [amenities.coffee, amenities.bbq, amenities.parking] },
  ];

  return (
    <section className="page-section" id="features">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-100 bg-white p-6 text-gray-900 shadow-lg md:p-10">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#006CE4]">Sea View Apartment</p>
          <h2 className="section-title mb-3 text-4xl font-semibold text-gray-900 md:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">{t('features.subtitle')}</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {featuredAmenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <article
                key={amenity.title}
                className="relative min-h-[240px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
              >
                <div className="mb-10 grid h-12 w-12 place-items-center rounded-xl bg-[#006CE4]/10 text-[#006CE4]">
                  <Icon size={25} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{amenity.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{amenity.details ?? amenity.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {amenityGroups.map((group) => (
            <section key={group.title} className="rounded-2xl border border-gray-100 bg-white p-5">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{group.title}</h3>
              <div className="space-y-1">
                {group.items.map((amenity) => {
                  const Icon = amenity.icon;

                  return (
                    <div key={amenity.title} className="flex gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50">
                      <div className="mt-0.5 text-[#006CE4]"><Icon size={20} /></div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{amenity.title}</h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{amenity.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
