
import { LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Camera, Video, Settings, Aperture, Focus } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  timing: string;
  color: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step-id') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('[data-step-id]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Desktop Enhanced Timeline */}
      <div className="hidden lg:block relative">
        {/* Film Strip Connection Path */}
        <div className="absolute top-20 left-0 right-0 h-24 z-0">
          {/* Film Strip Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 animate-film-strip-roll" />
            {/* Film Perforations */}
            <div className="absolute top-2 left-0 right-0 flex justify-between">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-accent/30 rounded-full animate-sparkle-twinkle" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-between">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-accent/30 rounded-full animate-sparkle-twinkle" style={{ animationDelay: `${i * 0.1 + 0.5}s` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Curved SVG Path */}
        <svg className="absolute inset-0 w-full h-full z-5" style={{ height: '200px', top: '80px' }}>
          <defs>
            <linearGradient id="cameraPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.4 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 50 100 Q 300 50 550 100 T 1050 100"
            stroke="url(#cameraPathGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
            className="animate-draw-path"
            strokeDasharray="10,5"
          />
        </svg>
        
        <div className="grid grid-cols-5 gap-6 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              data-step-id={step.id}
              className={`text-center group transition-all duration-700 ${
                visibleSteps.includes(step.id) ? 'animate-creative-step-entrance' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Camera-Themed Step Circle */}
              <div className="relative mx-auto mb-8">
                {/* Main Camera Body */}
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl relative z-10 rotate-3 group-hover:rotate-0 border-4 border-white/20`}>
                  <step.icon className="w-8 h-8 text-white animate-equipment-bounce" />
                  
                  {/* Camera Details */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/20 rounded-full" />
                </div>
                
                {/* Camera Lens Ring */}
                <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-accent/40 rounded-full animate-shutter-speed z-5" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-gentle-bounce z-20">
                  {step.id}
                </div>

                {/* Equipment Icons */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Settings className="w-3 h-3 text-accent animate-equipment-bounce" />
                  <Aperture className="w-3 h-3 text-accent animate-equipment-bounce" style={{ animationDelay: '0.2s' }} />
                  <Focus className="w-3 h-3 text-accent animate-equipment-bounce" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl animate-lens-focus`} />
              </div>

              {/* Enhanced Step Content */}
              <div className="bg-card/90 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Camera Viewfinder Effect */}
                <div className="absolute top-2 right-2 w-6 h-6 border border-accent/30 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-1 border border-accent/20 rounded-sm" />
                </div>
                
                <h4 className="font-playfair text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-accent text-sm font-semibold mb-3 opacity-80">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {step.description}
                </p>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{step.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Timing:</span>
                    <span className="font-medium text-foreground">{step.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Enhanced Timeline */}
      <div className="lg:hidden space-y-8">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            data-step-id={step.id}
            className={`flex gap-6 transition-all duration-700 ${
              visibleSteps.includes(step.id) ? 'animate-creative-step-entrance' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex-shrink-0 relative">
              {/* Mobile Camera Design */}
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl rotate-3 relative border-2 border-white/20`}>
                <step.icon className="w-7 h-7 text-white animate-equipment-bounce" />
                
                {/* Camera Details */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/20 rounded-full" />
              </div>
              
              {/* Film Strip Connection */}
              {index < steps.length - 1 && (
                <div className="w-6 h-16 bg-gradient-to-b from-accent/30 to-accent/10 mx-auto mt-4 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-accent/30 animate-film-strip-roll" />
                  {/* Film perforations */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-2 w-1 h-1 bg-accent/60 rounded-full" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 w-1 h-1 bg-accent/60 rounded-full" />
                </div>
              )}

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-lg animate-gentle-bounce">
                {step.id}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-card/90 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg relative overflow-hidden">
                {/* Mobile Camera Viewfinder */}
                <div className="absolute top-2 right-2 w-4 h-4 border border-accent/30 rounded-sm opacity-50">
                  <div className="absolute inset-0.5 border border-accent/20 rounded-sm" />
                </div>
                
                <h4 className="font-playfair text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-accent text-sm font-semibold mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{step.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-muted-foreground block">Duration</span>
                    <span className="font-medium text-foreground">{step.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Timing</span>
                    <span className="font-medium text-foreground">{step.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
