
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfessionalLogo } from './ProfessionalLogo';
import { MagneticNavItem } from './MagneticNavItem';
import { ContactAnimation } from './ContactAnimation';
import { ScrollProgress } from './ScrollProgress';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Professional Logo */}
          <ProfessionalLogo />

          {/* Desktop Navigation with Magnetic Effects */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MagneticNavItem 
                  href={item.href}
                  isActive={activeSection === item.href.slice(1)}
                >
                  {item.name}
                </MagneticNavItem>
              </div>
            ))}
          </div>

          {/* Contact Animation */}
          <ContactAnimation />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent/10 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-5 h-5 animate-in spin-in-180 duration-300" />
                ) : (
                  <Menu className="w-5 h-5 animate-in fade-in duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Slide Animation */}
      <div 
        className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-xl border-b border-border/50">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium animate-slide-in-left`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Contact */}
          <div className="pt-4 border-t border-border/30 space-y-2">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-3 px-4 py-3 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: '300ms' }}
            >
              <Phone className="w-4 h-4" />
              <span>+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-3 px-4 py-3 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: '350ms' }}
            >
              <Mail className="w-4 h-4" />
              <span>hello@darkroomproduction.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </nav>
  );
};
