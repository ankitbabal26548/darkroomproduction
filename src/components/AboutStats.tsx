
import { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { CircularProgress } from './CircularProgress';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface AboutStatsProps {
  stats: StatItem[];
}

export const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="stats-card relative p-8 rounded-3xl bg-gradient-to-br from-background via-background to-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-glow hover:scale-105">
              {/* Circular Progress Background */}
              <div className="absolute inset-4 rounded-2xl opacity-10">
                <CircularProgress 
                  percentage={stat.suffix === '%' ? stat.number : Math.min((stat.number / 500) * 100, 100)}
                  color={stat.color}
                />
              </div>
              
              <div className="relative z-10 text-center space-y-4">
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-darker/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-accent group-hover:text-accent-darker transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Counter */}
                <div className="space-y-2">
                  <div className="font-playfair text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-darker">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
