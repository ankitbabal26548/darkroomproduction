
/**
 * HERO CONTENT COMPONENT
 * ======================
 * 
 * This component displays the main headline and text on the homepage.
 * 
 * FOR BEGINNERS:
 * - To change text: Edit src/config/content.js (look for "hero" section)
 * - To change spacing: Edit src/config/styling.js
 * - Don't edit this file unless you're comfortable with code!
 */

import { useState, useEffect } from 'react';
import { WEBSITE_CONTENT } from '@/config/content';
import { WEBSITE_STYLING } from '@/config/styling';

interface HeroContentProps {
  currentSlide: number;
}

export const HeroContent = ({ currentSlide }: HeroContentProps) => {
  const [displaySlide, setDisplaySlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySlide(currentSlide);
    }, 150);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Get content from config - beginners edit this in config/content.js
  const { hero } = WEBSITE_CONTENT;
  const { spacing, typography } = WEBSITE_STYLING;
  const content = hero.slides[displaySlide];

  return (
    <div className={`space-y-4 sm:space-y-6 max-w-full`}>
      {/* Brand */}
      <div className="space-y-2 max-w-full">
        <div className="inline-block">
          <span className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
            {content.highlight}
          </span>
        </div>
        <h1 className={`font-playfair ${typography.heroTitle} font-bold text-foreground leading-tight max-w-full`}>
          {hero.mainTitle.split(' ')[0]}
          <span className="block text-accent">{hero.mainTitle.split(' ').slice(1).join(' ')}</span>
        </h1>
      </div>

      {/* Content */}
      <div className={`space-y-3 sm:space-y-4 transition-all duration-500 max-w-full`}>
        <p className={`text-accent font-medium ${typography.bodyLarge} tracking-wide`}>
          {content.subtitle}
        </p>
        <h2 className={`font-playfair ${typography.cardTitle} font-semibold text-foreground/90 leading-relaxed max-w-full`}>
          {content.title}
        </h2>
        <p className={`text-muted-foreground ${typography.bodyRegular} leading-relaxed max-w-lg`}>
          {content.description}
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 max-w-full">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
          <span className={`${typography.caption} font-medium text-muted-foreground`}>{hero.experience}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
          <span className={`${typography.caption} font-medium text-muted-foreground`}>{hero.happyCouples}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * EDITING INSTRUCTIONS FOR BEGINNERS:
 * 
 * 1. TO CHANGE THE MAIN TITLE:
 *    - Open src/config/content.js
 *    - Find: hero.mainTitle: "Darkroom Production"
 *    - Change to: hero.mainTitle: "Your Company Name"
 * 
 * 2. TO CHANGE THE ROTATING CONTENT:
 *    - Open src/config/content.js
 *    - Find the hero.slides array
 *    - Edit the subtitle, title, description, and highlight fields
 * 
 * 3. TO CHANGE EXPERIENCE/COUPLES TEXT:
 *    - Open src/config/content.js
 *    - Find: hero.experience and hero.happyCouples
 *    - Change the text between quotes
 * 
 * 4. TO ADJUST TEXT SIZES:
 *    - Open src/config/styling.js
 *    - Find typography section
 *    - Modify heroTitle, cardTitle, etc.
 */
