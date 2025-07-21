
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
    <div className="space-y-4 sm:space-y-6 max-w-full relative">
      {/* Enhanced Brand Section */}
      <div className="space-y-3 max-w-full">
        <div className="inline-block">
          <span className="hero-highlight-badge">
            {content.highlight}
          </span>
        </div>
        <h1 className="hero-main-title">
          <span className="title-word-1">Darkroom</span>
          <span className="title-word-2">Production</span>
        </h1>
      </div>

      {/* Enhanced Content */}
      <div className="space-y-4 sm:space-y-5 transition-all duration-700 max-w-full">
        <p className="hero-subtitle">
          {content.subtitle}
        </p>
        <h2 className="hero-secondary-title">
          {content.title}
        </h2>
        <p className="hero-description">
          {content.description}
        </p>
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6 max-w-full">
        <div className="trust-indicator">
          <div className="trust-dot"></div>
          <span className="trust-text">5+ Years Experience</span>
        </div>
        <div className="trust-indicator">
          <div className="trust-dot"></div>
          <span className="trust-text">200+ Happy Couples</span>
        </div>
      </div>

      {/* Kinetic Typography Effect */}
      <div className="absolute -top-2 -right-2 kinetic-text opacity-5">
        PHOTOGRAPHY
      </div>
    </div>
  );
};
