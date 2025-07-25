
import { Award, Star, Trophy, Medal } from 'lucide-react';

export const AwardsShowcase = () => {
  const awards = [
    {
      title: "Best Wedding Photography",
      organization: "Photography Excellence Awards",
      year: "2023",
      icon: Trophy,
      description: "Recognized for outstanding artistic vision and technical excellence"
    },
    {
      title: "People's Choice Award",
      organization: "Wedding Industry Awards",
      year: "2022",
      icon: Star,
      description: "Voted by couples for exceptional service and creativity"
    },
    {
      title: "Master Photographer Certification",
      organization: "Professional Photography Association",
      year: "2021",
      icon: Medal,
      description: "Certified for advanced technical skills and artistic mastery"
    },
    {
      title: "Editorial Feature",
      organization: "Modern Wedding Magazine",
      year: "2023",
      icon: Award,
      description: "Featured work in leading photography publications"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Awards & <span className="text-accent italic">Recognition</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our commitment to excellence has been recognized by industry leaders and clients alike
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative h-full bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-2xl p-6 border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500 text-center">
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <award.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h4 className="font-playfair text-lg font-bold text-foreground">
                  {award.title}
                </h4>
                <p className="text-accent font-medium text-sm">
                  {award.organization}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-medium">
                  {award.year}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent/30 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 px-8 py-4 bg-accent/10 rounded-2xl border border-accent/20">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">15+ Industry Awards</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">Featured in 8 Publications</span>
          </div>
        </div>
      </div>
    </div>
  );
};
