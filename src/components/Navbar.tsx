
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CinematicLogo } from './CinematicLogo';
import { FloatingNavigation } from './FloatingNavigation';
import { ViewfinderHUD } from './ViewfinderHUD';
import { MobileFilmMenu } from './MobileFilmMenu';
import { ScrollProgress } from './ScrollProgress';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Cinematic Header with Film Strip Border */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'cinematic-navbar-scrolled' 
          : 'cinematic-navbar'
      }`}>
        {/* Film Strip Top Border */}
        <div className="film-strip-border-top" />
        
        {/* Main Navigation Container */}
        <div className="relative">
          {/* Darkroom Atmosphere Background */}
          <div className="absolute inset-0 darkroom-atmosphere opacity-95" />
          
          {/* Floating Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-particle aperture-particle" style={{ left: '10%', animationDelay: '0s' }} />
            <div className="floating-particle film-frame-particle" style={{ left: '30%', animationDelay: '2s' }} />
            <div className="floating-particle lens-flare-particle" style={{ left: '60%', animationDelay: '4s' }} />
            <div className="floating-particle aperture-particle" style={{ left: '80%', animationDelay: '6s' }} />
          </div>

          {/* Top Level - Logo and Professional Elements */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Cinematic Logo with Aperture Container */}
              <div className="animate-fade-in-down" style={{ animationDelay: '0ms' }}>
                <CinematicLogo />
              </div>

              {/* Viewfinder HUD Elements */}
              <div className="hidden lg:block animate-fade-in-down" style={{ animationDelay: '400ms' }}>
                <ViewfinderHUD scrollProgress={scrollProgress} />
              </div>

              {/* Professional Mobile Toggle */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="cinematic-toggle-button"
                >
                  <div className="relative">
                    {isOpen ? (
                      <X className="w-5 h-5 animate-aperture-close text-accent" />
                    ) : (
                      <Menu className="w-5 h-5 animate-aperture-open text-foreground" />
                    )}
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Level - Floating Navigation */}
          <div className="relative z-10 pb-2">
            <FloatingNavigation 
              navItems={navItems}
              activeSection={activeSection}
              scrolled={scrolled}
            />
          </div>
        </div>

        {/* Film Strip Bottom Border */}
        <div className="film-strip-border-bottom" />
      </nav>

      {/* Mobile Cinematic Menu */}
      <MobileFilmMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
      />

      {/* Enhanced Scroll Progress */}
      <ScrollProgress />
    </>
  );
};
