
import { useState, useEffect } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { Zap } from 'lucide-react';

interface DigitalInterfaceProps {
  isLoaded: boolean;
  stats: Array<{
    value: number;
    label: string;
    icon: any;
    suffix?: string;
  }>;
}

export const DigitalInterface = ({ isLoaded, stats }: DigitalInterfaceProps) => {
  return (
    <div className="digital-interface-panel relative">
      {/* Glassmorphism Panel */}
      <div className="glass-panel relative backdrop-blur-xl bg-background/10 border border-accent/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        {/* Status Indicator */}
        <div className={`flex items-center space-x-2 mb-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-mono text-accent uppercase tracking-wider">Creating Timeless Memories</span>
          </div>
          <Zap className="w-4 h-4 text-accent animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className={`space-y-4 mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
            <span className="block">Darkroom</span>
            <span className="block text-accent">Production</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Professional wedding photography and cinematography. 
            Capturing life's most precious moments with artistic vision.
          </p>
        </div>

        {/* Simple Status Message */}
        <div className={`mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-mono text-accent">●</span>
            <span className="text-sm font-mono text-accent">
              Ready to capture your special day
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.9s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card relative group">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                <div className="flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    <AnimatedCounter 
                      end={stat.value} 
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Panel Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
      </div>
    </div>
  );
};
