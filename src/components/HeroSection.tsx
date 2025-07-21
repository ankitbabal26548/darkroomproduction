
/**
 * HERO SECTION COMPONENT
 * ======================
 * 
 * This is the main banner section at the top of your homepage.
 * It combines text content and visual elements.
 * 
 * FOR BEGINNERS:
 * - To change text: Edit src/config/content.js
 * - To change images: Edit src/config/images.js
 * - To change button text: Edit src/config/content.js (hero.primaryButton, hero.secondaryButton)
 * - Don't edit this file unless you're comfortable with code!
 */

import { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';
import { WEBSITE_CONTENT } from '@/config/content';
import { WEBSITE_STYLING } from '@/config/styling';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get content from config
  const { hero } = WEBSITE_CONTENT;
  const { spacing, animations } = WEBSITE_STYLING;

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative min-h-screen bg-background overflow-hidden`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0 max-w-full">
        {/* Content Section */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${spacing.containerPadding} py-16 lg:py-0 my-[30px]`}>
          <div className={`space-y-6 lg:space-y-8 max-w-full ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <HeroContent currentSlide={currentSlide} />
            
            {/* Call to Action Buttons - Edit button text in config/content.js */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 max-w-full`}>
              <Button 
                size="lg" 
                className={`group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all ${animations.normal} hover:scale-105 text-sm sm:text-base`}
              >
                {hero.primaryButton}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={`group border-2 border-foreground/20 hover:border-accent hover:text-accent font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all ${animations.normal} text-sm sm:text-base`}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                {hero.secondaryButton}
              </Button>
            </div>

            {/* Statistics */}
            <HeroStats />
          </div>
        </div>

        {/* Visual Section */}
        <div className="lg:col-span-7 relative max-w-full overflow-hidden">
          <HeroVisual currentSlide={currentSlide} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

/**
 * EDITING INSTRUCTIONS FOR BEGINNERS:
 * 
 * 1. TO CHANGE BUTTON TEXT:
 *    - Open src/config/content.js
 *    - Find: hero.primaryButton and hero.secondaryButton
 *    - Change text between quotes
 * 
 * 2. TO CHANGE SLIDE TIMING:
 *    - Find the line: setCurrentSlide(prev => (prev + 1) % 2);
 *    - Change 6000 to different number (milliseconds)
 *    - 6000 = 6 seconds, 4000 = 4 seconds, etc.
 * 
 * 3. TO ADJUST SPACING:
 *    - Open src/config/styling.js
 *    - Edit spacing.containerPadding
 *    - Edit spacing.sectionPadding
 * 
 * 4. TO CHANGE ANIMATION SPEED:
 *    - Open src/config/styling.js
 *    - Edit animations.normal, animations.fast, etc.
 */
