
import { Camera, Award, Users, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-accent-lighter bg-clip-text text-transparent">
              Darkroom Production
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting timeless visual stories since 2015 with passion, creativity, and artistic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-bold">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015, Darkroom Production has been capturing love stories across India with 
                unmatched passion and creativity. What started as a dream to document beautiful moments 
                has evolved into a leading photography and cinematography studio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With 10 years of experience and 600+ weddings captured, we've built a reputation for 
                delivering exceptional visual narratives that stand the test of time. Our team of 25+ 
                skilled professionals ensures every moment is perfectly preserved.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg">600+ Weddings</h4>
                <p className="text-muted-foreground text-sm">Successfully Captured</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg">10 Years Experience</h4>
                <p className="text-muted-foreground text-sm">Professional Excellence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg">25+ Team Members</h4>
                <p className="text-muted-foreground text-sm">Creative Professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg">100% Happy Clients</h4>
                <p className="text-muted-foreground text-sm">Satisfied Customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800"
                alt="Darkroom Production Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
              Since 2015
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
