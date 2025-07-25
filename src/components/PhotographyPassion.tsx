
import { Camera, Heart, Lightbulb, Aperture, Focus, Image } from 'lucide-react';

export const PhotographyPassion = () => {
  const passionPoints = [
    {
      icon: Heart,
      title: "Capturing Love Stories",
      description: "There's something magical about freezing a moment in time – a laugh, a tear, a stolen glance. We get to witness and preserve the most important moments in people's lives.",
      color: "from-red-500/15 to-pink-500/8",
      accentColor: "text-red-600",
      bgColor: "bg-red-500/8"
    },
    {
      icon: Camera,
      title: "Creative Expression",
      description: "Every shoot is an opportunity to create something beautiful. We love experimenting with light, composition, and natural settings to create images that are uniquely yours.",
      color: "from-purple-500/15 to-blue-500/8",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/8"
    },
    {
      icon: Lightbulb,
      title: "Building Connections",
      description: "We don't just take photos – we build relationships. Getting to know our clients and being part of their special moments is what makes this work so rewarding.",
      color: "from-orange-500/15 to-yellow-500/8",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/8"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Clean Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why We Love{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Photography
            </span>
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Photography is more than just our job – it's our passion and calling
        </p>
      </div>

      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Clean Passion Points */}
        <div className="space-y-8">
          {passionPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Clean Main Card */}
              <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/15 hover:border-accent/25 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  {/* Clean Icon */}
                  <div className="relative">
                    <div className={`w-12 h-12 ${point.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <point.icon className={`w-6 h-6 ${point.accentColor}`} />
                    </div>
                  </div>
                  
                  {/* Content with Better Contrast */}
                  <div className="flex-1">
                    <h4 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
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
          {/* Subtle Background Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/8 to-accent/4 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/4 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Main Image Container */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted/80 to-muted/50 rounded-3xl overflow-hidden border border-accent/15 group-hover:border-accent/25 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482b224ce?w=600&h=450&fit=crop&auto=format"
                alt="Photography passion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Clean Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Focus className="w-4 h-4" />
                <span>Passion Meets Purpose</span>
              </div>
            </div>
            
            {/* Subtle Corner Decoration */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center">
              <Image className="w-3 h-3 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Clean Call-to-Action */}
      <div className="mt-16 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md"></div>
          <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm">
            <Camera className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Ready to capture your story?</span>
            <Heart className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};
