import React, { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// Component gia to section tou video tis polis
export const CityVideo: React.FC = () => {
  const { t } = useTranslation();
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(Date.now());

  // Array me ta videos kai ta titles tous
  const videos = [
    {
      src: '/videos/patras.mp4',
      title: t('cityVideo.video1'),
    },
    {
      src: '/videos/patras2.mp4',
      title: t('cityVideo.video2'),
    }
  ];

  // Handler gia allagi video - for mobile view
  const handleVideoSwitch = useCallback((index: number) => {
    if (index === currentVideoIndex) return;
    setCurrentVideoIndex(index);
    setVideoKey(Date.now());
  }, [currentVideoIndex]);

  // Handler gia error sto video loading
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>, videoIndex: number) => {
    const error = (e.target as HTMLVideoElement).error;
    console.error(`Video loading error for index ${videoIndex}. Code: ${error?.code}, Message: ${error?.message}`);
  }, []);

  // Handler to attempt showing the first frame on metadata load
  const handleLoadedMetadata = useCallback((ref: React.RefObject<HTMLVideoElement | null>) => {
    if (ref.current) {
      ref.current.currentTime = 0.1;
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="content-card p-4 md:p-8">
        <h2 className="section-title mb-3 md:mb-5">
          {t('cityVideo.title')}
        </h2>
        <p className="text-base md:text-lg text-center mb-6 md:mb-10 text-gray-600">
          {t('cityVideo.description')}
        </p>

        {/* Desktop Layout - Both videos side by side */}
        <div className="hidden md:block">
          <div className="flex justify-center gap-16 lg:gap-24">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                {/* Video container */}
                <div className="w-[280px] lg:w-[320px]">
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none z-10"></div>
                    <video
                      ref={index === 0 ? videoRef1 : videoRef2}
                      className="w-full h-full object-cover bg-black"
                      playsInline
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      onError={(e) => handleVideoError(e, index)}
                      onLoadedMetadata={() => handleLoadedMetadata(index === 0 ? videoRef1 : videoRef2)}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Video title label */}
                <div className="px-6 py-3 bg-[#006CE4] text-white font-semibold rounded-lg shadow-md text-center">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single video with switcher */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4">
            {/* Video container */}
            <div className="w-full max-w-[300px]">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                <video
                  key={videoKey}
                  className="w-full h-full object-cover bg-black"
                  playsInline
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  onError={(e) => handleVideoError(e, currentVideoIndex)}
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Video switcher buttons */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[300px]">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoSwitch(index)}
                  className={`p-3 rounded-lg text-center text-sm transition-all duration-300 shadow-md ${index === currentVideoIndex
                    ? 'bg-[#006CE4] text-white font-semibold scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100'
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
