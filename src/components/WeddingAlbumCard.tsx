
import { Calendar, MapPin, BookOpen, Heart } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface WeddingAlbumCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  delay?: number;
}

export const WeddingAlbumCard = ({ 
  collection, 
  onOpen, 
  delay = 0 
}: WeddingAlbumCardProps) => {
  const previewImages = collection.images.slice(1, 4); // Get 3 preview images
  const totalImages = collection.images.length;

  return (
    <div
      className="wedding-album-card"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
    >
      {/* Album Cover Effects */}
      <div className="album-cover-effects">
        <div className="leather-texture" />
        <div className="gold-foil-accent" />
        <div className="romantic-particles">
          <div className="heart-particle heart-1" />
          <div className="heart-particle heart-2" />
          <div className="heart-particle heart-3" />
        </div>
      </div>

      {/* Album Binding */}
      <div className="album-binding">
        <div className="binding-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
      </div>

      {/* Main Album Cover */}
      <div className="album-cover-section">
        <div className="cover-image-container">
          <img
            src={collection.coverImage}
            alt={collection.coupleName}
            className="cover-image"
          />
          <div className="cover-overlay">
            {/* Photo Corner Mounts */}
            <div className="photo-corners">
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
            </div>
            
            {/* Essential Wedding Info */}
            <div className="wedding-info">
              <div className="info-badges">
                <div className="info-badge date-badge">
                  <Calendar className="w-3 h-3" />
                  <span>{collection.weddingDate}</span>
                </div>
                <div className="info-badge location-badge">
                  <MapPin className="w-3 h-3" />
                  <span>{collection.location}</span>
                </div>
              </div>

              {/* Couple Names with Elegant Typography */}
              <div className="couple-section">
                <h3 className="couple-name">{collection.coupleName}</h3>
                {/* Category - Desktop Only */}
                <div className="category-badge desktop-only">
                  <span className="category-text">{collection.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Stack Preview */}
      <div className="photo-stack-section">
        <div className="photo-stack">
          {previewImages.map((image, index) => (
            <div
              key={image.id}
              className="stacked-photo"
              style={{
                zIndex: 3 - index,
                transform: `translateY(${index * 2}px) rotate(${(index - 1) * 2}deg)`
              }}
            >
              <img
                src={image.image}
                alt={image.title}
                className="stack-image"
              />
              <div className="photo-shadow" />
            </div>
          ))}
          
          {/* Fill remaining slots with elegant placeholders */}
          {Array.from({ length: 3 - previewImages.length }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="photo-placeholder"
              style={{
                zIndex: 3 - (previewImages.length + index),
                transform: `translateY(${(previewImages.length + index) * 2}px) rotate(${(previewImages.length + index - 1) * 2}deg)`
              }}
            >
              <div className="placeholder-pattern" />
            </div>
          ))}
        </div>
      </div>

      {/* Album Tab Navigation */}
      <div className="album-tab-section">
        {/* Page Counter */}
        <div className="page-counter">
          <div className="page-number-ring">
            <div className="golden-ring" />
            <span className="page-number">{totalImages}</span>
          </div>
        </div>

        {/* Album Label - Vertical Text */}
        <div className="album-label">
          <div className="vertical-text">
            <span>A</span><span>L</span><span>L</span>
            <div className="text-spacer" />
            <span>I</span><span>M</span><span>A</span><span>G</span><span>E</span><span>S</span>
          </div>
        </div>

        {/* Album Navigation Dots */}
        <div className="nav-dots">
          {previewImages.slice(0, 3).map((_, index) => (
            <div key={index} className="nav-dot" />
          ))}
        </div>

        {/* Ribbon Bookmark */}
        <div className="ribbon-bookmark">
          <BookOpen className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
