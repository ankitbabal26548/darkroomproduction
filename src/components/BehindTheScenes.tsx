
import { Camera, Settings, Lightbulb, Zap } from 'lucide-react';

export const BehindTheScenes = () => {
  const behindScenes = [
    {
      title: "Professional Equipment",
      description: "State-of-the-art cameras, lenses, and lighting equipment for exceptional quality",
      icon: Camera,
      image: "photo-1518770660439-4636190af475",
      stats: "15+ Professional Cameras"
    },
    {
      title: "Creative Setup",
      description: "Carefully planned lighting and composition for each unique shot",
      icon: Settings,
      image: "photo-1581090464777-f3220bbe1b8b",
      stats: "Custom Lighting Setups"
    },
    {
      title: "Post-Production Studio",
      description: "Advanced editing workflows and color grading for perfect results",
      icon: Lightbulb,
      image: "photo-1498050108023-c5249f4df085",
      stats: "Professional Editing Suite"
    },
    {
      title: "Innovation & Technique",
      description: "Cutting-edge techniques and creative approaches to photography",
      icon: Zap,
      image: "photo-1487058792275-0ad4aaf24ca7",
      stats: "Latest Photography Trends"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Behind the <span className="text-accent italic">Scenes</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the artistry, equipment, and passion that goes into creating every perfect shot
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {behindScenes.map((item, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative h-full bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl overflow-hidden border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500">
              
              {/* Image Section */}
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${item.image}?w=600&h=400&fit=crop&auto=format`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                  {item.stats}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-foreground">
                    {item.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
          <Settings className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Crafted with precision and passion</span>
        </div>
      </div>
    </div>
  );
};
