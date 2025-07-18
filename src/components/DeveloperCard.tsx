
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface DeveloperCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const DeveloperCard = ({ icon: Icon, title, description, delay = 0 }: DeveloperCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <div 
      className={`developer-card p-6 rounded-lg lens-effect group relative overflow-hidden ${
        isRevealed ? 'animate-developer-reveal' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Light Leak Effect */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${
        isHovered ? 'opacity-100' : ''
      }`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-light-leak" />
      </div>

      {/* Aperture Ring */}
      <div className={`absolute -top-2 -right-2 w-12 h-12 border border-accent/30 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-150 border-accent/60' : 'scale-100'
      }`}>
        <div className="w-6 h-6 border border-accent/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Icon with Aperture Effect */}
      <div className="relative mb-4">
        <div className={`w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'bg-accent/20 scale-110' : ''
        }`}>
          <Icon className={`w-8 h-8 text-accent transition-all duration-500 ${
            isHovered ? 'scale-125' : ''
          }`} />
        </div>
        
        {/* Focus Ring */}
        <div className={`absolute inset-0 border-2 border-transparent rounded-full transition-all duration-500 ${
          isHovered ? 'border-accent/50 scale-125' : ''
        }`} />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h4 className="font-playfair text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-accent">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-300 group-hover:text-foreground">
          {description}
        </p>
      </div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 film-grain opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
    </div>
  );
};
