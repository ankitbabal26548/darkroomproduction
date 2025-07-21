
import { useEffect, useRef } from 'react';

interface ScanningBeamProps {
  mousePosition: { x: number; y: number };
}

export const ScanningBeam = ({ mousePosition }: ScanningBeamProps) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (beamRef.current && trailRef.current) {
      const beam = beamRef.current;
      const trail = trailRef.current;
      
      beam.style.left = `${mousePosition.x}px`;
      beam.style.top = `${mousePosition.y}px`;
      
      trail.style.left = `${mousePosition.x}px`;
      trail.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  return (
    <>
      {/* Main Scanning Beam */}
      <div
        ref={beamRef}
        className="scanning-beam fixed pointer-events-none z-30"
        style={{
          width: '2px',
          height: '100vh',
          background: 'linear-gradient(to bottom, transparent, hsl(var(--accent)) 50%, transparent)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Horizontal Beam */}
      <div
        ref={trailRef}
        className="scanning-beam-horizontal fixed pointer-events-none z-30"
        style={{
          width: '100vw',
          height: '2px',
          background: 'linear-gradient(to right, transparent, hsl(var(--accent)) 50%, transparent)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.2,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Crosshair Center */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-6 h-6 border-2 border-accent/50 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-6 h-6 border border-accent/30 rounded-full animate-ping" />
      </div>
    </>
  );
};
