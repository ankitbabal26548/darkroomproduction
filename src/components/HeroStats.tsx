
import { useEffect, useState } from 'react';

const stats = [
  { number: 200, suffix: '+', label: 'Happy Couples', icon: '💕' },
  { number: 5, suffix: '+', label: 'Years Mastery', icon: '🏆' },
  { number: 1000, suffix: '+', label: 'Moments Captured', icon: '📸' }
];

interface HeroStatsProps {
  isVisible: boolean;
}

export const HeroStats = ({ isVisible }: HeroStatsProps) => {
  return (
    <div className={`grid grid-cols-3 gap-4 pt-8 border-t border-accent/20 ${isVisible ? 'animate-stats-reveal' : 'opacity-0'}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-2 group">
          <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className="font-playfair text-2xl sm:text-3xl font-bold text-accent">
            {isVisible ? (
              <EnhancedCountUp end={stat.number} suffix={stat.suffix} delay={index * 200} />
            ) : (
              '0'
            )}
          </div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </div>
          <div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-accent to-accent-lighter rounded-full transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

interface EnhancedCountUpProps {
  end: number;
  suffix?: string;
  delay?: number;
}

const EnhancedCountUp = ({ end, suffix = '', delay = 0 }: EnhancedCountUpProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, hasStarted]);

  return (
    <span className="inline-block animate-counter-glow">
      {count}{suffix}
    </span>
  );
};
