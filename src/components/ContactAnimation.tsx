
import { Phone, Mail } from 'lucide-react';

export const ContactAnimation = () => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <a 
        href="tel:+91" 
        className="group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:scale-105"
      >
        <div className="p-1.5 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
          <Phone className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300 font-medium">
          +91 XXX XXX XXXX
        </span>
      </a>
      
      <a 
        href="mailto:hello@darkroomproduction.in"
        className="group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:scale-105"
      >
        <div className="p-1.5 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
          <Mail className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300 font-medium">
          hello@darkroomproduction.in
        </span>
      </a>
    </div>
  );
};
