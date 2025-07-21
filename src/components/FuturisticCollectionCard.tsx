
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
            {/* Rajasthani decorative overlay */}
            <div className="rajasthani-preview-overlay" />
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

  // Create vertical text for "ALL IMAGES >"
  const createVerticalText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="vertical-text-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div
      className="futuristic-collection-card-v2 rajasthani-card"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Enhanced Holographic Effects with Rajasthani elements */}
      <div className="holographic-border-v2" />
      <div className="energy-field" />
      <div className="particle-stream" />
      <div className="rajasthani-mandala-overlay" />

      {/* Featured Section - 65% */}
      <div className="featured-section-v2">
        <div className="featured-image-container-v2">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="featured-image-v2"
          />
          <div className="featured-overlay-v2">
            {/* Rajasthani Corner Decorations */}
            <div className="corner-ui-minimal rajasthani-corners">
              <div className="corner-element top-left">
                <div className="rajasthani-corner-pattern" />
              </div>
              <div className="corner-element top-right">
                <div className="rajasthani-corner-pattern" />
              </div>
              <div className="corner-element bottom-left">
                <div className="rajasthani-corner-pattern" />
              </div>
              <div className="corner-element bottom-right">
                <div className="rajasthani-corner-pattern" />
              </div>
            </div>
            
            {/* Essential Info with Rajasthani styling */}
            <div className="essential-info">
              <div className="info-chips rajasthani-chips">
                <div className="info-chip date-chip rajasthani-chip">
                  <Calendar className="w-3 h-3" />
                  <span>{collection.weddingDate}</span>
                </div>
                <div className="info-chip location-chip rajasthani-chip">
                  <MapPin className="w-3 h-3" />
                  <span>{collection.location}</span>
                </div>
              </div>

              <div className="title-minimal">
                <h3 className="couple-name-v2 rajasthani-title">{collection.coupleName}</h3>
                <span className="collection-category-v2 rajasthani-category">{collection.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Preview Section - 30% */}
      <div className="smart-preview-section">
        {renderSmartPreview()}
      </div>

      {/* Control Tower - 5% with Vertical Text */}
      <div className="control-tower rajasthani-tower">
        {/* Energy Core Display */}
        <div className="energy-core rajasthani-core">
          <div className="core-ring">
            <div className="pulse-ring" />
            <div className="energy-number">{totalImages}</div>
          </div>
          <div className="rajasthani-core-pattern" />
        </div>

        {/* Particle Stream Effect */}
        <div className="tower-particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>

        {/* Vertical Text Button - "ALL IMAGES >" */}
        <button 
          className="vertical-text-button rajasthani-button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <div className="vertical-text-container">
            <div className="vertical-text-line">
              {createVerticalText('ALL')}
            </div>
            <div className="vertical-text-line">
              {createVerticalText('IMAGES')}
            </div>
            <div className="vertical-text-arrow">
              <span className="vertical-text-char">></span>
            </div>
            <div className="vertical-text-count">
              <span className="vertical-text-char">(</span>
              <span className="vertical-text-char">{totalImages}</span>
              <span className="vertical-text-char">)</span>
            </div>
          </div>
          
          {/* Rajasthani Holographic Effect */}
          <div className="button-hologram rajasthani-hologram" />
        </button>

        {/* Mini Preview Dots with Rajasthani styling */}
        <div className="preview-dots rajasthani-dots">
          {previewImages.slice(0, 3).map((_, index) => (
            <div key={index} className="preview-dot rajasthani-dot" />
          ))}
        </div>
      </div>
    </div>
  );
};
