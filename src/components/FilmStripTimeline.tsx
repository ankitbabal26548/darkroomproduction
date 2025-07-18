
import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: string;
  event: string;
  description: string;
}

export const FilmStripTimeline = () => {
  const [activeFrame, setActiveFrame] = useState(0);

  const timeline: TimelineEvent[] = [
    {
      year: "2010",
      event: "Founded",
      description: "Started in a traditional darkroom with passion for analog photography"
    },
    {
      year: "2013",
      event: "Digital Transition",
      description: "Embraced digital technology while maintaining artistic vision"
    },
    {
      year: "2016",
      event: "Award Recognition",
      description: "First major photography award for wedding cinematography"
    },
    {
      year: "2019",
      event: "Team Expansion",
      description: "Grew to a team of professional photographers and videographers"
    },
    {
      year: "2023",
      event: "500+ Weddings",
      description: "Celebrated milestone of capturing over 500 beautiful weddings"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % timeline.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [timeline.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Film Strip Container */}
      <div className="relative bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 p-4 rounded-lg film-strip-edge">
        {/* Film Perforations */}
        <div className="absolute top-0 left-0 w-full h-2 flex justify-between">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 h-2 bg-accent/30 rounded-b-sm">
              <div className="w-1 h-1 bg-background rounded-full mx-auto mt-0.5" />
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-2 flex justify-between">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 h-2 bg-accent/30 rounded-t-sm">
              <div className="w-1 h-1 bg-background rounded-full mx-auto mb-0.5" />
            </div>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="py-8">
          <div className="flex justify-between items-center mb-8">
            {timeline.map((event, index) => (
              <div 
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index === activeFrame ? 'scale-125 z-10' : 'scale-100 opacity-60'
                }`}
                onClick={() => setActiveFrame(index)}
              >
                {/* Film Frame */}
                <div className={`w-16 h-20 border-2 rounded-sm transition-all duration-500 ${
                  index === activeFrame 
                    ? 'border-accent bg-accent/10 shadow-aperture' 
                    : 'border-accent/30 bg-muted/50'
                }`}>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs font-bold font-mono text-accent">
                      {event.year}
                    </span>
                  </div>
                </div>
                
                {/* Frame Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Event Details */}
          <div className="text-center animate-fade-in-up">
            <h4 className="font-playfair text-2xl font-semibold mb-2 text-accent">
              {timeline[activeFrame].event}
            </h4>
            <p className="text-muted-foreground max-w-md mx-auto">
              {timeline[activeFrame].description}
            </p>
          </div>
        </div>

        {/* Film Frame Counter */}
        <div className="absolute top-4 right-4 counter-display px-2 py-1 text-xs">
          {String(activeFrame + 1).padStart(2, '0')}/{timeline.length.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
