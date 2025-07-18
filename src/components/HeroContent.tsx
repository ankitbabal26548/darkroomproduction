
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
    <div className="space-y-8">
      {/* Enhanced Brand */}
      <div className="space-y-4">
        <div className="inline-block">
          <span className="relative text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20 animate-glow-pulse">
            {content.highlight}
            <div className="absolute inset-0 rounded-full bg-accent/5 animate-ping" />
          </span>
        </div>
        
        {/* Kinetic Typography */}
        <div className="relative">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground animate-slide-in-left">
              Darkroom
            </span>
            <span className="block text-accent animate-slide-in-right animation-delay-200">
              Production
            </span>
          </h1>
          
          {/* Typography Enhancement */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-accent/20 rounded-full animate-spin-slow opacity-30" />
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="space-y-6 transition-all duration-700">
        <p className="text-accent font-semibold text-xl tracking-wide animate-fade-in-up">
          {content.subtitle}
        </p>
        
        <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-foreground/90 leading-relaxed animate-fade-in-up animation-delay-100">
          {content.title}
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
          {content.description}
        </p>
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="flex items-center space-x-8 pt-6 animate-fade-in-up animation-delay-300">
        <div className="flex items-center space-x-3 group">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors">
            5+ Years Experience
          </span>
        </div>
        <div className="flex items-center space-x-3 group">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-500 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors">
            200+ Happy Couples
          </span>
        </div>
      </div>
    </div>
  );
};
