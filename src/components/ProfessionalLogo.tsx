
interface ProfessionalLogoProps {
  className?: string;
}

export const ProfessionalLogo = ({ className = "" }: ProfessionalLogoProps) => {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Logo container with professional effects */}
      <div className="relative">
        <div className="absolute inset-0 bg-accent/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm border border-border/50 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-105">
          <img 
            src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
            alt="Darkroom Production Logo"
            className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      
      {/* Brand text with enhanced typography */}
      <div className="hidden sm:block">
        <h1 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
          Darkroom
        </h1>
        <p className="text-xs text-muted-foreground -mt-1 font-medium tracking-wide">
          Production
        </p>
      </div>
    </div>
  );
};
