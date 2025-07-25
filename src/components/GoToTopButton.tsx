
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 
        w-14 h-14 
        bg-gradient-to-br from-accent to-accent-darker
        hover:from-accent-lighter hover:to-accent
        text-white
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        flex items-center justify-center
        group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Go to top"
    >
      <div className="relative">
        <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
      </div>
    </button>
  );
};
