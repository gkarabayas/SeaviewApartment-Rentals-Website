import { useTranslation } from 'react-i18next';

export function PatrasExplore() {
    const { t } = useTranslation();

    return (
        <>
            {/* Section 1: Patras Greece - Full Width Hero with Bridge */}
            <section className="bg-white pt-8">
                <div className="text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6 uppercase">
                        {t('patrasExplore.title')}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto italic">
                        {t('patrasExplore.description')}
                    </p>
                </div>

                {/* Full Width Bridge Image - no bottom padding */}
                <div className="w-full">
                    <img
                        src="/images/patras-bridge.png"
                        alt={t('patrasExplore.bridgeAlt')}
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                </div>
            </section>

            {/* Section 2: Reveal the Secrets of the Past */}
            <section className="relative overflow-hidden">
                {/* Desktop Layout */}
                <div className="hidden md:flex min-h-[500px] lg:min-h-[600px]">
                    {/* Left Decorative Panel - Muted Navy Blue (narrower) */}
                    <div className="w-[8%] lg:w-[10%] bg-[#4a5568]"></div>

                    {/* Center Content Panel */}
                    <div className="w-[42%] lg:w-[40%] bg-[#f8f6f2] flex items-center justify-center px-8 lg:px-12">
                        <div className="max-w-md py-12">
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-4 leading-snug">
                                <span className="text-[#4a5568]">Reveal </span>
                                <span className="text-gray-600">the </span>
                                <span className="text-[#5a6a7a]">secrets </span>
                                <span className="text-gray-600">of </span>
                                <span className="text-[#6b7c8a]">the </span>
                                <span className="text-[#3d4f5f]">past</span>
                            </h3>
                            <div className="w-16 h-0.5 bg-[#4a5568] mb-6"></div>
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                {t('patrasExplore.historyDescription')}
                            </p>
                        </div>
                    </div>

                    {/* Right Image Panel */}
                    <div className="w-1/2 lg:w-1/2">
                        <img
                            src="/images/patras-castle.jpg"
                            alt={t('patrasExplore.castleAlt')}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mobile Layout - Blue bar, title, text, then image */}
                <div className="md:hidden">
                    {/* Short muted navy decorative bar at top */}
                    <div className="h-4 bg-[#4a5568]"></div>

                    {/* Content */}
                    <div className="bg-[#f8f6f2] px-6 py-10">
                        <h3 className="text-2xl sm:text-3xl font-light mb-4 leading-snug">
                            <span className="text-[#4a5568]">Reveal </span>
                            <span className="text-gray-600">the </span>
                            <span className="text-[#5a6a7a]">secrets </span>
                            <span className="text-gray-600">of </span>
                            <span className="text-[#6b7c8a]">the </span>
                            <span className="text-[#3d4f5f]">past</span>
                        </h3>
                        <div className="w-12 h-0.5 bg-[#4a5568] mb-5"></div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {t('patrasExplore.historyDescription')}
                        </p>
                    </div>

                    {/* Image at bottom for mobile */}
                    <div className="w-full h-[300px] sm:h-[350px]">
                        <img
                            src="/images/patras-castle.jpg"
                            alt={t('patrasExplore.castleAlt')}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: From Day to Dusk - Same style as Patras Greece */}
            <section className="bg-white pt-8">
                <div className="text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6 uppercase">
                        {t('patrasExplore.duskTitle')}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto italic">
                        {t('patrasExplore.duskDescription')}
                    </p>
                </div>

                {/* Full Width Sunset Image */}
                <div className="w-full">
                    <img
                        src="/images/patras-sunset.jpg"
                        alt={t('patrasExplore.sunsetAlt')}
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                </div>
            </section>

            {/* Section 4: The Carnival of Patras - Mirrored layout (image left, content right) */}
            <section className="relative overflow-hidden">
                {/* Desktop Layout - Mirrored */}
                <div className="hidden md:flex min-h-[500px] lg:min-h-[600px]">
                    {/* Left Image Panel */}
                    <div className="w-1/2 lg:w-1/2">
                        <img
                            src="/images/patras-carnival.jpg"
                            alt={t('patrasExplore.carnivalAlt')}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Center Content Panel */}
                    <div className="w-[42%] lg:w-[40%] bg-[#f8f6f2] flex items-center justify-center px-8 lg:px-12">
                        <div className="max-w-md py-12">
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-4 leading-snug">
                                <span className="text-[#4a5568]">The </span>
                                <span className="text-[#5a6a7a]">Carnival </span>
                                <span className="text-gray-600">of </span>
                                <span className="text-[#3d4f5f]">Patras</span>
                            </h3>
                            <div className="w-16 h-0.5 bg-[#4a5568] mb-6"></div>
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                {t('patrasExplore.carnivalDescription')}
                            </p>
                        </div>
                    </div>

                    {/* Right Decorative Panel - Muted Navy Blue (narrower) */}
                    <div className="w-[8%] lg:w-[10%] bg-[#4a5568]"></div>
                </div>

                {/* Mobile Layout - Blue bar, title, text, then image */}
                <div className="md:hidden">
                    {/* Short muted navy decorative bar at top */}
                    <div className="h-4 bg-[#4a5568]"></div>

                    {/* Content */}
                    <div className="bg-[#f8f6f2] px-6 py-10">
                        <h3 className="text-2xl sm:text-3xl font-light mb-4 leading-snug">
                            <span className="text-[#4a5568]">The </span>
                            <span className="text-[#5a6a7a]">Carnival </span>
                            <span className="text-gray-600">of </span>
                            <span className="text-[#3d4f5f]">Patras</span>
                        </h3>
                        <div className="w-12 h-0.5 bg-[#4a5568] mb-5"></div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {t('patrasExplore.carnivalDescription')}
                        </p>
                    </div>

                    {/* Image at bottom for mobile */}
                    <div className="w-full h-[300px] sm:h-[350px]">
                        <img
                            src="/images/patras-carnival.jpg"
                            alt={t('patrasExplore.carnivalAlt')}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
