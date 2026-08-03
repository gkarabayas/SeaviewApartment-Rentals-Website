import React, { useState } from 'react';
import Star from 'lucide-react/dist/esm/icons/star.js';
import Quote from 'lucide-react/dist/esm/icons/quote.js';
import { GR, AU, AL } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';

const countryComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Greece: GR,
  Australia: AU,
  Albania: AL
};

const reviews = [
  {
    name: "Δημητρα",
    country: "Greece",
    date: "April 2024",
    score: 10,
    title: "Perfect! the best stay in Rio!!!",
    text: "Everything were perfect!!! The apartment was great and very very clean! The hospitality was impeccable and the owners were willing to help us with everything. Everything was super and the house was super intelligent with electronic systems and contact buttons to control the blinds and lights. The house is very close on the sea. It's ideal for relaxing and for vacations!",
    stay: "2 nights",
    type: "Group"
  },
  {
    name: "Daryn",
    country: "Australia",
    date: "July 2024",
    score: 10,
    title: "Awesome apartment and host.",
    text: "Location fantastic, right near beach. Host was more than helpful. Couldn't have done more for us. Gifts and food left for us everyday of our stay at the door. Property immaculately clean and also cleaned mid week while we were there. Everything catered for our needs within the apartment. It was a wonderful stay and would highly recommend everyone to stay here.",
    stay: "10 nights",
    type: "Group"
  },
  {
    name: "Fjordi",
    country: "Albania",
    date: "November 2023",
    score: 10,
    title: "Exceptional",
    text: "I had the most incredible experience of my life! The host was incredibly friendly, making me feel like we'd known each other for years. The warmth and kindness were unmatched. Everything was flawless - impeccable service, a fantastic house, and an ideal location. The cleanliness and smart home features added to the perfection. Highly recommend!",
    stay: "4 nights",
    type: "Group"
  },
  {
    name: "Christonikos",
    country: "Greece",
    date: "July 2023",
    score: 10,
    title: "Fantastic place, super host",
    text: "The host was super hospitable and discreet at the same time, very caring, keeping in touch in case we needed anything and going out of her way to leave us little presents that made our days brighter! The apartment was exceptionally clean, stocked up with many amenities - from toiletries to snacks and anything in-between. The rooms were very comfortable, while the whole apartment was a high-tech oasis. Moreover, the location is ideal for vacations, as it's right next to very nice beaches, allowing you to park your car and forget it during your stay. I really recommend the Sea View Apartment to anyone visiting Patras - for sure I'll be back!",
    stay: "4 nights",
    type: "Family"
  }
];

export function Reviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 2);
  const { t } = useTranslation();

  return (
    <section id="reviews">
      <div className="mx-auto w-full max-w-[90rem] px-4 text-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">{t('reviews.title')}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {visibleReviews.map((review, index) => (
            <article
              key={index} 
              className="group flex min-h-[330px] flex-col bg-[#f8f6f1] p-7 transition-colors duration-300 hover:bg-[#f4f1e9] md:p-9"
            >
              <Quote size={36} className="mb-7 text-[#0A5275]/25" aria-hidden="true" />
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{review.name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    {review.country}
                    {React.createElement(countryComponents[review.country], {
                      className: "h-4 w-6"
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#062842] px-3 py-2 text-white">
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                  <span className="text-sm font-bold">{review.score}/10</span>
                </div>
              </div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0A5275]">
                {review.stay} · {review.date} · {review.type}
              </div>
              <h4 className="mb-3 font-['Playfair_Display'] text-2xl leading-tight text-slate-950">{review.title}</h4>
              <p className="text-sm leading-7 text-slate-600 md:text-base">{review.text}</p>
            </article>
          ))}
        </div>
        
        {!showAllReviews && (
          <div className="mt-8 text-center md:mt-10">
            <button
              onClick={() => setShowAllReviews(true)}
              className="rounded-full bg-[#0A5275] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#073B56] hover:shadow-lg"
            >
              {t('reviews.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
