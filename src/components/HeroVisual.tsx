
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
    <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-screen max-w-full overflow-hidden">
      {/* Main Images */}
      {visualSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {loadedImages[index] && (
            <>
              {/* Enhanced Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Enhanced Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:from-background/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                
                {/* Futuristic Frame Overlay */}
                <div className="absolute inset-0 border border-accent/20 rounded-lg m-4" />
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/40 m-4" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent/40 m-4" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-accent/40 m-4" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/40 m-4" />
              </div>
            </>
          )}
        </div>
      ))}

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-4 sm:right-8 w-1 h-16 sm:h-24 bg-gradient-to-b from-accent/50 to-transparent rounded-full hidden sm:block animate-breathing" />
        <div className="absolute bottom-1/4 right-6 sm:right-12 w-6 sm:w-8 h-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full hidden sm:block animate-breathing" />
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2 sm:space-x-3 z-20">
        {visualSlides.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg animate-glow-pulse' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
