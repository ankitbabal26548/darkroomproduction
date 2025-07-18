
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
            className="group relative overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Glassmorphism card */}
            <div className="relative p-8 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm rounded-3xl border border-accent/20 shadow-elegant hover:shadow-professional transition-all duration-500 hover:scale-105 hover:border-accent/40">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-lighter/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative text-center space-y-6">
                {/* Enhanced Icon */}
                <div className="relative mx-auto">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <stat.icon className="w-10 h-10 text-accent group-hover:text-accent-darker transition-colors duration-300" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-accent/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>
                
                {/* Enhanced Number */}
                <div className="space-y-3">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-accent">
                    {isVisible && (
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground/90 text-lg group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </h4>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="space-y-3">
                  <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-lighter rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${stat.progress}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {isVisible ? stat.progress : 0}%
                  </span>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
