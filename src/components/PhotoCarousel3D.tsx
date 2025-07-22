
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
  onImageClick: (index: number) => void;
}

export const PhotoCarousel3D = ({ images, isLoaded, onImageClick }: PhotoCarousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning && !isSwiping) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning, isSwiping]);

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

  const handleImageClick = (index: number) => {
    if (isSwiping) return;
    console.log('Image clicked:', index);
    onImageClick(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      setIsSwiping(true);
      
      if (isLeftSwipe) {
        handleNext();
      } else if (isRightSwipe) {
        handlePrev();
      }
      
      // Reset swiping state after transition
      setTimeout(() => setIsSwiping(false), 500);
    }
  };

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalImages = images.length;
    
    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalImages / 2) {
      normalizedDiff = diff > 0 ? diff - totalImages : diff + totalImages;
    }
    
    const absIndex = Math.abs(normalizedDiff);
    
    // Center image (current)
    if (absIndex === 0) {
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30
      };
    }
    // Adjacent images (±1)
    else if (absIndex === 1) {
      return {
        transform: `translateX(${normalizedDiff > 0 ? '70%' : '-70%'}) translateZ(-100px) rotateY(${normalizedDiff > 0 ? '-25deg' : '25deg'}) scale(0.8)`,
        opacity: 0.6,
        zIndex: 25
      };
    }
    // Outer images (±2)
    else if (absIndex === 2) {
      return {
        transform: `translateX(${normalizedDiff > 0 ? '130%' : '-130%'}) translateZ(-200px) rotateY(${normalizedDiff > 0 ? '-45deg' : '45deg'}) scale(0.6)`,
        opacity: 0.3,
        zIndex: 20
      };
    }
    // Far images (hidden but positioned)
    else {
      return {
        transform: `translateX(${normalizedDiff > 0 ? '200%' : '-200%'}) translateZ(-300px) rotateY(${normalizedDiff > 0 ? '-60deg' : '60deg'}) scale(0.4)`,
        opacity: 0.1,
        zIndex: 15
      };
    }
  };

  return (
    <div className={`photo-carousel-3d relative w-full h-[600px] sm:h-[700px] lg:h-[800px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
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
            className={`absolute w-60 h-90 sm:w-72 sm:h-108 lg:w-80 lg:h-120 transition-all duration-700 ease-out cursor-pointer ${
              isTransitioning ? 'transition-duration-300' : ''
            }`}
            style={{
              ...getImageStyle(index),
              pointerEvents: 'auto'
            }}
            onClick={() => handleImageClick(index)}
          >
            {/* Holographic Frame */}
            <div className="holographic-frame relative w-full h-full group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/30 rounded-lg" />
              <div className="absolute inset-0 border-2 border-accent/30 rounded-lg shadow-2xl" />
              
              {/* Image with enhanced hover effect */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                style={{ pointerEvents: 'auto' }}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-background/20 hover:bg-background/40 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
      </button>
      
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 bg-background/20 hover:bg-background/40 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:hidden z-40">
        <div className="flex items-center space-x-2 text-muted-foreground/70 text-xs">
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
          <span>Swipe</span>
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
        </div>
      </div>

      {/* Particle Effects - Positioned behind images */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent/40 rounded-full animate-float-${(i % 3) + 1}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
