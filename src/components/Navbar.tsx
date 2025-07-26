
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
    { name: 'Home', href: '#home', icon: 'Home' },
    { name: 'About', href: '#about', icon: 'Users' },
    { name: 'Portfolio', href: '#portfolio', icon: 'Camera' },
    { name: 'Services', href: '#services', icon: 'Briefcase' },
    { name: 'Contact', href: '#contact', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'clean-navbar-scrolled h-16' 
        : 'clean-navbar-top h-24 lg:h-24'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Enhanced Logo with reduced spacing */}
          <div className="flex items-center -my-2">
            <CleanLogo scrolled={scrolled} />
          </div>

          {/* Desktop Navigation - Floating Container */}
          <div className="hidden md:flex items-center">
            <div className="clean-nav-container">
              <CleanNavigation items={navItems} />
            </div>
          </div>

          {/* Desktop Contact with Phone */}
          <div className="hidden lg:block">
            <CleanContact />
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden mobile-menu-container">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="clean-mobile-trigger relative"
            >
              <div className="w-5 h-5 relative flex items-center justify-center">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                }`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden mobile-menu-container transition-all duration-500 ease-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="clean-mobile-menu">
          <div className="space-y-2 p-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`clean-mobile-link block transform transition-all duration-300 ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg font-medium">{item.name}</span>
              </a>
            ))}
            
            {/* Enhanced Mobile Contact Section */}
            <div className={`pt-6 mt-6 border-t border-border/20 transform transition-all duration-300 ${
              isOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
            }`}
            style={{ 
              transitionDelay: isOpen ? `${navItems.length * 100}ms` : '0ms'
            }}>
              <CleanContact mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
