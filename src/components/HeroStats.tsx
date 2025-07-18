
import { useEffect, useState } from 'react';
import { Users, Calendar, Camera, Award } from 'lucide-react';

const stats = [
  { 
    number: 200, 
    suffix: '+', 
    label: 'Happy Couples',
    icon: Users,
    color: 'from-accent to-accent-darker'
  },
  { 
    number: 5, 
    suffix: '+', 
    label: 'Years Experience',
    icon: Calendar,
    color: 'from-accent-darker to-accent'
  },
  { 
    number: 1000, 
    suffix: '+', 
    label: 'Photos Captured',
    icon: Camera,
    color: 'from-accent to-accent-lighter'
  },
  {
    number: 15,
    suffix: '+',
    label: 'Awards Won',
    icon: Award,
    color: 'from-accent-darker to-accent-darkest'
  }
];

export const HeroStats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="creative-stats-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="creative-stat-card group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Icon Container */}
            <div className={`creative-stat-icon bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            
            {/* Number */}
            <div className="font-playfair text-2xl lg:text-3xl font-bold text-foreground">
              {inView ? (
                <CountUp end={stat.number} suffix={stat.suffix} />
              ) : (
                '0'
              )}
            </div>
            
            {/* Label */}
            <div className="text-xs lg:text-sm font-medium text-muted-foreground uppercase tracking-wider leading-tight">
              {stat.label}
            </div>
            
            {/* Creative Accent */}
            <div className={`creative-stat-accent bg-gradient-to-r ${stat.color}`} />
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
