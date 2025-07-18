
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
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl animate-fade-in">
      {/* Modern Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {currentItem.featured && (
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-3 py-1.5 rounded-full border border-accent/30">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Featured</span>
              </div>
            )}
            {currentItem.award && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm text-yellow-300 px-3 py-1.5 rounded-full border border-yellow-500/30 text-sm font-medium">
                {currentItem.award}
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="bg-black/40 backdrop-blur-sm hover:bg-white/10 border border-white/20 text-white rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm hover:bg-white/10 border border-white/20 text-white rounded-full w-12 h-12 transition-all duration-300 disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm hover:bg-white/10 border border-white/20 text-white rounded-full w-12 h-12 transition-all duration-300 disabled:opacity-50"
        disabled={currentIndex === items.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute inset-0 flex items-center justify-center p-6">
        {/* Main Content Container */}
        <div className="max-w-6xl max-h-full w-full flex flex-col lg:flex-row gap-6 items-center">
          {/* Image Container */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className={`max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl transition-all duration-700 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Loading Placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-xl backdrop-blur-sm">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Video Play Button */}
              {currentItem.type === 'video' && (
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </Button>
              )}
            </div>
          </div>

          {/* Info Panel */}
          <div className="w-full lg:w-80 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-white">
            <div className="space-y-6">
              {/* Title and Category */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    currentItem.category === 'wedding' ? 'bg-rose-400' :
                    currentItem.category === 'prewedding' ? 'bg-pink-400' :
                    currentItem.category === 'cinematic' ? 'bg-purple-400' :
                    currentItem.category === 'portraits' ? 'bg-blue-400' : 'bg-accent'
                  }`} />
                  <span className="text-sm text-white/60 capitalize">{currentItem.category}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold leading-tight">{currentItem.title}</h3>
              </div>

              {/* Location and Client */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{currentItem.location}</span>
                </div>
                {currentItem.client && (
                  <div className="flex items-center gap-3 text-white/90">
                    <User className="w-5 h-5 text-accent" />
                    <span>{currentItem.client}</span>
                  </div>
                )}
                {currentItem.date && (
                  <div className="flex items-center gap-3 text-white/90">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>{currentItem.date}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {currentItem.description && (
                <div>
                  <h4 className="text-sm font-semibold text-white/80 mb-2">About this project</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{currentItem.description}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium">{currentItem.likes}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent w-8 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
          <div className="ml-2 text-white/60 text-xs font-medium">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
