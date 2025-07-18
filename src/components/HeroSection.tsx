
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
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
      {/* Artistic Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="hero-artistic-pattern" />
      </div>

      {/* Creative Grid Layout */}
      <div className="relative z-10 min-h-screen">
        {/* Mobile-First Stacked Layout */}
        <div className="lg:hidden flex flex-col min-h-screen">
          {/* Mobile Visual Header */}
          <div className="relative h-[50vh] min-h-[400px]">
            <HeroVisual currentSlide={currentSlide} />
            
            {/* Mobile Brand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
            <div className="absolute bottom-8 left-6 right-6">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/30 mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Professional Photography</span>
                </div>
                <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Darkroom
                  <span className="block text-accent">Production</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 px-6 py-12 bg-background">
            <HeroContent currentSlide={currentSlide} />
            
            {/* Mobile CTA */}
            <div className="flex flex-col gap-4 mt-8">
              <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-xl transition-all duration-300">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-accent/30 hover:border-accent hover:bg-accent/5 font-medium px-8 py-6 rounded-xl transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Showreel
              </Button>
            </div>

            {/* Mobile Stats */}
            <div className="mt-12">
              <HeroStats />
            </div>
          </div>
        </div>

        {/* Desktop Creative Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-0 min-h-screen">
          {/* Content Section */}
          <div className="lg:col-span-6 flex flex-col justify-center px-12 xl:px-20 py-20">
            <div className={`space-y-8 ${isLoaded ? 'animate-creative-slide-in' : 'opacity-0'}`}>
              {/* Creative Brand Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-accent/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/20">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-accent font-medium tracking-wide">Award-Winning Studio</span>
                </div>
                
                <div className="relative">
                  <h1 className="font-playfair text-6xl xl:text-7xl font-bold leading-none">
                    <span className="text-foreground">Darkroom</span>
                    <span className="block text-accent creative-text-gradient">Production</span>
                  </h1>
                  {/* Creative Typography Accent */}
                  <div className="absolute -right-8 top-4 w-24 h-1 bg-gradient-to-r from-accent to-transparent rounded-full hidden xl:block" />
                </div>
              </div>

              {/* Dynamic Content */}
              <HeroContent currentSlide={currentSlide} />
              
              {/* Enhanced CTA Section */}
              <div className="space-y-6 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group bg-accent hover:bg-accent-darker text-accent-foreground font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    View Our Work
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="group border-2 border-accent/30 hover:border-accent hover:bg-accent/5 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Showreel
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-4 border-t border-border/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">5+ Years Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-sm font-medium text-muted-foreground">200+ Happy Couples</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-sm font-medium text-muted-foreground">Award Winners</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="pt-8">
                <HeroStats />
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="lg:col-span-6 relative">
            <HeroVisual currentSlide={currentSlide} />
            
            {/* Creative Geometric Accents */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-8 w-2 h-32 bg-gradient-to-b from-accent/40 to-transparent rounded-full" />
              <div className="absolute bottom-1/3 right-12 w-16 h-2 bg-gradient-to-r from-accent/40 to-transparent rounded-full" />
              <div className="absolute top-1/2 right-4 w-1 h-16 bg-gradient-to-b from-transparent via-accent/30 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Creative Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-3 text-muted-foreground/60 group cursor-pointer">
          <span className="text-xs font-medium tracking-widest uppercase group-hover:text-accent transition-colors">Explore More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Artistic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-transparent to-background/50 pointer-events-none lg:block hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
};
