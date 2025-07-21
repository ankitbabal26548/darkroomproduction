
import React from 'react';

interface ScanningBeamProps {
  mousePosition: { x: number; y: number };
}

export const ScanningBeam = ({ mousePosition }: ScanningBeamProps) => {
  return (
    <div className="scanning-beam-container">
      {/* Main Scanning Beam */}
      <div 
        className="scanning-beam"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      >
        <div className="beam-core"></div>
        <div className="beam-glow"></div>
      </div>

      {/* Crosshair Targeting System */}
      <div 
        className="targeting-system"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      >
        <div className="crosshair horizontal"></div>
        <div className="crosshair vertical"></div>
        <div className="target-ring"></div>
        <div className="target-dot"></div>
      </div>

      {/* Energy Trails */}
      <div className="energy-trails">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="energy-trail"
            style={{
              left: `${mousePosition.x + (Math.sin(Date.now() * 0.001 + i) * 20)}%`,
              top: `${mousePosition.y + (Math.cos(Date.now() * 0.001 + i) * 20)}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
