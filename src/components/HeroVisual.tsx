
import { useState, useEffect } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

interface HeroVisualProps {
  currentSlide: number;
  isLoaded: boolean;
}

const visualSlides = [
  {
    image: heroWedding1,
    alt: "Wedding Photography",
    maskStyle: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
  },
  {
    image: heroPrewedding1,
    alt: "Pre-Wedding Photography", 
    maskStyle: "polygon(0 0, 90% 0, 75% 100%, 0 100%)"
  }
];

export const HeroVisual = ({ currentSlide, isLoaded }: HeroVisualProps) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([false, false]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative h-full min-h-[600px] lg:min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Main Images with Advanced Effects */}
      {visualSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {loadedImages[index] && (
            <>
              {/* Image Container with Magnetic Effect */}
              <div 
                className="relative h-full overflow-hidden"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Multiple Image Layers for Depth */}
                <div className="absolute inset-0 scale-110">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center blur-sm opacity-30"
                  />
                </div>
                
                <div 
                  className="absolute inset-0"
                  style={{
                    clipPath: slide.maskStyle,
                    transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                  }}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className={`w-full h-full object-cover object-center transition-all duration-1000 ${
                      isLoaded ? 'blur-0 contrast-110 saturate-110' : 'blur-md'
                    }`}
                  />
                </div>

                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-lighter/10 mix-blend-overlay" />
                
                {/* Dynamic Color Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-60'
                }`} />

                {/* Neon Border Effect */}
                <div className="absolute inset-0 border-2 border-accent/20 animate-border-glow" 
                     style={{ clipPath: slide.maskStyle }} />
              </div>

              {/* Geometric Accent Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 border border-accent/30 rotate-45 animate-geometric-float" />
              <div className="absolute bottom-16 right-16 w-2 h-24 bg-gradient-to-t from-accent/50 to-transparent animate-accent-pulse" />
              <div className="absolute top-1/3 right-4 w-8 h-2 bg-gradient-to-r from-accent/40 to-transparent animate-accent-pulse-delayed" />
            </>
          )}
        </div>
      ))}

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        {visualSlides.map((_, index) => (
          <button
            key={index}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg shadow-accent/50' 
                : 'bg-white/40 hover:bg-white/60 backdrop-blur-sm'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accent-lighter transition-all duration-1000 ease-out"
          style={{ width: `${((currentSlide + 1) / visualSlides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};
