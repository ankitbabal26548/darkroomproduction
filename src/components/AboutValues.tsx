
import { Heart, Eye, Clock, Shield } from 'lucide-react';

export const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Emotions",
      description: "We capture genuine moments and real emotions, creating photographs that tell your true story.",
      gradient: "from-accent/10 to-accent-darker/20"
    },
    {
      icon: Eye,
      title: "Artistic Vision",
      description: "Our creative approach ensures every image is thoughtfully composed and beautifully crafted.",
      gradient: "from-accent-lighter/10 to-accent/20"
    },
    {
      icon: Clock,
      title: "Timely Excellence",
      description: "Professional delivery and punctual service, because your memories shouldn't wait.",
      gradient: "from-accent-darker/10 to-accent-lighter/20"
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Fully insured and committed to providing a stress-free, professional experience.",
      gradient: "from-accent/15 to-accent-darker/25"
    }
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-full border border-accent/20">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-accent uppercase tracking-wide">What Drives Us</span>
          <div className="w-2 h-2 bg-accent-lighter rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <h3 className="font-playfair text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-accent">
          Our Values
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The principles that guide everything we do and define our commitment to excellence
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-lighter rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`h-full p-8 bg-gradient-to-br ${value.gradient} backdrop-blur-sm rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-professional`}>
              {/* Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-card/20 rounded-3xl" />
              
              <div className="relative flex items-start space-x-6">
                {/* Enhanced Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent-darker/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <value.icon className="w-8 h-8 text-accent group-hover:text-accent-darker transition-colors duration-300" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <h4 className="font-playfair text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-lighter rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
