
import { LucideIcon } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
  timing: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        {/* Timeline Line */}
        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30 z-0" />
        
        <div className="grid grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Step Circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-16 h-16 mx-auto bg-background border-2 border-accent rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {step.id}
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                <h4 className="font-playfair text-lg font-bold mb-1 group-hover:text-accent transition-colors">{step.title}</h4>
                <p className="text-accent text-sm font-medium mb-2">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{step.description}</p>
                
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>{step.duration}</div>
                  <div>{step.timing}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <step.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-12 bg-accent/30 mx-auto mt-4" />
              )}
            </div>
            <div className="flex-1">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-playfair text-lg font-bold mb-1">{step.title}</h4>
                <p className="text-accent text-sm font-medium mb-2">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{step.duration}</span>
                  <span>•</span>
                  <span>{step.timing}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
