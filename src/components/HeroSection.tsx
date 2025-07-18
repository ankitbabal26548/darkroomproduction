import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Aperture } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';

const heroImages = [
  {
    src: heroWedding1,
    title: "Timeless Wedding Moments",
    subtitle: "Capturing love stories that last forever"
  },
  {
    src: heroPrewedding1,
    title: "Pre-Wedding Chronicles", 
    subtitle: "Beautiful beginnings deserve beautiful memories"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Lens Effect Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-lens opacity-30" />

      {/* Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4 animate-fade-in-up">
          {/* Aperture Decoration */}
          <div className="aperture-border w-20 h-20 mx-auto mb-8 flex items-center justify-center animate-aperture-spin">
            <Camera className="w-8 h-8 text-accent" />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            Darkroom Production
          </h1>
          
          <div className="h-24 mb-8">
            <h2 className="font-inter text-xl md:text-2xl font-light mb-2 transition-all duration-500">
              {heroImages[currentSlide].title}
            </h2>
            <p className="text-accent font-medium">
              {heroImages[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              <Aperture className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 lens-effect"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 lens-effect"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};