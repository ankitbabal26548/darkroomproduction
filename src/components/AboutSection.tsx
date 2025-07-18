
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
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-accent">Darkroom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting timeless memories through the art of photography and cinematography
          </p>
        </div>

        {/* Statistics */}
        <AboutStats stats={stats} />

        {/* Story Section */}
        <AboutStory />

        {/* Values Section */}
        <AboutValues />

        {/* Testimonial */}
        <AboutTestimonial />
      </div>
    </section>
  );
};
