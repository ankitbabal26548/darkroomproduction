
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2);
    }, 6000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground scrollY={scrollY} />

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-0 max-w-full">
        {/* Content Section - Fixed padding for navbar */}
        <div className="lg:col-span-5 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-0 pt-32 lg:pt-24 xl:pt-28">
          <div className={`space-y-6 lg:space-y-8 max-w-full relative ${
            isLoaded ? 'animate-futuristic-enter' : 'opacity-0'
          }`}>
            {/* Floating Content Card */}
            <div className="hero-floating-card">
              <HeroContent currentSlide={currentSlide} />
              
              {/* Enhanced Call to Action */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 max-w-full">
                <Button size="lg" className="hero-primary-button group">
                  <span className="relative z-10">View Our Work</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="button-glow-effect"></div>
                </Button>
                <Button variant="outline" size="lg" className="hero-secondary-button group">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Watch Showreel</span>
                  <div className="button-glass-effect"></div>
                </Button>
              </div>

              {/* Enhanced Statistics */}
              <div className="pt-6">
                <HeroStats />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 hero-floating-shape opacity-20"></div>
            <div className="absolute -bottom-8 -left-6 w-16 h-16 hero-floating-shape-alt opacity-10"></div>
          </div>
        </div>

        {/* Visual Section - Allow to go under navbar */}
        <div className="lg:col-span-7 relative max-w-full overflow-hidden -mt-20 pt-20 lg:-mt-16 lg:pt-16">
          <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-screen">
            <HeroVisual currentSlide={currentSlide} />
            
            {/* Holographic Overlay */}
            <div className="absolute inset-0 hero-holographic-overlay pointer-events-none"></div>
            
            {/* Prismatic Light Effects */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 hero-prismatic-light opacity-30"></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 hero-prismatic-light-alt opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hero-scroll-indicator">
        <div className="flex flex-col items-center space-y-3 text-muted-foreground">
          <div className="scroll-indicator-line"></div>
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase animate-pulse">
            Explore
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </div>
      </div>

      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 hero-dynamic-gradient pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};
