
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FuturisticBackground } from './FuturisticBackground';
import { KineticTypography } from './KineticTypography';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';
import { MagneticButton } from './MagneticButton';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    // Orchestrated entrance sequence
    const loadTimer = setTimeout(() => setIsLoaded(true), 500);
    const entranceTimer = setTimeout(() => setEntranceComplete(true), 3000);
    
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2);
    }, 8000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(entranceTimer);
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Futuristic Background System */}
      <FuturisticBackground isLoaded={isLoaded} />

      {/* Main Content Grid - 30/70 Split */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0">
        {/* Content Section - 30% */}
        <div className="lg:col-span-4 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-20 lg:py-0 relative">
          {/* Glassmorphism Overlay for Mobile */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm lg:hidden" />
          
          <div className={`relative z-10 space-y-8 ${isLoaded ? 'animate-entrance-sequence' : 'opacity-0'}`}>
            {/* Kinetic Typography */}
            <KineticTypography isLoaded={isLoaded} entranceComplete={entranceComplete} />
            
            {/* Enhanced Content */}
            <HeroContent currentSlide={currentSlide} isLoaded={isLoaded} />
            
            {/* Magnetic Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <MagneticButton variant="primary" size="lg">
                View Our Work
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg">
                Watch Showreel
              </MagneticButton>
            </div>

            {/* Enhanced Statistics */}
            <HeroStats isVisible={entranceComplete} />
          </div>
        </div>

        {/* Visual Section - 70% */}
        <div className="lg:col-span-8 relative">
          <HeroVisual currentSlide={currentSlide} isLoaded={isLoaded} />
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className={`flex flex-col items-center space-y-2 text-muted-foreground ${entranceComplete ? 'animate-gentle-pulse' : 'opacity-0'}`}>
          <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full animate-scroll-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
        </div>
      </div>

      {/* Light Beam Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-accent/30 via-transparent to-transparent animate-light-sweep" />
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent animate-light-sweep-delayed" />
      </div>

      {/* Depth Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent pointer-events-none lg:from-background/70" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};
