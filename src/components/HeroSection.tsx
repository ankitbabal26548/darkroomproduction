import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Aperture, Focus, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

const heroImages = [{
  src: heroWedding1,
  title: "Timeless Wedding Moments",
  subtitle: "Capturing love stories that last forever",
  accent: "#FFD3AC"
}, {
  src: heroPrewedding1,
  title: "Pre-Wedding Chronicles", 
  subtitle: "Beautiful beginnings deserve beautiful memories",
  accent: "#F0B27A"
}];
export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
  return <section className="relative h-screen overflow-hidden">
      {/* Dynamic Particle System */}
      <div className="absolute inset-0 z-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 4 === 0 && <Camera className="w-3 h-3 text-accent/30" />}
            {i % 4 === 1 && <Aperture className="w-2 h-2 text-accent/40" />}
            {i % 4 === 2 && <Focus className="w-2 h-2 text-accent/30" />}
            {i % 4 === 3 && <div className="w-1 h-1 bg-accent/40 rounded-full" />}
          </div>
        ))}
      </div>

      {/* Interactive Parallax Background */}
      {heroImages.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-[2000ms] ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{
            transform: index === currentSlide ? 
              `translateX(${(mousePosition.x - 50) * 0.02}px) translateY(${(mousePosition.y - 50) * 0.02}px)` : 
              'translateX(0) translateY(0)'
          }}
        >
          {/* Multi-layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <div 
            className="absolute inset-0 z-10 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${image.accent}40 0%, transparent 50%)`
            }}
          />
          
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-full object-cover transition-transform duration-[8s] ease-out scale-110" 
          />
        </div>
      ))}

      {/* Advanced Visual Effects Layer */}
      <div className="absolute inset-0 z-20">
        {/* Dynamic Lens Flare */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${heroImages[currentSlide].accent} 0%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)'
          }}
        />
        
        {/* Film Grain with Dynamic Opacity */}
        <div className="absolute inset-0 film-grain opacity-30 animate-pulse" />
        
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, rgba(0,0,0,0.3) 60%)`
          }}
        />
      </div>

      {/* Main Content with Enhanced Layout */}
      <div className="relative z-30 h-full flex items-center justify-center text-center text-white">
        <div className={`max-w-5xl px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Revolutionary Aperture Design */}
          <div className="relative mb-16 group">
            {/* Multiple Rotating Rings */}
            <div className="relative w-32 h-32 mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-accent/60 rounded-full animate-aperture-spin" />
              
              {/* Middle Ring */}
              <div className="absolute inset-3 border-2 border-accent/40 rounded-full animate-aperture-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
              
              {/* Inner Ring */}
              <div className="absolute inset-6 border border-accent/60 rounded-full animate-aperture-spin" style={{ animationDuration: '4s' }} />
              
              {/* Central Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-12 h-12 text-accent animate-pulse" />
              </div>
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" />
              <div className="absolute inset-4 rounded-full border border-accent/50 animate-pulse" />
            </div>
            
            {/* Decorative Sparkles */}
            <div className="absolute -top-4 -left-4">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute -top-2 -right-6">
              <Zap className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            {/* Extended Decorative Lines */}
            <div className="absolute top-1/2 -left-24 w-20 h-px bg-gradient-to-r from-transparent via-accent to-accent/50 transform -translate-y-1/2 animate-fade-in-up" />
            <div className="absolute top-1/2 -right-24 w-20 h-px bg-gradient-to-l from-transparent via-accent to-accent/50 transform -translate-y-1/2 animate-fade-in-up" />
          </div>
          
          {/* Cinematic Typography */}
          <div className="relative mb-12">
            <h1 className="font-playfair text-6xl md:text-9xl font-bold tracking-wide relative">
              {/* Background Text Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-accent to-white/20 bg-clip-text text-transparent blur-sm">
                Darkroom Production
              </span>
              
              {/* Main Text with Gradient */}
              <span className="relative bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-fade-in-up">
                Darkroom Production
              </span>
              
              {/* Animated Underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent animate-[expandWidth_2s_ease-out_1s_forwards]" />
            </h1>
          </div>
          
          {/* Enhanced Content Display */}
          <div className="h-40 mb-12 relative perspective-1000">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-105">
              {/* Dynamic Background Pattern */}
              <div 
                className="absolute inset-0 opacity-20 rounded-2xl"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, transparent, ${heroImages[currentSlide].accent}40, transparent)`
                }}
              />
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h2 className="font-inter text-2xl md:text-4xl font-light mb-4 transition-all duration-700 transform animate-slide-in-left">
                  {heroImages[currentSlide].title}
                </h2>
                <p className="text-accent font-medium text-xl animate-slide-in-right">
                  {heroImages[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative bg-white/10 border-2 border-white/50 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-accent/30 backdrop-blur-md px-8 py-4 text-lg overflow-hidden"
            >
              <Aperture className="w-6 h-6 mr-3 group-hover:animate-aperture-spin transition-all duration-500" />
              <span className="relative z-10">View Portfolio</span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 30px rgba(255, 211, 172, 0.5)' }} />
            </Button>
            
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent shadow-2xl hover:shadow-accent/40 transition-all duration-500 hover:scale-110 px-8 py-4 text-lg overflow-hidden"
            >
              <Camera className="w-6 h-6 mr-3 group-hover:animate-lens-focus transition-all duration-500" />
              <span className="relative z-10">Contact Us</span>
              
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-lg border-2 border-white/30 animate-pulse" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Futuristic Navigation */}
      <button 
        onClick={prevSlide} 
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 group p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-accent/30"
      >
        <ChevronLeft className="w-8 h-8 group-hover:animate-pulse" />
        <div className="absolute inset-0 rounded-full border border-accent/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 group p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-accent/30"
      >
        <ChevronRight className="w-8 h-8 group-hover:animate-pulse" />
        <div className="absolute inset-0 rounded-full border border-accent/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex space-x-4">
        {heroImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`relative transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-accent scale-125 shadow-lg shadow-accent/50' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-110'
            } rounded-full`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full border border-accent/50 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center animate-bounce group cursor-pointer">
        <div className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center relative backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-accent to-accent/50 rounded-full mt-3 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse" />
        </div>
        <p className="text-white/80 text-sm mt-3 font-light tracking-wider group-hover:text-accent transition-colors duration-300">
          SCROLL TO EXPLORE
        </p>
        <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent mt-2" />
      </div>
    </section>;
};