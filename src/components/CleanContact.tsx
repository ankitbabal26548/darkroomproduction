
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CleanContactProps {
  mobile?: boolean;
}

export const CleanContact = ({ mobile = false }: CleanContactProps) => {
  if (mobile) {
    return (
      <div className="space-y-3">
        <a 
          href="tel:+91" 
          className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors rounded-md"
        >
          <Phone className="w-4 h-4" />
          <span>+91 XXX XXX XXXX</span>
        </a>
        
        <Button 
          asChild
          size="sm"
          className="clean-mobile-cta w-full group"
        >
          <a href="mailto:hello@darkroomproduction.in">
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <a 
        href="tel:+91" 
        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="font-medium">+91 XXX XXX XXXX</span>
      </a>
      
      <div className="w-px h-4 bg-border" />
      
      <Button 
        asChild
        size="sm"
        className="clean-cta-button group"
      >
        <a href="mailto:hello@darkroomproduction.in">
          <span className="relative z-10">Get Quote</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};
