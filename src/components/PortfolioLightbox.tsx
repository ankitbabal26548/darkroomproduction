
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Heart, Share, Eye, MapPin, User, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: number;
  category: string;
  type: 'photo' | 'video';
  title: string;
  location: string;
  image: string;
  likes: number;
  description?: string;
  client?: string;
  date?: string;
  featured?: boolean;
  award?: string;
}

interface PortfolioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const PortfolioLightbox = ({ 
  isOpen, 
  onClose, 
  items, 
  currentIndex, 
  onNext, 
  onPrevious 
}: PortfolioLightboxProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const currentItem = items[currentIndex];

  // Handle touch gestures for mobile navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };
    
    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;
    
    // Horizontal swipe for navigation
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        onNext();
      } else {
        onPrevious();
      }
    }
    
    // Vertical swipe to toggle details
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
      if (diffY > 0) {
        setShowDetails(false);
      } else {
        setShowDetails(true);
      }
    }
    
    setTouchStart(null);
  };

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
      setImageScale(0.95);
      setShowDetails(false);
      document.body.style.overflow = 'hidden';
      
      // Animate in
      setTimeout(() => setImageScale(1), 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsLoaded(false);
    setImageScale(0.98);
    setTimeout(() => setImageScale(1), 150);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Backdrop */}
      <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={onClose} />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col z-[101]">
        {/* Fixed Header with Higher Z-Index */}
        <div className="relative z-[105] p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-white/20">
                <span className="text-white/90 text-sm font-medium">
                  {currentIndex + 1} of {items.length}
                </span>
              </div>
              {currentItem.featured && (
                <div className="bg-accent/20 backdrop-blur-md text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 border border-accent/30">
                  <Award className="w-4 h-4" />
                  Featured
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 transition-all duration-300 hover:scale-110 touch-manipulation"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div 
          className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-4 sm:pb-6 relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons with Fixed Z-Index */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:bg-white/15 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110 disabled:opacity-30 touch-manipulation"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:bg-white/15 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110 disabled:opacity-30 touch-manipulation"
            disabled={currentIndex === items.length - 1}
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[60vh] sm:max-h-[70vh] relative z-[102]">
            <div 
              className="relative transition-transform duration-300 ease-out"
              style={{ transform: `scale(${imageScale})` }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className={`max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-xl shadow-2xl transition-opacity duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Loading Placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-pulse rounded-xl border border-white/20">
                  <div className="w-12 h-12 border-3 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Video Play Button */}
              {currentItem.type === 'video' && (
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:scale-110 shadow-2xl z-[103] touch-manipulation"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                </Button>
              )}
            </div>

            {/* Mobile: Swipe up indicator */}
            <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
              Swipe up for details
            </div>
          </div>
        </div>

        {/* Enhanced Info Panel - Slide up on mobile, always visible on desktop */}
        <div className={`relative z-[104] bg-gradient-to-t from-black/95 via-black/85 to-transparent backdrop-blur-xl border-t border-white/10 transition-transform duration-500 ${
          showDetails ? 'translate-y-0' : 'translate-y-full sm:translate-y-0'
        }`}>
          {/* Mobile: Toggle button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-12 h-6 bg-white/20 backdrop-blur-md rounded-t-xl border border-white/20 border-b-0 flex items-center justify-center"
          >
            <div className="w-8 h-1 bg-white/40 rounded-full" />
          </button>

          <div className="max-w-7xl mx-auto p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
                    {currentItem.title}
                  </h3>
                  {currentItem.description && (
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
                      {currentItem.description}
                    </p>
                  )}
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm">{currentItem.location}</span>
                  </div>
                  
                  {currentItem.client && (
                    <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                      <User className="w-4 h-4 text-accent" />
                      <span className="text-white/90 text-sm">{currentItem.client}</span>
                    </div>
                  )}
                  
                  {currentItem.date && (
                    <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-white/90 text-sm">{currentItem.date}</span>
                    </div>
                  )}

                  {currentItem.award && (
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-yellow-400/30">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-200 text-sm font-medium">{currentItem.award}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Actions & Stats */}
              <div className="space-y-6">
                <div className="flex items-center justify-between lg:justify-start lg:space-x-6">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-white font-semibold">{currentItem.likes}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 touch-manipulation">
                      <Share className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 touch-manipulation">
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Enhanced Progress Indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const diff = index - currentIndex;
                          if (diff > 0) {
                            for (let i = 0; i < diff; i++) onNext();
                          } else if (diff < 0) {
                            for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                          }
                        }}
                        className={`transition-all duration-300 rounded-full touch-manipulation ${
                          index === currentIndex 
                            ? 'bg-accent w-8 h-3' 
                            : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-white/60 text-sm">
                    Swipe or use arrow keys to navigate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
