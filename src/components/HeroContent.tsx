
import { useState, useEffect } from 'react';

interface HeroContentProps {
  currentSlide: number;
  isLoaded: boolean;
}

const contentSlides = [
  {
    subtitle: "Wedding Mastery",
    title: "Eternal Moments, Captured Forever",
    description: "We blend artistic vision with cutting-edge techniques to create wedding photography that transcends time.",
    features: ["Cinematic Storytelling", "4K Video Production", "Drone Photography"]
  },
  {
    subtitle: "Pre-Wedding Excellence", 
    title: "Your Love Story, Beautifully Told",
    description: "From intimate sessions to grand narratives, we craft pre-wedding photography that celebrates your unique journey.",
    features: ["Location Scouting", "Creative Direction", "Professional Styling"]
  }
];

export const HeroContent = ({ currentSlide, isLoaded }: HeroContentProps) => {
  const [displaySlide, setDisplaySlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySlide(currentSlide);
    }, 200);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const content = contentSlides[displaySlide];

  return (
    <div className={`space-y-6 ${isLoaded ? 'animate-content-reveal' : 'opacity-0'}`}>
      {/* Enhanced Content */}
      <div className="space-y-4 transition-all duration-700">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent-lighter rounded-full animate-accent-pulse" />
          <p className="text-accent font-semibold text-lg tracking-wide animate-text-glow">
            {content.subtitle}
          </p>
        </div>
        
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground leading-tight animate-title-reveal">
          {content.title}
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md animate-description-reveal">
          {content.description}
        </p>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-3 pt-4">
        {content.features.map((feature, index) => (
          <span
            key={feature}
            className={`text-sm font-medium px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm animate-tag-float-${index + 1}`}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent-lighter animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">5+ Years Mastery</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-lighter to-accent animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">200+ Success Stories</span>
        </div>
      </div>
    </div>
  );
};
