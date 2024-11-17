import React, { useState } from 'react';
import { Star } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="reviews">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('reviews.title')}</h2>
        <div className="grid grid-cols-1 gap-8">
          {visibleReviews.map((review, index) => (
            <div key={index} className="bg-black/30 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-gray-300 flex items-center gap-2">
                    {review.country}
                    {React.createElement(countryComponents[review.country], {
                      className: "w-6 h-4"
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{review.score}/10</span>
                </div>
              </div>
              <div className="text-sm text-gray-300 mb-2">
                {review.stay} · {review.date} · {review.type}
              </div>
              <h4 className="font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-300">{review.text}</p>
            </div>
          ))}
        </div>
        
        {!showAllReviews && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllReviews(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              {t('reviews.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}