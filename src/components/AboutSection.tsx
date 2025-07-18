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
        <div className="text-center mb-16 relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 relative">
            About <span className="text-accent relative">
              Darkroom Production
              <div className="absolute -inset-2 bg-accent/10 rounded-lg transform rotate-1 animate-pulse" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            We are passionate photographers and cinematographers dedicated to capturing 
            the beauty, emotion, and authenticity of your most precious moments.
          </p>
          
          {/* Decorative Camera Elements */}
          <div className="absolute top-0 left-8 w-8 h-8 opacity-20 animate-float">
            <Camera className="w-full h-full text-accent" />
          </div>
          <div className="absolute top-12 right-12 w-6 h-6 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
            <Film className="w-full h-full text-accent" />
          </div>
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
            
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="text-center group">
                <div className="relative mb-2">
                  <p className="font-playfair text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">500+</p>
                  <div className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Weddings Captured</p>
                <Heart className="w-4 h-4 mx-auto mt-1 text-accent/50" />
              </div>
              <div className="text-center group">
                <div className="relative mb-2">
                  <p className="font-playfair text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">13+</p>
                  <div className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                <Camera className="w-4 h-4 mx-auto mt-1 text-accent/50" />
              </div>
              <div className="text-center group">
                <div className="relative mb-2">
                  <p className="font-playfair text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">50+</p>
                  <div className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Awards Won</p>
                <Award className="w-4 h-4 mx-auto mt-1 text-accent/50" />
              </div>
            </div>
          </div>

          {/* Enhanced Image Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right relative">
            {/* Main Image */}
            <div className="photo-frame darkroom-glow group relative overflow-hidden">
              <img 
                src={cameraLens} 
                alt="Professional Camera Equipment" 
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Professional Equipment</p>
                <p className="text-sm">High-end cameras & lenses</p>
              </div>
            </div>
            
            {/* Second Image with Offset */}
            <div className="photo-frame darkroom-glow group relative overflow-hidden mt-12">
              <img 
                src={darkroomSetup} 
                alt="Darkroom Setup" 
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Traditional Darkroom</p>
                <p className="text-sm">Where the magic happens</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-photo transition-all duration-300 lens-effect group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
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