
import { Calendar, MapPin, Eye, Zap } from 'lucide-react';
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
      {/* Enhanced Holographic Effects */}
      <div className="holographic-border-v2" />
      <div className="energy-field" />
      <div className="particle-stream" />

      {/* Featured Section - 65% */}
      <div className="featured-section-v2">
        <div className="featured-image-container-v2">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="featured-image-v2"
          />
          <div className="featured-overlay-v2">
            {/* Minimal Corner UI */}
            <div className="corner-ui-minimal">
              <div className="corner-element top-left" />
              <div className="corner-element top-right" />
              <div className="corner-element bottom-left" />
              <div className="corner-element bottom-right" />
            </div>
            
            {/* Essential Info Only */}
            <div className="essential-info">
              <div className="info-chips">
                <div className="info-chip date-chip">
                  <Calendar className="w-3 h-3" />
                  <span>{collection.weddingDate}</span>
                </div>
                <div className="info-chip location-chip">
                  <MapPin className="w-3 h-3" />
                  <span>{collection.location}</span>
                </div>
              </div>

              <div className="title-minimal">
                <h3 className="couple-name-v2">{collection.coupleName}</h3>
                <span className="collection-category-v2">{collection.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Preview Section - 30% */}
      <div className="smart-preview-section">
        {renderSmartPreview()}
      </div>

      {/* Control Tower - 5% */}
      <div className="control-tower">
        {/* Energy Core Display */}
        <div className="energy-core">
          <div className="core-ring">
            <div className="pulse-ring" />
            <div className="energy-number">{totalImages}</div>
          </div>
        </div>

        {/* Particle Stream Effect */}
        <div className="tower-particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>

        {/* Explore Button */}
        <button 
          className="explore-button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <Eye className="w-4 h-4" />
          <span className="explore-text">EXPLORE</span>
          
          {/* Holographic Effect */}
          <div className="button-hologram" />
        </button>

        {/* Mini Preview Dots */}
        <div className="preview-dots">
          {previewImages.slice(0, 3).map((_, index) => (
            <div key={index} className="preview-dot" />
          ))}
        </div>
      </div>
    </div>
  );
};
