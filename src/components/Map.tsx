import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

export function Map() {
  const { t } = useTranslation();

  useEffect(() => {
    // Check if map container already has a map instance
    const container = L.DomUtil.get('map');
    if (container != null && (container as any)._leaflet_id != null) {
       return; // Already initialized
    }

    // Initialize Leaflet Map
    const map = L.map('map', {
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
    <section className="page-section bg-white"> {/* Adjusted padding */}
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-2xl text-gray-900 
      shadow-[0_0_50px_0_rgba(0,0,0,0.1)] 
      hover:shadow-[0_0_50px_0_rgba(0,0,0,0.15)] 
      transition-all duration-300
      border border-gray-100"> {/* Increased max-width */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-black-800">{t('map.title')}</h2>

        {/* Flex container for Map and Street View */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Left Side: Leaflet Map */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div id="map" className="w-full h-full"></div> {/* Leaflet map attaches here */}
          </div>

          {/* Right Side: Google Street View */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              // Use the specific Street View embed URL you provided
              src="https://www.google.com/maps/embed?pb=!4v1743344663474!6m8!1m7!1sCggpOc3ezKINPGKKGwuLuw!2m2!1d38.28567816022208!2d21.7614639503293!3f97.35578632455993!4f16.674108922094078!5f1.542265511847476"
              className="w-full h-full border-0" // Use classes for sizing, remove border via class/style
              style={{ border: 0 }} // Inline style for border (alternative to class)
              allowFullScreen // Use camelCase for JSX boolean attributes
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Use camelCase for JSX
              title="Google Street View" // Add a title for accessibility
            ></iframe>
          </div>

        </div>
         {/* Address text below the maps */}
         <p className="text-center mt-7 text-gray-600">Lefkotheas 8, Patra 264 42</p>
      </div>
    </section>
  );
}