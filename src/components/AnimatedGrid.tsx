
export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      {/* Dynamic Grid System */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-shift" />
      
      {/* Glowing Grid Lines */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-line-glow"
            style={{
              left: `${(i + 1) * 12.5}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-line-glow"
            style={{
              top: `${(i + 1) * 16.66}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Intersection Points */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`point-${i}`}
          className="absolute w-2 h-2 bg-accent/30 rounded-full animate-point-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};
