
import React, { useState, useEffect } from 'react';
import { HolographicBackground } from './HolographicBackground';
import { DigitalInterface } from './DigitalInterface';
import { PhotoCarousel3D } from './PhotoCarousel3D';
import { ScanningBeam } from './ScanningBeam';

export const FuturisticHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="futuristic-hero-container">
      <HolographicBackground mousePosition={mousePosition} />
      <ScanningBeam mousePosition={mousePosition} />
      
      <div className="futuristic-hero-grid">
        <div className="digital-interface-panel">
          <DigitalInterface 
            currentSlide={currentSlide} 
            isLoaded={isLoaded}
            onSlideChange={setCurrentSlide}
          />
        </div>
        
        <div className="photo-display-panel">
          <PhotoCarousel3D 
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
          />
        </div>
      </div>

      {/* Energy Status Indicators */}
      <div className="energy-status-bar">
        <div className="status-indicator active">
          <div className="pulse-dot"></div>
          <span>SYSTEM ONLINE</span>
        </div>
        <div className="status-indicator">
          <div className="pulse-dot"></div>
          <span>CAPTURE READY</span>
        </div>
        <div className="status-indicator">
          <div className="pulse-dot"></div>
          <span>AI ENHANCED</span>
        </div>
      </div>
    </section>
  );
};
