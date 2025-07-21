
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CleanContactProps {
  mobile?: boolean;
}

export const CleanContact = ({ mobile = false }: CleanContactProps) => {
  if (mobile) {
    return (
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
    );
  }

  return (
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
  );
};
