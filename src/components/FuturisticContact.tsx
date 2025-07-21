
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FuturisticContactProps {
  mobile?: boolean;
}

export const FuturisticContact = ({ mobile = false }: FuturisticContactProps) => {
  if (mobile) {
    return (
      <div className="space-y-4">
        <a 
          href="tel:+91" 
          className="futuristic-mobile-contact-item group"
        >
          <div className="futuristic-contact-icon-container">
            <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <span className="futuristic-contact-text">+91 XXX XXX XXXX</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 
                                 group-hover:translate-x-1" />
        </a>
        
        <a 
          href="mailto:hello@darkroomproduction.in"
          className="futuristic-mobile-contact-item group"
        >
          <div className="futuristic-contact-icon-container">
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="futuristic-contact-text">hello@darkroomproduction.in</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 
                                 group-hover:translate-x-1" />
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-6">
      <a 
        href="tel:+91" 
        className="futuristic-desktop-contact group"
      >
        <div className="futuristic-contact-icon-wrapper">
          <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <span className="futuristic-contact-number">+91 XXX XXX XXXX</span>
      </a>
      
      <div className="futuristic-contact-divider" />
      
      <Button 
        asChild
        size="sm"
        className="futuristic-cta-button group"
      >
        <a href="mailto:hello@darkroomproduction.in">
          <span className="relative z-10">Get Quote</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 
                                 group-hover:translate-x-1" />
          <div className="futuristic-button-bg" />
        </a>
      </Button>
    </div>
  );
};
