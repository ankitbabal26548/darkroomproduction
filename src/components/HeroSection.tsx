
import { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';
import { FuturisticBackground } from './FuturisticBackground';

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
      {/* Futuristic Background System */}
      <FuturisticBackground />

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0 max-w-full">
        {/* Content Section with Proper Padding */}
        <div className="lg:col-span-5 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-0 pt-32 lg:pt-24 my-[30px]">
          {/* Glassmorphism Container */}
          <div className={`glass-container p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-white/10 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <HeroContent currentSlide={currentSlide} />
            
            {/* Enhanced Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 max-w-full">
              <Button size="lg" className="group futuristic-button bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                View Our Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group glass-button border-2 border-foreground/20 hover:border-accent hover:text-accent font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all duration-300 text-sm sm:text-base backdrop-blur-sm">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </Button>
            </div>

            {/* Enhanced Statistics */}
            <HeroStats />
          </div>
        </div>

        {/* Visual Section - Goes Under Navbar */}
        <div className="lg:col-span-7 relative max-w-full overflow-hidden -mt-20 lg:-mt-0">
          <HeroVisual currentSlide={currentSlide} />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-breathing">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground glass-element p-3 rounded-full backdrop-blur-sm">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
