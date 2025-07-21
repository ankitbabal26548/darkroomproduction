
import { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Images, Star, Play, Zap } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface HolographicCollectionCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  index: number;
  isVisible: boolean;
  isAlternate: boolean;
}

export const HolographicCollectionCard = ({ 
  collection, 
  onOpen, 
  index, 
  isVisible, 
  isAlternate 
}: HolographicCollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const previewImages = collection.images.slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setMousePosition({ x, y });
  };

  const cardTransform = isHovered 
    ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) translateZ(20px)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';

  return (
    <div 
      className={`holographic-collection-card ${isAlternate ? 'alternate' : ''} ${isVisible ? 'visible' : ''}`}
      style={{ 
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div className="holographic-collection-inner">
        {/* Content Side */}
        <div className={`holographic-content-side ${isAlternate ? 'order-2' : 'order-1'}`}>
          <div className="holographic-content-panel">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-title font-mono text-xs">
                collection_{collection.id}.archive
              </div>
            </div>

            {/* Content */}
            <div className="holographic-content-body">
              {/* Featured Badge */}
              {collection.featured && (
                <div className="holographic-badge featured-badge mb-4">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-mono text-xs">FEATURED</span>
                </div>
              )}

              {/* Category Badge */}
              <div className="holographic-badge category-badge mb-6">
                <Zap className="w-3 h-3" />
                <span className="font-mono text-xs uppercase">{collection.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4 holographic-title">
                {collection.coupleName}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {collection.description}
              </p>

              {/* Metadata Terminal */}
              <div className="metadata-terminal">
                <div className="terminal-line">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm">{collection.weddingDate}</span>
                </div>
                <div className="terminal-line">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm">{collection.location}</span>
                </div>
                <div className="terminal-line">
                  <Images className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm">{collection.images.length} frames captured</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="holographic-highlights">
                {collection.highlights.slice(0, 3).map((highlight, idx) => (
                  <span key={idx} className="holographic-tag">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={onOpen}
                className="holographic-action-button group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <span className="font-mono">Access Archive</span>
                <div className="holographic-button-glow" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className={`holographic-visual-side ${isAlternate ? 'order-1' : 'order-2'}`}>
          <div 
            ref={cardRef}
            className="holographic-display-panel"
            style={{ transform: cardTransform }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onOpen}
          >
            {/* Main Display */}
            <div className="holographic-main-display">
              <img
                src={collection.coverImage}
                alt={collection.coupleName}
                className="holographic-main-image"
              />
              
              {/* Scan Lines */}
              <div className="scan-lines" />
              
              {/* Holographic Overlay */}
              <div className="holographic-overlay">
                <div className="holographic-grid" />
              </div>
            </div>

            {/* Preview Gallery */}
            <div className="holographic-preview-gallery">
              {previewImages.map((image, idx) => (
                <div 
                  key={image.id} 
                  className="holographic-preview-frame"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="holographic-preview-image"
                  />
                  <div className="preview-scan-line" />
                </div>
              ))}
            </div>

            {/* Interactive Cursor */}
            {isHovered && (
              <div 
                className="holographic-cursor"
                style={{
                  left: `${(mousePosition.x + 1) * 50}%`,
                  top: `${(mousePosition.y + 1) * 50}%`
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
