
import { Calendar, MapPin, Images, Heart, Star, Eye } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';
import { useState, useEffect } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [dominantColor, setDominantColor] = useState('22, 65%, 45%');

  // Get remaining images after cover
  const remainingImages = collection.images.filter((_, index) => index < 6);
  const totalImages = collection.images.length;
  const gridImages = remainingImages.slice(0, 6);

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setLoadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Dynamic grid layout based on image count
  const getGridLayout = (count: number) => {
    switch (count) {
      case 1: return 'grid-cols-1 grid-rows-1';
      case 2: return 'grid-cols-1 grid-rows-2';
      case 3: return 'grid-cols-2 grid-rows-2 [&>:last-child]:row-span-2';
      case 4: return 'grid-cols-2 grid-rows-2';
      case 5: return 'grid-cols-2 grid-rows-3 [&>:nth-child(4)]:row-span-2';
      case 6: 
      default: return 'grid-cols-2 grid-rows-3';
    }
  };

  return (
    <div
      className="futuristic-card-container"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Animated Border & Particles */}
      <div className="futuristic-border">
        <div className="border-gradient"></div>
        <div className="corner-elements">
          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{ 
              animationDelay: `${i * 0.5}s`,
              left: `${10 + i * 7}%`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Main Card Content */}
      <div className="futuristic-card-content">
        
        {/* Featured Image Section (55%) */}
        <div className="featured-section">
          <div className="featured-image-container">
            <img
              src={collection.coverImage}
              alt={collection.coupleName}
              className="featured-image"
            />
            
            {/* Scan Lines Effect */}
            <div className="scan-lines"></div>
            
            {/* Holographic Overlay */}
            <div className="holographic-overlay">
              <div className="holo-gradient"></div>
            </div>

            {/* Featured Content Overlay */}
            <div className="featured-overlay">
              <div className="featured-header">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>ACTIVE</span>
                </div>
                <div className="collection-id">#{collection.id.toString().padStart(3, '0')}</div>
              </div>

              <div className="featured-content">
                <h3 className="couple-name-futuristic">{collection.coupleName}</h3>
                <div className="category-badge">
                  <span className="category-text">{collection.category}</span>
                  <div className="category-glow"></div>
                </div>
              </div>

              {/* Progress Ring */}
              <div className="progress-ring-container">
                <svg className="progress-ring" width="60" height="60">
                  <circle
                    className="progress-ring-background"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    fill="transparent"
                    r="28"
                    cx="30"
                    cy="30"
                  />
                  <circle
                    className="progress-ring-fill"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    fill="transparent"
                    r="28"
                    cx="30"
                    cy="30"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - loadProgress / 100)}`}
                  />
                </svg>
                <div className="progress-text">{Math.round(loadProgress)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Image Grid Section (40%) */}
        <div className="grid-section">
          <div className={`dynamic-grid ${getGridLayout(gridImages.length)}`}>
            {gridImages.map((image, index) => (
              <div key={image.id} className="grid-item" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="grid-image"
                />
                
                {/* Grid Item Overlay */}
                <div className="grid-overlay">
                  <div className="grid-info">
                    {index === 0 && (
                      <>
                        <Calendar className="info-icon" />
                        <span className="info-text">{collection.weddingDate}</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <MapPin className="info-icon" />
                        <span className="info-text">{collection.location}</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Images className="info-icon" />
                        <span className="info-text">{totalImages} Photos</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <Heart className="info-icon" />
                        <span className="info-text">Featured</span>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <Star className="info-icon" />
                        <span className="info-text">Premium</span>
                      </>
                    )}
                    {index === 5 && totalImages > 6 && (
                      <>
                        <Eye className="info-icon" />
                        <span className="info-text">+{totalImages - 6}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Grid Item Effects */}
                <div className="grid-effects">
                  <div className="grid-scan"></div>
                  <div className="grid-glow"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Panel */}
          <div className="action-panel">
            <button 
              className="view-button-futuristic"
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            >
              <span className="button-text">VIEW ALL</span>
              <div className="button-effects">
                <div className="button-glow"></div>
                <div className="button-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="button-particle" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </button>

            {/* Stats Display */}
            <div className="stats-display">
              <div className="stat-item">
                <span className="stat-label">IMAGES</span>
                <span className="stat-value">{totalImages}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">TYPE</span>
                <span className="stat-value">{collection.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel (5%) */}
        <div className="control-panel">
          <div className="control-indicators">
            <div className="indicator active" title="Collection Active"></div>
            <div className="indicator" title="Processing"></div>
            <div className="indicator" title="Archived"></div>
          </div>
          
          <div className="navigation-dots">
            {[...Array(Math.min(totalImages, 5))].map((_, i) => (
              <div key={i} className={`nav-dot ${i === 0 ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effects Layer */}
      {isHovered && (
        <div className="hover-effects">
          <div className="ripple-effect"></div>
          <div className="glow-layer"></div>
        </div>
      )}
    </div>
  );
};
