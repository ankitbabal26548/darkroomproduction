import { Phone, Mail } from 'lucide-react';
export const ContactAnimation = () => {
  return <div className="hidden lg:flex items-center space-x-4">
      <a href="tel:+91" className="group flex items-center space-x-3 nav-pill hover:scale-105 spotlight-effect">
        <div className="p-2 rounded-full bg-accent/15 group-hover:bg-accent/25 transition-all duration-300">
          <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300 font-medium tracking-wide">
          +91 XXX XXX XXXX
        </span>
      </a>
      
      
    </div>;
};