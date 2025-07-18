
import { useState, useEffect } from 'react';

export const FilmStripEffects = () => {
  const [filmPosition, setFilmPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilmPosition(prev => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top Film Strip */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20">
        <div className="flex h-full">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-6 h-full bg-accent/40 border-r border-background flex items-center justify-center"
              style={{
                transform: `translateX(${-filmPosition}px)`,
              }}
            >
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Film Strip */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20">
        <div className="flex h-full">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-6 h-full bg-accent/40 border-r border-background flex items-center justify-center"
              style={{
                transform: `translateX(${filmPosition}px)`,
              }}
            >
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Film Sprocket Holes */}
      <div className="absolute left-0 top-0 w-4 h-full bg-accent/20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-3 bg-background rounded-sm"
            style={{
              top: `${i * 5}%`,
              left: '1px',
            }}
          />
        ))}
      </div>

      <div className="absolute right-0 top-0 w-4 h-full bg-accent/20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-3 bg-background rounded-sm"
            style={{
              top: `${i * 5}%`,
              right: '1px',
            }}
          />
        ))}
      </div>
    </div>
  );
};
