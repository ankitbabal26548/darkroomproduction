
import { Heart, Eye, Palette, Clock, Shield, Star } from 'lucide-react';

export const AboutFeaturesGrid = () => {
  const features = [
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "We capture the raw emotions and genuine moments that make your day unique",
      size: "large",
      gradient: "from-accent/10 to-accent-darker/20"
    },
    {
      icon: Eye,
      title: "Artistic Vision",
      description: "Our creative approach ensures every photo is a work of art",
      size: "medium",
      gradient: "from-accent-lighter/10 to-accent/20"
    },
    {
      icon: Palette,
      title: "Post-Production Excellence",
      description: "Professional editing that enhances natural beauty",
      size: "medium",
      gradient: "from-accent-darker/10 to-accent-darkest/20"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Your memories delivered with care and precision",
      size: "small",
      gradient: "from-accent/15 to-accent-lighter/25"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Professional insurance for your peace of mind",
      size: "small",
      gradient: "from-accent-lighter/15 to-accent/25"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "White-glove service from consultation to final delivery",
      size: "large",
      gradient: "from-accent-darker/10 to-accent/20"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
          Why Choose Us
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover what sets us apart in the world of wedding photography and cinematography
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="features-masonry">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`feature-card feature-card-${feature.size} group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-accent/20 hover:shadow-professional transition-all duration-500 hover:scale-105 hover:border-accent/40`}>
              <div className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-darker/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-darker transition-colors duration-300" />
                  </div>
                  
                  <h4 className="font-playfair text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-darker/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
