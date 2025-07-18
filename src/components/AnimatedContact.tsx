
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AnimatedContactProps {
  mobile?: boolean;
}

export const AnimatedContact = ({ mobile = false }: AnimatedContactProps) => {
  if (mobile) {
    return (
      <div className="space-y-4">
        <a 
          href="tel:+91" 
          className="group flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
        >
          <div className="p-2 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
            <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">+91 XXX XXX XXXX</span>
        </a>
        
        <a 
          href="mailto:hello@darkroomproduction.in"
          className="group flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
        >
          <div className="p-2 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
            <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">Get Quote</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <a 
        href="tel:+91" 
        className="group flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
      >
        <div className="p-1.5 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
          <Phone className="w-3 h-3 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span className="text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">+91 XXX XXX XXXX</span>
      </a>
      
      <div className="w-px h-4 bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <Button 
        asChild
        size="sm"
        className="group relative overflow-hidden bg-gradient-to-r from-accent via-accent-lighter to-accent hover:from-accent-darker hover:via-accent hover:to-accent-darker text-accent-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
      >
        <a href="mailto:hello@darkroomproduction.in" className="flex items-center space-x-2">
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          <span>Get Quote</span>
          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </a>
      </Button>
    </div>
  );
};
