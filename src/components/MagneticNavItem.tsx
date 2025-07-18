
import { useState } from 'react';

interface MagneticNavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const MagneticNavItem = ({ href, children, isActive = false }: MagneticNavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative group transition-all duration-300 ease-out spotlight-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`nav-pill ${isActive ? 'border-accent bg-accent/10' : ''} ${
        isHovered ? 'scale-105 shadow-professional' : ''
      }`}>
        <span className={`relative z-10 font-medium text-sm tracking-wide transition-all duration-300 ${
          isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
        }`}>
          {children}
        </span>
        
        {/* Enhanced active indicator */}
        {isActive && (
          <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-10 animate-glow-pulse" />
        )}
      </div>
      
      {/* Magnetic hover effect enhancement */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-110' : 'scale-95'
      }`}>
        <div className={`w-full h-full rounded-full bg-accent/5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
    </a>
  );
};
