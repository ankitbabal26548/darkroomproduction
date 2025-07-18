
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfessionalContactProps {
  mobile?: boolean;
}

export const ProfessionalContact = ({ mobile = false }: ProfessionalContactProps) => {
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
        <a 
          href="mailto:hello@darkroomproduction.in"
          className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors rounded-md"
        >
          <Mail className="w-4 h-4" />
          <span>hello@darkroomproduction.in</span>
        </a>
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
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
      >
        <a href="mailto:hello@darkroomproduction.in">
          Get Quote
        </a>
      </Button>
    </div>
  );
};
