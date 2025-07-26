
import { useState, useEffect } from 'react';
import { X, Play, Loader2, Volume2, Maximize2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const YouTubePlayer = ({ isOpen, onClose, videoId }: YouTubePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showRotationPrompt, setShowRotationPrompt] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle orientation changes
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleOrientationChange = () => {
      const orientation = screen.orientation?.angle || window.orientation || 0;
      const portrait = orientation === 0 || orientation === 180;
      setIsPortrait(portrait);
      setShowRotationPrompt(portrait);
    };

    handleOrientationChange();
    
    if (screen.orientation) {
      screen.orientation.addEventListener('change', handleOrientationChange);
    }
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      if (screen.orientation) {
        screen.orientation.removeEventListener('change', handleOrientationChange);
      }
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobile, isOpen]);

  // Hide rotation prompt after 5 seconds
  useEffect(() => {
    if (showRotationPrompt) {
      const timer = setTimeout(() => {
        setShowRotationPrompt(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showRotationPrompt]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsVideoReady(false);
      setShowPlayButton(false);
      
      // Load video immediately for autoplay
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsVideoReady(true);
      }, 1200);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handlePlayVideo = () => {
    setShowPlayButton(false);
    setIsVideoReady(true);
  };

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', keyboardHandler);
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    }

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Mobile Rotation Prompt */}
      {isMobile && showRotationPrompt && (
        <div className="absolute inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="text-center space-y-6 max-w-sm">
            <div className="relative">
              <RotateCcw className="w-16 h-16 text-accent mx-auto animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-2 border-accent/30 rounded-full animate-pulse mx-auto" />
            </div>
            <div className="space-y-3">
              <h3 className="text-white text-xl font-bold">
                Rotate Your Device
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                For the best viewing experience, please rotate your device to landscape mode.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRotationPrompt(false)}
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              Continue Anyway
            </Button>
          </div>
        </div>
      )}

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
      <div className="relative w-full max-w-7xl mx-auto mt-0 sm:mt-2 md:mt-4">
        {/* Professional frame with multiple layers */}
        <div className="relative bg-gradient-to-br from-background/20 via-background/10 to-background/5 backdrop-blur-2xl border-2 border-accent/30 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 blur-sm -z-10" />
          
          {/* Header with enhanced design */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Animated status indicators */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-accent font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
                  Professional Showreel
                </span>
                <span className="text-accent/70 font-mono text-xs">
                  Darkroom Production • 2025
                </span>
              </div>
            </div>
            
            {/* Enhanced close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseClick}
              onMouseDown={handleCloseClick}
              onTouchStart={handleCloseClick}
              className="text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/40 rounded-full p-2 sm:p-3 touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Video Container with enhanced styling */}
          <div className="relative aspect-video bg-gradient-to-br from-black/80 via-black/60 to-black/80 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl">
            
            {/* Corner decorative elements */}
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-accent/60 rounded-tl-lg" />
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-accent/60 rounded-tr-lg" />
            <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-accent/60 rounded-bl-lg" />
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-accent/60 rounded-br-lg" />
            
            {/* Loading state with enhanced animation */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-sm">
                <div className="text-center space-y-4 sm:space-y-6 px-4">
                  <div className="relative">
                    <Loader2 className="w-8 h-8 sm:w-12 sm:h-12 text-accent animate-spin mx-auto" />
                    <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 border-2 border-accent/30 rounded-full animate-pulse mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-base sm:text-lg font-medium">Loading Professional Content</p>
                    <p className="text-white/60 text-sm">Preparing your viewing experience...</p>
                  </div>
                  
                  {/* Loading progress bar */}
                  <div className="w-32 sm:w-48 h-1 bg-accent/20 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-accent/60 rounded-full animate-pulse" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Video iframe with autoplay */}
            {isVideoReady && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&mute=1`}
                title="Darkroom Production Professional Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-lg sm:rounded-xl lg:rounded-2xl"
              />
            )}

            {/* Enhanced play button overlay - only shown if autoplay fails */}
            {!isVideoReady && !isLoading && showPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm">
                <div className="text-center space-y-4 sm:space-y-6 px-4">
                  <Button
                    size="lg"
                    onClick={handlePlayVideo}
                    className="relative group bg-gradient-to-r from-accent/20 to-accent/30 hover:from-accent/40 hover:to-accent/50 border-3 border-accent/50 hover:border-accent rounded-full p-6 sm:p-8 transition-all duration-500 transform hover:scale-110 touch-manipulation"
                  >
                    <Play className="w-6 h-6 sm:w-10 sm:h-10 text-accent group-hover:text-white transition-colors duration-300" />
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
                  </Button>
                  
                  <div className="space-y-2">
                    <p className="text-white text-lg sm:text-xl font-bold">Watch Our Professional Work</p>
                    <p className="text-white/80 text-sm">Discover the artistry behind our photography</p>
                  </div>
                </div>
              </div>
            )}

            {/* Video controls overlay (when video is playing) */}
            {isVideoReady && (
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2">
                  <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
                  <span className="text-white/80 text-xs sm:text-sm">HD Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
                  <span className="text-white/80 text-xs sm:text-sm">Fullscreen</span>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced footer */}
          <div className="mt-4 sm:mt-6 text-center space-y-2 sm:space-y-3">
            <p className="text-white/90 text-base sm:text-lg font-medium">
              Professional Wedding Photography & Cinematography
            </p>
            <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto">
              Experience our creative vision, professional excellence, and dedication to capturing life's most precious moments with artistic flair and technical precision.
            </p>
            
            {/* Professional badges */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-3 sm:mt-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">4K Quality</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Professional</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute -inset-1 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 blur-lg -z-20" />
        </div>
      </div>
    </div>
  );
};
