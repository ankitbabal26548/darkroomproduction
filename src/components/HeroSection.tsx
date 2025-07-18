
import { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroStats } from './HeroStats';
import { FuturisticBackground } from './FuturisticBackground';
import { AnimatedGrid } from './AnimatedGrid';

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
      <FuturisticBackground currentSlide={currentSlide} />
      <AnimatedGrid />
      
      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent opacity-60" />

      {/* Main Content Grid - Asymmetric Layout */}
      <div className="relative z-20 min-h-screen grid lg:grid-cols-5 gap-0">
        {/* Content Section - Enhanced */}
        <div className="lg:col-span-3 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-0 relative">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-background/30 backdrop-blur-sm border-r border-accent/10 lg:block hidden" />
          
          <div className={`relative z-10 space-y-8 ${isLoaded ? 'animate-kinetic-reveal' : 'opacity-0'}`}>
            <HeroContent currentSlide={currentSlide} />
            
            {/* Enhanced Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl magnetic-button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-lighter/20 to-accent-darker/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-2 border-accent/30 hover:border-accent bg-background/50 backdrop-blur-sm hover:bg-accent/5 font-semibold px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />
                <span className="relative z-10 flex items-center text-accent">
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Showreel
                </span>
              </Button>
            </div>

            {/* Enhanced Statistics */}
            <HeroStats />
          </div>
        </div>

        {/* Visual Section - Enhanced */}
        <div className="lg:col-span-2 relative">
          <HeroVisual currentSlide={currentSlide} />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-3 text-muted-foreground group cursor-pointer hover:text-accent transition-colors duration-300">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
            </div>
          </div>
          <span className="text-xs font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-gentle-bounce" />
        </div>
      </div>

      {/* Advanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-background/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};
