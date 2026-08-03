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

  const amenityGroups = [
    {
      number: '04',
      title: t('features.groups.comfort'),
      icon: Bath,
      items: [amenities.bathrooms, amenities.fireplace, amenities.airconditioning],
      panelClass: 'bg-[#f8f6f1] text-slate-950',
      accentClass: 'bg-[#0A5275]/10 text-[#0A5275]',
      numberClass: 'text-[#0A5275]',
      itemClass: 'border-slate-200/90 bg-white/70 hover:bg-white',
      itemTitleClass: 'text-slate-950',
      itemDescriptionClass: 'text-slate-500',
    },
    {
      number: '05',
      compact: true,
      title: t('features.groups.lifestyle'),
      icon: Mountain,
      items: [amenities.mountainview, amenities.tv, amenities.wifi],
      panelClass: 'bg-[#062842] text-white',
      accentClass: 'border border-white/20 bg-white/10 text-sky-200',
      numberClass: 'text-sky-200',
      itemClass: 'border-white/15 bg-white/[0.07] hover:bg-white/[0.12]',
      itemTitleClass: 'text-white',
      itemDescriptionClass: 'text-slate-300',
    },
    {
      number: '06',
      compact: true,
      title: t('features.groups.convenience'),
      icon: Coffee,
      items: [amenities.coffee, amenities.bbq, amenities.parking],
      panelClass: 'bg-white text-slate-950',
      accentClass: 'bg-amber-100 text-amber-700',
      numberClass: 'text-amber-700',
      itemClass: 'border-amber-100 bg-amber-50/40 hover:bg-amber-50',
      itemTitleClass: 'text-slate-950',
      itemDescriptionClass: 'text-slate-500',
    },
  ];

  const imageFallback = (fallback: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallback;
  };

  return (
    <section className="page-section" id="features">
      <div className="mx-auto w-full max-w-[90rem] px-4 text-gray-900 sm:px-6 lg:px-8">
        <div className="px-6 pb-8 pt-4 text-center md:px-12 md:pb-10 md:pt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0A5275]">Sea View Apartment</p>
          <h2 className="section-title mb-3 font-['Playfair_Display'] text-4xl font-medium text-slate-950 md:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">{t('features.subtitle')}</p>
        </div>

        <div className="flex flex-col">
          <article className="order-3 grid overflow-hidden bg-[#062842] text-white lg:grid-cols-[1.28fr_0.72fr]">
            <div className="group relative order-2 min-h-[310px] overflow-hidden md:min-h-[440px] lg:order-1">
              <img
                src="/images/property/seaview.jpg"
                onError={imageFallback('/images/property/pic17.jpg')}
                alt={t('features.seaview.title')}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061d30]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 md:bottom-7 md:left-8">
                <Waves size={16} /> {amenities.seaview.title}
              </div>
            </div>
            <div className="order-1 flex flex-col justify-center px-7 py-10 md:px-12 lg:order-2 lg:px-10 xl:px-14">
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-sky-200"><Waves size={23} /></div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-200">03</p>
              <h3 className="mb-4 font-['Playfair_Display'] text-4xl leading-none md:text-5xl">{amenities.seaview.title}</h3>
              <p className="max-w-sm text-sm leading-7 text-slate-200 md:text-base">{amenities.seaview.details}</p>
            </div>
          </article>

          <article className="order-1 grid border-b border-slate-200 bg-[#f8f6f1] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-10 md:px-12 lg:order-2 lg:px-14">
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-full bg-[#0A5275]/10 text-[#0A5275]"><Bed size={23} /></div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0A5275]">01</p>
              <h3 className="mb-4 font-['Playfair_Display'] text-4xl leading-none text-slate-950 md:text-5xl">{amenities.bedrooms.title}</h3>
              <p className="max-w-sm text-sm leading-7 text-slate-600 md:text-base">{amenities.bedrooms.details}</p>
            </div>
            <div className="grid min-h-[330px] grid-cols-[1.15fr_0.85fr] gap-3 p-4 md:min-h-[410px] md:gap-5 md:p-6 lg:order-1">
              <img src="/images/property/pic5.jpg" alt={`${amenities.bedrooms.title} one`} className="h-full w-full rounded-2xl object-cover shadow-sm" />
              <img src="/images/property/pic9.jpg" alt={`${amenities.bedrooms.title} two`} className="mt-10 h-[calc(100%-2.5rem)] w-full rounded-2xl object-cover shadow-sm md:mt-14 md:h-[calc(100%-3.5rem)]" />
            </div>
          </article>

          <article className="order-2 grid bg-white lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-10 md:px-12 lg:px-14">
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-amber-700"><UtensilsCrossed size={23} /></div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-700">02</p>
              <h3 className="mb-4 font-['Playfair_Display'] text-4xl leading-none text-slate-950 md:text-5xl">{amenities.kitchen.title}</h3>
              <p className="max-w-sm text-sm leading-7 text-slate-600 md:text-base">{amenities.kitchen.details}</p>
            </div>
            <div className="group relative min-h-[320px] overflow-hidden lg:min-h-[410px]">
              <img
                src="/images/property/kitchen.png"
                onError={imageFallback('/images/property/kitchen.jpg')}
                alt={amenities.kitchen.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>
          </article>
        </div>

        <div className="flex flex-col">
          {amenityGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <article key={group.title} className={`grid ${group.compact ? 'min-h-[205px]' : 'min-h-[245px]'} lg:grid-cols-[0.38fr_1.62fr] ${group.panelClass}`}>
                <div className={`flex flex-col justify-between px-7 md:px-12 lg:px-14 ${group.compact ? 'py-6' : 'py-9'}`}>
                  <div className={`grid h-12 w-12 place-items-center rounded-full ${group.accentClass}`}><GroupIcon size={23} /></div>
                  <div className={group.compact ? 'mt-7 lg:mt-9' : 'mt-10 lg:mt-16'}>
                    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${group.numberClass}`}>{group.number}</p>
                    <h3 className="font-['Playfair_Display'] text-4xl leading-none md:text-5xl">{group.title}</h3>
                  </div>
                </div>
                <div className={`grid content-center gap-3 px-5 md:grid-cols-3 md:gap-4 md:px-8 lg:px-10 ${group.compact ? 'pb-5 md:pb-6 lg:py-6' : 'pb-7 md:pb-10 lg:py-10'}`}>
                  {group.items.map((amenity) => {
                    const Icon = amenity.icon;

                    return (
                      <div key={amenity.title} className={`flex flex-col justify-between rounded-2xl border p-5 transition-colors duration-300 ${group.compact ? 'min-h-[108px]' : 'min-h-[125px]'} ${group.itemClass}`}>
                        <Icon size={22} className={group.numberClass} />
                        <div className="mt-6">
                          <h4 className={`text-base font-semibold ${group.itemTitleClass}`}>{amenity.title}</h4>
                          <p className={`mt-1.5 text-sm leading-relaxed ${group.itemDescriptionClass}`}>{amenity.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
