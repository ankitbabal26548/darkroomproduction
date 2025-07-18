
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  size: 'lg';
}

export const MagneticButton = ({ children, variant, size }: MagneticButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 0, y: 0 });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const buttonStyles = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovering ? 1.05 : 1})`,
    transition: isHovering ? 'none' : 'transform 0.3s ease-out',
  };

  if (variant === 'primary') {
    return (
      <Button
        ref={buttonRef}
        size={size}
        className="group bg-accent hover:bg-accent-darker text-accent-foreground font-medium px-8 py-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl border border-accent-lighter animate-button-glow"
        style={buttonStyles}
      >
        {children}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    );
  }

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size={size}
      className="group border-2 border-accent/30 hover:border-accent hover:bg-accent/10 text-foreground hover:text-accent font-medium px-8 py-6 rounded-xl transition-all duration-300 backdrop-blur-sm"
      style={buttonStyles}
    >
      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
      {children}
    </Button>
  );
};
