
import { Star, Quote } from 'lucide-react';

export const AboutTestimonial = () => {
  return (
    <div className="text-center">
      <div className="max-w-5xl mx-auto relative">
        {/* Enhanced testimonial card */}
        <div className="relative p-12 md:p-16 bg-gradient-to-br from-card via-accent/5 to-accent-lighter/10 rounded-3xl border border-accent/20 shadow-professional overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-lighter/10 to-transparent rounded-tl-full" />
          
          {/* Quote icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent to-accent-darker rounded-2xl flex items-center justify-center shadow-lg">
            <Quote className="w-8 h-8 text-accent-foreground" />
          </div>

          <div className="relative space-y-10">
            {/* Enhanced Stars */}
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Star className="w-7 h-7 fill-accent text-accent hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
            
            {/* Enhanced Testimonial */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed font-playfair">
              "Darkroom Production exceeded all our expectations. They captured our wedding 
              day with such artistry and professionalism. Every photo tells a story, and 
              we couldn't be happier with the memories they've preserved for us."
            </blockquote>
            
            {/* Enhanced Author */}
            <div className="space-y-6 pt-8 border-t border-accent/20">
              <div className="relative inline-block">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-playfair font-bold text-accent">S&M</span>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <cite className="not-italic font-semibold text-foreground text-xl">Sarah & Michael Chen</cite>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent-lighter rounded-full" />
                  <p className="text-sm text-muted-foreground font-medium">Wedding • June 2023</p>
                  <div className="w-8 h-0.5 bg-gradient-to-l from-accent to-accent-lighter rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-2xl blur-xl opacity-60" />
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-bl from-accent-lighter/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
      </div>
    </div>
  );
};
