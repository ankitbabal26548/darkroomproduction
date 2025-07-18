
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Aperture, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoDisplay } from './LogoDisplay';
import { CameraControls } from './CameraControls';
import { ParticleEffects } from './ParticleEffects';
import { TypewriterText } from './TypewriterText';
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Images with Parallax */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-accent/10 z-15"
            style={{
              backgroundPosition: `${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%`
            }}
          />
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-full object-cover transition-transform duration-1000"
            style={{
              transform: `scale(1.1) translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
            }}
          />
        </div>
      ))}

      {/* Particle Effects */}
      <ParticleEffects />

      {/* Lens Flare Effect */}
      <div 
        className="absolute w-32 h-32 pointer-events-none z-30 transition-all duration-300"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-accent/30 via-accent/10 to-transparent rounded-full animate-pulse"></div>
      </div>

      {/* Camera Controls */}
      <CameraControls />

      {/* Viewfinder Grid (Optional) */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-accent/30"></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Logo with Cinematic Effects */}
        <div className="mb-8 animate-fade-in-up">
          <LogoDisplay className="w-32 h-32 mx-auto mb-6" />
          
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-4 tracking-wide relative">
            <TypewriterText 
              text="DARKROOM" 
              className="block"
              speed={150}
              delay={500}
            />
            <TypewriterText 
              text="PRODUCTION" 
              className="block text-accent"
              speed={120}
              delay={2000}
            />
            
            {/* Film strip decoration */}
            <div className="absolute -top-4 -left-4 w-2 h-full bg-accent/20 animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-2 h-full bg-accent/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </h1>
        </div>

        {/* Dynamic Content */}
        <div className="h-32 mb-8 flex flex-col justify-center">
          <h2 className="font-inter text-2xl md:text-3xl font-light mb-3 transition-all duration-500 animate-slide-in-left">
            {heroImages[currentSlide].title}
          </h2>
          <p className="text-accent font-medium text-lg animate-slide-in-right">
            {heroImages[currentSlide].subtitle}
          </p>
          
          {/* Professional terminology decoration */}
          <div className="flex justify-center space-x-8 mt-4 text-xs text-white/60 font-mono">
            <span>f/2.8</span>
            <span>ISO 400</span>
            <span>1/125s</span>
          </div>
        </div>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-black/30 border-accent text-white hover:bg-accent hover:text-black transition-all duration-300 lens-effect group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Aperture className="w-5 h-5 mr-2 animate-spin-slow" />
            View Portfolio
          </Button>
          
          <Button 
            size="lg" 
            className="bg-accent text-black hover:bg-accent/90 shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Camera className="w-5 h-5 mr-2" />
            Book Session
          </Button>
        </div>

        {/* Playback Control */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mt-8 p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Enhanced Navigation */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-black/30 text-white hover:bg-accent hover:text-black transition-all duration-300 lens-effect group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-black/30 text-white hover:bg-accent hover:text-black transition-all duration-300 lens-effect group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent' : 'bg-white/30 hover:bg-white/50'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-accent rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Film advance indicator */}
      <div className="absolute bottom-4 right-8 z-40 text-white/60 text-xs font-mono">
        Frame {currentSlide + 1} / {heroImages.length}
      </div>
    </section>
  );
};
