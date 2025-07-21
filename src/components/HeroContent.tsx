
import { useState, useEffect } from 'react';

interface HeroContentProps {
  currentSlide: number;
}

const contentSlides = [
  {
    subtitle: "Professional Photography",
    title: "Capturing Life's Most Precious Moments",
    description: "We transform your special occasions into timeless memories with our artistic vision and professional expertise.",
    highlight: "Wedding & Event Specialists"
  },
  {
    subtitle: "Creative Storytelling",
    title: "Every Picture Tells Your Unique Story",
    description: "From intimate pre-wedding sessions to grand celebrations, we craft visual narratives that speak to the heart.",
    highlight: "Pre-Wedding Specialists"
  }
];

export const HeroContent = ({ currentSlide }: HeroContentProps) => {
  const [displaySlide, setDisplaySlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySlide(currentSlide);
    }, 150);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const content = contentSlides[displaySlide];

  return (
    <div className="space-y-4 sm:space-y-6 max-w-full">
      {/* Brand with Enhanced Typography */}
      <div className="space-y-3 max-w-full">
        <div className="inline-block animate-fade-in-down">
          <span className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-accent/20 to-accent/10 px-3 sm:px-4 py-2 rounded-full border border-accent/30 backdrop-blur-sm glow-effect">
            {content.highlight}
          </span>
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-full animate-scale-in">
          <span className="gradient-text bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Darkroom
          </span>
          <span className="block gradient-text bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-fade-in-up">
            Production
          </span>
        </h1>
      </div>

      {/* Enhanced Content */}
      <div className="space-y-3 sm:space-y-4 transition-all duration-500 max-w-full">
        <p className="text-accent font-medium text-base sm:text-lg tracking-wide animate-slide-in-left kinetic-text">
          {content.subtitle}
        </p>
        <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed max-w-full animate-fade-in-up">
          {content.title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg animate-slide-in-right">
          {content.description}
        </p>
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 max-w-full">
        <div className="flex items-center space-x-2 glass-indicator p-2 rounded-lg backdrop-blur-sm">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-glow-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">5+ Years Experience</span>
        </div>
        <div className="flex items-center space-x-2 glass-indicator p-2 rounded-lg backdrop-blur-sm">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-glow-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">200+ Happy Couples</span>
        </div>
      </div>
    </div>
  );
};
