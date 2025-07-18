
import { X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileFilmMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ name: string; href: string }>;
}

export const MobileFilmMenu = ({ isOpen, onClose, navItems }: MobileFilmMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Cinematic Backdrop */}
      <div className="absolute inset-0 cinematic-backdrop" onClick={onClose} />
      
      {/* Film Strip Menu Container */}
      <div className={`film-strip-menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        {/* Film Strip Header */}
        <div className="film-strip-header">
          <div className="sprocket-holes-top">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="sprocket-hole" />
            ))}
          </div>
          
          <div className="flex justify-between items-center p-6">
            <h2 className="text-2xl font-playfair font-bold text-accent cinematic-text-glow">
              Navigation
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="cinematic-close-button"
            >
              <X className="w-6 h-6 text-accent" />
            </Button>
          </div>
        </div>

        {/* Film Frames Navigation */}
        <div className="film-frames-container">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="film-frame animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={item.href}
                className="film-frame-link"
                onClick={onClose}
              >
                <div className="frame-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="frame-content">
                  <span className="frame-title">{item.name}</span>
                  <div className="frame-underline" />
                </div>
                <div className="frame-sprockets">
                  <div className="sprocket" />
                  <div className="sprocket" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Film Strip */}
        <div className="contact-film-strip">
          <div className="sprocket-holes-bottom">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="sprocket-hole" />
            ))}
          </div>
          
          <div className="contact-frames">
            <a 
              href="tel:+91" 
              className="contact-frame phone-frame"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>Call Now</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="contact-frame email-frame"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
