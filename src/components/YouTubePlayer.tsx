
import { useState, useEffect } from 'react';
import { X, Play, Loader2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const YouTubePlayer = ({ isOpen, onClose, videoId }: YouTubePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
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

  // Hide rotation prompt after 3 seconds
  useEffect(() => {
    if (showRotationPrompt) {
      const timer = setTimeout(() => {
        setShowRotationPrompt(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showRotationPrompt]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsVideoReady(false);
      
      // Load video with shorter delay
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsVideoReady(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
      className="fixed inset-0 z-50 bg-black/98 backdrop-blur-lg touch-manipulation"
      onClick={handleBackdropClick}
    >
      {/* Mobile Rotation Prompt - Only when needed */}
      {isMobile && showRotationPrompt && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="text-center space-y-4 max-w-sm">
            <div className="relative">
              <RotateCcw className="w-12 h-12 text-accent mx-auto animate-spin" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-lg font-bold">
                Rotate for Better View
              </h3>
              <p className="text-white/80 text-sm">
                Rotate your device to landscape for the best experience.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRotationPrompt(false)}
              className="border-accent/30 text-accent hover:bg-accent/10 min-h-[44px] min-w-[120px]"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Main Container - Mobile First Layout */}
      <div className="h-full w-full flex flex-col">
        {/* Header - Minimal on mobile */}
        <div className="flex-shrink-0 flex items-center justify-between p-2 sm:p-4 md:p-6 bg-gradient-to-b from-black/50 to-transparent">
          {/* Brand info - hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-accent font-mono text-sm uppercase tracking-wider font-bold">
                Professional Showreel
              </span>
              <span className="text-accent/70 font-mono text-xs">
                Darkroom Production • 2025
              </span>
            </div>
          </div>
          
          {/* Mobile title */}
          <div className="flex sm:hidden items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-mono text-sm uppercase tracking-wider font-bold">
              Showreel
            </span>
          </div>
          
          {/* Close Button - Larger and more visible on mobile */}
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 border-2 border-accent/30 hover:border-accent/60 rounded-full min-h-[44px] min-w-[44px] sm:min-h-[48px] sm:min-w-[48px] touch-manipulation z-[70]"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Video Container - Takes remaining space */}
        <div className="flex-1 p-2 sm:p-4 md:p-6 pt-0">
          <div className="relative h-full bg-gradient-to-br from-black/80 via-black/60 to-black/80 rounded-lg sm:rounded-xl overflow-hidden border border-accent/20">
            
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-[55]">
                <div className="text-center space-y-4 px-4">
                  <div className="relative">
                    <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-spin mx-auto" />
                    <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 border-2 border-accent/30 rounded-full animate-pulse mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-base sm:text-lg font-medium">Loading Content</p>
                    <p className="text-white/60 text-sm">Preparing your viewing experience...</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Video iframe - Audio enabled by default */}
            {isVideoReady && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&mute=0&enablejsapi=1`}
                title="Darkroom Production Professional Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-lg sm:rounded-xl"
                style={{ pointerEvents: 'auto' }}
              />
            )}
          </div>
        </div>

        {/* Footer - Simplified on mobile */}
        <div className="flex-shrink-0 p-2 sm:p-4 md:p-6 pt-0 text-center">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
              Professional Wedding Photography & Cinematography
            </p>
            <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto line-clamp-2 sm:line-clamp-none">
              Experience our creative vision and dedication to capturing life's precious moments.
            </p>
            
            {/* Professional badges - Responsive */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-3">
              <div className="flex items-center space-x-1 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">4K</span>
              </div>
              <div className="flex items-center space-x-1 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Professional</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 bg-accent/10 px-2 sm:px-3 py-1 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-accent text-xs font-mono">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
