
import { useState, useEffect } from 'react';

interface ApertureAnimationProps {
  isTransitioning: boolean;
  currentSlide: number;
}

export const ApertureAnimation = ({ isTransitioning, currentSlide }: ApertureAnimationProps) => {
  const [apertureSize, setApertureSize] = useState(100);

  useEffect(() => {
    if (isTransitioning) {
      setApertureSize(0);
      const timer = setTimeout(() => {
        setApertureSize(100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Aperture Blades */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600"
        style={{
          width: `${apertureSize}vw`,
          height: `${apertureSize}vh`,
          clipPath: `polygon(
            ${50 - apertureSize/8}% ${50 - apertureSize/8}%,
            ${50 + apertureSize/8}% ${50 - apertureSize/8}%,
            ${50 + apertureSize/8}% ${50 + apertureSize/8}%,
            ${50 - apertureSize/8}% ${50 + apertureSize/8}%
          )`,
        }}
      >
        {/* Aperture blade shadows */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      {/* Outer Aperture Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-accent/30 rounded-full animate-aperture-spin">
        {/* Aperture markings */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-accent/50"
            style={{
              top: '4px',
              left: '50%',
              transformOrigin: '50% 192px',
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* f-stop indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-accent font-mono">
          f/{2.8 + currentSlide * 0.5}
        </div>
      </div>
    </div>
  );
};
