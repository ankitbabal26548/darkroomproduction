
import { Calendar, MapPin, Images, Eye } from 'lucide-react';
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
  const remainingCount = remainingImages.length;

  const renderImageGrid = () => {
    if (remainingCount === 0) {
      return (
        <div className="grid-placeholder">
          <div className="placeholder-content">
            <Images className="w-8 h-8 text-accent/50" />
            <span className="text-sm text-muted-foreground">No additional images</span>
          </div>
        </div>
      );
    }

    if (remainingCount === 1) {
      return (
        <div className="image-grid grid-1">
          <div className="grid-image-container">
            <img src={remainingImages[0].image} alt={remainingImages[0].title} className="grid-image" />
            <div className="grid-overlay" />
          </div>
        </div>
      );
    }

    if (remainingCount === 2) {
      return (
        <div className="image-grid grid-2">
          {remainingImages.slice(0, 2).map((img, index) => (
            <div key={index} className="grid-image-container">
              <img src={img.image} alt={img.title} className="grid-image" />
              <div className="grid-overlay" />
            </div>
          ))}
        </div>
      );
    }

    if (remainingCount === 3) {
      return (
        <div className="image-grid grid-3">
          <div className="grid-image-container grid-top">
            <img src={remainingImages[0].image} alt={remainingImages[0].title} className="grid-image" />
            <div className="grid-overlay" />
          </div>
          <div className="grid-bottom">
            {remainingImages.slice(1, 3).map((img, index) => (
              <div key={index} className="grid-image-container">
                <img src={img.image} alt={img.title} className="grid-image" />
                <div className="grid-overlay" />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (remainingCount === 4) {
      return (
        <div className="image-grid grid-4">
          {remainingImages.slice(0, 4).map((img, index) => (
            <div key={index} className="grid-image-container">
              <img src={img.image} alt={img.title} className="grid-image" />
              <div className="grid-overlay" />
            </div>
          ))}
        </div>
      );
    }

    if (remainingCount === 5) {
      return (
        <div className="image-grid grid-5">
          <div className="grid-main">
            {remainingImages.slice(0, 4).map((img, index) => (
              <div key={index} className="grid-image-container">
                <img src={img.image} alt={img.title} className="grid-image" />
                <div className="grid-overlay" />
              </div>
            ))}
          </div>
          <div className="grid-bottom-strip">
            <div className="grid-image-container">
              <img src={remainingImages[4].image} alt={remainingImages[4].title} className="grid-image" />
              <div className="grid-overlay" />
            </div>
          </div>
        </div>
      );
    }

    // 6+ images
    return (
      <div className="image-grid grid-6-plus">
        {remainingImages.slice(0, 5).map((img, index) => (
          <div key={index} className="grid-image-container">
            <img src={img.image} alt={img.title} className="grid-image" />
            <div className="grid-overlay" />
          </div>
        ))}
        <div className="grid-image-container more-images">
          <img src={remainingImages[5].image} alt={remainingImages[5].title} className="grid-image" />
          <div className="grid-overlay more-overlay">
            <span className="more-count">+{remainingCount - 5}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="futuristic-collection-card"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Holographic Border Effects */}
      <div className="holographic-border" />
      <div className="scan-lines" />
      <div className="particle-effects" />

      {/* Featured Image Area - 55% */}
      <div className="featured-section">
        <div className="featured-image-container">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="featured-image"
          />
          <div className="featured-overlay">
            {/* Floating UI Elements */}
            <div className="ui-corners">
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />
            </div>
            
            {/* Info Badges */}
            <div className="info-badges">
              <div className="badge date-badge">
                <Calendar className="w-3 h-3" />
                <span>{collection.weddingDate}</span>
              </div>
              <div className="badge location-badge">
                <MapPin className="w-3 h-3" />
                <span>{collection.location}</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="title-section">
              <h3 className="couple-name">{collection.coupleName}</h3>
              <span className="collection-category">{collection.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Image Grid - 40% */}
      <div className="grid-section">
        {renderImageGrid()}
        
        {/* Grid Info Overlay */}
        <div className="grid-info">
          <div className="image-count">
            <Images className="w-4 h-4" />
            <span>{collection.images.length} Images</span>
          </div>
        </div>
      </div>

      {/* Control Panel - 5% */}
      <div className="control-panel">
        <button 
          className="view-button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <Eye className="w-4 h-4" />
          <span className="button-text">VIEW</span>
          <span className="button-text">IMAGES</span>
          
          {/* Progress Ring */}
          <div className="progress-ring">
            <svg className="progress-svg" viewBox="0 0 36 36">
              <circle
                className="progress-bg"
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                className="progress-bar"
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset="25"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
