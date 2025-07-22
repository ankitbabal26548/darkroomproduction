
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroImageLightboxProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
  selectedIndex: number;
  onImageChange: (index: number) => void;
}

export const HeroImageLightbox = ({ 
  images, 
  isOpen, 
  onClose, 
  selectedIndex, 
  onImageChange 
}: HeroImageLightboxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
    }
  }, [selectedIndex, isOpen]);

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    onImageChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    onImageChange(newIndex);
  };

  if (!isOpen) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl max-h-[90vh] mx-auto p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <h3 className="text-xl font-semibold">{currentImage.title}</h3>
            <p className="text-white/70 text-sm">{currentImage.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePrev}
            className="p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Image Counter */}
          <div className="text-white/70 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
          
          <button
            onClick={handleNext}
            className="p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
