
import { useState, useEffect } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

interface HeroVisualProps {
  currentSlide: number;
}

const visualSlides = [
  {
    image: heroWedding1,
    alt: "Wedding Photography"
  },
  {
    image: heroPrewedding1,
    alt: "Pre-Wedding Photography"
  }
];

export const HeroVisual = ({ currentSlide }: HeroVisualProps) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([false, false]);

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

  return (
    <div className="relative h-full min-h-[600px] lg:min-h-screen">
      {/* Glassmorphism Container */}
      <div className="absolute inset-4 rounded-3xl bg-background/10 backdrop-blur-sm border border-accent/20 overflow-hidden">
        {/* Main Images with Advanced Effects */}
        {visualSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ${
              index === currentSlide
                ? 'opacity-100 scale-100 blur-0'
                : 'opacity-0 scale-110 blur-sm'
            }`}
          >
            {loadedImages[index] && (
              <>
                {/* Enhanced Image Container */}
                <div className="relative h-full overflow-hidden rounded-3xl">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-3000 hover:scale-105"
                  />
                  
                  {/* Dynamic Color Overlay */}
                  <div className={`absolute inset-0 transition-all duration-2000 ${
                    index === currentSlide
                      ? 'bg-gradient-to-br from-accent/20 via-transparent to-accent/10'
                      : 'bg-gradient-to-br from-accent/30 via-transparent to-accent/20'
                  }`} />
                  
                  {/* Geometric Mask Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
                </div>

                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 bg-background/20 backdrop-blur-md border border-accent/30 rounded-2xl p-4 animate-float-1">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                </div>
                
                <div className="absolute bottom-8 left-8 bg-background/20 backdrop-blur-md border border-accent/20 rounded-xl px-4 py-2 animate-float-2">
                  <span className="text-accent font-medium text-sm">Live</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Advanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric Accents */}
        <div className="absolute top-1/4 -right-4 w-8 h-24 bg-accent/20 rounded-full animate-float-1" />
        <div className="absolute bottom-1/3 -right-2 w-16 h-2 bg-accent/30 rounded-full animate-float-3" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-4 w-6 h-6 bg-accent/40 rounded-full animate-glow-pulse blur-sm" />
        <div className="absolute bottom-1/4 right-12 w-4 h-4 bg-accent/60 rounded-full animate-glow-pulse animation-delay-1000 blur-sm" />
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-30">
        {visualSlides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-500 ${
              index === currentSlide
                ? 'w-8 h-3 bg-accent shadow-lg shadow-accent/50'
                : 'w-3 h-3 bg-background/40 hover:bg-background/60'
            } rounded-full backdrop-blur-sm border border-accent/20`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
