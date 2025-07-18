
interface KineticTypographyProps {
  isLoaded: boolean;
  entranceComplete: boolean;
}

export const KineticTypography = ({ isLoaded, entranceComplete }: KineticTypographyProps) => {
  return (
    <div className="space-y-4">
      {/* Brand Name with Kinetic Effect */}
      <div className="space-y-2">
        <div className="inline-block">
          <span className={`text-accent font-medium text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full border border-accent/20 ${isLoaded ? 'animate-tag-glow' : 'opacity-0'}`}>
            Creative Photography
          </span>
        </div>
        
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight overflow-hidden">
          <div className={`${isLoaded ? 'animate-word-reveal' : 'opacity-0'}`}>
            <span className="inline-block animate-letter-float-1">D</span>
            <span className="inline-block animate-letter-float-2">a</span>
            <span className="inline-block animate-letter-float-3">r</span>
            <span className="inline-block animate-letter-float-4">k</span>
            <span className="inline-block animate-letter-float-5">r</span>
            <span className="inline-block animate-letter-float-6">o</span>
            <span className="inline-block animate-letter-float-7">o</span>
            <span className="inline-block animate-letter-float-8">m</span>
          </div>
          <div className={`text-accent mt-2 ${isLoaded ? 'animate-word-reveal-delayed' : 'opacity-0'}`}>
            <span className="inline-block animate-letter-float-9">P</span>
            <span className="inline-block animate-letter-float-10">r</span>
            <span className="inline-block animate-letter-float-11">o</span>
            <span className="inline-block animate-letter-float-12">d</span>
            <span className="inline-block animate-letter-float-13">u</span>
            <span className="inline-block animate-letter-float-14">c</span>
            <span className="inline-block animate-letter-float-15">t</span>
            <span className="inline-block animate-letter-float-16">i</span>
            <span className="inline-block animate-letter-float-17">o</span>
            <span className="inline-block animate-letter-float-18">n</span>
          </div>
        </h1>
      </div>

      {/* Animated Subtitle */}
      <div className={`space-y-2 ${entranceComplete ? 'animate-subtitle-reveal' : 'opacity-0'}`}>
        <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent-lighter rounded-full animate-line-expand" />
        <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide animate-text-shimmer">
          Capturing Tomorrow's Memories Today
        </p>
      </div>
    </div>
  );
};
