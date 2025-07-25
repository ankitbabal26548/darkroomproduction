
import { useState, useEffect } from 'react';
import { ChevronUp, Camera } from 'lucide-react';

export const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Progress Ring */}
        <div className="absolute inset-0 w-14 h-14">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              opacity="0.2"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300"
            />
          </svg>
        </div>

        {/* Main Button */}
        <div className="relative w-14 h-14 bg-primary/90 backdrop-blur-md rounded-full shadow-lg border border-accent/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          {/* Camera Aperture Effect */}
          <div className="absolute inset-2 rounded-full border-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300" />
          
          {/* Icon */}
          <div className="relative z-10">
            <ChevronUp className="w-6 h-6 text-accent group-hover:text-accent-lighter transition-colors duration-300" />
          </div>
          
          {/* Floating Camera Icon */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-gentle-bounce">
            <Camera className="w-2 h-2 text-accent-foreground" />
          </div>
        </div>
      </div>
    </button>
  );
};
