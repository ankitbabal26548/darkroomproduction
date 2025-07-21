
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

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 300);
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
        transform: `translateX(${diff > 0 ? '60%' : '-60%'}) rotateY(${diff > 0 ? '-25deg' : '25deg'}) scale(0.85)`,
        opacity: 0.7,
        zIndex: 5
      };
    } else {
      return {
        transform: `translateX(${diff > 0 ? '120%' : '-120%'}) rotateY(${diff > 0 ? '-45deg' : '45deg'}) scale(0.7)`,
        opacity: 0.3,
        zIndex: 1
      };
    }
  };

  return (
    <div className={`photo-carousel-3d relative w-full h-96 lg:h-[500px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
         style={{ animationDelay: '0.6s' }}>
      
      {/* Main Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-80 h-80 lg:w-96 lg:h-96 transition-all duration-700 ease-out ${
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
              />
              
              {/* Overlay Info */}
              {index === currentIndex && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-b-lg">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/20 hover:bg-background/40 border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-accent" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/20 hover:bg-background/40 border border-accent/30 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-accent" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent shadow-lg shadow-accent/50' 
                : 'bg-accent/30 hover:bg-accent/50'
            }`}
          />
        ))}
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent/40 rounded-full animate-float-${i % 3 + 1}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
