
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
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsVideoReady(false);
      setIsPlaying(false);
      // Simulate loading time for better UX
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handlePlayVideo = () => {
    setIsVideoReady(true);
    setIsPlaying(true);
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
      className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-md flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-8 h-8 border border-accent/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/5 left-1/5 w-6 h-6 border border-accent/15 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Enhanced futuristic frame */}
        <div className="relative bg-background/5 backdrop-blur-2xl border border-accent/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Enhanced Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <span className="text-accent font-mono text-sm sm:text-base uppercase tracking-wider font-semibold">
                  Darkroom Production
                </span>
                <span className="text-accent/70 font-mono text-xs sm:text-sm uppercase tracking-wide">
                  Showreel
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-2 backdrop-blur-sm border border-accent/20 hover:border-accent/40"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Enhanced Video Container */}
          <div className="relative aspect-video bg-gradient-to-br from-black/80 to-black/60 rounded-2xl overflow-hidden border border-accent/20 shadow-inner">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto" />
                    <div className="absolute inset-0 w-12 h-12 border-2 border-accent/30 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-medium">Loading Experience...</p>
                    <p className="text-white/60 text-sm">Preparing your visual journey</p>
                  </div>
                  <div className="w-48 h-1 bg-accent/20 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-accent rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Video Ready State */}
            {isVideoReady && isPlaying && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&iv_load_policy=3&enablejsapi=1`}
                title="Darkroom Production Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl"
              />
            )}

            {/* Enhanced Play button overlay */}
            {!isLoading && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="relative group">
                    <Button
                      size="lg"
                      onClick={handlePlayVideo}
                      className="relative bg-accent/10 hover:bg-accent/20 border-2 border-accent/40 hover:border-accent rounded-full p-8 transition-all duration-500 group-hover:scale-110"
                    >
                      <Play className="w-12 h-12 text-accent ml-1" />
                      <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                    </Button>
                    <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-white text-xl font-semibold">Watch Our Creative Journey</h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto">
                      Experience our passion for capturing life's most precious moments
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-accent/70">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wide">Premium Audio</span>
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wide">Full Screen</span>
                  </div>
                </div>
              </div>
            )}

            {/* Video thumbnail/preview overlay */}
            {!isLoading && !isPlaying && (
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <p className="text-white/80 text-base font-medium">
                Professional Wedding Photography & Cinematography
              </p>
              <p className="text-white/50 text-sm mt-1">
                Crafting timeless memories with artistic excellence
              </p>
            </div>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-accent/60 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-accent/60 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-accent/60 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-accent/60 rounded-br-lg" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-accent/10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
