
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Heart, Share, Eye, MapPin, Calendar, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingCollection, WeddingImage } from '@/types/portfolio';

interface CollectionLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  collection: WeddingCollection | null;
  initialImageIndex?: number;
}

export const CollectionLightbox = ({ 
  isOpen, 
  onClose, 
  collection,
  initialImageIndex = 0
}: CollectionLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    if (isOpen && collection) {
      setCurrentImageIndex(initialImageIndex);
      setIsLoaded(false);
      setImageScale(0.95);
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => setImageScale(1), 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, collection, initialImageIndex]);

  useEffect(() => {
    setIsLoaded(false);
    setImageScale(0.98);
    setTimeout(() => setImageScale(1), 150);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !collection) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          previousImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, collection]);

  const nextImage = () => {
    if (!collection) return;
    setCurrentImageIndex((prev) => 
      prev < collection.images.length - 1 ? prev + 1 : 0
    );
  };

  const previousImage = () => {
    if (!collection) return;
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : collection.images.length - 1
    );
  };

  if (!isOpen || !collection) return null;

  const currentImage = collection.images[currentImageIndex];

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="relative z-10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white/90 text-sm font-medium">
                  {currentImageIndex + 1} of {collection.images.length}
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <span className="text-white font-medium">{collection.coupleName}</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 pb-6">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={previousImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-14 h-14 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-14 h-14 transition-all duration-300 hover:scale-110"
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
                src={currentImage.image}
                alt={currentImage.title}
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
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Image Info */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {currentImage.title}
                  </h3>
                  {currentImage.description && (
                    <p className="text-white/80 text-lg leading-relaxed">
                      {currentImage.description}
                    </p>
                  )}
                </div>

                {/* Collection Info */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm">{collection.weddingDate}</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm">{collection.location}</span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                    <Images className="w-4 h-4 text-accent" />
                    <span className="text-white/90 text-sm capitalize">{currentImage.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Actions & Navigation */}
              <div className="space-y-6">
                <div className="flex items-center justify-between lg:justify-start lg:space-x-6">
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12">
                      <Share className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12">
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
                    {collection.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 rounded-full flex-shrink-0 ${
                          index === currentImageIndex 
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
