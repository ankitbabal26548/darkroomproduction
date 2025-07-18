
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
      className="relative px-4 py-2 group transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 font-medium transition-all duration-300 ${
        isActive ? 'text-accent' : 'text-foreground hover:text-accent'
      } ${isHovered ? 'scale-105' : ''}`}>
        {children}
      </span>
      
      {/* Animated underline */}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
        isActive || isHovered ? 'w-full' : 'w-0'
      }`} />
      
      {/* Magnetic hover effect */}
      <div className={`absolute inset-0 rounded-lg bg-accent/5 transition-all duration-300 ${
        isHovered ? 'scale-110 opacity-100' : 'scale-95 opacity-0'
      }`} />
    </a>
  );
};
