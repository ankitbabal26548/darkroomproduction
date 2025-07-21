
interface DramaticSeparatorProps {
  variant?: 'wave' | 'geometric' | 'energy';
  height?: 'small' | 'medium' | 'large';
}

export const DramaticSeparator = ({ 
  variant = 'wave', 
  height = 'medium' 
}: DramaticSeparatorProps) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'h-16 md:h-24';
      case 'large': return 'h-32 md:h-48';
      default: return 'h-24 md:h-32';
    }
  };

  if (variant === 'wave') {
    return (
      <div className={`relative overflow-hidden ${getHeightClass()}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div className={`relative flex items-center justify-center ${getHeightClass()}`}>
        <div className="flex items-center space-x-4">
          <div className="geometric-diamond animate-spin-slow" />
          <div className="separator-line" />
          <div className="geometric-hexagon animate-pulse" />
          <div className="separator-line" />
          <div className="geometric-diamond animate-spin-slow" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${getHeightClass()}`}>
      <div className="energy-separator">
        <div className="energy-line" />
        <div className="energy-pulse" />
      </div>
    </div>
  );
};
