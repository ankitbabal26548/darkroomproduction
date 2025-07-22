
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfessionalLightboxProps {
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

export const ProfessionalLightbox = ({ 
  images, 
  isOpen, 
  onClose, 
  selectedIndex, 
  onImageChange 
}: ProfessionalLightboxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case '=':
        case '+':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, zoom]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      resetZoom();
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
      resetZoom();
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

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.2, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500" 
        onClick={onClose}
      />
      
      {/* Main Container */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="relative z-10 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
                <span className="text-white/90 text-sm font-medium">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
              
              <div className="hidden sm:block bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <h3 className="text-white font-medium">{currentImage.title}</h3>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Desktop Controls */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetZoom}
                  className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10"
                >
                  <span className="text-xs font-mono">{Math.round(zoom * 100)}%</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10 sm:w-12 sm:h-12"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div 
          ref={containerRef}
          className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-4 sm:pb-6 relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </Button>

          {/* Image */}
          <div className="max-w-full max-h-full relative">
            <img
              ref={imageRef}
              src={currentImage.src}
              alt={currentImage.alt}
              className={`max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-500 select-none ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              style={{
                transform: `scale(${zoom}) translate(${imagePosition.x / zoom}px, ${imagePosition.y / zoom}px)`,
                transformOrigin: 'center'
              }}
              onLoad={() => setImageLoaded(true)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              draggable={false}
            />
            
            {/* Loading Indicator */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-pulse rounded-lg border border-white/20">
                <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 sm:border-3 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-1 truncate">
                  {currentImage.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed line-clamp-2">
                  {currentImage.description}
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                {/* Mobile Zoom Controls */}
                <div className="flex sm:hidden items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                    className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Thumbnail Dots */}
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onImageChange(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === selectedIndex 
                          ? 'bg-accent w-6 h-2.5 sm:w-8 sm:h-3' 
                          : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5 sm:w-3 sm:h-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Keyboard Shortcuts Hint */}
            <div className="hidden sm:block mt-4 pt-4 border-t border-white/10">
              <p className="text-center text-white/40 text-xs">
                Use ← → arrow keys to navigate • +/- to zoom • ESC to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
