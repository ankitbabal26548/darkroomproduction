
import { Heart, Eye, Clock, Shield } from 'lucide-react';

export const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Emotions",
      description: "We capture genuine moments and real emotions, creating photographs that tell your true story."
    },
    {
      icon: Eye,
      title: "Artistic Vision",
      description: "Our creative approach ensures every image is thoughtfully composed and beautifully crafted."
    },
    {
      icon: Clock,
      title: "Timely Excellence",
      description: "Professional delivery and punctual service, because your memories shouldn't wait."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Fully insured and committed to providing a stress-free, professional experience."
    }
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Our Values
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              
              <div className="space-y-3">
                <h4 className="font-playfair text-xl font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
