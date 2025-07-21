
import { useEffect, useState } from 'react';

interface FuturisticBackgroundProps {
  scrollY: number;
}

export const FuturisticBackground = ({ scrollY }: FuturisticBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Advanced Grid Pattern */}
      <div className="absolute inset-0 futuristic-grid-pattern opacity-30">
        <div className="grid-dots"></div>
        <div className="grid-lines-horizontal"></div>
        <div className="grid-lines-vertical"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`floating-particle particle-${i + 1}`}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 6)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Background Gradients */}
      <div 
        className="absolute inset-0 dynamic-bg-gradient"
        style={{
          transform: `translateX(${scrollY * 0.1}px) translateY(${scrollY * 0.05}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(var(--accent), 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>

      {/* Scanning Lines Effect */}
      <div className="scanning-lines"></div>
    </div>
  );
};
