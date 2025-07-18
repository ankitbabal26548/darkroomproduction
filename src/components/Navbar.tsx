
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
// @ts-ignore
import darkroomLogo from '@/assets/darkroom-logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 via-background/90 to-background/85 backdrop-blur-lg border-b border-accent/20">
      {/* Floating Film Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="film-particles"></div>
        <div 
          className="lens-flare"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
        ></div>
      </div>

      {/* Aperture Pattern Background */}
      <div className="absolute inset-0 aperture-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className="nav-item text-foreground hover:text-accent transition-all duration-500 font-medium relative group"
                >
                  {item.name}
                  <div className="film-strip-hover"></div>
                </a>
                {index < leftNavItems.length - 1 && (
                  <div className="film-separator ml-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center flex-shrink-0 mx-8">
            <div className="logo-container group">
              <div className="aperture-ring"></div>
              <div className="logo-wrapper">
                <img 
                  src={darkroomLogo} 
                  alt="Darkroom Production" 
                  className="w-16 h-16 object-contain darkroom-glow transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="film-grain-overlay"></div>
              </div>
              <div className="lens-flare-ring"></div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {rightNavItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {index > 0 && (
                  <div className="film-separator mr-8"></div>
                )}
                <a
                  href={item.href}
                  className="nav-item text-foreground hover:text-accent transition-all duration-500 font-medium relative group"
                >
                  {item.name}
                  <div className="film-strip-hover"></div>
                </a>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 ml-8">
            <div className="camera-label">
              <a 
                href="tel:+91" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91 XXX XXX XXXX</span>
              </a>
            </div>
            <div className="camera-label">
              <a 
                href="mailto:hello@darkroomproduction.in"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>hello@darkroomproduction.in</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="aperture-menu-button hover:bg-accent/10 transition-all duration-300"
            >
              <div className={`aperture-hamburger ${isOpen ? 'open' : ''}`}>
                {!isOpen ? (
                  <Menu className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Film Roll Style */}
      <div 
        className={`lg:hidden transition-all duration-500 overflow-hidden film-roll-menu ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-background to-background/95 border-b border-accent/10">
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 film-strip-mobile"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Contact */}
          <div className="pt-4 border-t border-accent/20 space-y-3">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors camera-label-mobile"
            >
              <Phone className="w-4 h-4" />
              <span>+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors camera-label-mobile"
            >
              <Mail className="w-4 h-4" />
              <span>hello@darkroomproduction.in</span>
            </a>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 px-4 pt-2">
              <a href="#" className="film-canister-social">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="film-canister-social">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="film-canister-social">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
