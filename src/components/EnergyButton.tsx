
import React from 'react';

interface EnergyButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const EnergyButton = ({ children, variant, icon, onClick }: EnergyButtonProps) => {
  return (
    <button className={`energy-button ${variant}`} onClick={onClick}>
      <div className="button-core">
        <div className="button-content">
          {icon && <span className="button-icon">{icon}</span>}
          <span className="button-text">{children}</span>
        </div>
        
        {/* Energy Ripple Effect */}
        <div className="energy-ripple"></div>
        <div className="energy-ripple ripple-2"></div>
        <div className="energy-ripple ripple-3"></div>
      </div>
      
      {/* Button Glow */}
      <div className="button-glow"></div>
      
      {/* Corner Brackets */}
      <div className="button-brackets">
        <div className="bracket top-left"></div>
        <div className="bracket top-right"></div>
        <div className="bracket bottom-left"></div>
        <div className="bracket bottom-right"></div>
      </div>
    </button>
  );
};
