import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

export function Map() {
  const { t } = useTranslation();

  useEffect(() => {
    // Check if map container already has a map instance
    const container = L.DomUtil.get('map-canvas');
    if (container != null && (container as any)._leaflet_id != null) {
       return; // Already initialized
    }

    // Initialize Leaflet Map
    const map = L.map('map-canvas', {
      preferCanvas: true,
    }).setView([38.285794, 21.7615477], 12); // Zoomed in (adjust level 12-18 as needed)

    // 1. Base Satellite Layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri',
      maxZoom: 19 // Esri max zoom
    }).addTo(map);

    // 2. Label/Road Layer on Top
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20, // Carto labels max zoom
      pane: 'overlayPane' // Ensure labels are drawn on top of satellite tiles
    }).addTo(map);


    // --- Optional: Fix for default icon paths with bundlers ---
    // delete (L.Icon.Default.prototype as any)._getIconUrl;
    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    //   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    //   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    // });
    // --- End Fix ---

    // Custom Marker Icon
    const customIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add Marker
    L.marker([38.285794, 21.7615477], { icon: customIcon })
      .addTo(map)
      .bindPopup('Lefkotheas 8, Patra 264 42') // Translate if needed
      .openPopup();

    // Ensure map resizes correctly if container size changes
    map.invalidateSize();

    // Cleanup function on component unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="map">
      <div className="mx-auto w-full max-w-[90rem] px-4 text-gray-900 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">{t('map.title')}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0A5275]">Find us</p>
            <div className="h-[360px] overflow-hidden border border-slate-200 shadow-sm md:h-[460px]">
            <div id="map-canvas" className="w-full h-full"></div> {/* Leaflet map attaches here */}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0A5275]">Street view</p>
            <div className="h-[360px] overflow-hidden border border-slate-200 shadow-sm md:h-[460px]">
            <iframe
              // Use the specific Street View embed URL you provided
              src="https://www.google.com/maps/embed?pb=!4v1743344663474!6m8!1m7!1sCggpOc3ezKINPGKKGwuLuw!2m2!1d38.28567816022208!2d21.7614639503293!3f97.35578632455993!4f16.674108922094078!5f1.542265511847476"
              className="w-full h-full border-0" // Use classes for sizing, remove border via class/style
              style={{ border: 0 }} // Inline style for border (alternative to class)
              allowFullScreen // Use camelCase for JSX boolean attributes
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Use camelCase for JSX
              title="Google Street View" // Add a title for accessibility
            />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Lefkotheas 8, Patra 264 42</p>
      </div>
    </section>
  );
}
