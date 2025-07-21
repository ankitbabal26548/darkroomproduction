
import { useState } from 'react';
import { Calendar, MapPin, Camera, Sparkles, Eye } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface CompactFuturisticCollectionCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  index: number;
  isVisible: boolean;
}

export const CompactFuturisticCollectionCard = ({
  collection,
  onOpen,
  index,
  isVisible
}: CompactFuturisticCollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      'traditional': 'Classic Romance',
      'destination': 'Adventure Love',
      'beach': 'Seaside Dreams',
      'garden': 'Garden Paradise',
      'palace': 'Royal Elegance',
      'modern': 'Modern Love'
    };
    return categoryMap[category] || 'Love Story';
  };

  const overlayImages = collection.images.slice(1, 4);
  const photoCount = collection.images.length;

  return (
    <div 
      className={`compact-futuristic-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="compact-card-container">
        {/* Featured Image Section - 60% width */}
        <div className="featured-section">
          <div className="featured-image-container">
            <img
              src={collection.coverImage}
              alt={`${collection.coupleName} wedding`}
              className="featured-image"
            />
            <div className="featured-overlay">
              <div className="holographic-border" />
              <div className="featured-content">
                <div className="category-badge">
                  <Sparkles className="w-4 h-4" />
                  {getCategoryName(collection.category)}
                </div>
                <h3 className="couple-names">{collection.coupleName}</h3>
                <div className="love-story-text">Love Story Collection</div>
              </div>
              <div className="floating-particles">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Images Section - 36% width */}
        <div className="overlay-section">
          {/* Overlay Image 1 - Date & Location */}
          <div className="overlay-item">
            <img
              src={overlayImages[0]?.image || collection.coverImage}
              alt="Wedding details"
              className="overlay-image"
            />
            <div className="glassmorphism-panel">
              <div className="info-item">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="info-text">{collection.weddingDate}</span>
              </div>
              <div className="info-item">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="info-text location-text">{collection.location}</span>
              </div>
            </div>
          </div>

          {/* Overlay Image 2 - Photo Count & Highlights */}
          <div className="overlay-item">
            <img
              src={overlayImages[1]?.image || collection.coverImage}
              alt="Wedding highlights"
              className="overlay-image"
            />
            <div className="glassmorphism-panel">
              <div className="info-item">
                <Camera className="w-4 h-4 text-yellow-400" />
                <span className="info-text">{photoCount} Beautiful Memories</span>
              </div>
              <div className="highlights-list">
                {collection.highlights.slice(0, 2).map((highlight, i) => (
                  <div key={i} className="highlight-tag">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay Image 3 - CTA Button */}
          <div className="overlay-item">
            <img
              src={overlayImages[2]?.image || collection.coverImage}
              alt="View collection"
              className="overlay-image"
            />
            <div className="glassmorphism-panel cta-panel">
              <button
                onClick={onOpen}
                className="futuristic-cta-button"
              >
                <Eye className="w-5 h-5" />
                <span>View Their Story</span>
                <div className="button-glow" />
              </button>
              {collection.featured && (
                <div className="featured-indicator">
                  <Sparkles className="w-4 h-4" />
                  <span>Featured Collection</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      {isHovered && (
        <div className="hover-effects">
          <div className="energy-field" />
          <div className="scanning-line" />
        </div>
      )}
    </div>
  );
};
