
import { Heart, Eye, Lightbulb, Sparkles } from 'lucide-react';

export const PhilosophyManifesto = () => {
  const philosophies = [
    {
      icon: Heart,
      title: "Authentic Emotions",
      quote: "Real moments create lasting memories",
      description: "We believe that the most beautiful photographs capture genuine emotions - the tears of joy, spontaneous laughter, and quiet intimate moments that truly matter."
    },
    {
      icon: Eye,
      title: "Artistic Vision", 
      quote: "Every frame tells a story",
      description: "Our artistic approach transforms ordinary moments into extraordinary memories through thoughtful composition, creative lighting, and an eye for beauty."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      quote: "Push boundaries, create magic",
      description: "We continuously evolve our craft, embracing new techniques and technologies while staying true to the timeless art of storytelling through photography."
    },
    {
      icon: Sparkles,
      title: "Magical Moments",
      quote: "Every love story deserves magic",
      description: "We create an atmosphere where natural beauty and authentic emotions shine, capturing the magic that makes your love story uniquely yours."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-20">
        <h3 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Our <span className="text-accent italic">Philosophy</span>
        </h3>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          The guiding principles that shape every photograph we create and every story we tell
        </p>
      </div>

      {/* Main Philosophy Statement */}
      <div className="mb-20">
        <div className="relative bg-gradient-to-br from-background via-background/95 to-accent/10 rounded-3xl p-12 md:p-16 border border-accent/20 backdrop-blur-sm overflow-hidden">
          {/* Large Quote Mark */}
          <div className="absolute top-8 left-8 text-8xl md:text-9xl font-playfair text-accent/20 leading-none">"</div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <blockquote className="font-playfair text-2xl md:text-4xl font-medium text-foreground leading-relaxed mb-8 italic">
              Photography is not just about capturing what you see, but about revealing what you feel. 
              Every couple has a unique story, and our role is to tell it with authenticity, artistry, and heart.
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center">
                <span className="text-2xl font-playfair font-bold text-accent">DP</span>
              </div>
              <div className="text-left">
                <cite className="text-lg font-semibold text-foreground not-italic">Darkroom Production</cite>
                <p className="text-muted-foreground">Founders & Creative Directors</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 right-8 text-6xl md:text-7xl font-playfair text-accent/20 leading-none">"</div>
        </div>
      </div>

      {/* Philosophy Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {philosophies.map((item, index) => (
          <div 
            key={index}
            className="group philosophy-card-animation"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative h-full bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-2xl p-8 border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500">
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h4 className="font-playfair text-2xl font-bold text-foreground">
                  {item.title}
                </h4>
                
                <p className="text-accent font-medium italic text-lg">
                  "{item.quote}"
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-4 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium text-lg hover:bg-accent/90 transition-colors cursor-pointer">
          <Heart className="w-5 h-5" />
          Let's Create Something Beautiful Together
        </div>
      </div>
    </div>
  );
};
