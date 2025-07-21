
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Camera, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HolographicBackground } from './HolographicBackground';
import { DigitalInterface } from './DigitalInterface';
import { PhotoCarousel3D } from './PhotoCarousel3D';

export const FuturisticHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Beautiful wedding ceremony",
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision"
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Professional photography equipment",
      title: "Professional Excellence",
      description: "High-quality equipment for perfect results"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Romantic couple portrait",
      title: "Pre-Wedding Sessions",
      description: "Beautiful engagement and couple photography"
    }
  ];

  const stats = [
    { value: 500, label: "Weddings Captured", icon: Camera },
    { value: 10, label: "Years Experience", icon: Award },
    { value: 98, label: "Happy Couples", icon: Users, suffix: "%" }
  ];

  return (
    <section className="futuristic-hero-container relative min-h-screen bg-background overflow-hidden">
      {/* Holographic Background */}
      <HolographicBackground />

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
                  className="energy-button group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="energy-button-secondary group relative overflow-hidden border-2 border-accent/30 hover:border-accent hover:bg-accent/10 font-medium px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Our Work
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
    </section>
  );
};
