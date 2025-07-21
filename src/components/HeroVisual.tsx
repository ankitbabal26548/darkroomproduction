
import { useState, useEffect, useRef } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';
// Using existing images for the third slide as placeholder
import heroWedding2 from '@/assets/hero-wedding-1.jpg';

interface HeroVisualProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const visualSlides = [
  {
    image: heroWedding1,
    alt: "Wedding Photography"
  },
  {
    image: heroPrewedding1,
    alt: "Pre-Wedding Photography"
  },
  {
    image: heroWedding2,
    alt: "Event Photography"
  }
];

export const HeroVisual = ({ currentSlide, onSlideChange, onMouseEnter, onMouseLeave }: HeroVisualProps) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([false, false, false]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    visualSlides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = slide.image;
    });
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSlideChange((currentSlide + 1) % 3);
    } else if (isRightSwipe) {
      onSlideChange((currentSlide - 1 + 3) % 3);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-screen max-w-full overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-8 w-16 h-1 bg-gradient-to-r from-accent/30 to-transparent rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-4 w-1 h-16 bg-gradient-to-b from-accent/20 to-transparent rounded-full animate-pulse-medium" />
        <div className="absolute top-1/2 right-12 w-8 h-8 border-2 border-accent/20 rounded-full animate-spin-slow" />
      </div>

      {/* Main Images with reduced overlays */}
      {visualSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
        >
          {loadedImages[index] && (
            <>
              {/* Image Container with enhanced transitions */}
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className={`w-full h-full object-cover object-center transition-transform duration-1000 ${
                    index === currentSlide ? 'scale-100' : 'scale-110'
                  }`}
                />
                
                {/* Reduced Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent lg:from-background/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                
                {/* Creative floating elements for active slide */}
                {index === currentSlide && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-4 w-2 h-2 bg-accent/50 rounded-full animate-floating-slow" />
                    <div className="absolute bottom-1/3 left-8 w-1 h-12 bg-accent/30 rounded-full animate-floating-medium" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-4 sm:right-8 w-1 h-16 sm:h-24 bg-gradient-to-b from-accent/40 to-transparent rounded-full hidden sm:block animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-6 sm:right-12 w-6 sm:w-8 h-1 bg-gradient-to-r from-accent/40 to-transparent rounded-full hidden sm:block animate-pulse-medium" />
        <div className="absolute top-1/2 right-2 sm:right-4 w-3 h-3 border border-accent/30 rounded rotate-45 animate-spin-slow hidden sm:block" />
      </div>

      {/* Interactive Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2 sm:space-x-3 z-20">
        {visualSlides.map((_, index) => (
          <button 
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg shadow-accent/30' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 sm:hidden">
        <div className="flex items-center space-x-2 text-white/70 text-xs">
          <div className="w-6 h-1 bg-white/30 rounded-full"></div>
          <span>Swipe</span>
          <div className="w-6 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
