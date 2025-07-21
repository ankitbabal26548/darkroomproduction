
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CleanLogo } from './CleanLogo';
import { CleanNavigation } from './CleanNavigation';
import { CleanContact } from './CleanContact';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'clean-navbar-scrolled' 
        : 'clean-navbar-top'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Clean Logo - Logo Only */}
          <CleanLogo />

          {/* Desktop Navigation - Floating Container */}
          <div className="hidden md:flex items-center">
            <div className="clean-nav-container">
              <CleanNavigation items={navItems} />
            </div>
          </div>

          {/* Clean Contact */}
          <div className="hidden lg:block">
            <CleanContact />
          </div>

          {/* Clean Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="clean-mobile-trigger"
            >
              <div className={`w-5 h-5 relative transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? (
                  <X className="w-5 h-5 absolute inset-0" />
                ) : (
                  <Menu className="w-5 h-5 absolute inset-0" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="clean-mobile-menu">
          <div className="space-y-1 p-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="clean-mobile-link"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 mt-4 border-t border-border/30">
              <CleanContact mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
