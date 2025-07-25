
import { Camera, Heart, Award } from 'lucide-react';

export const MeetThePhotographer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Meet the <span className="text-accent italic">Artist</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The passionate photographer behind every beautiful moment captured
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&auto=format"
              alt="Alex Thompson - Lead Photographer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-medium">
            3 Years Experience
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h4 className="font-playfair text-3xl font-bold text-foreground mb-2">
              Alex Thompson
            </h4>
            <p className="text-accent font-medium text-lg mb-4">Lead Photographer & Founder</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi! I'm Alex, and I've been capturing love stories for the past three years. What started as a hobby during college has grown into my greatest passion. I believe every couple has a unique story to tell, and I'm here to help you tell yours through beautiful, authentic photography.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in the local area, I love working with couples who want their photos to feel natural and genuine. My approach is relaxed and friendly – I want you to feel comfortable and be yourselves in front of the camera.
            </p>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-accent/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <p className="font-bold text-xl text-foreground">30+</p>
              <p className="text-sm text-muted-foreground">Weddings Shot</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <p className="font-bold text-xl text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Happy Couples</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <p className="font-bold text-xl text-foreground">Local</p>
              <p className="text-sm text-muted-foreground">Community Focus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
