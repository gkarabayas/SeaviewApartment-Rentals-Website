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
      mobileTitle: t('cityVideo.video1Mobile'),
    },
    {
      src: '/videos/patras2.mp4',
      title: t('cityVideo.video2'),
      mobileTitle: t('cityVideo.video2Mobile'),
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
    <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mb-2 md:mb-3">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0A5275]">03</p>
          <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">
          {t('cityVideo.title')}
          </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          {t('cityVideo.description')}
        </p>
        </div>

        {/* Desktop Layout - Both videos side by side */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-6 bg-[#f8f6f1] p-6 lg:gap-10 lg:p-10">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Video container */}
                <div className="w-full max-w-[520px]">
                  <div className="group relative aspect-video overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none z-10"></div>
                    <video
                      ref={index === 0 ? videoRef1 : videoRef2}
                      className="city-video w-full h-full object-cover bg-black"
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
                <div className="mt-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0A5275]">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single video with switcher */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 bg-[#f8f6f1] p-4 sm:p-6">
            {/* Video container */}
            <div className="w-full max-w-[270px]">
              <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                <video
                  key={videoKey}
                  className="city-video w-full h-full object-cover bg-black"
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
            <div className="grid w-full max-w-[270px] grid-cols-2 gap-3">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoSwitch(index)}
                  className={`p-3 rounded-lg text-center text-sm transition-all duration-300 shadow-md ${index === currentVideoIndex
                    ? 'bg-[#0A5275] text-white font-semibold scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100'
                    }`}
                >
                  {video.mobileTitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
