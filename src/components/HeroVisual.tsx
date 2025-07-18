
import { useState, useEffect } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

interface HeroVisualProps {
  currentSlide: number;
}

const visualSlides = [
  {
    image: heroWedding1,
    alt: "Wedding Photography",
    theme: "romantic"
  },
  {
    image: heroPrewedding1,
    alt: "Pre-Wedding Photography", 
    theme: "artistic"
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
    <div className="relative h-full min-h-[400px] lg:min-h-screen overflow-hidden">
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        {visualSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {loadedImages[index] && (
              <div className="relative h-full overflow-hidden">
                {/* Creative Image Frame */}
                <div className="absolute inset-0 creative-image-frame">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000"
                  />
                </div>

                {/* Artistic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-accent/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                
                {/* Creative Border Effects */}
                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl backdrop-blur-sm pointer-events-none" />
                
                {/* Theme-based Artistic Elements */}
                {slide.theme === "romantic" && (
                  <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
                )}
                {slide.theme === "artistic" && (
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-xl" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Creative Navigation Dots */}
      <div className="absolute bottom-6 right-6 flex space-x-3 z-20">
        {visualSlides.map((slide, index) => (
          <div
            key={index}
            className={`relative transition-all duration-500 ${
              index === currentSlide ? 'scale-125' : 'scale-100'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent shadow-lg shadow-accent/50' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
            {index === currentSlide && (
              <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent animate-ping opacity-20" />
            )}
          </div>
        ))}
      </div>

      {/* Creative Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Accents */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
        
        {/* Artistic Lines */}
        <div className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-l from-accent/50 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-20 h-px bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
    </div>
  );
};
