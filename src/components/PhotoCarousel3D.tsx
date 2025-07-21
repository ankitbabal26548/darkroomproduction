
import React, { useState, useRef, useEffect } from 'react';
import heroWedding1 from '@/assets/hero-wedding-1.jpg';
import heroPrewedding1 from '@/assets/hero-prewedding-1.jpg';
import heroWedding2 from '@/assets/hero-wedding-1.jpg';

interface PhotoCarousel3DProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const carouselData = [
  {
    image: heroWedding1,
    title: "Neural Wedding Capture",
    metadata: { format: "RAW+", resolution: "8K", exposure: "1/250s", iso: "400" }
  },
  {
    image: heroPrewedding1,
    title: "Emotion Mapping Session",
    metadata: { format: "RAW+", resolution: "6K", exposure: "1/160s", iso: "200" }
  },
  {
    image: heroWedding2,
    title: "Cinematic Documentation",
    metadata: { format: "ProRes", resolution: "4K", exposure: "1/120s", iso: "800" }
  }
];

export const PhotoCarousel3D = ({ currentSlide, onSlideChange }: PhotoCarousel3DProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      onSlideChange(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="photo-carousel-3d" ref={containerRef}>
      {/* Holographic Frame */}
      <div className="holographic-frame">
        <div className="frame-corner top-left"></div>
        <div className="frame-corner top-right"></div>
        <div className="frame-corner bottom-left"></div>
        <div className="frame-corner bottom-right"></div>
        
        <div className="frame-scanner"></div>
      </div>

      {/* 3D Image Display */}
      <div className="image-display-3d">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`image-layer ${index === currentSlide ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              transform: `
                translateZ(${index === currentSlide ? '0px' : '-100px'}) 
                rotateY(${index === currentSlide ? '0deg' : '45deg'}) 
                scale(${index === currentSlide ? '1' : '0.8'})
              `,
              opacity: index === currentSlide ? 1 : 0.3
            }}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="carousel-image"
            />
            
            {/* Particle Burst Effect */}
            {index === currentSlide && (
              <div className="particle-burst">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="burst-particle"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-50px)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}

            {/* Holographic Overlay */}
            <div className="holographic-overlay">
              <div className="scan-line"></div>
              <div className="data-stream">
                <div className="data-point"></div>
                <div className="data-point"></div>
                <div className="data-point"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Metadata Display */}
      <div className="metadata-display">
        <div className="metadata-panel">
          <div className="panel-title">{carouselData[currentSlide].title}</div>
          <div className="metadata-grid">
            {Object.entries(carouselData[currentSlide].metadata).map(([key, value]) => (
              <div key={key} className="metadata-item">
                <span className="metadata-key">{key}:</span>
                <span className="metadata-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Orbs */}
      <div className="navigation-orbs">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`nav-orb ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          >
            <div className="orb-core"></div>
            <div className="orb-ring"></div>
            <div className="orb-pulse"></div>
          </button>
        ))}
      </div>

      {/* Energy Field */}
      <div className="energy-field">
        <div className="energy-line horizontal"></div>
        <div className="energy-line vertical"></div>
        <div className="energy-node top-left"></div>
        <div className="energy-node top-right"></div>
        <div className="energy-node bottom-left"></div>
        <div className="energy-node bottom-right"></div>
      </div>
    </div>
  );
};
