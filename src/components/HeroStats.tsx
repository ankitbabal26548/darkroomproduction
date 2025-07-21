
import { useEffect, useState } from 'react';

const stats = [
  { number: 200, suffix: '+', label: 'Happy Couples' },
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 1000, suffix: '+', label: 'Photos Captured' }
];

export const HeroStats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-stats-container">
      <div className="hero-stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="hero-stat-card"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="stat-number-container">
              <div className="stat-number">
                {inView ? (
                  <CountUp end={stat.number} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <div className="stat-glow"></div>
            </div>
            <div className="stat-label">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CountUpProps {
  end: number;
  suffix?: string;
}

const CountUp = ({ end, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count}{suffix}</span>;
};
