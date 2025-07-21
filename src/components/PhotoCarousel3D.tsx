
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoCarousel3DProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
  }>;
  isLoaded: boolean;
}

export const PhotoCarousel3D = ({ images, isLoaded }: PhotoCarousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      return {
        transform: 'translateX(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10
      };
    } else if (absIndex === 1) {
      return {
        transform: `translateX(${diff > 0 ? '50%' : '-50%'}) rotateY(${diff > 0 ? '-15deg' : '15deg'}) scale(0.85)`,
        opacity: 0.7,
        zIndex: 5
      };
    } else {
      return {
        transform: `translateX(${diff > 0 ? '100%' : '-100%'}) rotateY(${diff > 0 ? '-30deg' : '30deg'}) scale(0.7)`,
        opacity: 0.3,
        zIndex: 1
      };
    }
  };

  return (
    <div className={`photo-carousel-3d relative w-full h-80 sm:h-96 lg:h-[500px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
         style={{ animationDelay: '0.6s' }}>
      
      {/* Main Carousel Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 transition-all duration-700 ease-out ${
              isTransitioning ? 'transition-duration-300' : ''
            }`}
            style={getImageStyle(index)}
          >
            {/* Holographic Frame */}
            <div className="holographic-frame relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/30 rounded-lg" />
              <div className="absolute inset-0 border-2 border-accent/30 rounded-lg shadow-2xl" />
              
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
              
              {/* Overlay Info */}
              {index === currentIndex && (
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-b-lg">
                  <h3 className="text-lg sm:text-xl font-playfair font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              )}
              
              {/* Holographic Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -skew-x-12 animate-shimmer" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-background/20 hover:bg-background/40 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
      </button>
      
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-background/20 hover:bg-background/40 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            disabled={isTransitioning}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent shadow-lg shadow-accent/50' 
                : 'bg-accent/30 hover:bg-accent/50'
            }`}
          />
        ))}
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:hidden">
        <div className="flex items-center space-x-2 text-muted-foreground/70 text-xs">
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
          <span>Swipe</span>
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent/40 rounded-full animate-float-${i % 3 + 1}`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
