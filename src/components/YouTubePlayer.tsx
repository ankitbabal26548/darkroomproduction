
import { useState, useEffect } from 'react';
import { X, Play, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const YouTubePlayer = ({ isOpen, onClose, videoId }: YouTubePlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsVideoReady(false);
      // Simulate loading time for better UX
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsVideoReady(true);
      }, 1000);
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
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Futuristic frame */}
        <div className="relative bg-background/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-mono text-sm uppercase tracking-wider">
                Darkroom Production Showreel
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center space-y-4">
                  <Loader2 className="w-8 h-8 text-accent animate-spin mx-auto" />
                  <p className="text-white/70 text-sm">Loading video...</p>
                </div>
              </div>
            )}
            
            {isVideoReady && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title="Darkroom Production Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}

            {/* Play button overlay (shown before video loads) */}
            {!isVideoReady && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <Button
                  size="lg"
                  onClick={() => setIsVideoReady(true)}
                  className="bg-accent/20 hover:bg-accent/30 border-2 border-accent/30 hover:border-accent rounded-full p-6"
                >
                  <Play className="w-8 h-8 text-accent" />
                </Button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-white/60 text-sm">
              Experience our creative vision and professional excellence
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-accent/50" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-accent/50" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-accent/50" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
        </div>
      </div>
    </div>
  );
};
