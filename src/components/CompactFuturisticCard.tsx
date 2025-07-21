
import { useState } from 'react';
import { Calendar, MapPin, Eye, Star, Heart } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface CompactFuturisticCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  index: number;
}

export const CompactFuturisticCard = ({ 
  collection, 
  onOpen, 
  index 
}: CompactFuturisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayImages = collection.images.slice(1, 4);

  return (
    <div 
      className="compact-futuristic-card"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Featured Image Section (60% width) */}
        <div className="featured-section">
          <div className="featured-image-container">
            <img
              src={collection.coverImage}
              alt={collection.coupleName}
              className="featured-image"
            />
            
            {/* Holographic Overlay */}
            <div className="holographic-overlay" />
            
            {/* Couple Name Overlay */}
            <div className="couple-name-overlay">
              <div className="name-glow" />
              <h3 className="couple-title">{collection.coupleName}</h3>
              {collection.featured && (
                <div className="featured-badge">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Featured</span>
                </div>
              )}
            </div>

            {/* View Story Button */}
            <div className="view-story-button">
              <button onClick={onOpen} className="story-cta">
                <Heart className="w-5 h-5" />
                <span>View Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay Images Section (36% width total) */}
        <div className="overlay-section">
          {overlayImages.map((image, idx) => (
            <div key={image.id} className="overlay-image-panel">
              <div className="overlay-image-container">
                <img
                  src={image.image}
                  alt={image.title}
                  className="overlay-image"
                />
                
                {/* Glass Panel with Information */}
                <div className="glass-info-panel">
                  {idx === 0 && (
                    <div className="info-content">
                      <div className="info-icon">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="info-text">
                        <span className="info-label">Wedding Date</span>
                        <span className="info-value">{collection.weddingDate}</span>
                      </div>
                    </div>
                  )}
                  
                  {idx === 1 && (
                    <div className="info-content">
                      <div className="info-icon">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="info-text">
                        <span className="info-label">Location</span>
                        <span className="info-value">{collection.location}</span>
                      </div>
                    </div>
                  )}
                  
                  {idx === 2 && (
                    <div className="info-content">
                      <div className="info-icon">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div className="info-text">
                        <span className="info-label">Memories</span>
                        <span className="info-value">{collection.images.length} Photos</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Particle Effects */}
      <div className="particle-field">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{ 
              animationDelay: `${i * 0.8}s`,
              left: `${10 + (i * 15)}%`,
              animationDuration: `${3 + (i * 0.5)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
