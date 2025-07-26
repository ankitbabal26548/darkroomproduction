
import { Eye, Users, MapPin, Sparkles, Camera, Heart, Zap, Award, Target, Palette } from 'lucide-react';

export const OurApproach = () => {
  const approaches = [
    {
      icon: Eye,
      title: "Authentic Moments",
      description: "We focus on capturing genuine emotions and natural interactions, not forced poses.",
      color: "from-blue-500/15 to-blue-500/8",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-500/8",
      hoverColor: "hover:bg-blue-500/15"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "As a small team, we provide personalized service and get to know each couple's story.",
      color: "from-purple-500/15 to-purple-500/8",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/8",
      hoverColor: "hover:bg-purple-500/15"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "We know the best spots in the area and can suggest perfect locations for your shoot.",
      color: "from-green-500/15 to-green-500/8",
      accentColor: "text-green-600",
      bgColor: "bg-green-500/8",
      hoverColor: "hover:bg-green-500/15"
    },
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "We bring an artistic eye to every shot, creating images that are both beautiful and meaningful.",
      color: "from-orange-500/15 to-orange-500/8",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/8",
      hoverColor: "hover:bg-orange-500/15"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header with Creative Elements */}
      <div className="text-center mb-16 relative">
        {/* Floating Decorative Elements */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute -top-4 left-1/4 w-6 h-6 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -top-6 right-1/4 w-4 h-4 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative">
          {/* Creative Badge */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-md animate-pulse"></div>
            <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full border border-accent/25 backdrop-blur-sm">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Our Expertise</span>
              <Zap className="w-5 h-5 text-accent" />
            </div>
          </div>
          
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Makes Us{' '}
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
                Special
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"></div>
            </span>
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our approach to photography is personal, authentic, and focused on telling your unique story with creativity and passion
          </p>
        </div>
      </div>

      {/* Enhanced Grid with Creative Visual Elements */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {approaches.map((approach, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Enhanced Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
            
            {/* Floating Particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: `${index * 100}ms` }}></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: `${index * 150}ms` }}></div>
            
            {/* Enhanced Main Card */}
            <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/15 hover:border-accent/35 transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-105 h-full overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-accent/8 to-transparent rounded-tr-2xl"></div>
              
              <div className="flex items-start gap-6">
                {/* Enhanced Icon Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative w-16 h-16 ${approach.bgColor} ${approach.hoverColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-accent/10 group-hover:border-accent/20`}>
                    <approach.icon className={`w-8 h-8 ${approach.accentColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm"></div>
                </div>
                
                {/* Enhanced Content */}
                <div className="flex-1">
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {approach.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {approach.description}
                  </p>
                  
                  {/* Enhanced Decorative Line */}
                  <div className="relative">
                    <div className="w-0 h-0.5 bg-gradient-to-r from-accent/50 to-accent group-hover:w-20 transition-all duration-500 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-16 transition-all duration-700 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Bottom Element with More Visual Appeal */}
      <div className="text-center relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <div className="relative">
              <Camera className="w-6 h-6 text-accent" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm animate-pulse"></div>
            </div>
            <span className="text-accent font-semibold text-lg">Every shot tells a story</span>
            <div className="relative">
              <Heart className="w-6 h-6 text-accent" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Additional Creative Elements */}
          <div className="mt-6 flex justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm">Precision Focus</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-sm">Artistic Vision</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm">Creative Magic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
