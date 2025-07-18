
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
  const currentItem = items[currentIndex];

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
      setImageScale(0.95);
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
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      {/* Glassmorphism Content Container */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="relative z-10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
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
              className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-6 pb-6">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-14 h-14 transition-all duration-300 hover:scale-110 disabled:opacity-30"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-14 h-14 transition-all duration-300 hover:scale-110 disabled:opacity-30"
            disabled={currentIndex === items.length - 1}
          >
            <ChevronRight className="w-7 h-7" />
          </Button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[70vh] relative">
            <div 
              className="relative transition-transform duration-300 ease-out"
              style={{ transform: `scale(${imageScale})` }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className={`max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl transition-opacity duration-500 ${
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:scale-110 shadow-2xl"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Info Panel */}
        <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">
                    {currentItem.title}
                  </h3>
                  {currentItem.description && (
                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
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
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12">
                      <Share className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12">
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
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex 
                            ? 'bg-accent w-8 h-3' 
                            : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-white/60 text-sm">
                    Navigate with arrow keys or click dots
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
