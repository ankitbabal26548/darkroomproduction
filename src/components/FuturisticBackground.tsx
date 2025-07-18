
interface FuturisticBackgroundProps {
  isLoaded: boolean;
}

export const FuturisticBackground = ({ isLoaded }: FuturisticBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Mesh Gradients */}
      <div className={`absolute inset-0 opacity-30 ${isLoaded ? 'animate-mesh-flow' : ''}`}>
        <div className="absolute inset-0 bg-gradient-mesh-1 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-mesh-2 animate-gradient-shift-delayed" />
        <div className="absolute inset-0 bg-gradient-mesh-3 animate-gradient-shift-reverse" />
      </div>

      {/* Geometric Grid System */}
      <div className={`absolute inset-0 opacity-10 ${isLoaded ? 'animate-grid-pulse' : ''}`}>
        <div className="grid-pattern-futuristic" />
      </div>

      {/* Digital Noise Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="digital-noise-pattern animate-noise-drift" />
      </div>

      {/* Neon Accent Lines */}
      <div className={`absolute inset-0 ${isLoaded ? 'animate-neon-glow' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </div>
    </div>
  );
};
