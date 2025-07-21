
interface CleanLogoProps {
  className?: string;
  scrolled?: boolean;
}

export const CleanLogo = ({ className = "", scrolled = false }: CleanLogoProps) => {
  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <div className="relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 clean-logo-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Main logo container with dynamic sizing */}
        <div className={`clean-logo-container transition-all duration-500 ${
          scrolled 
            ? 'w-10 h-10' 
            : 'w-16 h-16 lg:w-16 lg:h-16'
        }`}>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img 
              src="https://i.ibb.co/MDCLRNBK/drm-02.png" 
              alt="Darkroom Production Logo"
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
            />
            
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
