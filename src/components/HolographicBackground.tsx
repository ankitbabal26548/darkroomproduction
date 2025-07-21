
import React from 'react';

interface HolographicBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const HolographicBackground = ({ mousePosition }: HolographicBackgroundProps) => {
  return (
    <div className="holographic-background">
      {/* Particle Field */}
      <div className="particle-field">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Connection Lines */}
      <div className="connection-lines">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="connection-line"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Grid */}
      <div className="holographic-grid">
        <div className="grid-lines horizontal">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="grid-line" style={{ top: `${i * 5}%` }} />
          ))}
        </div>
        <div className="grid-lines vertical">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="grid-line" style={{ left: `${i * 5}%` }} />
          ))}
        </div>
      </div>

      {/* Scanning Laser */}
      <div 
        className="scanning-laser"
        style={{
          transform: `translateX(${mousePosition.x}%) translateY(${mousePosition.y}%)`
        }}
      />

      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="energy-wave wave-1" />
        <div className="energy-wave wave-2" />
        <div className="energy-wave wave-3" />
      </div>
    </div>
  );
};
