
interface FuturisticLogoProps {
  className?: string;
}

export const FuturisticLogo = ({ className = "" }: FuturisticLogoProps) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="flex items-center space-x-3">
        {/* Enhanced logo container with futuristic effects */}
        <div className="relative">
          {/* Animated glow ring */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-110 animate-pulse" />
          
          {/* Main logo container */}
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 via-background to-accent/5 border border-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:scale-105">
            <img 
              src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
              alt="Darkroom Production Logo"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        {/* Enhanced brand text */}
        <div className="hidden sm:block">
          <h1 className="font-playfair text-xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent group-hover:from-accent group-hover:via-foreground group-hover:to-accent transition-all duration-500">
            Darkroom
          </h1>
          <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase -mt-0.5 group-hover:text-accent/70 transition-colors duration-300">
            Production
          </p>
        </div>
      </div>
    </div>
  );
};
