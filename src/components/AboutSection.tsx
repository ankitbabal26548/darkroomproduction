
import { Award, Users, Calendar, Star } from 'lucide-react';
import { AboutStats } from './AboutStats';
import { AboutStory } from './AboutStory';
import { AboutValues } from './AboutValues';
import { AboutTestimonial } from './AboutTestimonial';

export const AboutSection = () => {
  const stats = [
    { 
      number: 500, 
      suffix: "+", 
      label: "Happy Couples", 
      icon: Users,
      progress: 85
    },
    { 
      number: 13, 
      suffix: "+", 
      label: "Years Experience", 
      icon: Calendar,
      progress: 70
    },
    { 
      number: 50, 
      suffix: "+", 
      label: "Awards Won", 
      icon: Award,
      progress: 60
    },
    { 
      number: 98, 
      suffix: "%", 
      label: "Client Satisfaction", 
      icon: Star,
      progress: 98
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-lighter/10 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">About Our Story</span>
              <div className="w-2 h-2 bg-accent-lighter rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground via-accent to-foreground animate-fade-in-up">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-lighter">Darkroom</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Crafting timeless memories through the art of photography and cinematography
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-lighter rounded-full mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Enhanced Statistics */}
        <AboutStats stats={stats} />

        {/* Enhanced Story Section */}
        <AboutStory />

        {/* Enhanced Values Section */}
        <AboutValues />

        {/* Enhanced Testimonial */}
        <AboutTestimonial />
      </div>
    </section>
  );
};
