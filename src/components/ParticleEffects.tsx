
export const ParticleEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Film Dust Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Light Streaks */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Film Strip Perforations */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/20 border-r border-accent/30">
        {[...Array(12)].map((_, i) => (
          <div
            key={`perf-left-${i}`}
            className="w-4 h-4 bg-black/40 rounded-full absolute left-2"
            style={{ top: `${8 + i * 8}%` }}
          />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-black/20 border-l border-accent/30">
        {[...Array(12)].map((_, i) => (
          <div
            key={`perf-right-${i}`}
            className="w-4 h-4 bg-black/40 rounded-full absolute right-2"
            style={{ top: `${8 + i * 8}%` }}
          />
        ))}
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
    </div>
  );
};
