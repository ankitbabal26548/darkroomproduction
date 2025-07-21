
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
      {/* Main Images with 3D Effects */}
      {visualSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 hero-image-container ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {loadedImages[index] && (
            <>
              {/* Enhanced Image Container */}
              <div className="relative h-full w-full overflow-hidden hero-image-wrapper">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover object-center hero-main-image" 
                />
                
                {/* Advanced Gradient Overlays */}
                <div className="absolute inset-0 hero-image-gradient-primary" />
                <div className="absolute inset-0 hero-image-gradient-secondary" />
                
                {/* Parallax Overlay Elements */}
                <div className="absolute inset-0 hero-parallax-overlay">
                  <div className="parallax-element-1"></div>
                  <div className="parallax-element-2"></div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-decoration-line-1"></div>
        <div className="hero-decoration-line-2"></div>
        <div className="hero-decoration-circle-1"></div>
        <div className="hero-decoration-circle-2"></div>
      </div>

      {/* Futuristic Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-3 z-30">
        {visualSlides.map((_, index) => (
          <button 
            key={index}
            className={`hero-slide-indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="indicator-line"></div>
            <div className="indicator-dot"></div>
          </button>
        ))}
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute top-1/4 right-12 hero-3d-element element-1"></div>
      <div className="absolute bottom-1/3 right-20 hero-3d-element element-2"></div>
    </div>
  );
};
