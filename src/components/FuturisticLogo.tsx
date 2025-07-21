interface FuturisticLogoProps {
  className?: string;
  scrolled?: boolean;
}
export const FuturisticLogo = ({
  className = "",
  scrolled = false
}: FuturisticLogoProps) => {
  return <div className={`flex items-center space-x-4 group cursor-pointer ${className}`}>
      {/* Enhanced logo container with futuristic effects */}
      <div className="relative">
        {/* Animated glow rings */}
        <div className="absolute inset-0 futuristic-logo-glow animate-glow-pulse" />
        <div className="absolute inset-0 futuristic-logo-ring animate-aperture-spin" />
        
        {/* Main logo container */}
        <div className={`futuristic-logo-container transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
          <div className="relative w-12 h-12 rounded-xl overflow-hidden">
            <img src="https://i.ibb.co/MDCLRNBK/drm-02.png" alt="Darkroom Production Logo" className="w-full h-full object-contain transition-all duration-500 
                         group-hover:scale-110 group-hover:brightness-110" />
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 futuristic-hologram-overlay" />
            
            {/* Corner accents */}
            <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-accent rounded-tl-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-accent rounded-tr-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-accent rounded-bl-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-accent rounded-br-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
      
      {/* Enhanced brand text with futuristic typography */}
      <div className="hidden sm:block">
        <h1 className={`futuristic-brand-title transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
          
        </h1>
        
      </div>
    </div>;
};