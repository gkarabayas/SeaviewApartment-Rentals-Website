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
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-50"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col items-center w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 z-10 text-white hover:text-blue-400 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            loading="lazy"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 z-10 text-white hover:text-blue-400 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-blue-400' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}