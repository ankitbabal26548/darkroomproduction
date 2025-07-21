
import { Calendar, MapPin, Images } from 'lucide-react';
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
  const displayImages = collection.images.slice(0, 3);
  const remainingCount = Math.max(0, collection.images.length - 3);

  return (
    <div
      className="futuristic-collection-card flex cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Featured Image Area */}
      <div className="featured-image-area">
        <img
          src={collection.coverImage}
          alt={collection.coupleName}
          className="featured-image"
        />
        <div className="featured-overlay">
          <h3 className="couple-name">{collection.coupleName}</h3>
          <span className="collection-category">{collection.category}</span>
        </div>
      </div>

      {/* Info Area */}
      <div className="info-area">
        {/* Overlay Images */}
        <div className="overlay-images">
          {/* Date Info */}
          <div className="overlay-image-container">
            {displayImages[0] && (
              <img
                src={displayImages[0].image}
                alt={displayImages[0].title}
                className="overlay-image"
              />
            )}
            <div className="overlay-info">
              <div className="overlay-info-label">Wedding Date</div>
              <div className="overlay-info-value flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {collection.weddingDate}
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="overlay-image-container">
            {displayImages[1] && (
              <img
                src={displayImages[1].image}
                alt={displayImages[1].title}
                className="overlay-image"
              />
            )}
            <div className="overlay-info">
              <div className="overlay-info-label">Location</div>
              <div className="overlay-info-value flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {collection.location}
              </div>
            </div>
          </div>

          {/* Photo Count Info */}
          <div className="overlay-image-container">
            {displayImages[2] && (
              <img
                src={displayImages[2].image}
                alt={displayImages[2].title}
                className="overlay-image"
              />
            )}
            <div className="overlay-info">
              <div className="overlay-info-label">Photos</div>
              <div className="overlay-info-value flex items-center gap-1">
                <Images className="w-3 h-3" />
                {collection.images.length} Images
                {remainingCount > 0 && <span className="text-accent">+{remainingCount}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* View Button */}
        <div className="view-button-container">
          <button 
            className="view-button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            View All Images
          </button>
        </div>
      </div>
    </div>
  );
};
