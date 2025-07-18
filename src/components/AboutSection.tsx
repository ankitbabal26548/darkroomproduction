
import { Camera, Film, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';
import { FloatingElements } from './FloatingElements';

export const AboutSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Capturing moments with artistic vision and technical excellence",
      color: "from-accent/20 to-accent-darker/20"
    },
    {
      icon: Film,
      title: "Cinematic Videography", 
      description: "Creating cinematic stories that bring your special day to life",
      color: "from-accent-lighter/20 to-accent/20"
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "We don't just capture images, we preserve emotions and memories",
      color: "from-accent-darker/20 to-accent-darkest/20"
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Recognized for our artistic approach and professional service",
      color: "from-accent/20 to-accent-lighter/20"
    }
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Weddings Captured", delay: "0s" },
    { number: 13, suffix: "+", label: "Years Experience", delay: "0.2s" },
    { number: 50, suffix: "+", label: "Awards Won", delay: "0.4s" }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 relative">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-darker to-accent-darkest">
              Darkroom Production
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-full blur-3xl -z-10" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are passionate photographers and cinematographers dedicated to capturing 
            the beauty, emotion, and authenticity of your most precious moments.
          </p>
        </div>

        {/* Enhanced Story Section */}
        <div className="mb-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative">
              <h3 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
                Crafting Visual Stories Since 2010
              </h3>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent to-accent-lighter rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6 animate-slide-in-left">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-accent/5 border border-accent/20 shadow-professional">
                  <p className="text-muted-foreground leading-relaxed">
                    Born from a passion for capturing life's most beautiful moments, Darkroom Production 
                    has been at the forefront of wedding photography and cinematography. Our journey began 
                    in the traditional darkrooms, where we learned the art of developing not just photographs, 
                    but emotions and memories.
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
                </div>
              </div>
              
              <div className="space-y-6 animate-slide-in-right">
                <div className="relative p-6 rounded-2xl bg-gradient-to-bl from-background to-accent-lighter/5 border border-accent/20 shadow-professional">
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we blend traditional techniques with modern technology to create timeless 
                    visual narratives. Every wedding, every pre-wedding shoot, every moment we capture 
                    is treated as a unique story waiting to be told.
                  </p>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-lighter/20 to-transparent rounded-tr-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animated Statistics */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="floating-stat group relative"
              style={{ animationDelay: stat.delay }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background via-accent/5 to-accent-lighter/10 border border-accent/30 shadow-professional backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-2">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-darker">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 to-accent-darker/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/60 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-lighter/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card group relative overflow-hidden hover:shadow-professional transition-all duration-500 hover:scale-105 border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative z-10">
                <div className="text-center space-y-6">
                  {/* Enhanced Icon Container */}
                  <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-darker/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-accent group-hover:text-accent-darker transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-playfair text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-accent-lighter/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
