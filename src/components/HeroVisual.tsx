
/**
 * HERO VISUAL COMPONENT
 * =====================
 * 
 * This component displays the sliding images on the homepage.
 * 
 * FOR BEGINNERS:
 * - To change images: Edit src/config/images.js (look for "hero" section)
 * - Images automatically rotate every 6 seconds
 * - Don't edit this file unless you're comfortable with code!
 */

import { useState, useEffect } from 'react';
import { WEBSITE_IMAGES } from '@/config/images';

interface HeroVisualProps {
  currentSlide: number;
}

export const HeroVisual = ({ currentSlide }: HeroVisualProps) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([false, false]);

  // Get images from config - beginners edit this in config/images.js
  const { hero } = WEBSITE_IMAGES;
  
  const visualSlides = [
    {
      image: hero.slide1,
      alt: hero.slide1Alt
    },
    {
      image: hero.slide2,
      alt: hero.slide2Alt
    }
  ];

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
      img.onerror = () => {
        console.warn(`Failed to load hero image: ${slide.image}`);
        // Still mark as loaded to show fallback
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
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover object-center" 
                  onError={(e) => {
                    // Fallback to placeholder if image fails
                    const target = e.target as HTMLImageElement;
                    target.src = WEBSITE_IMAGES.placeholders.defaultGallery;
                  }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:from-background/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </>
          )}
          
          {/* Loading placeholder */}
          {!loadedImages[index] && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-4 sm:right-8 w-1 h-16 sm:h-24 bg-accent/30 rounded-full hidden sm:block" />
        <div className="absolute bottom-1/4 right-6 sm:right-12 w-6 sm:w-8 h-1 bg-accent/30 rounded-full hidden sm:block" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2 sm:space-x-3 z-20">
        {visualSlides.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * EDITING INSTRUCTIONS FOR BEGINNERS:
 * 
 * 1. TO CHANGE HERO IMAGES:
 *    - Open src/config/images.js
 *    - Find: hero.slide1 and hero.slide2
 *    - Replace URLs with your image URLs
 *    - Example: slide1: "https://your-image-url.jpg"
 * 
 * 2. TO CHANGE IMAGE DESCRIPTIONS:
 *    - Open src/config/images.js
 *    - Find: hero.slide1Alt and hero.slide2Alt
 *    - Change text to describe your images
 * 
 * 3. IMAGE REQUIREMENTS:
 *    - Size: 1920x1080px or larger
 *    - Format: JPG or PNG
 *    - File size: Under 2MB for best performance
 * 
 * 4. WHERE TO GET IMAGES:
 *    - Upload your own to src/assets/ folder
 *    - Use free stock photos from unsplash.com
 *    - Use any accessible image URL
 */
