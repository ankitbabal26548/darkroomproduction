
import { Heart, Eye, Clock, Shield } from 'lucide-react';

export const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Emotions",
      description: "We capture genuine moments and real emotions, creating photographs that tell your true story.",
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Eye,
      title: "Artistic Vision",
      description: "Our creative approach ensures every image is thoughtfully composed and beautifully crafted.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Clock,
      title: "Timely Excellence",
      description: "Professional delivery and punctual service, because your memories shouldn't wait.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Fully insured and committed to providing a stress-free, professional experience.",
      gradient: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <div className="values-container">
      <div className="values-header">
        <div className="values-badge">
          <span className="text-sm font-medium text-accent">Core Values</span>
        </div>
        <h3 className="values-title">
          What Drives Us Forward
        </h3>
        <p className="values-subtitle">
          The principles that guide everything we do
        </p>
      </div>

      <div className="values-masonry-grid">
        {values.map((value, index) => (
          <div 
            key={index}
            className="value-card group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`value-card-inner bg-gradient-to-br ${value.gradient}`}>
              {/* Modern Icon Container */}
              <div className="value-icon-container">
                <div className="value-icon-bg">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              {/* Content */}
              <div className="value-content">
                <h4 className="value-title">
                  {value.title}
                </h4>
                <p className="value-description">
                  {value.description}
                </p>
              </div>

              {/* Hover Effect Elements */}
              <div className="value-hover-effect"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
