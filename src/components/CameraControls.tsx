
import { useState, useEffect } from 'react';
import { Settings, Zap, Target } from 'lucide-react';

export const CameraControls = () => {
  const [exposureLevel, setExposureLevel] = useState(0);
  const [frameCounter, setFrameCounter] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setExposureLevel(scrollPercent);
      setFrameCounter(Math.floor(scrollPercent / 20) + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex items-center space-x-6 text-xs font-mono">
      {/* Exposure Meter */}
      <div className="flex items-center space-x-2">
        <Zap className="w-3 h-3 text-accent" />
        <div className="flex items-center space-x-1">
          <span className="text-muted-foreground">EV</span>
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-3 transition-colors duration-300 ${
                  i * 20 <= exposureLevel ? 'bg-accent' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Camera Settings Display */}
      <div className="flex items-center space-x-3 text-muted-foreground">
        <div className="flex items-center space-x-1">
          <span>ISO</span>
          <span className="text-accent font-semibold">400</span>
        </div>
        <div className="w-px h-4 bg-border" />
        <div className="flex items-center space-x-1">
          <span>f/</span>
          <span className="text-accent font-semibold">2.8</span>
        </div>
        <div className="w-px h-4 bg-border" />
        <div className="flex items-center space-x-1">
          <span className="text-accent font-semibold">1/125</span>
          <span>s</span>
        </div>
      </div>

      {/* Frame Counter */}
      <div className="flex items-center space-x-2">
        <Target className="w-3 h-3 text-accent" />
        <div className="bg-background/20 px-2 py-1 rounded border border-accent/30">
          <span className="text-accent font-semibold">
            {frameCounter.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Professional Mode Indicator */}
      <div className="flex items-center space-x-1">
        <Settings className="w-3 h-3 text-accent animate-spin-slow" />
        <span className="text-accent text-xs tracking-wider">PRO</span>
      </div>
    </div>
  );
};
