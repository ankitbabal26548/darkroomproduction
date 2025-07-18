
import { useState, useEffect } from 'react';

export const FilmStripBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Initialize particles
    const initialParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2
    }));
    setParticles(initialParticles);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const moveParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speed) % 100
      })));
    };

    const interval = setInterval(moveParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Film Strip Perforations */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top film strip */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10">
          {[...Array(20)].map((_, i) => (
            <div
              key={`top-${i}`}
              className="absolute top-0 w-3 h-2 bg-accent/30"
              style={{
                left: `${i * 5}%`,
                transform: `translateX(${scrollY * 0.1}px)`
              }}
            >
              <div className="w-1 h-1 bg-background rounded-full mx-auto mt-0.5" />
            </div>
          ))}
        </div>

        {/* Bottom film strip */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10">
          {[...Array(20)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="absolute bottom-0 w-3 h-2 bg-accent/30"
              style={{
                left: `${i * 5}%`,
                transform: `translateX(${-scrollY * 0.05}px)`
              }}
            >
              <div className="w-1 h-1 bg-background rounded-full mx-auto mb-0.5" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-accent/20 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.id * 0.5}s`
          }}
        />
      ))}

      {/* Lens Flare Effect */}
      <div 
        className="absolute top-1/2 opacity-20 transition-opacity duration-1000 hover:opacity-40"
        style={{
          left: `${20 + scrollY * 0.02}%`,
          transform: 'translateY(-50%)',
          background: 'linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)',
          width: '200px',
          height: '2px'
        }}
      />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, hsl(var(--background) / 0.1) 100%)'
        }}
      />
    </div>
  );
};
