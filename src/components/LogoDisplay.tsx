
import { useState, useEffect } from 'react';

export const LogoDisplay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex items-center space-x-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo with Aperture Rings */}
      <div className="relative">
        {/* Outer Aperture Ring */}
        <div 
          className={`absolute inset-0 w-16 h-16 border-2 border-accent rounded-full transition-transform duration-700 ${
            isHovered ? 'rotate-180 scale-110' : 'rotate-0'
          }`}
          style={{
            transform: `rotate(${pulsePhase * 3.6}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`
          }}
        >
          {/* Aperture Blades */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-3 bg-accent"
              style={{
                top: '2px',
                left: '50%',
                transformOrigin: '50% 30px',
                transform: `translateX(-50%) rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>

        {/* Inner Aperture Ring */}
        <div 
          className={`absolute inset-1 w-14 h-14 border border-accent/60 rounded-full transition-transform duration-500 ${
            isHovered ? '-rotate-90 scale-105' : 'rotate-0'
          }`}
        >
          {/* Focus Indicators */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                top: i % 2 === 0 ? '2px' : 'auto',
                bottom: i % 2 === 1 ? '2px' : 'auto',
                left: i < 2 ? '2px' : 'auto',
                right: i >= 2 ? '2px' : 'auto'
              }}
            />
          ))}
        </div>

        {/* Logo Container */}
        <div 
          className={`relative w-16 h-16 flex items-center justify-center bg-background/10 backdrop-blur-sm rounded-full transition-all duration-300 ${
            isHovered ? 'shadow-2xl' : ''
          }`}
          style={{
            boxShadow: isHovered ? `0 0 30px hsl(var(--accent) / 0.4)` : 'none'
          }}
        >
          <img 
            src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
            alt="Darkroom Production Logo" 
            className={`w-10 h-10 object-contain transition-all duration-300 ${
              isHovered ? 'scale-110 brightness-110' : ''
            }`}
          />
          
          {/* Lens Flare Effect */}
          <div 
            className={`absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent rounded-full transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Glow Effect */}
        <div 
          className="absolute inset-0 w-16 h-16 rounded-full transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent) / ${0.1 + Math.sin(pulsePhase * 0.1) * 0.05}) 0%, transparent 70%)`,
            opacity: 0.6 + Math.sin(pulsePhase * 0.05) * 0.4
          }}
        />
      </div>

      {/* Brand Text with Typography Effects */}
      <div className="flex flex-col">
        <h1 className="font-playfair text-xl font-bold tracking-wider relative">
          <span className="relative z-10">Darkroom</span>
          {/* Film Strip Decoration */}
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-accent/20 to-transparent" />
        </h1>
        <p className="text-xs text-muted-foreground -mt-1 font-inter tracking-widest uppercase relative">
          Production
          {/* Viewfinder Grid */}
          <div className={`absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-30' : ''
          }`}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-accent/20" />
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};
