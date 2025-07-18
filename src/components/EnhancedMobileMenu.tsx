
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  navItems: Array<{ name: string; href: string }>;
  onItemClick: () => void;
}

export const EnhancedMobileMenu = ({ navItems, onItemClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick();
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 hover:bg-accent/10 transition-all duration-300 group"
      >
        <div className="relative w-6 h-6">
          {isOpen ? (
            <X className="w-6 h-6 animate-in spin-in-180 duration-300 text-accent" />
          ) : (
            <Menu className="w-6 h-6 animate-in fade-in duration-300 group-hover:text-accent transition-colors" />
          )}
        </div>
      </Button>

      {/* Full-Screen Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleItemClick}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Centered Logo in Mobile Menu */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="logo-frame logo-breathing">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted border border-accent/20">
                <img 
                  src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
                  alt="Darkroom Production Logo"
                  className="w-full h-full object-contain p-3"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1 className="font-playfair text-2xl font-bold text-foreground">
                Darkroom
              </h1>
              <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                Production
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-4 text-center">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-8 py-4 text-xl font-playfair font-medium text-foreground hover:text-accent transition-all duration-300 animate-fade-in-up hover:scale-105`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
                onClick={handleItemClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Contact */}
          <div className="pt-8 space-y-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <a 
              href="tel:+91" 
              className="flex items-center justify-center space-x-3 px-6 py-3 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center justify-center space-x-3 px-6 py-3 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@darkroomproduction.in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
