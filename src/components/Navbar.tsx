
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/98 via-background/95 to-background/90 backdrop-blur-xl border-b border-accent/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      {/* Enhanced Floating Film Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="film-particles"></div>
        <div className="film-particles opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="film-particles opacity-40" style={{ animationDelay: '2s' }}></div>
        
        {/* Dynamic Lens Flare Following Mouse */}
        <div 
          className="lens-flare opacity-70"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            filter: 'blur(1px)',
          }}
        ></div>
        <div 
          className="lens-flare opacity-40"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
            animationDelay: '0.3s',
          }}
        ></div>
        
        {/* Floating Light Orbs */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-accent/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Aperture Pattern Background */}
      <div className="absolute inset-0 aperture-pattern opacity-8"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">{/* Increased height */}
          
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

          {/* Enhanced Center Logo */}
          <div className="flex items-center justify-center flex-shrink-0 mx-8 relative">
            <div className="logo-container group relative">
              {/* Outer Ring Effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ width: '120px', height: '120px', left: '-10px', top: '-10px' }}></div>
              
              {/* Enhanced Aperture Ring */}
              <div className="aperture-ring scale-125"></div>
              <div className="aperture-ring scale-110 opacity-60 animate-pulse"></div>
              
              {/* Logo Wrapper with Enhanced Effects */}
              <div className="logo-wrapper relative z-10">
                <img 
                  src={darkroomLogo} 
                  alt="Darkroom Production" 
                  className="w-24 h-24 object-contain darkroom-glow transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 drop-shadow-2xl"
                />
                <div className="film-grain-overlay opacity-30"></div>
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-transparent via-accent/40 to-transparent animate-spin-slow"></div>
              </div>
              
              {/* Enhanced Lens Flare Ring */}
              <div className="lens-flare-ring opacity-80"></div>
              <div className="lens-flare-ring scale-125 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Floating Particles Around Logo */}
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-accent rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -top-1 -right-3 w-0.5 h-0.5 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-1 w-1 h-1 bg-accent/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-1 -left-3 w-0.5 h-0.5 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
