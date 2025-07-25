
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
  },
  {
    subtitle: "Artistic Excellence",
    title: "Moments That Last Forever",
    description: "Our passion for photography meets your vision to create extraordinary visual experiences that transcend time.",
    highlight: "Event Photography Experts"
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
      {/* Brand */}
      <div className="space-y-2 max-w-full">
        <div className="inline-block">
          <span className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-2 sm:px-3 py-1 rounded-full transition-all duration-300 hover:bg-accent/20">
            {content.highlight}
          </span>
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-full">
          Darkroom
          <span className="block text-accent">Production</span>
        </h1>
      </div>

      {/* Content with enhanced animations */}
      <div className="space-y-3 sm:space-y-4 transition-all duration-500 max-w-full">
        <p className="text-accent font-medium text-base sm:text-lg tracking-wide animate-fade-in-up">
          {content.subtitle}
        </p>
        <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-relaxed max-w-full animate-fade-in-up">
          {content.title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg animate-fade-in-up">
          {content.description}
        </p>
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 max-w-full">
        <div className="flex items-center space-x-2 group">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
          <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent transition-colors">5+ Years Experience</span>
        </div>
        <div className="flex items-center space-x-2 group">
          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
          <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent transition-colors">200+ Happy Couples</span>
        </div>
      </div>
    </div>
  );
};
