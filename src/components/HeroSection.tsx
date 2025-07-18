
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Aperture, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { ViewfinderOverlay } from '@/components/ViewfinderOverlay';
import { ApertureAnimation } from '@/components/ApertureAnimation';
import { FilmStripEffects } from '@/components/FilmStripEffects';
import { TypewriterText } from '@/components/TypewriterText';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

const heroImages = [{
  src: heroWedding1,
  title: "Timeless Wedding Moments",
  subtitle: "Capturing love stories that last forever"
}, {
  src: heroPrewedding1,
  title: "Pre-Wedding Chronicles",
  subtitle: "Beautiful beginnings deserve beautiful memories"
}];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [mouseSpotlight, setMouseSpotlight] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTypewriter(true), 1000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseSpotlight({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSlideChange = (newSlide: number) => {
    if (newSlide === currentSlide) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % heroImages.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background System */}
      <ParallaxBackground />
      
      {/* Film Strip Effects */}
      <FilmStripEffects />

      {/* Background Images with Enhanced Transitions */}
      {heroImages.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 z-15"
            style={{
              backgroundPosition: `${mouseSpotlight.x}% ${mouseSpotlight.y}%`,
            }}
          />
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
          />
        </div>
      ))}

      {/* Mouse-following Spotlight Effect */}
      <div 
        className="absolute w-96 h-96 z-20 pointer-events-none opacity-20 transition-all duration-300"
        style={{
          left: `${mouseSpotlight.x}%`,
          top: `${mouseSpotlight.y}%`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, hsl(var(--accent) / 0.6) 0%, transparent 70%)`,
        }}
      />

      {/* Viewfinder Overlay */}
      <ViewfinderOverlay />

      {/* Aperture Animation */}
      <ApertureAnimation isTransitioning={isTransitioning} currentSlide={currentSlide} />

      {/* Enhanced Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          {/* Main Title with Typewriter Effect */}
          <div className="mb-8">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-4 tracking-wide">
              {showTypewriter ? (
                <TypewriterText 
                  text="Darkroom Production" 
                  speed={120}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white"
                />
              ) : (
                <span className="opacity-0">Darkroom Production</span>
              )}
            </h1>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
              <Aperture className="w-8 h-8 text-accent animate-aperture-spin" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>
          
          {/* Dynamic Content Area */}
          <div className="h-32 mb-8">
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h2 className="font-inter text-2xl md:text-3xl font-light mb-4 animate-fade-in-up">
                {heroImages[currentSlide].title}
              </h2>
              <p className="text-accent font-medium text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {heroImages[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-white/10 border-accent text-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-lens"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:animate-lens-focus" />
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              Contact Us
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-slide-in-right transition-opacity" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation with Camera-style Controls */}
      <button 
        onClick={prevSlide} 
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 group"
      >
        <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lens">
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div className="absolute -inset-2 rounded-full border border-accent/30 opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 group"
      >
        <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lens">
          <ChevronRight className="w-6 h-6" />
        </div>
        <div className="absolute -inset-2 rounded-full border border-accent/30 opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
      </button>

      {/* Professional Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`group relative w-12 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-white/30 hover:bg-white/60'
            }`}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent animate-pulse-glow' : ''
            }`} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-accent font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              {String(index + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {/* Professional Frame Counter */}
      <div className="absolute bottom-8 right-8 z-40">
        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded font-mono text-accent border border-accent/30">
          <span className="text-xs opacity-70">FRAME </span>
          <span className="text-lg font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-xs opacity-70">/{heroImages.length.toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${mouseSpotlight.x}% ${mouseSpotlight.y}%, transparent 40%, hsl(var(--background) / 0.3) 100%)`,
          }}
        />
      </div>
    </section>
  );
};
