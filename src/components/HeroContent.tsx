
import { useState, useEffect } from 'react';
import { Camera, Heart, Star } from 'lucide-react';

interface HeroContentProps {
  currentSlide: number;
}

const contentSlides = [
  {
    category: "Wedding Photography",
    title: "Capturing Love Stories That Last Forever",
    description: "Every moment of your special day deserves to be preserved with artistic excellence. We blend documentary storytelling with fine art photography to create timeless memories.",
    highlights: ["Cinematic Style", "Natural Moments", "Timeless Beauty"]
  },
  {
    category: "Pre-Wedding Sessions",
    title: "Your Journey Together Begins Here",
    description: "Celebrate your love story with intimate pre-wedding sessions that capture the essence of your relationship. From romantic landscapes to urban adventures.",
    highlights: ["Creative Concepts", "Multiple Locations", "Personal Touch"]
  }
];

export const HeroContent = ({ currentSlide }: HeroContentProps) => {
  const [displaySlide, setDisplaySlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentSlide !== displaySlide) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplaySlide(currentSlide);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, displaySlide]);

  const content = contentSlides[displaySlide];

  return (
    <div className="space-y-6">
      {/* Category Badge */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
          {displaySlide === 0 ? (
            <Heart className="w-4 h-4 text-accent" />
          ) : (
            <Camera className="w-4 h-4 text-accent" />
          )}
          <span className="text-accent font-medium text-sm tracking-wide">
            {content.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className={`space-y-4 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <h2 className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
          {content.title}
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {content.description}
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap gap-3 pt-4">
          {content.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2 bg-secondary/50 px-3 py-2 rounded-lg border border-border/30">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex space-x-3 pt-6">
        {contentSlides.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === displaySlide 
                ? 'w-12 bg-accent' 
                : 'w-6 bg-accent/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
