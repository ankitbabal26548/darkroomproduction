
import { Calendar, Award, Users, Sparkles } from 'lucide-react';

export const AboutTimeline = () => {
  const milestones = [
    {
      year: "2010",
      title: "Founded",
      description: "Started with a passion for capturing beautiful moments",
      icon: Calendar,
      position: "left"
    },
    {
      year: "2015",
      title: "First Award",
      description: "Recognized for excellence in wedding photography",
      icon: Award,
      position: "right"
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Grew our team to serve more couples across the region",
      icon: Users,
      position: "left"
    },
    {
      year: "2023",
      title: "500+ Weddings",
      description: "Celebrated our 500th wedding milestone",
      icon: Sparkles,
      position: "right"
    }
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
          Our Journey
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From humble beginnings to becoming one of the most trusted names in wedding photography
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-accent-darker to-accent-darkest rounded-full" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`timeline-item flex items-center ${
                milestone.position === 'left' ? 'justify-start' : 'justify-end'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={`w-full lg:w-5/12 ${milestone.position === 'right' ? 'lg:text-right' : ''}`}>
                <div className="timeline-card group relative">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-background to-accent/5 border border-accent/20 hover:shadow-professional transition-all duration-500 hover:scale-105">
                    <div className={`flex items-start space-x-4 ${milestone.position === 'right' ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent-darker/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <milestone.icon className="w-6 h-6 text-accent" />
                      </div>
                      
                      <div className={`space-y-2 ${milestone.position === 'right' ? 'lg:text-right' : ''}`}>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-playfair font-bold text-accent">
                            {milestone.year}
                          </span>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent-darker rounded-full" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {milestone.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-accent to-accent-darker rounded-full border-4 border-background shadow-lg animate-pulse-slow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
