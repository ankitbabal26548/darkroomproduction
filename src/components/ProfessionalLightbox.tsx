
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
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
  const [uiVisible, setUiVisible] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const uiTimeoutRef = useRef<NodeJS.Timeout>();

  // Touch handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [lastTap, setLastTap] = useState(0);
  const minSwipeDistance = 50;

  // Hide UI after inactivity
  const resetUiTimeout = () => {
    setUiVisible(true);
    if (uiTimeoutRef.current) {
      clearTimeout(uiTimeoutRef.current);
    }
    uiTimeoutRef.current = setTimeout(() => {
      setUiVisible(false);
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      resetUiTimeout();
      
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
      // Hide navbar and prevent body scroll
      document.body.classList.add('lightbox-open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      resetZoom();
      resetUiTimeout();
    } else {
      // Show navbar and restore body scroll
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      if (uiTimeoutRef.current) {
        clearTimeout(uiTimeoutRef.current);
      }
    }

    return () => {
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      if (uiTimeoutRef.current) {
        clearTimeout(uiTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
      resetZoom();
      resetUiTimeout();
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
    setZoom(prev => Math.min(prev * 1.3, 4));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.3, 0.5));
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
    resetUiTimeout();
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
    resetUiTimeout();
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

  // Double tap to zoom
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (now - lastTap < DOUBLE_TAP_DELAY) {
      if (zoom === 1) {
        handleZoomIn();
      } else {
        resetZoom();
      }
    }
    setLastTap(now);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className="lightbox-container fixed inset-0 z-[100] bg-black/98 backdrop-blur-sm">
      {/* Main Container */}
      <div 
        ref={containerRef}
        className="lightbox-main relative w-full h-full overflow-hidden"
        onClick={handleContainerClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Floating Header */}
        <div className={`lightbox-header absolute top-0 left-0 right-0 z-20 transition-all duration-300 ${
          uiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}>
          <div className="bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 border border-white/20">
                  <span className="text-white/90 text-xs sm:text-sm font-medium">
                    {selectedIndex + 1} / {images.length}
                  </span>
                </div>
                
                <div className="hidden sm:block bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20 max-w-xs">
                  <h3 className="text-white font-medium text-sm truncate">{currentImage.title}</h3>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                {/* Desktop Zoom Controls */}
                <div className="hidden md:flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                    className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8"
                  >
                    <ZoomOut className="w-3 h-3" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetZoom}
                    className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8"
                  >
                    <span className="text-xs font-mono">{Math.round(zoom * 100)}%</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleZoomIn}
                    disabled={zoom >= 4}
                    className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8"
                  >
                    <ZoomIn className="w-3 h-3" />
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8 sm:w-10 sm:h-10"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${
            uiVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${
            uiVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>

        {/* Image Container - Full viewport usage */}
        <div className="lightbox-image-container absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              ref={imageRef}
              src={currentImage.src}
              alt={currentImage.alt}
              className={`lightbox-image max-w-full object-contain transition-all duration-300 select-none ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              style={{
                transform: `scale(${zoom}) translate(${imagePosition.x / zoom}px, ${imagePosition.y / zoom}px)`,
                transformOrigin: 'center'
              }}
              onLoad={() => setImageLoaded(true)}
              onMouseDown={handleMouseDown}
              onClick={handleDoubleTap}
              draggable={false}
            />
            
            {/* Loading Indicator */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-pulse">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Floating Footer */}
        <div className={`lightbox-footer absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ${
          uiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}>
          <div className="bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
            <div className="p-2 sm:p-3 md:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-sm sm:text-base md:text-lg font-bold text-white mb-1 truncate">
                    {currentImage.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {currentImage.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  {/* Mobile/Tablet Zoom Controls */}
                  <div className="flex md:hidden items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleZoomIn}
                      disabled={zoom >= 4}
                      className="text-white hover:bg-white/10 bg-white/5 backdrop-blur-md border border-white/20 w-8 h-8"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </Button>
                  </div>
                  
                  {/* Thumbnail Dots */}
                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => onImageChange(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === selectedIndex 
                            ? 'bg-accent w-4 h-2 sm:w-5 sm:h-2.5' 
                            : 'bg-white/30 hover:bg-white/50 w-2 h-2 sm:w-2.5 sm:h-2.5'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Keyboard Shortcuts Hint - Desktop only */}
              <div className="hidden md:block mt-2 pt-2 border-t border-white/10">
                <p className="text-center text-white/40 text-xs">
                  Use ← → arrow keys to navigate • +/- to zoom • Double-tap to zoom • ESC to close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
