import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
  images: string[];
}

export function Gallery({ isOpen, onClose, initialImageIndex = 0, images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  useEffect(() => {
    setCurrentIndex(initialImageIndex);
  }, [initialImageIndex]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-[#006CE4] transition-all duration-300 
          transform hover:scale-110 z-50"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col items-center w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 z-10 p-2 rounded-full bg-black/50 text-white 
              hover:bg-[#006CE4] hover:text-white transition-all duration-300 transform hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="relative group">
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg"></div>
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 z-10 p-2 rounded-full bg-black/50 text-white 
              hover:bg-[#006CE4] hover:text-white transition-all duration-300 transform hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 
          overflow-x-auto max-w-full px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-6 bg-[#006CE4]' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
