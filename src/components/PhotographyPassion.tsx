
import { Camera, Heart, Lightbulb, Aperture, Focus, Image } from 'lucide-react';

export const PhotographyPassion = () => {
  const passionPoints = [
    {
      icon: Heart,
      title: "Capturing Love Stories",
      description: "There's something magical about freezing a moment in time – a laugh, a tear, a stolen glance. We get to witness and preserve the most important moments in people's lives.",
      color: "from-red-500/20 to-pink-500/20",
      accentColor: "text-red-600",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Camera,
      title: "Creative Expression",
      description: "Every shoot is an opportunity to create something beautiful. We love experimenting with light, composition, and natural settings to create images that are uniquely yours.",
      color: "from-purple-500/20 to-blue-500/20",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Lightbulb,
      title: "Building Connections",
      description: "We don't just take photos – we build relationships. Getting to know our clients and being part of their special moments is what makes this work so rewarding.",
      color: "from-orange-500/20 to-yellow-500/20",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Creative Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why We Love{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Photography
            </span>
          </h3>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
            <Aperture className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Photography is more than just our job – it's our passion and calling
        </p>
      </div>

      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Passion Points */}
        <div className="space-y-8">
          {passionPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  {/* Enhanced Icon */}
                  <div className="relative">
                    <div className={`w-14 h-14 ${point.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <point.icon className={`w-7 h-7 ${point.accentColor} group-hover:animate-pulse`} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/30 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Enhanced Visual */}
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Main Image Container */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-3xl overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482b224ce?w=600&h=450&fit=crop&auto=format"
                alt="Photography passion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground px-6 py-3 rounded-xl font-medium shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Focus className="w-4 h-4" />
                <span>Passion Meets Purpose</span>
              </div>
            </div>
            
            {/* Corner Decorations */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
              <Image className="w-3 h-3 text-accent" />
            </div>
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Call-to-Action */}
      <div className="mt-16 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-md"></div>
          <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 backdrop-blur-sm">
            <Camera className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-medium">Ready to capture your story?</span>
            <Heart className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
