import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Component gia to section tou video tis polis
export const CityVideo: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(Date.now()); // Use timestamp for unique key

  // Array me ta videos kai ta titles tous (poster property removed)
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

  // Handler gia allagi video - when clicking the buttons
  const handleVideoSwitch = useCallback((index: number) => {
    if (index === currentVideoIndex) return; // Do nothing if clicking the current video button

    // Optional: Pause current video before remounting
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setCurrentVideoIndex(index);
    setVideoKey(Date.now()); // Update key to force remount

  }, [currentVideoIndex]); // Dependency includes currentVideoIndex

  // Handler gia error sto video loading
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const error = (e.target as HTMLVideoElement).error;
    console.error(`Video loading error for index ${currentVideoIndex}. Code: ${error?.code}, Message: ${error?.message}`);
    console.error('Video Error Event:', e);
    // You could display an error message to the user here if needed
  }, [currentVideoIndex]);

  // Handler to attempt showing the first frame on metadata load
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
        // WORKAROUND: Try seeking to a very early time to show the first frame
        // May not work reliably on all browsers/devices (especially iOS)
        videoRef.current.currentTime = 0.1;
    }
  }, []); // No dependencies needed here


  return (
    <div className="section-container">
      <div className="content-card section-inner">
        <h2 className="section-title mb-5">
          {t('cityVideo.title')}
        </h2>
        <p className="text-lg text-center mb-10 text-gray-600">
          {t('cityVideo.description')}
        </p>
        <div className="flex flex-col items-center space-y-6">
          {/* Container gia to video kai ta koubia */}
          <div className="flex flex-col items-center space-y-4">
            {/* Video container me stathero megethos */}
            <div className="w-full max-w-[500px]">
                {/* Original aspect ratio and styling */}
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                <video
                  key={videoKey} // Force remount on video source change
                  ref={videoRef}
                  className="w-full h-full object-cover bg-black" // Keep object-cover & bg-black fallback
                  playsInline // Crucial for iOS inline playback
                  controls // Show browser's default play/pause/seek controls
                  controlsList="nodownload" // Optional: Hide download button
                  preload="metadata" // Load dimensions/duration
                  // NO poster ATTRIBUTE
                  
                  // Essential Event Handlers
                  onError={handleVideoError}
                  onLoadedMetadata={handleLoadedMetadata} // Trigger the seek attempt
                >
                  {/* Use source tag for better compatibility & clarity */}
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Koumpia gia enallagi video */}
            {/* Original button container structure and classes */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[500px]">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoSwitch(index)}
                  // Original button classes and active/inactive logic
                  className={`p-4 rounded-lg text-center transition-all duration-300 shadow-md ${
                    index === currentVideoIndex
                      ? 'bg-[#006CE4] text-white font-semibold scale-105' // Active state
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100' // Inactive state
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
