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

// Define images array outside the component or ensure it's stable if inside
const images = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746092.jpg?k=6b1a45b7cf94411ada8f7de79de4a29ea893ebac973fb940f9fe8ed636dc3fed&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746057.jpg?k=2d2e17361efb4c9b486f31120ad03c7dca5eb7e87facd6c19fb760218063a842&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746064.jpg?k=95676f272613b4307724ec905c2090a7179f4939ee7f3f58e6ad3cb88c5cf946&o=&hp=1",
  // Note: Duplicate image URL below, intentional?
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746092.jpg?k=6b1a45b7cf94411ada8f7de79de4a29ea893ebac973fb940f9fe8ed636dc3fed&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746239.jpg?k=459608dc64bf22f3b92258c7e425faa9138366101d8a693d2ff6f73e8f852bd4&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746133.jpg?k=dfc172166c19680fd308ba4de3e504dca3dcc0c5ad456a8cc87f57fa5d955550&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746139.jpg?k=00c700974ae1cb3aa484679f83a77427d9a50300b99d106429099185de611944&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746145.jpg?k=300643ad5f4e67c73351e439ba3790ce8aa586eff08f6808709b6e47884f9468&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746158.jpg?k=e0dbab30089a88b8c5b6b91a04f08ddaa99347fb178e2505282c1fcbe281b9dd&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746171.jpg?k=0aa5eb2b6dc8fe7f26ca0f1bb345735edc00fe14564a8117fbeaf3841d8b0871&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746243.jpg?k=909926a5a44eff6546d741086b3b6253917ef58f4178ed7be28dd21e9460a327&o=&hp=1"
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
            <div className="section-container"> {/* Use consistent section wrapping if needed */}
              <div className="content-card section-inner"> {/* Use consistent section wrapping if needed */}
                <h2 className="section-title text-4xl font-semibold text-gray-900 mb-12 text-center">
                  {t('gallery.title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
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