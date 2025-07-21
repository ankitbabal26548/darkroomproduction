
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap, Camera, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HolographicBackground } from './HolographicBackground';
import { DigitalInterface } from './DigitalInterface';
import { PhotoCarousel3D } from './PhotoCarousel3D';
import { ScanningBeam } from './ScanningBeam';

export const FuturisticHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const heroImages = [
    {
      src: "/assets/hero-wedding-1.jpg",
      alt: "Elegant wedding photography",
      title: "Wedding Excellence",
      description: "Timeless moments captured with artistic vision"
    },
    {
      src: "/assets/hero-prewedding-1.jpg", 
      alt: "Pre-wedding photography session",
      title: "Pre-Wedding Magic",
      description: "Intimate stories told through beautiful imagery"
    },
    {
      src: "/assets/camera-lens.jpg",
      alt: "Professional camera equipment",
      title: "Technical Mastery",
      description: "State-of-the-art equipment for perfect shots"
    }
  ];

  const stats = [
    { value: 500, label: "Weddings Captured", icon: Camera },
    { value: 10, label: "Years Experience", icon: Award },
    { value: 98, label: "Client Satisfaction", icon: Users, suffix: "%" }
  ];

  return (
    <section 
      ref={heroRef}
      className="futuristic-hero-container relative min-h-screen bg-background overflow-hidden"
    >
      {/* Holographic Background */}
      <HolographicBackground />
      
      {/* Scanning Beam */}
      <ScanningBeam mousePosition={mousePosition} />

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen items-center">
            
            {/* Left Side - Digital Interface */}
            <div className="lg:col-span-6 space-y-8">
              <DigitalInterface 
                isLoaded={isLoaded}
                stats={stats}
              />
              
              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                   style={{ animationDelay: '1.2s' }}>
                <Button 
                  size="lg" 
                  className="energy-button group relative overflow-hidden bg-accent hover:bg-accent-darker text-accent-foreground font-medium px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-darker opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="energy-button-secondary group relative overflow-hidden border-2 border-accent/30 hover:border-accent hover:bg-accent/10 font-medium px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Showreel
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Side - 3D Photo Showcase */}
            <div className="lg:col-span-6">
              <PhotoCarousel3D 
                images={heroImages}
                isLoaded={isLoaded}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-medium tracking-wider uppercase opacity-60">Discover</span>
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full relative">
            <div className="w-1 h-3 bg-accent rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Energy Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80 pointer-events-none z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-5" />
    </section>
  );
};
