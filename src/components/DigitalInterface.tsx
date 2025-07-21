
import React, { useState, useEffect } from 'react';
import { EnergyButton } from './EnergyButton';
import { Play, ArrowRight, Zap, Camera, Target } from 'lucide-react';

interface DigitalInterfaceProps {
  currentSlide: number;
  isLoaded: boolean;
  onSlideChange: (index: number) => void;
}

const interfaceData = [
  {
    title: "NEURAL CAPTURE SYSTEM",
    subtitle: "Wedding Photography Protocol",
    description: "AI-enhanced visual storytelling with quantum precision capture technology",
    stats: { captures: 15000, accuracy: 99.8, clients: 250 }
  },
  {
    title: "EMOTION RECOGNITION AI",
    subtitle: "Pre-Wedding Analysis Mode",
    description: "Advanced emotional mapping and moment prediction algorithms",
    stats: { captures: 8500, accuracy: 97.5, clients: 180 }
  },
  {
    title: "CINEMATIC FUSION ENGINE",
    subtitle: "Event Documentation System",
    description: "Multi-dimensional event capture with real-time editing protocols",
    stats: { captures: 22000, accuracy: 98.9, clients: 320 }
  }
];

export const DigitalInterface = ({ currentSlide, isLoaded, onSlideChange }: DigitalInterfaceProps) => {
  const [typingText, setTypingText] = useState('');
  const [currentStats, setCurrentStats] = useState(interfaceData[0].stats);
  
  const currentData = interfaceData[currentSlide];

  useEffect(() => {
    let index = 0;
    const text = currentData.title;
    setTypingText('');
    
    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [currentSlide, currentData.title]);

  useEffect(() => {
    setCurrentStats(currentData.stats);
  }, [currentData.stats]);

  return (
    <div className={`digital-interface ${isLoaded ? 'interface-loaded' : ''}`}>
      {/* Brand Header */}
      <div className="brand-module">
        <div className="brand-identifier">
          <div className="holographic-badge">
            <Zap className="w-4 h-4" />
            <span>DARKROOM.SYS</span>
          </div>
        </div>
        <h1 className="brand-title">
          <span className="primary-text">DARKROOM</span>
          <span className="accent-text">PRODUCTION</span>
        </h1>
      </div>

      {/* Main Interface Panel */}
      <div className="interface-panel">
        <div className="panel-header">
          <div className="status-bar">
            <div className="status-dot active"></div>
            <span className="status-text">SYSTEM ACTIVE</span>
          </div>
        </div>

        <div className="content-module">
          <div className="title-section">
            <h2 className="system-title">
              {typingText}
              <span className="cursor-blink">|</span>
            </h2>
            <p className="subtitle-text">{currentData.subtitle}</p>
          </div>

          <div className="description-panel">
            <p className="description-text">{currentData.description}</p>
          </div>

          {/* Live Statistics */}
          <div className="stats-grid">
            <div className="stat-module">
              <div className="stat-value">
                <span className="stat-number">{currentStats.captures.toLocaleString()}</span>
                <span className="stat-unit">+</span>
              </div>
              <div className="stat-label">CAPTURES</div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="stat-module">
              <div className="stat-value">
                <span className="stat-number">{currentStats.accuracy}</span>
                <span className="stat-unit">%</span>
              </div>
              <div className="stat-label">PRECISION</div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="stat-module">
              <div className="stat-value">
                <span className="stat-number">{currentStats.clients}</span>
                <span className="stat-unit">+</span>
              </div>
              <div className="stat-label">CLIENTS</div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="action-controls">
          <EnergyButton 
            variant="primary" 
            icon={<Target className="w-5 h-5" />}
          >
            INITIATE CAPTURE
          </EnergyButton>
          
          <EnergyButton 
            variant="secondary" 
            icon={<Play className="w-5 h-5" />}
          >
            VIEW PORTFOLIO
          </EnergyButton>
        </div>

        {/* Mission Status */}
        <div className="mission-status">
          <div className="status-item">
            <Camera className="w-4 h-4" />
            <span>5+ YEARS ACTIVE</span>
          </div>
          <div className="status-item">
            <ArrowRight className="w-4 h-4" />
            <span>200+ MISSIONS COMPLETE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
