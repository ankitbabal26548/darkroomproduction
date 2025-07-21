
import { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Heart, Star, Eye } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface CinematicCollectionCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  index: number;
  isVisible: boolean;
  isAlternate: boolean;
}

export const CinematicCollectionCard = ({ 
  collection, 
  onOpen, 
  index, 
  isVisible, 
  isAlternate 
}: CinematicCollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const previewImages = collection.images.slice(0, 4);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setMousePosition({ x, y });
  };

  const cardTransform = isHovered 
    ? `perspective(1000px) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * 8}deg) translateZ(50px)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';

  // Generate romantic headline
  const generateHeadline = () => {
    const headlines = [
      "A Fairytale Beginning",
      "Love Under the Stars", 
      "Dreams Come True",
      "Forever Starts Here",
      "A Perfect Day",
      "Hearts United",
      "Magic in Every Moment"
    ];
    return headlines[index % headlines.length];
  };

  return (
    <div 
      className={`cinematic-collection-card ${isAlternate ? 'alternate' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ 
        animationDelay: `${index * 300}ms`,
      }}
    >
      <div className="cinematic-collection-inner">
        {/* Content Side */}
        <div className={`cinematic-content-side ${isAlternate ? 'order-2' : 'order-1'}`}>
          <div className="luxury-content-panel">
            {/* Elegant Header */}
            <div className="luxury-header">
              <div className="romantic-badge">
                <Heart className="w-4 h-4 fill-current text-accent" />
                <span className="text-sm font-medium">Love Story</span>
              </div>
              
              {collection.featured && (
                <div className="featured-badge">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              )}
            </div>

            {/* Romantic Content */}
            <div className="luxury-content-body">
              <h3 className="romantic-headline">
                {generateHeadline()}
              </h3>
              
              <h4 className="couple-names">
                {collection.coupleName}
              </h4>

              <p className="love-story-description">
                {collection.description}
              </p>

              {/* Wedding Details */}
              <div className="wedding-details">
                <div className="detail-item">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="detail-text">{collection.weddingDate}</span>
                </div>
                <div className="detail-item">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="detail-text">{collection.location}</span>
                </div>
                <div className="detail-item">
                  <Eye className="w-5 h-5 text-accent" />
                  <span className="detail-text">{collection.images.length} Beautiful Memories</span>
                </div>
              </div>

              {/* Special Moments */}
              <div className="special-moments">
                <h5 className="moments-title">Special Moments</h5>
                <div className="moments-tags">
                  {collection.highlights.slice(0, 3).map((moment, idx) => (
                    <span key={idx} className="moment-tag">
                      {moment}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <button 
                onClick={onOpen}
                className="luxury-cta-button group"
              >
                <span className="cta-text">View Their Story</span>
                <div className="cta-shimmer" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className={`cinematic-visual-side ${isAlternate ? 'order-1' : 'order-2'}`}>
          <div 
            ref={cardRef}
            className="floating-display-container"
            style={{ transform: cardTransform }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onOpen}
          >
            {/* Main Image Display */}
            <div className="main-image-display">
              <img
                src={collection.coverImage}
                alt={collection.coupleName}
                className="hero-image"
              />
              
              {/* Holographic Overlay */}
              <div className="holographic-overlay">
                <div className="prismatic-border" />
                <div className="energy-field" />
              </div>
              
              {/* Floating Particles */}
              <div className="floating-particles">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="particle"
                    style={{ 
                      animationDelay: `${i * 0.5}s`,
                      left: `${20 + (i * 10)}%`,
                      top: `${10 + (i * 8)}%`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Preview Gallery */}
            <div className="preview-gallery">
              {previewImages.map((image, idx) => (
                <div 
                  key={image.id} 
                  className="preview-frame"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="preview-image"
                  />
                  <div className="frame-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
