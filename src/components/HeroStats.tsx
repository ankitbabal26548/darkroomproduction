
import { useEffect, useState } from 'react';

const stats = [
  { number: 600, suffix: '+', label: 'Weddings Captured' },
  { number: 10, suffix: '', label: 'Years Experience' },
  { number: 25, suffix: '+', label: 'Team Members' }
];

export const HeroStats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/30 max-w-full">
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-1 min-w-0">
          <div className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-accent">
            {inView ? (
              <CountUp end={stat.number} suffix={stat.suffix} />
            ) : (
              '0'
            )}
          </div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider break-words">
            {stat.label}
          </div>
        </div>
      ))}
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
