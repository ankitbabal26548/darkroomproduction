import { useState, useEffect } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';
interface HeroVisualProps {
  currentSlide: number;
}
const visualSlides = [{
  image: heroWedding1,
  alt: "Wedding Photography"
}, {
  image: heroPrewedding1,
  alt: "Pre-Wedding Photography"
}];
export const HeroVisual = ({
  currentSlide
}: HeroVisualProps) => {
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
  return <div className="relative h-full min-h-[600px] lg:min-h-screen">
      {/* Main Images */}
      {visualSlides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          {loadedImages[index] && <>
              {/* Image Container */}
              <div className="relative h-full overflow-hidden">
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover object-center" />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:from-background/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              
              
            </>}
        </div>)}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 right-8 w-1 h-24 bg-accent/30 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/4 right-12 w-8 h-1 bg-accent/30 rounded-full hidden lg:block" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-3 z-20">
        {visualSlides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-accent scale-125 shadow-lg' : 'bg-white/40 hover:bg-white/60'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};