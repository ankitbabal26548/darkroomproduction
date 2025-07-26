
import { useState, useEffect } from 'react';
import { X, Play, Loader2, Volume2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const YouTubePlayer = ({ isOpen, onClose, videoId }: YouTubePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsVideoReady(false);
      setShowPlayButton(true);
      // Simulate loading time for better UX
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handlePlayVideo = () => {
    setShowPlayButton(false);
    setIsVideoReady(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-lg flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/6 w-4 h-4 border border-accent/20 rotate-45 animate-float-1" />
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 border border-accent/30 rotate-12 animate-float-2" />
      </div>

      {/* Modal Container with enhanced design */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Professional frame with multiple layers */}
        <div className="relative bg-gradient-to-br from-background/20 via-background/10 to-background/5 backdrop-blur-2xl border-2 border-accent/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 blur-sm -z-10" />
          
          {/* Header with enhanced design */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Animated status indicators */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-accent font-mono text-sm uppercase tracking-wider font-bold">
                  Professional Showreel
                </span>
                <span className="text-accent/70 font-mono text-xs">
                  Darkroom Production • 2024
                </span>
              </div>
            </div>
            
            {/* Enhanced close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/40 rounded-full p-3"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Video Container with enhanced styling */}
          <div className="relative aspect-video bg-gradient-to-br from-black/80 via-black/60 to-black/80 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl">
            
            {/* Corner decorative elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-accent/60 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-accent/60 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-accent/60 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-accent/60 rounded-br-lg" />
            
            {/* Loading state with enhanced animation */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto" />
                    <div className="absolute inset-0 w-12 h-12 border-2 border-accent/30 rounded-full animate-pulse mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-medium">Loading Professional Content</p>
                    <p className="text-white/60 text-sm">Preparing your viewing experience...</p>
                  </div>
                  
                  {/* Loading progress bar */}
                  <div className="w-48 h-1 bg-accent/20 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-accent/60 rounded-full animate-pulse" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Video iframe */}
            {isVideoReady && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1`}
                title="Darkroom Production Professional Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl"
              />
            )}

            {/* Enhanced play button overlay */}
            {!isVideoReady && !isLoading && showPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <Button
                    size="lg"
                    onClick={handlePlayVideo}
                    className="relative group bg-gradient-to-r from-accent/20 to-accent/30 hover:from-accent/40 hover:to-accent/50 border-3 border-accent/50 hover:border-accent rounded-full p-8 transition-all duration-500 transform hover:scale-110"
                  >
                    <Play className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
                  </Button>
                  
                  <div className="space-y-2">
                    <p className="text-white text-xl font-bold">Watch Our Professional Work</p>
                    <p className="text-white/80 text-sm">Discover the artistry behind our photography</p>
                  </div>
                </div>
              </div>
            )}

            {/* Video controls overlay (when video is playing) */}
            {isVideoReady && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2">
                  <Volume2 className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-sm">HD Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize2 className="w-4 h-4 text-white/80" />
                  <span className="text-white/80 text-sm">Fullscreen</span>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced footer */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-white/90 text-lg font-medium">
              Professional Wedding Photography & Cinematography
            </p>
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              Experience our creative vision, professional excellence, and dedication to capturing life's most precious moments with artistic flair and technical precision.
            </p>
            
            {/* Professional badges */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">4K Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Professional</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 blur-lg -z-20" />
        </div>
      </div>
    </div>
  );
};
