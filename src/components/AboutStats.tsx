
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
    <div ref={statsRef} className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="stat-card group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Modern Glass Card */}
            <div className="relative p-8 bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl border border-accent/10 backdrop-blur-sm hover:border-accent/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative text-center space-y-6">
                {/* Modern Icon */}
                <div className="stat-icon-container">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                
                {/* Animated Number */}
                <div className="space-y-3">
                  <div className="stat-number">
                    {isVisible && (
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2500}
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-lg text-foreground/90">
                    {stat.label}
                  </h4>
                </div>

                {/* Modern Progress Bar */}
                <div className="space-y-3">
                  <div className="relative">
                    <Progress 
                      value={isVisible ? stat.progress : 0} 
                      className="h-3 bg-muted/50 border border-accent/20 rounded-full overflow-hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {stat.progress}% Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
