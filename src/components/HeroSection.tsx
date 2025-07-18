import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Aperture, Menu, X, Phone, Mail, Star, Sparkles, Circle } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
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

  return <section className="relative h-screen overflow-hidden"
    style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(207, 185, 131, 0.1) 0%, transparent 50%)`
    }}>
      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent/30 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Background Images with Parallax */}
      {heroImages.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-15" />
          <img 
            src={image.src} 
            alt={image.title} 
            className="w-full h-full object-cover transition-transform duration-6000 ease-out"
            style={{
              transform: `scale(${index === currentSlide ? 1.1 : 1.05}) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
        </div>
      ))}

      {/* Cinematic Lens Effects */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-lens opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-radial from-accent/10 to-transparent opacity-50 blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Creative Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-xl border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Cinematic Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="aperture-border w-12 h-12 flex items-center justify-center group-hover:animate-aperture-pulse">
                  <Camera className="w-6 h-6 text-accent transition-all duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute -inset-2 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                  Darkroom
                </h1>
                <p className="text-xs text-accent/80 -mt-1 tracking-wider">PRODUCTION</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white/90 hover:text-accent transition-all duration-300 font-medium group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute -top-1 -left-1 w-0 h-0 border-l border-t border-accent/0 transition-all duration-300 group-hover:w-2 group-hover:h-2 group-hover:border-accent/50" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-6">
              <a 
                href="tel:+91" 
                className="flex items-center space-x-2 text-sm text-white/70 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="hidden 2xl:block">+91 XXX XXX XXXX</span>
              </a>
              <a 
                href="mailto:hello@darkroomproduction.in"
                className="flex items-center space-x-2 text-sm text-white/70 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="hidden 2xl:block">hello@darkroom.in</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-accent/20 text-white border border-accent/20 backdrop-blur-sm"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-500 backdrop-blur-xl ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pt-4 pb-6 space-y-3 bg-black/30 border-t border-accent/10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white/90 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/20"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-accent/20 space-y-3">
              <a 
                href="tel:+91" 
                className="flex items-center space-x-3 px-4 py-2 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 XXX XXX XXXX</span>
              </a>
              <a 
                href="mailto:hello@darkroomproduction.in"
                className="flex items-center space-x-3 px-4 py-2 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@darkroomproduction.in</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center text-white pt-20">
        <div className="max-w-6xl px-6 animate-fade-in-up">
          {/* Cinematic Aperture Ring */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-accent/30 rounded-full animate-aperture-spin flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-accent/50 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-accent rounded-full flex items-center justify-center bg-accent/10 backdrop-blur-sm">
                    <Aperture className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Floating decorative elements */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/60 rounded-full animate-float"
                  style={{
                    top: `${20 + Math.sin(i * Math.PI / 4) * 60}px`,
                    left: `${20 + Math.cos(i * Math.PI / 4) * 60}px`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Epic Typography */}
          <div className="mb-12 space-y-6">
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-gradient-shift">
                  Darkroom
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-3xl opacity-50" />
              </span>
              <br />
              <span className="relative inline-block text-4xl md:text-6xl lg:text-7xl text-accent/80 font-light tracking-wider">
                Production
                <Star className="inline-block w-8 h-8 ml-4 text-accent animate-pulse" />
              </span>
            </h1>
            
            <div className="h-32 mb-8 overflow-hidden">
              <div className="space-y-4 transition-all duration-700 ease-in-out transform">
                <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed">
                  {heroImages[currentSlide].title}
                </h2>
                <p className="text-accent font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {heroImages[currentSlide].subtitle}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-accent/60 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all duration-500 px-8 py-4 text-lg font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
              <Aperture className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-180" />
              <span className="relative z-10">View Portfolio</span>
            </Button>
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-accent via-accent to-accent/80 text-black hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 px-8 py-4 text-lg font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
              <Camera className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">Book Session</span>
            </Button>
          </div>

          {/* Artistic Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-4 animate-bounce">
              <div className="text-white/60 text-sm tracking-widest">SCROLL TO EXPLORE</div>
              <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
              <Circle className="w-6 h-6 text-accent/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Navigation Arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 group"
      >
        <div className="relative w-14 h-14 rounded-full bg-black/30 backdrop-blur-xl border border-accent/30 text-white hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <ChevronLeft className="w-7 h-7 transition-transform duration-300 group-hover:-translate-x-1" />
        </div>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 group"
      >
        <div className="relative w-14 h-14 rounded-full bg-black/30 backdrop-blur-xl border border-accent/30 text-white hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
          <ChevronRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </button>

      {/* Artistic Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex space-x-4">
        {heroImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`relative group transition-all duration-500 ${
              index === currentSlide ? 'scale-125' : 'hover:scale-110'
            }`}
          >
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-accent border-accent shadow-lg shadow-accent/50' 
                : 'bg-transparent border-white/50 hover:border-accent/70'
            }`} />
            {index === currentSlide && (
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-sm animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>;
};