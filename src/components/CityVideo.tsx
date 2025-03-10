import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Component gia to section tou video tis polis
export const CityVideo: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Observer gia na kanei play to video otan einai sto viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.4 } // Xekinaei otan fanetai to 40% tou video
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t('cityVideo.title')}
        </h2>
        <p className="text-lg text-center mb-8 text-white/80">
          {t('cityVideo.description')}
        </p>
        <div className="flex justify-center">
          <div className="relative aspect-[9/16] w-full md:w-2/3 lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
            {/* Video container me responsive design kai portrait mode */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              loop
              muted
              controls
              poster="/videos/patras-poster.jpg" // Optional: Ean exoume poster image
            >
              <source src="/videos/patras.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
