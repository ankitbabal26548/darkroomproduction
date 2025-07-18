import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Aperture } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
  };
  return <section className="relative h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Background Images with Parallax Effect */}
      {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30 z-10" />
          <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-[8s] ease-out scale-110 hover:scale-100" />
        </div>)}

      {/* Dynamic Lens Effect Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-lens opacity-40 animate-pulse" />
      
      {/* Film Grain Effect */}
      <div className="absolute inset-0 z-20 film-grain opacity-20" />

      {/* Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4 animate-fade-in-up">
          {/* Aperture Decoration with Multiple Effects */}
          <div className="relative mb-12">
            <div className="aperture-border w-24 h-24 mx-auto flex items-center justify-center animate-aperture-spin relative">
              <Camera className="w-10 h-10 text-accent animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" />
              <div className="absolute inset-2 rounded-full border border-accent/50 animate-pulse" />
            </div>
            {/* Decorative Lines */}
            <div className="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent to-accent transform -translate-y-1/2 animate-fade-in-up" />
            <div className="absolute top-1/2 right-0 w-16 h-px bg-gradient-to-l from-transparent to-accent transform -translate-y-1/2 animate-fade-in-up" />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-8xl font-bold mb-8 tracking-wide bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-fade-in-up">
            Darkroom Production
          </h1>
          
          <div className="h-32 mb-10 relative">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10">
              <h2 className="font-inter text-xl md:text-3xl font-light mb-3 pt-4 transition-all duration-700 transform animate-slide-in-left">
                {heroImages[currentSlide].title}
              </h2>
              <p className="text-accent font-medium text-lg animate-slide-in-right">
                {heroImages[currentSlide].subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="outline" size="lg" className="group bg-white/10 border-white text-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-accent/25 relative overflow-hidden">
              <Aperture className="w-5 h-5 mr-2 group-hover:animate-aperture-spin" />
              View Portfolio
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <Camera className="w-5 h-5 mr-2 group-hover:animate-lens-focus" />
              Contact Us
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 lens-effect">
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 lens-effect">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-white/70 text-sm mt-2 font-light">Scroll Down</p>
      </div>
    </section>;
};