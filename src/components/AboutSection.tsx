import { Camera, Film, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import cameraLens from '@/assets/camera-lens.jpg';
import darkroomSetup from '@/assets/darkroom-setup.jpg';

export const AboutSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Capturing moments with artistic vision and technical excellence"
    },
    {
      icon: Film,
      title: "Cinematic Videography", 
      description: "Creating cinematic stories that bring your special day to life"
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "We don't just capture images, we preserve emotions and memories"
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Recognized for our artistic approach and professional service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About <span className="text-accent text-shadow-glow">Darkroom Production</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            We are passionate photographers and cinematographers dedicated to capturing 
            the beauty, emotion, and authenticity of your most precious moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="font-playfair text-3xl font-semibold">
              Crafting Visual Stories Since 2010
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Born from a passion for capturing life's most beautiful moments, Darkroom Production 
              has been at the forefront of wedding photography and cinematography. Our journey began 
              in the traditional darkrooms, where we learned the art of developing not just photographs, 
              but emotions and memories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we blend traditional techniques with modern technology to create timeless 
              visual narratives. Every wedding, every pre-wedding shoot, every moment we capture 
              is treated as a unique story waiting to be told.
            </p>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center glass-effect p-4 rounded-lg darkroom-glow">
                <p className="font-playfair text-3xl font-bold text-accent text-shadow-glow animate-bounce-gentle">500+</p>
                <p className="text-sm text-muted-foreground font-medium">Weddings Captured</p>
              </div>
              <div className="text-center glass-effect p-4 rounded-lg darkroom-glow" style={{ animationDelay: '0.2s' }}>
                <p className="font-playfair text-3xl font-bold text-accent text-shadow-glow animate-bounce-gentle">13+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="text-center glass-effect p-4 rounded-lg darkroom-glow" style={{ animationDelay: '0.4s' }}>
                <p className="font-playfair text-3xl font-bold text-accent text-shadow-glow animate-bounce-gentle">50+</p>
                <p className="text-sm text-muted-foreground font-medium">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Enhanced Image Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            <div className="photo-frame darkroom-glow magnetic-hover floating">
              <img 
                src={cameraLens} 
                alt="Professional Camera Equipment" 
                className="w-full h-64 object-cover film-grain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="photo-frame darkroom-glow magnetic-hover floating mt-8" style={{ animationDelay: '-2s' }}>
              <img 
                src={darkroomSetup} 
                alt="Darkroom Setup" 
                className="w-full h-64 object-cover film-grain"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-photo transition-all duration-500 lens-effect group magnetic-hover animated-border glass-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500 darkroom-glow floating">
                  <feature.icon className="w-10 h-10 text-accent group-hover:animate-bounce-gentle" />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-3 text-gradient">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};