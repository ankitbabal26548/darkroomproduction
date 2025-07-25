
import { Eye, Users, MapPin, Sparkles } from 'lucide-react';

export const OurApproach = () => {
  const approaches = [
    {
      icon: Eye,
      title: "Authentic Moments",
      description: "We focus on capturing genuine emotions and natural interactions, not forced poses."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "As a small team, we provide personalized service and get to know each couple's story."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "We know the best spots in the area and can suggest perfect locations for your shoot."
    },
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "We bring an artistic eye to every shot, creating images that are both beautiful and meaningful."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          What Makes Us <span className="text-accent italic">Special</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our approach to photography is personal, authentic, and focused on telling your unique story
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div 
            key={index}
            className="group p-6 bg-background/50 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <approach.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {approach.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
