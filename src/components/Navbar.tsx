
import { useState, useEffect } from 'react';
import { CenteredLogo } from './CenteredLogo';
import { SplitNavigation } from './SplitNavigation';
import { ContactAnimation } from './ContactAnimation';
import { ScrollProgress } from './ScrollProgress';
import { EnhancedMobileMenu } from './EnhancedMobileMenu';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Split navigation items
  const leftNavItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const rightNavItems = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

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
        ? 'bg-background/90 backdrop-blur-2xl border-b border-accent/20 shadow-2xl py-2' 
        : 'bg-background/70 backdrop-blur-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Navigation Group */}
          <SplitNavigation 
            leftItems={leftNavItems}
            rightItems={[]}
            activeSection={activeSection}
          />

          {/* Centered Large Logo */}
          <div className={`transition-all duration-700 ${
            scrolled ? 'scale-75' : 'scale-100'
          }`}>
            <CenteredLogo />
          </div>

          {/* Right Navigation Group */}
          <SplitNavigation 
            leftItems={[]}
            rightItems={rightNavItems}
            activeSection={activeSection}
          />

          {/* Enhanced Mobile Menu */}
          <EnhancedMobileMenu 
            navItems={allNavItems}
            onItemClick={() => {}}
          />
        </div>

        {/* Desktop Contact Animation - Positioned Below */}
        <div className="hidden xl:flex justify-center mt-2">
          <ContactAnimation />
        </div>
      </div>

      {/* Enhanced Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transition-all duration-300 ease-out">
        <ScrollProgress />
      </div>
    </nav>
  );
};
