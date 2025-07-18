
interface CenteredLogoProps {
  className?: string;
}

export const CenteredLogo = ({ className = "" }: CenteredLogoProps) => {
  return (
    <div className={`flex flex-col items-center group ${className}`}>
      {/* Large centered logo with enhanced styling */}
      <div className="logo-frame logo-breathing hover:animate-glow-pulse transition-all duration-500 group-hover:scale-105">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
          <img 
            src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
            alt="Darkroom Production Logo"
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Animated border overlay */}
          <div className="absolute inset-0 rounded-xl border-2 border-accent/0 group-hover:border-accent/30 transition-all duration-300" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      {/* Brand text with enhanced typography */}
      <div className="mt-3 text-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="font-playfair text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-wide">
          Darkroom
        </h1>
        <p className="text-xs text-muted-foreground -mt-0.5 font-medium tracking-widest uppercase">
          Production
        </p>
      </div>
    </div>
  );
};
