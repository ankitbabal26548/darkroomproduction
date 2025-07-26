
import { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const YouTubePlayer = ({ isOpen, onClose, videoId }: YouTubePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      document.body.style.overflow = 'unset';
      setIsPlaying(false);
      setIsLoading(true);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'm':
          setIsMuted(!isMuted);
          break;
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying, isMuted, isFullscreen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Creative Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-16 bg-accent/20 rounded-full animate-floating-slow"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-12 bg-accent/25 rounded-full animate-floating-medium"></div>
      </div>

      {/* Video Container */}
      <div className={`relative w-full max-w-6xl mx-4 ${isFullscreen ? 'h-full' : 'aspect-video'} bg-black rounded-lg overflow-hidden shadow-2xl animate-scale-in`}>
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto"></div>
              <div className="text-white/80 text-lg font-medium">Loading Experience...</div>
              <div className="flex space-x-1 justify-center">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Embed */}
        <iframe
          src={videoUrl}
          title="Darkroom Production Showreel"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />

        {/* Custom Controls Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Darkroom Production Showreel</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white hover:bg-white/20 transition-colors"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="font-semibold">Wedding Photography Excellence</h3>
                <p className="text-sm text-white/80">Experience our creative vision in action</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white text-sm">Live Preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent"></div>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="absolute bottom-4 left-4 text-white/60 text-xs space-y-1">
        <div>ESC: Close • SPACE: Play/Pause</div>
        <div>F: Fullscreen • M: Mute</div>
      </div>
    </div>
  );
};
