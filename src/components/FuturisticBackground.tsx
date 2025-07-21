
import { useEffect, useState } from 'react';

export const FuturisticBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="futuristic-grid" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="floating-particle particle-1" />
        <div className="floating-particle particle-2" />
        <div className="floating-particle particle-3" />
        <div className="floating-particle particle-4" />
        <div className="floating-particle particle-5" />
        <div className="floating-particle particle-6" />
      </div>

      {/* Dynamic Gradients */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            hsl(var(--accent) / 0.1) 0%, 
            transparent 50%)`
        }}
      />

      {/* Holographic Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full holographic-overlay opacity-20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 holographic-overlay-2 opacity-15" />

      {/* 3D Depth Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 depth-element opacity-10" />
      <div className="absolute bottom-1/3 left-1/6 w-24 h-24 depth-element-2 opacity-10" />
    </div>
  );
};
