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
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Darkroom Production</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Weddings Captured</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-accent">13+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            <div className="photo-frame darkroom-glow">
              <img 
                src={cameraLens} 
                alt="Professional Camera Equipment" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="photo-frame darkroom-glow mt-8">
              <img 
                src={darkroomSetup} 
                alt="Darkroom Setup" 
                className="w-full h-64 object-cover"
              />
            </div>
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