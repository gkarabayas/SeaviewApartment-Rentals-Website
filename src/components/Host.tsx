import { useState } from 'react';
import Home from 'lucide-react/dist/esm/icons/home.js';
import Bus from 'lucide-react/dist/esm/icons/bus.js';
import Wine from 'lucide-react/dist/esm/icons/wine.js';
import Ticket from 'lucide-react/dist/esm/icons/ticket.js';
import { useTranslation } from 'react-i18next';

const hostImage = 'https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o=';

export function Host() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const details = [
    { icon: Home, title: t('host.locationHighlights'), items: t('host.locationItems', { returnObjects: true }) as string[] },
    { icon: Ticket, title: t('host.attractions'), items: t('host.attractionItems', { returnObjects: true }) as string[] },
    { icon: Bus, title: t('host.transportation'), items: t('host.transportItems', { returnObjects: true }) as string[] },
  ];

  return (
    <section id="host">
      <div className="mx-auto w-full max-w-[90rem] px-4 text-gray-900 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">{t('host.title')}</h2>
        </div>

        <article className="bg-[#f8f6f1] p-5 md:hidden">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsExpanded(true)}
              className="group relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl text-left shadow-sm"
              aria-label={t('host.hostsImageAlt')}
            >
              <img
                src={hostImage}
                alt={t('host.hostsImageAlt')}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </button>
            <div>
              <h3 className="font-['Playfair_Display'] text-3xl leading-tight text-slate-950">{t('host.hosts')}</h3>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">{t('host.description')}</p>
        </article>

        <article className="hidden bg-white md:grid md:grid-cols-[0.28fr_1.72fr]">
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative min-h-[230px] w-full overflow-hidden text-left"
            aria-label={t('host.hostsImageAlt')}
          >
            <img
              src={hostImage}
              alt={t('host.hostsImageAlt')}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
          </button>

          <div className="flex flex-col justify-center bg-[#f8f6f1] px-7 py-10 md:px-12 md:py-14 lg:px-16">
            <h3 className="font-['Playfair_Display'] text-3xl leading-tight text-slate-950 md:text-4xl">{t('host.hosts')}</h3>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">{t('host.description')}</p>
          </div>
        </article>

        <div className="mt-6 grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-2">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <section key={detail.title} className="bg-white p-7 md:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0A5275]/10 text-[#0A5275]"><Icon size={21} /></div>
                  <h3 className="font-['Playfair_Display'] text-2xl text-slate-950">{detail.title}</h3>
                </div>
                <ul className="space-y-3">
                  {detail.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A5275]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <section className="bg-[#062842] p-7 text-white md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-sky-200"><Wine size={21} /></div>
              <h3 className="font-['Playfair_Display'] text-2xl">{t('host.welcomePackage')}</h3>
            </div>
            <p className="text-sm leading-7 text-slate-200 md:text-base md:leading-8">{t('host.welcomeDescription')}</p>
          </section>
        </div>
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-[2200] flex cursor-pointer items-center justify-center bg-slate-950/90 p-5"
          onClick={() => setIsExpanded(false)}
        >
          <img
            src={hostImage}
            alt={t('host.hostsImageAlt')}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}
