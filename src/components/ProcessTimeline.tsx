
import { LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      {/* Desktop Creative Timeline */}
      <div className="hidden lg:block relative">
        {/* Curved Connection Path */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{ height: '200px', top: '80px' }}>
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M 50 100 Q 300 50 550 100 T 1050 100"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-draw-path"
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
              {/* Enhanced Step Circle */}
              <div className="relative mx-auto mb-8">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl relative z-10 rotate-6 group-hover:rotate-0`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Floating Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-float z-20">
                  {step.id}
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-xl animate-pulse`} />
              </div>

              {/* Enhanced Step Content */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
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
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl rotate-3`}>
                <step.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent mx-auto mt-4" />
              )}

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {step.id}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg">
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
