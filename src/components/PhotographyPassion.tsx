
import { Camera, Heart, Lightbulb } from 'lucide-react';

export const PhotographyPassion = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Why We Love <span className="text-accent italic">Photography</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Photography is more than just our job – it's our passion and calling
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                Capturing Love Stories
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                There's something magical about freezing a moment in time – a laugh, a tear, a stolen glance. We get to witness and preserve the most important moments in people's lives.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                Creative Expression
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Every shoot is an opportunity to create something beautiful. We love experimenting with light, composition, and natural settings to create images that are uniquely yours.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                Building Connections
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We don't just take photos – we build relationships. Getting to know our clients and being part of their special moments is what makes this work so rewarding.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482b224ce?w=600&h=450&fit=crop&auto=format"
              alt="Photography passion"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-medium">
            Passion Meets Purpose
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
          <Camera className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Ready to capture your story?</span>
        </div>
      </div>
    </div>
  );
};
