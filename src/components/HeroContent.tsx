
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
    <div className="space-y-6">
      {/* Brand */}
      <div className="space-y-2">
        <div className="inline-block">
          <span className="text-accent font-medium text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
            {content.highlight}
          </span>
        </div>
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Darkroom
          <span className="block text-accent">Production</span>
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-4 transition-all duration-500">
        <p className="text-accent font-medium text-lg tracking-wide">
          {content.subtitle}
        </p>
        <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-foreground/90 leading-relaxed">
          {content.title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          {content.description}
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center space-x-6 pt-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-sm font-medium text-muted-foreground">5+ Years Experience</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-sm font-medium text-muted-foreground">200+ Happy Couples</span>
        </div>
      </div>
    </div>
  );
};
