
interface ViewfinderHUDProps {
  scrollProgress: number;
}

export const ViewfinderHUD = ({ scrollProgress }: ViewfinderHUDProps) => {
  return (
    <div className="viewfinder-hud">
      {/* Camera Settings Display */}
      <div className="hud-settings">
        <div className="setting-group">
          <span className="setting-label">ISO</span>
          <span className="setting-value">800</span>
        </div>
        <div className="setting-divider" />
        <div className="setting-group">
          <span className="setting-label">f/</span>
          <span className="setting-value">2.8</span>
        </div>
        <div className="setting-divider" />
        <div className="setting-group">
          <span className="setting-label">1/</span>
          <span className="setting-value">125</span>
        </div>
      </div>
      
      {/* Light Meter Visualization */}
      <div className="light-meter">
        <div className="meter-scale">
          {[-2, -1, 0, 1, 2].map((stop) => (
            <div key={stop} className={`meter-tick ${stop === 0 ? 'meter-center' : ''}`}>
              <div className="tick-mark" />
              <span className="tick-label">{stop > 0 ? `+${stop}` : stop}</span>
            </div>
          ))}
        </div>
        <div 
          className="meter-indicator"
          style={{ 
            transform: `translateX(${(scrollProgress - 50) * 0.8}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      {/* Focus Points */}
      <div className="focus-points">
        <div className="focus-point focus-point-center active">
          <div className="focus-brackets">
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-tr" />
            <div className="bracket bracket-bl" />
            <div className="bracket bracket-br" />
          </div>
        </div>
      </div>
      
      {/* Recording Indicator */}
      <div className="recording-indicator">
        <div className="rec-dot animate-pulse" />
        <span className="rec-text">LIVE</span>
      </div>
    </div>
  );
};
