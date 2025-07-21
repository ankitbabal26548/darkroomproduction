
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
            <div className="preview-overlay">
              <span className="preview-category">{img.category}</span>
            </div>
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
      className="futuristic-collection-card-v2"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Enhanced Creative Effects */}
      <div className="holographic-border-v2" />
      <div className="energy-field" />
      <div className="particle-stream" />
      <div className="magnetic-glow" />
      <div className="floating-particles">
        <div className="particle-dot particle-1" />
        <div className="particle-dot particle-2" />
        <div className="particle-dot particle-3" />
      </div>

      {/* Featured Section - Enhanced with better proportions */}
      <div className="featured-section-v2">
        <div className="featured-image-container-v2">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="featured-image-v2"
          />
          <div className="featured-overlay-v2">
            {/* Enhanced Corner UI with organic curves */}
            <div className="corner-ui-enhanced">
              <div className="corner-element top-left" />
              <div className="corner-element top-right" />
              <div className="corner-element bottom-left" />
              <div className="corner-element bottom-right" />
            </div>
            
            {/* Essential Info with improved spacing */}
            <div className="essential-info-enhanced">
              <div className="info-chips-enhanced">
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
              <div className="title-enhanced">
                <h3 className="couple-name-enhanced">{collection.coupleName}</h3>
                <span className="collection-category-enhanced">{collection.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Preview Section with improved mobile handling */}
      <div className="smart-preview-section-enhanced">
        {renderSmartPreview()}
      </div>

      {/* Enhanced Control Tower with better mobile experience */}
      <div className="control-tower-enhanced">
        {/* Energy Core Display */}
        <div className="energy-core-enhanced">
          <div className="core-ring-enhanced">
            <div className="pulse-ring-enhanced" />
            <div className="energy-number-enhanced">{totalImages}</div>
          </div>
        </div>

        {/* Enhanced All Images Text */}
        <div className="all-images-text">
          <div className="text-vertical">
            <span>A</span><span>L</span><span>L</span>
            <span className="spacer"></span>
            <span>I</span><span>M</span><span>A</span><span>G</span><span>E</span><span>S</span>
            <span className="spacer"></span>
            <span className="arrow">></span>
          </div>
          <div className="image-count">({totalImages})</div>
        </div>

        {/* Enhanced Preview Dots */}
        <div className="preview-dots-enhanced">
          {previewImages.slice(0, 3).map((_, index) => (
            <div key={index} className="preview-dot-enhanced" />
          ))}
        </div>
      </div>
    </div>
  );
};
