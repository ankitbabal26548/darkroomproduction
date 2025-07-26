
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CSSProperties } from 'react';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // Only auto-advance if not transitioning and not hovered
      if (!isTransitioning && !isHovered) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning, isHovered]);

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

  const handleCenterImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Center image clicked - event fired:', currentIndex);
    onImageClick(currentIndex);
  };

  const handleImageMouseEnter = (index: number) => {
    if (index === currentIndex) {
      console.log('Mouse entered center image:', index);
      setHoveredIndex(index);
      setIsHovered(true);
    }
  };

  const handleImageMouseLeave = (index: number) => {
    if (index === currentIndex) {
      console.log('Mouse left center image:', index);
      setHoveredIndex(null);
      setIsHovered(false);
    }
  };

  const handleSlideClick = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const getImageStyle = (index: number): CSSProperties => {
    const diff = index - currentIndex;
    const totalImages = images.length;
    
    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalImages / 2) {
      normalizedDiff = diff > 0 ? diff - totalImages : diff + totalImages;
    }
    
    const absIndex = Math.abs(normalizedDiff);
    const isCenterImage = absIndex === 0;
    const isHovered = hoveredIndex === index;
    
    // Base transform
    let transform = '';
    let opacity = 1;
    let zIndex = 20;
    
    // Center image (current)
    if (absIndex === 0) {
      const scale = isHovered ? 1.05 : 1;
      transform = `translateX(0) translateZ(0) rotateY(0deg) scale(${scale})`;
      opacity = 1;
      zIndex = 200;
    }
    // Adjacent images (±1)
    else if (absIndex === 1) {
      transform = `translateX(${normalizedDiff > 0 ? '70%' : '-70%'}) translateZ(-100px) rotateY(${normalizedDiff > 0 ? '-25deg' : '25deg'}) scale(0.8)`;
      opacity = 0.6;
      zIndex = 150;
    }
    // Outer images (±2)
    else if (absIndex === 2) {
      transform = `translateX(${normalizedDiff > 0 ? '130%' : '-130%'}) translateZ(-200px) rotateY(${normalizedDiff > 0 ? '-45deg' : '45deg'}) scale(0.6)`;
      opacity = 0.3;
      zIndex = 100;
    }
    // Far images (hidden but positioned)
    else {
      transform = `translateX(${normalizedDiff > 0 ? '200%' : '-200%'}) translateZ(-300px) rotateY(${normalizedDiff > 0 ? '-60deg' : '60deg'}) scale(0.4)`;
      opacity = 0.1;
      zIndex = 50;
    }
    
    return {
      transform,
      opacity,
      zIndex,
      cursor: isCenterImage ? 'pointer' : 'default',
      pointerEvents: isCenterImage ? 'auto' : 'none' as const
    };
  };

  return (
    <div className={`photo-carousel-3d relative w-full h-[600px] sm:h-[700px] lg:h-[800px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
         style={{ 
           animationDelay: '0.6s',
           perspective: '1000px'
         }}>
      
      {/* Main Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center"
           style={{ transformStyle: 'preserve-3d' }}>
        {images.map((image, index) => {
          const isCenterImage = index === currentIndex;
          const imageStyle = getImageStyle(index);
          
          return (
            <div
              key={index}
              className={`absolute w-60 h-90 sm:w-72 sm:h-108 lg:w-80 lg:h-120 transition-all duration-700 ease-out ${
                isTransitioning ? 'transition-duration-300' : ''
              } ${isCenterImage ? 'carousel-image-center' : 'carousel-image-side'}`}
              style={imageStyle}
              onMouseEnter={() => handleImageMouseEnter(index)}
              onMouseLeave={() => handleImageMouseLeave(index)}
              onClick={isCenterImage ? handleCenterImageClick : undefined}
            >
              {/* Holographic Frame */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/30 rounded-lg" />
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg shadow-2xl" />
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg select-none"
                  loading="lazy"
                  draggable={false}
                />
                
                {/* Hover overlay for center image only */}
                {isCenterImage && (
                  <div className={`absolute inset-0 bg-accent/10 rounded-lg transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Navigation Controls */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[250] p-3 sm:p-4 bg-background/80 hover:bg-background/90 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-accent/40 hover:border-accent/60 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
      </button>
      
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[250] p-3 sm:p-4 bg-background/80 hover:bg-background/90 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-accent/40 hover:border-accent/60 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-[250]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex 
                ? 'bg-accent shadow-lg shadow-accent/50 scale-125' 
                : 'bg-accent/40 hover:bg-accent/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Click to expand hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[250]">
        <div className="flex items-center space-x-2 text-muted-foreground/70 text-xs animate-pulse">
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
          <span>Click center image to expand</span>
          <div className="w-4 h-0.5 bg-accent/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
