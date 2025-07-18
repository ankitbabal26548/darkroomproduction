
import { Star } from 'lucide-react';

export const AboutTestimonial = () => {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-accent/5 to-background rounded-3xl border border-accent/10">
        {/* Stars */}
        <div className="flex justify-center space-x-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 font-playfair">
          "Darkroom Production exceeded all our expectations. They captured our wedding 
          day with such artistry and professionalism. Every photo tells a story, and 
          we couldn't be happier with the memories they've preserved for us."
        </blockquote>
        
        {/* Author */}
        <div className="space-y-2">
          <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl font-playfair font-bold text-accent">S&M</span>
          </div>
          <cite className="not-italic font-semibold text-foreground">Sarah & Michael Chen</cite>
          <p className="text-sm text-muted-foreground">Wedding • June 2023</p>
        </div>
      </div>
    </div>
  );
};
