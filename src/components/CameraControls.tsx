
import { useState } from 'react';
import { Settings, Camera, Aperture } from 'lucide-react';

export const CameraControls = () => {
  const [exposure, setExposure] = useState(0);
  const [aperture, setAperture] = useState(2.8);
  const [iso, setIso] = useState(400);

  return (
    <div className="absolute top-8 right-8 z-40 hidden lg:flex flex-col space-y-4">
      {/* Exposure Meter */}
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-accent/20">
        <div className="flex items-center space-x-2 text-white text-sm">
          <Settings className="w-4 h-4" />
          <span>EV: {exposure > 0 ? '+' : ''}{exposure}</span>
        </div>
        <div className="w-20 h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${50 + (exposure * 10)}%` }}
          ></div>
        </div>
      </div>

      {/* Camera Settings */}
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-accent/20 text-white text-xs space-y-1">
        <div className="flex items-center justify-between">
          <span>ISO</span>
          <span className="font-mono">{iso}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>f/</span>
          <span className="font-mono">{aperture}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>1/</span>
          <span className="font-mono">125</span>
        </div>
      </div>

      {/* Focus Ring */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-spin-slow"></div>
        <div className="absolute inset-2 rounded-full border border-accent/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Aperture className="w-6 h-6 text-accent" />
        </div>
      </div>
    </div>
  );
};
