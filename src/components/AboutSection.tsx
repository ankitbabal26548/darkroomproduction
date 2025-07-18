
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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="about-bg-pattern opacity-30"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-about-header">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-accent/10 to-accent/20 rounded-full text-accent font-medium text-sm border border-accent/20">
              Our Story
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-about">
            About <span className="text-accent">Darkroom</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crafting timeless memories through the art of photography and cinematography
          </p>
        </div>

        {/* Creative Layout Grid */}
        <div className="about-creative-layout space-y-32">
          {/* Statistics Section */}
          <div className="animate-about-section" style={{ animationDelay: '0.2s' }}>
            <AboutStats stats={stats} />
          </div>

          {/* Curved Divider */}
          <div className="about-divider">
            <svg viewBox="0 0 1200 120" className="w-full h-8 text-accent/20">
              <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
            </svg>
          </div>

          {/* Story Section */}
          <div className="animate-about-section" style={{ animationDelay: '0.4s' }}>
            <AboutStory />
          </div>

          {/* Values Section */}
          <div className="animate-about-section" style={{ animationDelay: '0.6s' }}>
            <AboutValues />
          </div>

          {/* Testimonial Section */}
          <div className="animate-about-section" style={{ animationDelay: '0.8s' }}>
            <AboutTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
};
