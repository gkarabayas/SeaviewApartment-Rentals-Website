import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from './components/Navigation'; // Assuming these paths are correct
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Gallery as GalleryModal } from './components/Gallery'; // Renamed import to avoid conflict if needed
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Host } from './components/Host';
import { Contact } from './components/Contact';
import { Map } from './components/Map';
import { CityVideo } from './components/CityVideo';
import { PatrasExplore } from './components/PatrasExplore';

const images = [
  ...Array.from({ length: 19 }, (_, index) => `/images/property/pic${index + 1}.jpg`)
];


function App() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  // Make sure component paths in imports are correct
  // e.g., './components/GalleryModal' if you renamed the import

  return (
    // Using fragment <>...</> if <main> isn't strictly needed as the outermost element
    <>
      {/* Hero section with navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        // Pass correct prop name if Gallery expects setShowGalleryModal
        setShowGalleryModal={setShowGalleryModal}
      />
      <main className="relative"> {/* Keep main if needed */}
        <div id="home">
          <Hero />
        </div>

        {/* Main content sections */}
        {/* Consider removing relative z-10 unless specifically needed */}
        <div>
          <Welcome />

          {/* Gallery Section */}
          <div id="gallery" className="section-dark page-section"> {/* Use consistent section wrapping if needed */}
            <div className="max-w-7xl mx-auto px-2 md:px-4"> {/* Less padding on mobile */}
              <div className="content-card p-3 md:p-6"> {/* Less padding on mobile */}
                <h2 className="section-title text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
                  {t('gallery.title')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                  {images.slice(0, showAllImages ? images.length : 6).map((image, index) => (
                    <div
                      key={index}
                      className="group aspect-square overflow-hidden rounded-xl cursor-pointer bg-white shadow-md
                        hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100
                        hover:border-[#006CE4]/20"
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setShowGalleryModal(true);
                      }}
                    >
                      <div className="relative h-full">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* --- CORRECTED THIS LINE --- */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        {/* --- END CORRECTION --- */}
                      </div>
                    </div>
                  ))}
                </div>
                {!showAllImages && images.length > 6 && (
                  <div className="text-center mt-8 pb-6">
                    <button
                      onClick={() => setShowAllImages(true)}
                      className="px-8 py-3 bg-[#006CE4] text-white font-semibold rounded-full hover:bg-[#0052b3]
                        transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      {t('gallery.showMore')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div className="section-light page-section section-container"> {/* Use consistent section wrapping if needed */}
            <CityVideo />
          </div>

          <div className="section-dark page-section"> {/* Use consistent section wrapping if needed */}
            <Features />
          </div>

          <div className="section-light page-section"> {/* Use consistent section wrapping if needed */}
            <Reviews />
          </div>

          <div className="section-dark page-section"> {/* Use consistent section wrapping if needed */}
            <Host />
          </div>

          <div className="section-light page-section"> {/* Use consistent section wrapping if needed */}
            <Map />
          </div>

          {/* Patras Explore Sections */}
          <PatrasExplore />

          <div className="section-dark page-section"> {/* Use consistent section wrapping if needed */}
            <Contact />
          </div>

        </div> {/* Closing the wrapper div */}

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-8">
          <p>{t('footer.copyright')}</p>
        </footer>

      </main> {/* Closing main */}

      {/* Gallery Modal (Rendered outside main flow for potential overlay) */}
      <GalleryModal
        isOpen={showGalleryModal}
        onClose={() => setShowGalleryModal(false)}
        initialImageIndex={selectedImageIndex}
        images={images}
      />
    </> // Closing fragment
  );
}


export default App;
