import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Host } from './components/Host';
import { Contact } from './components/Contact';
import { Map } from './components/Map';
import { CityVideo } from './components/CityVideo';

function App() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-50"
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div className="relative z-10">
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          setShowGallery={setShowGalleryModal}
        />
        <div className="pt-16 md:pt-20">
          <div id="home">
            <Hero />
          </div>
          <div id="gallery" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
              <h2 className="text-4xl font-bold mb-8 md:mb-12 text-center">{t('gallery.title')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(0, showAllImages ? images.length : 6).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10"
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setShowGalleryModal(true);
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {!showAllImages && images.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllImages(true)}
                    className="px-6 py-2 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg border border-white/20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 text-white"
                  >
                    {t('gallery.showMore')}
                  </button>
                </div>
              )}
            </div>
          </div>
          <CityVideo />
          <Features />
          <Reviews />
          <Host />
          <Map />
          <Contact />
          <footer className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg border-t border-white/20 text-white text-center py-4 mt-20">
            <p>{t('footer.copyright')}</p>
          </footer>
        </div>
        <Gallery 
          isOpen={showGalleryModal} 
          onClose={() => setShowGalleryModal(false)} 
          initialImageIndex={selectedImageIndex}
          images={images}
        />
      </div>
    </div>
  );
}


const images = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746092.jpg?k=6b1a45b7cf94411ada8f7de79de4a29ea893ebac973fb940f9fe8ed636dc3fed&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746057.jpg?k=2d2e17361efb4c9b486f31120ad03c7dca5eb7e87facd6c19fb760218063a842&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746064.jpg?k=95676f272613b4307724ec905c2090a7179f4939ee7f3f58e6ad3cb88c5cf946&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746092.jpg?k=6b1a45b7cf94411ada8f7de79de4a29ea893ebac973fb940f9fe8ed636dc3fed&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746239.jpg?k=459608dc64bf22f3b92258c7e425faa9138366101d8a693d2ff6f73e8f852bd4&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746133.jpg?k=dfc172166c19680fd308ba4de3e504dca3dcc0c5ad456a8cc87f57fa5d955550&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746139.jpg?k=00c700974ae1cb3aa484679f83a77427d9a50300b99d106429099185de611944&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746145.jpg?k=300643ad5f4e67c73351e439ba3790ce8aa586eff08f6808709b6e47884f9468&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746158.jpg?k=e0dbab30089a88b8c5b6b91a04f08ddaa99347fb178e2505282c1fcbe281b9dd&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746171.jpg?k=0aa5eb2b6dc8fe7f26ca0f1bb345735edc00fe14564a8117fbeaf3841d8b0871&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/595746243.jpg?k=909926a5a44eff6546d741086b3b6253917ef58f4178ed7be28dd21e9460a327&o=&hp=1"
];

export default App;
