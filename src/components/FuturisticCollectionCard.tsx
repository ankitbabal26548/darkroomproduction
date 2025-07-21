import { Calendar, MapPin, Zap } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface FuturisticCollectionCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  delay?: number;
}

export const FuturisticCollectionCard = ({ 
  collection, 
  onOpen, 
  delay = 0 
}: FuturisticCollectionCardProps) => {
  const remainingImages = collection.images.slice(1); // Exclude the first image (cover)
  const totalImages = collection.images.length;

  // Smart image selection - always show exactly 3 preview images
  const getSmartPreviewImages = () => {
    if (remainingImages.length === 0) return [];
    if (remainingImages.length <= 3) return remainingImages;
    
    // Smart selection algorithm - pick diverse images
    const selected = [];
    const step = Math.floor(remainingImages.length / 3);
    
    for (let i = 0; i < 3; i++) {
      const index = Math.min(i * step, remainingImages.length - 1);
      selected.push(remainingImages[index]);
    }
    
    return selected;
  };

  const previewImages = getSmartPreviewImages();

  const renderSmartPreview = () => {
    if (previewImages.length === 0) {
      return (
        <div className="smart-preview-empty">
          <div className="empty-preview-content">
            <Zap className="w-8 h-8 text-accent/60" />
            <span className="text-sm text-muted-foreground">Featured Only</span>
          </div>
        </div>
      );
    }

    return (
      <div className="smart-preview-grid">
        {previewImages.map((img, index) => (
          <div key={index} className="preview-image-container">
            <img src={img.image} alt={img.title} className="preview-image" />
          </div>
        ))}
        
        {/* Fill remaining slots with placeholder if less than 3 */}
        {Array.from({ length: 3 - previewImages.length }).map((_, index) => (
          <div key={`placeholder-${index}`} className="preview-placeholder">
            <div className="placeholder-glow" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="futuristic-collection-card-v3"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Enhanced Creative Effects */}
      <div className="holographic-border-v3" />
      <div className="energy-field-v3" />
      <div className="particle-stream-v3" />
      <div className="magnetic-glow-v3" />
      <div className="floating-particles-v3">
        <div className="particle-dot particle-1" />
        <div className="particle-dot particle-2" />
        <div className="particle-dot particle-3" />
        <div className="particle-dot particle-4" />
        <div className="particle-dot particle-5" />
      </div>

      {/* Organic Shape Overlays */}
      <div className="organic-overlay organic-1" />
      <div className="organic-overlay organic-2" />

      {/* Featured Section - Enhanced with better proportions */}
      <div className="featured-section-v3">
        <div className="featured-image-container-v3">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="featured-image-v3"
          />
          <div className="featured-overlay-v3">
            {/* Enhanced Corner UI with organic curves */}
            <div className="corner-ui-v3">
              <div className="corner-element top-left" />
              <div className="corner-element top-right" />
              <div className="corner-element bottom-left" />
              <div className="corner-element bottom-right" />
            </div>
            
            {/* Essential Info with improved spacing */}
            <div className="essential-info-v3">
              <div className="info-chips-v3">
                <div className="info-chip date-chip">
                  <Calendar className="w-3 h-3" />
                  <span>{collection.weddingDate}</span>
                </div>
                <div className="info-chip location-chip">
                  <MapPin className="w-3 h-3" />
                  <span>{collection.location}</span>
                </div>
              </div>

              {/* Enhanced couple name prominence */}
              <div className="title-v3">
                <h3 className="couple-name-v3">{collection.coupleName}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Preview Section with improved mobile handling */}
      <div className="smart-preview-section-v3">
        {renderSmartPreview()}
      </div>

      {/* Enhanced Control Tower with centered layout */}
      <div className="control-tower-v3">
        {/* Desktop: Vertical text, Mobile/Tablet: Horizontal text */}
        <div className="all-images-text-v3">
          <span className="all-images-label">ALL IMAGES</span>
          <span className="arrow-wave">↗</span>
        </div>

        {/* Energy Core Display - Enhanced visibility */}
        <div className="energy-core-v3">
          <div className="core-ring-v3">
            <div className="pulse-ring-v3" />
            <div className="energy-number-v3">{totalImages}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
