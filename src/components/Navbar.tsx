import { useState } from 'react';
import { Menu, X, Camera, Instagram, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50 spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="aperture-border w-12 h-12 flex items-center justify-center darkroom-glow">
              <Camera className="w-6 h-6 text-accent group-hover:animate-aperture-spin transition-all duration-300" />
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-gradient">Darkroom</h1>
              <p className="text-xs text-muted-foreground -mt-1 tracking-wider">Production</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group magnetic-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@darkroomproduction.in</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent/10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-background border-b border-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Contact */}
          <div className="pt-4 border-t border-border space-y-2">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@darkroomproduction.in</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};