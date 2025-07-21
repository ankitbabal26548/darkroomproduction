
import { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 3); // Updated for 3 slides
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setCurrentSlide(prev => (prev - 1 + 3) % 3);
    } else if (event.key === 'ArrowRight') {
      setCurrentSlide(prev => (prev + 1) % 3);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Enhanced Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
      </div>

      {/* Floating Creative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-floating-slow" />
        <div className="absolute top-3/4 left-1/3 w-1 h-8 bg-accent/20 rounded-full animate-floating-medium" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 border border-accent/30 rounded animate-floating-fast" />
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-accent/40 rounded-full animate-floating-slow" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0 max-w-full">
        {/* Content Section - Fixed padding for navbar */}
        <div className="lg:col-span-5 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-0 pt-24 sm:pt-28 lg:pt-16 xl:pt-20">
          <div className={`space-y-6 lg:space-y-8 max-w-full ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <HeroContent currentSlide={currentSlide} />
            
            {/* Call to Action - Fixed button styling */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 max-w-full">
              <Button 
                size="lg" 
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-foreground/20 hover:border-accent hover:bg-accent hover:text-white font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </Button>
            </div>

            <HeroStats />
          </div>
        </div>

        {/* Visual Section - Allow images to go under navbar */}
        <div className="lg:col-span-7 relative max-w-full overflow-hidden -mt-20 lg:-mt-0">
          <HeroVisual 
            currentSlide={currentSlide} 
            onSlideChange={handleSlideChange}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
