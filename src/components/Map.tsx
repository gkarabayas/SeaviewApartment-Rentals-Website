import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
  useEffect(() => {
    const map = L.map('map', {
      preferCanvas: true,
    }).setView([38.230462, 21.753150], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([38.285794, 21.7615477], { icon: customIcon })
      .addTo(map)
      .bindPopup('Lefkotheas 8, Patra 264 42')
      .openPopup();

    map.invalidateSize();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Location</h2>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <div id="map" className="w-full h-full rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}