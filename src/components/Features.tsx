import React, { useState } from 'react';
import { Bed, Bath, UtensilsCrossed, Car, Wifi, Mountain, Waves, Flame, Wind, Tv, Utensils, Coffee } from 'lucide-react';

export function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    { icon: <Bed className="w-8 h-8 text-blue-400" />, title: "2 Bedrooms", desc: "Each with comfortable double beds", details: "Two spacious bedrooms featuring premium double beds with luxury linens" },
    { icon: <Bath className="w-8 h-8 text-blue-400" />, title: "2 Modern Bathrooms", desc: "Fully equipped with amenities", details: "Contemporary bathroom with shower, premium toiletries, and fresh towels" },
    { icon: <UtensilsCrossed className="w-8 h-8 text-blue-400" />, title: "Fully Equipped Kitchen", desc: "Dishwasher, oven, microwave", details: "Modern kitchen with dishwasher, oven, microwave, and all cooking essentials" },
    { icon: <Flame className="w-8 h-8 text-blue-400" />, title: "Fireplace", desc: "Cozy indoor fireplace", details: "Beautiful indoor fireplace perfect for cozy evenings" },
    { icon: <Waves className="w-8 h-8 text-blue-400" />, title: "Sea View", desc: "Stunning ocean vistas", details: "Breathtaking views of the Mediterranean Sea from your private balcony" },
    { icon: <Mountain className="w-8 h-8 text-blue-400" />, title: "Mountain View", desc: "Scenic mountain landscape", details: "Panoramic mountain views creating a peaceful atmosphere" },
    { icon: <Wind className="w-8 h-8 text-blue-400" />, title: "Air Conditioning", desc: "Climate controlled comfort", details: "Modern climate control system for year-round comfort" },
    { icon: <Utensils className="w-8 h-8 text-blue-400" />, title: "BBQ", desc: "Outdoor barbecue facility", details: "Private BBQ area perfect for outdoor dining" },
    { icon: <Car className="w-8 h-8 text-blue-400" />, title: "Parking", desc: "Free private parking", details: "Secure private parking space included with your stay" },
    { icon: <Wifi className="w-8 h-8 text-blue-400" />, title: "Free WiFi", desc: "High-speed internet", details: "High-speed fiber internet throughout the apartment" },
    { icon: <Tv className="w-8 h-8 text-blue-400" />, title: "Smart TV", desc: "With streaming services", details: "Large Smart TV with Netflix, Prime Video, and more" },
    { icon: <Coffee className="w-8 h-8 text-blue-400" />, title: "Coffee Station", desc: "Tea and coffee maker", details: "Premium coffee maker with complimentary coffee and tea selection" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="features">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Apartment Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col bg-black/30 p-4 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                activeFeature === index ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="flex items-center space-x-4 mb-2">
                {feature.icon}
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-300">
                {activeFeature === index ? feature.details : feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}