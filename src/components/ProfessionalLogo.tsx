
interface ProfessionalLogoProps {
  className?: string;
}

export const ProfessionalLogo = ({ className = "" }: ProfessionalLogoProps) => {
  return (
    <div className={`flex items-center space-x-4 group ${className}`}>
      {/* Enhanced logo container with professional effects */}
      <div className="relative">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md group-hover:blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Main logo container */}
        <div className="logo-container breathing-animation">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden">
            <img 
              src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
              alt="Darkroom Production Logo"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
      
      {/* Enhanced brand text with professional typography */}
      <div className="hidden sm:block">
        <h1 className="font-playfair text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight">
          Darkroom
        </h1>
        <p className="text-sm text-muted-foreground -mt-1 font-medium tracking-widest uppercase opacity-80">
          Production
        </p>
      </div>
    </div>
  );
};
