
interface CleanLogoProps {
  className?: string;
}

export const CleanLogo = ({ className = "" }: CleanLogoProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-accent/10 border border-accent/20">
        <img 
          src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
          alt="Darkroom Production Logo"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Brand Text */}
      <div className="hidden sm:block">
        <h1 className="font-playfair text-xl font-bold text-foreground tracking-tight">
          Darkroom
        </h1>
        <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase -mt-0.5">
          Production
        </p>
      </div>
    </div>
  );
};
