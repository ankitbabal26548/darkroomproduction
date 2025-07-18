
import { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { Progress } from './ui/progress';
import { useEffect, useState, useRef } from 'react';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  progress: number;
}

interface AboutStatsProps {
  stats: StatItem[];
}

export const AboutStats = ({ stats }: AboutStatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              
              {/* Number */}
              <div className="space-y-2">
                <div className="font-playfair text-4xl font-bold text-foreground">
                  {isVisible && (
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  )}
                </div>
                <h4 className="font-semibold text-foreground/90">
                  {stat.label}
                </h4>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress 
                  value={isVisible ? stat.progress : 0} 
                  className="h-2 bg-muted"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
