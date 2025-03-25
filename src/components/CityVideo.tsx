import React, { useRef, useState, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Component gia to section tou video tis polis
export const CityVideo: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(0); // Key gia na kanei remount to video element
  const [isLoaded, setIsLoaded] = useState(false); // State gia to video loading

  // Handler gia to video loading - mono gia arxikopoiisi
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Ksekinama panta apo tin arxi
    }
    setIsLoaded(true);
  }, []);
  
  // Array me ta videos kai ta titles tous
  console.log('Current video index:', currentVideoIndex);
  const videos = [
    { src: '/videos/patras.mp4', title: t('cityVideo.video1') },
    { src: '/videos/patras2.mp4', title: t('cityVideo.video2') }
  ];

  // Handler gia allagi video - apli enallagi metaxi 0 kai 1
  const handleVideoChange = useCallback((direction: 'next' | 'prev') => {
    setCurrentVideoIndex(prev => {
      const newIndex = direction === 'next' ? 
        (prev + 1) % videos.length : 
        prev === 0 ? videos.length - 1 : prev - 1;
      
      console.log('Switching to video index:', newIndex);
      console.log('Video source will be:', videos[newIndex].src);
      
      // Force video element na kanei remount
      setVideoKey(k => k + 1);
      
      // Stamatame to current video
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      
      return newIndex;
    });
  }, [videos.length]);

  // Handler gia error sto video loading
  const handleVideoError = useCallback(() => {
    console.error('Video loading error for index:', currentVideoIndex);
    console.error('Attempted video source:', videos[currentVideoIndex].src);
  }, [currentVideoIndex, videos]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t('cityVideo.title')}
        </h2>
        <p className="text-lg text-center mb-8 text-white/80">
          {t('cityVideo.description')}
        </p>
        <div className="flex flex-col items-center space-y-6">
          {/* Container gia to video kai ta koubia */}
          <div className="flex flex-col items-center space-y-4">
            {/* Video container me stathero megethos */}
            <div className="w-full max-w-[400px]">
              <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                <video
                  key={videoKey}
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  onLoadedMetadata={handleLoadedMetadata}
                  onError={handleVideoError}
                  poster={currentVideoIndex === 0 ? `${videos[0].src}#t=14` : `${videos[1].src}#t=0.1`}
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Koumpia gia enallagi video */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVideoIndex(index);
                    setVideoKey(k => k + 1);
                    setIsLoaded(false);
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  className={`p-4 rounded-lg text-center transition-all duration-200 ${
                    index === currentVideoIndex
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
