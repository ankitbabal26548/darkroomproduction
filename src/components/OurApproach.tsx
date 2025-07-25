
import { Eye, Users, MapPin, Sparkles, Camera, Heart } from 'lucide-react';

export const OurApproach = () => {
  const approaches = [
    {
      icon: Eye,
      title: "Authentic Moments",
      description: "We focus on capturing genuine emotions and natural interactions, not forced poses.",
      color: "from-blue-500/20 to-blue-500/10",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "As a small team, we provide personalized service and get to know each couple's story.",
      color: "from-purple-500/20 to-purple-500/10",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "We know the best spots in the area and can suggest perfect locations for your shoot.",
      color: "from-green-500/20 to-green-500/10",
      accentColor: "text-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "We bring an artistic eye to every shot, creating images that are both beautiful and meaningful.",
      color: "from-orange-500/20 to-orange-500/10",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Creative Header with floating elements */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full animate-pulse"></div>
        <div className="relative">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Makes Us{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Special
            </span>
          </h3>
          <div className="absolute -top-2 -right-8 w-6 h-6 bg-accent/20 rounded-full animate-bounce"></div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our approach to photography is personal, authentic, and focused on telling your unique story
        </p>
      </div>

      {/* Enhanced Grid with Visual Elements */}
      <div className="grid md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Main Card */}
            <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 h-full">
              <div className="flex items-start gap-6">
                {/* Enhanced Icon Container */}
                <div className="relative">
                  <div className={`w-16 h-16 ${approach.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <approach.icon className={`w-8 h-8 ${approach.accentColor} group-hover:animate-pulse`} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full animate-ping"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {approach.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {approach.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-lighter group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Creative Element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 backdrop-blur-sm">
          <Camera className="w-5 h-5 text-accent animate-pulse" />
          <span className="text-accent font-medium">Every shot tells a story</span>
          <Heart className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};
