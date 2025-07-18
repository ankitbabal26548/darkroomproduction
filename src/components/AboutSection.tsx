
import { Award, Users, Calendar, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { AboutTimeline } from './AboutTimeline';
import { AboutStoryGrid } from './AboutStoryGrid';
import { AboutFeaturesGrid } from './AboutFeaturesGrid';
import { AboutStats } from './AboutStats';

export const AboutSection = () => {
  const stats = [
    { 
      number: 500, 
      suffix: "+", 
      label: "Happy Couples", 
      description: "Weddings beautifully captured",
      icon: Users,
      color: "from-accent to-accent-darker"
    },
    { 
      number: 13, 
      suffix: "+", 
      label: "Years of Excellence", 
      description: "Perfecting our craft",
      icon: Calendar,
      color: "from-accent-lighter to-accent"
    },
    { 
      number: 50, 
      suffix: "+", 
      label: "Awards Won", 
      description: "Industry recognition",
      icon: Award,
      color: "from-accent-darker to-accent-darkest"
    },
    { 
      number: 95, 
      suffix: "%", 
      label: "Client Satisfaction", 
      description: "Five-star ratings",
      icon: Sparkles,
      color: "from-accent to-accent-lighter"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-subtle" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent/5 to-transparent rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-radial from-accent-lighter/5 to-transparent rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header with Layered Typography */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-6 relative z-10">
              <span className="block text-foreground/90 transform -translate-y-2">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-darker to-accent-darkest transform translate-y-2">
                Story
              </span>
            </h2>
            {/* Geometric accent */}
            <div className="absolute -top-4 -right-8 w-16 h-16 border-2 border-accent/20 rounded-lg rotate-12 animate-slow-pulse" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-full" />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8 opacity-90">
            Where passion meets artistry, and every moment becomes a timeless memory
          </p>
        </div>

        {/* Interactive Statistics Cards */}
        <AboutStats stats={stats} />

        {/* Story Grid with Asymmetric Layout */}
        <AboutStoryGrid />

        {/* Interactive Timeline */}
        <AboutTimeline />

        {/* Features Masonry Grid */}
        <AboutFeaturesGrid />
      </div>
    </section>
  );
};
