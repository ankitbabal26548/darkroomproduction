
interface FuturisticBackgroundProps {
  currentSlide: number;
}

export const FuturisticBackground = ({ currentSlide }: FuturisticBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large rotating circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-accent/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 border border-accent/5 rounded-full animate-spin-reverse" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-accent/5 rotate-45 animate-float-1" />
        <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-accent/3 rounded-full animate-float-2" />
        <div className="absolute top-1/3 right-1/6 w-16 h-16 border border-accent/10 animate-float-3" />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className={`absolute inset-0 transition-all duration-2000 ${
        currentSlide === 0 
          ? 'bg-gradient-mesh-1' 
          : 'bg-gradient-mesh-2'
      }`} />

      {/* Animated Light Rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent animate-light-sweep" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-accent/5 via-transparent to-transparent animate-light-pulse" />
      </div>
    </div>
  );
};
