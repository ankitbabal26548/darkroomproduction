
import { useState, useEffect } from 'react';

interface LogoDisplayProps {
  className?: string;
}

export const LogoDisplay = ({ className = "" }: LogoDisplayProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const logoUrl = "https://i.ibb.co/MDCLRNBK/drm-02.png";

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = logoUrl;
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Aperture Rings */}
      <div className="absolute inset-0 animate-aperture-slow">
        <div className="w-full h-full rounded-full border-2 border-accent/30"></div>
      </div>
      <div className="absolute inset-2 animate-aperture-reverse">
        <div className="w-full h-full rounded-full border border-accent/20"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {logoLoaded ? (
          <img 
            src={logoUrl} 
            alt="Darkroom Production Logo" 
            className="w-20 h-20 object-contain filter brightness-110 contrast-125"
          />
        ) : (
          <div className="w-20 h-20 bg-foreground/20 rounded animate-pulse"></div>
        )}
      </div>

      {/* Lens Flare Effect */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};
