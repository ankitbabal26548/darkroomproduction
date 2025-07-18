
import { useEffect, useState } from 'react';

const stats = [
  { number: 200, suffix: '+', label: 'Happy Couples', icon: '💕' },
  { number: 5, suffix: '+', label: 'Years Experience', icon: '⭐' },
  { number: 1000, suffix: '+', label: 'Photos Captured', icon: '📸' }
];

export const HeroStats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-accent/20 bg-background/20 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up animation-delay-400">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="text-center space-y-2 group hover:scale-105 transition-transform duration-300"
        >
          {/* Icon */}
          <div className="text-2xl mb-1 animate-bounce animation-delay-500" style={{ animationDelay: `${index * 0.2}s` }}>
            {stat.icon}
          </div>
          
          {/* Number */}
          <div className="font-playfair text-3xl sm:text-4xl font-bold text-accent group-hover:text-accent-lighter transition-colors">
            {inView ? (
              <CountUp end={stat.number} suffix={stat.suffix} delay={index * 200} />
            ) : (
              '0'
            )}
          </div>
          
          {/* Label */}
          <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-accent transition-colors">
            {stat.label}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent-lighter rounded-full transition-all duration-2000 ease-out"
              style={{ 
                width: inView ? '100%' : '0%',
                transitionDelay: `${index * 200 + 500}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

interface CountUpProps {
  end: number;
  suffix?: string;
  delay?: number;
}

const CountUp = ({ end, suffix = '', delay = 0 }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutCubic * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, delay]);

  return <span>{count}{suffix}</span>;
};
