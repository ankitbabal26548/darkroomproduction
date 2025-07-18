
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Heart, Share, Eye } from 'lucide-react';
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
  const currentItem = items[currentIndex];

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
          disabled={currentIndex === items.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Main Content */}
        <div className="max-w-6xl max-h-full flex items-center justify-center">
          <div className="relative">
            {/* Image */}
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
            />
            
            {/* Loading Placeholder */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Video Play Button */}
            {currentItem.type === 'video' && (
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <Play className="w-8 h-8 text-white" />
              </Button>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start justify-between text-white">
              <div className="flex-1">
                <h3 className="font-playfair text-2xl font-bold mb-2">{currentItem.title}</h3>
                <p className="text-white/80 mb-2">{currentItem.location}</p>
                {currentItem.description && (
                  <p className="text-white/70 text-sm mb-4 max-w-2xl">{currentItem.description}</p>
                )}
                {currentItem.client && (
                  <p className="text-white/60 text-sm">Client: {currentItem.client}</p>
                )}
                {currentItem.date && (
                  <p className="text-white/60 text-sm">{currentItem.date}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-white/80">
                  <Heart className="w-5 h-5" />
                  <span>{currentItem.likes}</span>
                </div>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Share className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Eye className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
