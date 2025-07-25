
import { Eye, Users, MapPin, Sparkles, Camera, Heart } from 'lucide-react';

export const OurApproach = () => {
  const approaches = [
    {
      icon: Eye,
      title: "Authentic Moments",
      description: "We focus on capturing genuine emotions and natural interactions, not forced poses.",
      color: "from-blue-500/15 to-blue-500/8",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-500/8"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "As a small team, we provide personalized service and get to know each couple's story.",
      color: "from-purple-500/15 to-purple-500/8",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/8"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "We know the best spots in the area and can suggest perfect locations for your shoot.",
      color: "from-green-500/15 to-green-500/8",
      accentColor: "text-green-600",
      bgColor: "bg-green-500/8"
    },
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "We bring an artistic eye to every shot, creating images that are both beautiful and meaningful.",
      color: "from-orange-500/15 to-orange-500/8",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/8"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-16 relative">
        <div className="relative">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Makes Us{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Special
            </span>
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our approach to photography is personal, authentic, and focused on telling your unique story
        </p>
      </div>

      {/* Enhanced Grid with Removed Distracting Elements */}
      <div className="grid md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Subtle Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
            
            {/* Clean Main Card */}
            <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/15 hover:border-accent/25 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105 h-full">
              <div className="flex items-start gap-6">
                {/* Clean Icon Container */}
                <div className="relative">
                  <div className={`w-14 h-14 ${approach.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <approach.icon className={`w-7 h-7 ${approach.accentColor}`} />
                  </div>
                </div>
                
                {/* Content with Better Contrast */}
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {approach.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                  
                  {/* Subtle Decorative Line */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-accent/50 to-accent group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Bottom Element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm">
          <Camera className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold">Every shot tells a story</span>
          <Heart className="w-5 h-5 text-accent" />
        </div>
      </div>
    </div>
  );
};
