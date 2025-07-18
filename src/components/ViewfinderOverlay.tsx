
import { useState, useEffect } from 'react';
import { Focus, Grid } from 'lucide-react';

export const ViewfinderOverlay = () => {
  const [isActive, setIsActive] = useState(false);
  const [focusPoint, setFocusPoint] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setFocusPoint({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      {/* Viewfinder Grid */}
      <div className="absolute inset-8 border border-accent/30">
        {/* Rule of thirds grid */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-accent/20" />
          ))}
        </div>
        
        {/* Center focus point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border border-accent rounded-full animate-pulse-glow" />
        </div>

        {/* Corner markers */}
        {[
          { top: '10px', left: '10px' },
          { top: '10px', right: '10px' },
          { bottom: '10px', left: '10px' },
          { bottom: '10px', right: '10px' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 border-2 border-accent"
            style={{
              ...pos,
              borderRadius: i % 2 === 0 ? '0 0 8px 0' : '0 0 0 8px',
            }}
          />
        ))}
      </div>

      {/* Dynamic Focus Ring */}
      <div
        className="absolute w-16 h-16 border-2 border-accent rounded-full transition-all duration-300 animate-lens-focus pointer-events-none"
        style={{
          left: `${focusPoint.x}%`,
          top: `${focusPoint.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Focus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
      </div>

      {/* Camera Settings HUD */}
      <div className="absolute top-8 left-8 space-y-2 text-accent font-mono text-sm">
        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
          <span>ISO 400</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
          <span>f/2.8</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
          <span>1/125s</span>
        </div>
      </div>

      {/* Frame Counter */}
      <div className="absolute top-8 right-8">
        <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded font-mono text-accent">
          <Grid className="inline w-4 h-4 mr-2" />
          <span>FRAME 01</span>
        </div>
      </div>
    </div>
  );
};
