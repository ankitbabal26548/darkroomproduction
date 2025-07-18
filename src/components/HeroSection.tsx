
import { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0">
        {/* Content Section */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-0">
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <HeroContent currentSlide={currentSlide} />
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-foreground/20 hover:border-accent hover:text-accent font-medium px-8 py-6 rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </Button>
            </div>

            {/* Statistics */}
            <HeroStats />
          </div>
        </div>

        {/* Visual Section */}
        <div className="lg:col-span-7 relative">
          <HeroVisual currentSlide={currentSlide} />
          
          {/* Geometric Overlay */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/30 rotate-45 hidden lg:block animate-float" />
          <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/10 rounded-full hidden lg:block animate-pulse-slow" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
