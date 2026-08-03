import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const sectionIds = ['home', 'gallery', 'features', 'reviews', 'host', 'map'];

    const updateActiveSection = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.35;
      let currentSection = 'home';

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= readingLine) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

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
          <section id="gallery" className="bg-white py-10 md:py-14">
            <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
              <div className="mb-8 md:mb-10">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0A5275]">02</p>
                  <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">
                    {t('gallery.title')}
                  </h2>
                </div>
              </div>
              <div className="grid auto-rows-[8rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] md:grid-cols-4 md:auto-rows-[11rem] md:gap-4 lg:auto-rows-[12rem] lg:gap-5">
                  {images.slice(0, showAllImages ? images.length : 7).map((image, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-500 hover:scale-[1.01] hover:border-[#0A5275]/30 hover:shadow-xl ${
                        index === 0 ? 'col-span-2 row-span-2' :
                        index === 1 || index === 2 ? 'row-span-2' : ''
                      }`}
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
                        <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/15" />
                      </div>
                    </div>
                  ))}
              </div>
              {!showAllImages && images.length > 7 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setShowAllImages(true)}
                    className="rounded-full bg-[#0A5275] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#073B56] hover:shadow-lg"
                  >
                    {t('gallery.showMore')}
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Other Sections */}
          <div className="bg-[#f8f6f1] pb-0 pt-10 md:pt-14"> {/* Use consistent section wrapping if needed */}
            <CityVideo />
          </div>

          <div className="section-dark pb-8 pt-2 md:pb-8 md:pt-4"> {/* Use consistent section wrapping if needed */}
            <Features />
          </div>

          <div className="bg-white py-8 md:py-10"> {/* Use consistent section wrapping if needed */}
            <Reviews />
          </div>

          <div className="bg-[#f8f6f1] py-10 md:py-14"> {/* Use consistent section wrapping if needed */}
            <Host />
          </div>

          <div className="bg-white py-10 md:py-14"> {/* Use consistent section wrapping if needed */}
            <Map />
          </div>

          {/* Patras Explore Sections */}
          <PatrasExplore />

          <div className="bg-[#f8f6f1] py-10 md:py-14"> {/* Use consistent section wrapping if needed */}
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
