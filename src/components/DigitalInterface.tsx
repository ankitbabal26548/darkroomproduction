
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Camera, Users, Award, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from './AnimatedCounter';

interface DigitalInterfaceProps {
  isLoaded: boolean;
  stats: Array<{
    value: number;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    suffix?: string;
  }>;
  onViewPortfolio?: () => void;
  onWatchShowreel?: () => void;
}

export const DigitalInterface = ({ 
  isLoaded, 
  stats, 
  onViewPortfolio, 
  onWatchShowreel 
}: DigitalInterfaceProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const phases = [
        { delay: 0 },
        { delay: 500 },
        { delay: 1000 },
        { delay: 1500 }
      ];

      phases.forEach((phase, index) => {
        setTimeout(() => {
          setCurrentPhase(index);
          if (index === 2) {
            setGlitchEffect(true);
            setTimeout(() => setGlitchEffect(false), 200);
          }
        }, phase.delay);
      });
    }
  }, [isLoaded]);

  return (
    <div className="space-y-8 relative">
      {/* Brand Identity */}
      <div className={`space-y-4 ${currentPhase >= 0 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            System.Initialize()
          </span>
        </div>
        
        <h1 className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight ${glitchEffect ? 'animate-digital-glitch' : ''}`}>
          <span className="block">Darkroom</span>
          <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Production
          </span>
        </h1>
      </div>

      {/* Mission Statement */}
      <div className={`space-y-4 ${currentPhase >= 1 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="glass-panel p-6 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Mission Protocol</span>
          </div>
          <p className="text-lg text-foreground leading-relaxed">
            Transforming your most precious moments into{' '}
            <span className="text-accent font-medium">timeless digital art</span> through 
            cutting-edge photography and storytelling excellence.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={`${currentPhase >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card glass-panel p-4 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center space-y-2">
                  <Icon className="w-6 h-6 text-accent mb-1" />
                  <div className="text-2xl font-bold text-foreground">
                    {currentPhase >= 2 ? (
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix || (stat.label.includes('Years') ? '' : '+')}
                        duration={2000}
                      />
                    ) : (
                      '0'
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground stats-label leading-tight">
                    {stat.label.replace(' ', '\n')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex flex-col sm:flex-row gap-4 ${currentPhase >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
        <Button 
          size="lg" 
          onClick={onViewPortfolio}
          className="energy-button group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hero-primary-button"
        >
          <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          View Portfolio
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onWatchShowreel}
          className="energy-button-secondary group border-2 border-accent/30 hover:border-accent hover:bg-accent hover:text-white font-medium px-8 py-6 rounded-lg transition-all duration-300 hero-secondary-button"
        >
          <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Watch Our Work
        </Button>
      </div>

      {/* System Status */}
      <div className={`${currentPhase >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Ready to Capture</span>
          </div>
        </div>
      </div>
    </div>
  );
};
