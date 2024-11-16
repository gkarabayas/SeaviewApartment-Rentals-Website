import React from 'react';
import { Home, Train, Bus, Wine, Church, Ticket } from 'lucide-react';

export function Host() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="host">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/236445365.jpg?k=60c7ac6abb6561d21df7ada33b9667937beace19876326d41b2f19e95953205a&o="
            alt="Hosts"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Meet Your Hosts</h2>
            <h3 className="text-2xl mb-4">Spiro, Panagiotis and Roswitha Ried-Korpas</h3>
            <p className="text-gray-300">
              Γεια σου, Welcome, Willkommen, OLA! With 30 years of hospitality experience in the USA, 
              we bring our expertise to make your stay truly memorable. Our "House Befitting Heaven" 
              is designed to be your perfect home away from home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Home className="text-blue-400" />
              Location Highlights
            </h3>
            <ul className="space-y-2">
              <li>• 98 feet from the beachfront</li>
              <li>• 0.6 miles from Rion</li>
              <li>• 2.5 miles from Patras center</li>
              <li>• 0.6 miles from Rio-Antirio Bridge</li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Ticket className="text-blue-400" />
              Nearby Attractions
            </h3>
            <ul className="space-y-2">
              <li>• Archaeological Museum (1.2 miles)</li>
              <li>• Roman Theater (4 miles)</li>
              <li>• St. Andreas Church (5 miles)</li>
              <li>• Achaia Klaus Winery (10 miles)</li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bus className="text-blue-400" />
              Transportation
            </h3>
            <ul className="space-y-2">
              <li>• Bus stop within 164 feet</li>
              <li>• City train within 280 feet</li>
              <li>• Free private parking</li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Welcome Package</h3>
            <p className="text-gray-300">
              We provide all necessities for your first days: water, coffee, teas, 
              milk, juice, laundry supplies, and more. Our goal is to ensure a 
              comfortable and memorable stay from the moment you arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}