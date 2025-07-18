
import { useState, useEffect } from 'react';

export const ParallaxBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Lens Flare */}
      <div 
        className="absolute w-96 h-96 opacity-20 transition-all duration-1000"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`,
          background: `radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, hsl(var(--accent) / 0.2) 20%, transparent 70%)`,
        }}
      />

      {/* Floating Darkroom Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-accent/20 rounded-full animate-pulse"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 3) * 30}%`,
            width: `${2 + Math.sin(i) * 2}px`,
            height: `${2 + Math.sin(i) * 2}px`,
            transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.3}s`,
          }}
        />
      ))}

      {/* Film Grain Texture */}
      <div 
        className="absolute inset-0 opacity-10 film-grain"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      {/* Light Leaks */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-30"
        style={{
          background: `linear-gradient(45deg, transparent 60%, hsl(var(--accent) / 0.3) 80%, hsl(var(--accent) / 0.1) 100%)`,
          transform: `translateX(${mousePos.x * 0.1}px) rotate(${scrollY * 0.05}deg)`,
        }}
      />
    </div>
  );
};
