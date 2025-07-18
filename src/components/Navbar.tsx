
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FuturisticLogo } from './FuturisticLogo';
import { ModernNavigation } from './ModernNavigation';
import { AnimatedContact } from './AnimatedContact';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-accent/20' 
        : 'bg-background/60 backdrop-blur-md'
    }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Futuristic Logo */}
          <FuturisticLogo />

          {/* Desktop Modern Navigation */}
          <div className="hidden md:flex items-center">
            <ModernNavigation items={navItems} />
          </div>

          {/* Animated Contact */}
          <div className="hidden lg:block">
            <AnimatedContact />
          </div>

          {/* Futuristic Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative group rounded-xl border border-accent/20 hover:border-accent/40 bg-gradient-to-r from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isOpen ? (
                <X className="w-5 h-5 text-accent relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative px-4 py-6 bg-background/95 backdrop-blur-xl border-t border-accent/20">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-accent/10 to-accent/5" />
          
          <div className="relative space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block group"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 group-hover:border-accent/40 group-hover:from-accent/10 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-105">
                  <span className="text-foreground group-hover:text-accent transition-colors duration-300 font-medium">
                    {item.name}
                  </span>
                </div>
              </a>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 mt-4 border-t border-accent/20">
              <AnimatedContact mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
