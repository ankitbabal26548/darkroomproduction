
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'glassmorphism-enhanced py-2' 
        : 'glassmorphism py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Professional Logo */}
          <div className="animate-fade-in-down" style={{ animationDelay: '0ms' }}>
            <ProfessionalLogo />
          </div>

          {/* Desktop Navigation with Enhanced Effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
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

          {/* Enhanced Contact Animation */}
          <div className="animate-fade-in-down" style={{ animationDelay: '800ms' }}>
            <ContactAnimation />
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="nav-pill hover:scale-110 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-5 h-5 animate-in spin-in-180 duration-300 text-accent" />
                ) : (
                  <Menu className="w-5 h-5 animate-in fade-in duration-300 text-foreground" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-6 pb-8 space-y-2 glassmorphism-enhanced mx-4 my-4 rounded-2xl">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-6 py-4 text-foreground hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300 font-medium animate-slide-in-left nav-pill`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Enhanced Mobile Contact */}
          <div className="pt-6 border-t border-accent/20 space-y-3">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-4 px-6 py-4 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300 animate-slide-in-left nav-pill"
              style={{ animationDelay: '300ms' }}
            >
              <div className="p-2 rounded-full bg-accent/10">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium">+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-4 px-6 py-4 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300 animate-slide-in-left nav-pill"
              style={{ animationDelay: '350ms' }}
            >
              <div className="p-2 rounded-full bg-accent/10">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium">hello@darkroomproduction.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Progress Indicator */}
      <ScrollProgress />
    </nav>
  );
};
