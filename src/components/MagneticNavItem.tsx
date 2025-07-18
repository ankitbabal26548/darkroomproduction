
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
      className="relative px-4 py-3 group transition-all duration-300 ease-out block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 font-playfair font-medium transition-all duration-300 ${
        isActive ? 'text-accent' : 'text-foreground hover:text-accent'
      } ${isHovered ? 'scale-105 tracking-wide' : ''}`}>
        {children}
      </span>
      
      {/* Enhanced animated underline */}
      <div className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-accent to-accent-hover transition-all duration-500 ease-out ${
        isActive || isHovered ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
      } transform -translate-x-1/2`} />
      
      {/* Magnetic hover effect with enhanced styling */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/0 transition-all duration-300 ${
        isHovered ? 'scale-110 opacity-100 border-accent/20 shadow-lg' : 'scale-95 opacity-0'
      }`} />
      
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        isHovered ? 'shadow-lg shadow-accent/10' : ''
      }`} />
    </a>
  );
};
