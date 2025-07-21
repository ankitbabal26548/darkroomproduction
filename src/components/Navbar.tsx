
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FuturisticLogo } from './FuturisticLogo';
import { FuturisticNavigation } from './FuturisticNavigation';
import { FuturisticContact } from './FuturisticContact';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrolled(scrollY > 20);
      setScrollProgress(Math.min(scrollY / windowHeight, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'futuristic-navbar-scrolled' 
        : 'futuristic-navbar-top'
    }`}>
      {/* Animated background layers */}
      <div className="absolute inset-0 futuristic-bg-layer-1" />
      <div className="absolute inset-0 futuristic-bg-layer-2" 
           style={{ opacity: scrollProgress * 0.3 }} />
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent-lighter to-accent 
                      transition-all duration-300"
           style={{ width: `${scrollProgress * 100}%` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Futuristic Logo */}
          <FuturisticLogo scrolled={scrolled} />

          {/* Desktop Navigation - Floating Container */}
          <div className="hidden md:flex items-center">
            <div className="futuristic-nav-container">
              <FuturisticNavigation items={navItems} />
            </div>
          </div>

          {/* Futuristic Contact */}
          <div className="hidden lg:block">
            <FuturisticContact />
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="futuristic-mobile-trigger"
            >
              <div className={`w-6 h-6 relative transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? (
                  <X className="w-6 h-6 absolute inset-0 animate-scale-in" />
                ) : (
                  <Menu className="w-6 h-6 absolute inset-0 animate-scale-in" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        isOpen 
          ? 'max-h-screen opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'
      }`}>
        <div className="futuristic-mobile-menu">
          <div className="space-y-2 p-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="futuristic-mobile-link"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="futuristic-mobile-link-bg" />
              </a>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-6 mt-6 border-t border-accent/20">
              <FuturisticContact mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
