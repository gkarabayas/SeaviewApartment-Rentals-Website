import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Play from 'lucide-react/dist/esm/icons/play.js';

export const CityVideo: React.FC = () => {
  const { t } = useTranslation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [desktopPlayingIndex, setDesktopPlayingIndex] = useState<number | null>(null);
  const [mobilePlayingIndex, setMobilePlayingIndex] = useState<number | null>(null);

  const videos = [
    {
      src: '/videos/patras.mp4',
      thumbnail: '/images/patras-thumbnail.jpg',
      title: t('cityVideo.video1'),
      mobileTitle: t('cityVideo.video1Mobile'),
    },
    {
      src: '/videos/patras2.mp4',
      thumbnail: '/images/patras2-thumbnail.jpg',
      title: t('cityVideo.video2'),
      mobileTitle: t('cityVideo.video2Mobile'),
    },
    {
      src: '/videos/patras3.mp4',
      thumbnail: '/images/patras3-thumbnail.jpg',
      title: t('cityVideo.video3'),
      mobileTitle: t('cityVideo.video3Mobile'),
    },
  ];

  const renderVideo = (index: number) => (
    <video
      className="city-video h-full w-full bg-black object-contain"
      playsInline
      controls
      controlsList="nodownload"
      preload="none"
      poster={videos[index].thumbnail}
      autoPlay
      onError={(event) => {
        const error = event.currentTarget.error;
        console.error(`Video loading error for index ${index}. Code: ${error?.code}, Message: ${error?.message}`);
      }}
    >
      <source src={videos[index].src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const renderThumbnail = (index: number, onPlay: () => void) => (
    <button
      type="button"
      onClick={onPlay}
      aria-label={t('cityVideo.playVideo', { title: videos[index].title })}
      className="group relative h-full w-full bg-black"
    >
      <img
        src={videos[index].thumbnail}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0A5275] shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
        </span>
      </span>
    </button>
  );

  return (
    <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
      <div className="mb-2 md:mb-3">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0A5275]">03</p>
        <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-none text-slate-950 md:text-5xl lg:text-6xl">
          {t('cityVideo.title')}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          {t('cityVideo.description')}
        </p>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6 bg-[#f8f6f1] p-6 lg:gap-10 lg:p-10">
          {videos.map((video, index) => (
            <div key={video.src} className="flex min-w-0 flex-col items-center">
              <div className="w-full max-w-[340px]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                  {desktopPlayingIndex === index
                    ? renderVideo(index)
                    : renderThumbnail(index, () => setDesktopPlayingIndex(index))}
                </div>
              </div>
              <div className="mt-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0A5275]">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex flex-col items-center space-y-4 bg-[#f8f6f1] p-4 sm:p-6">
          <div className="w-full max-w-[270px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              {mobilePlayingIndex === currentVideoIndex
                ? renderVideo(currentVideoIndex)
                : renderThumbnail(currentVideoIndex, () => setMobilePlayingIndex(currentVideoIndex))}
            </div>
          </div>

          <div className="grid w-full max-w-[360px] grid-cols-3 gap-2">
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                aria-pressed={index === currentVideoIndex}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setMobilePlayingIndex(null);
                }}
                className={`min-w-0 rounded-lg p-2 text-center text-xs shadow-md transition-colors ${index === currentVideoIndex
                  ? 'bg-[#0A5275] font-semibold text-white'
                  : 'border border-gray-100 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {video.mobileTitle}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
