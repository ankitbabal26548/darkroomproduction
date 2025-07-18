
import { useState } from 'react';

export const CinematicLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center space-x-4 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Aperture-Inspired Logo Container */}
      <div className="relative">
        {/* Professional Glow Effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isHovered ? 'animate-professional-glow' : ''
        }`} />
        
        {/* Main Aperture Container */}
        <div className="aperture-logo-container">
          {/* Aperture Blades Animation */}
          <div className={`aperture-blades ${isHovered ? 'aperture-open' : 'aperture-closed'}`}>
            <div className="aperture-blade aperture-blade-1" />
            <div className="aperture-blade aperture-blade-2" />
            <div className="aperture-blade aperture-blade-3" />
            <div className="aperture-blade aperture-blade-4" />
            <div className="aperture-blade aperture-blade-5" />
            <div className="aperture-blade aperture-blade-6" />
          </div>
          
          {/* Logo Image */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden z-10">
            <img 
              src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
              alt="Darkroom Production"
              className={`w-full h-full object-contain transition-all duration-700 ${
                isHovered ? 'scale-110 rotate-12' : 'scale-100'
              }`}
            />
            
            {/* Lens Flare Overlay */}
            <div className={`absolute inset-0 lens-flare-overlay transition-opacity duration-500 ${
              isHovered ? 'opacity-30' : 'opacity-0'
            }`} />
          </div>
        </div>
      </div>
      
      {/* Professional Typography */}
      <div className="hidden sm:block">
        <h1 className={`font-playfair text-3xl font-bold transition-all duration-500 ${
          isHovered ? 'text-accent cinematic-text-glow' : 'text-foreground'
        }`}>
          Darkroom
        </h1>
        <div className="flex items-center space-x-2 -mt-1">
          <p className="text-xs text-muted-foreground font-medium tracking-[0.2em] uppercase">
            Production
          </p>
          <div className="flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
