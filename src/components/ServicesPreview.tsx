
import { Camera, Heart, Users, Sparkles } from 'lucide-react';

export const ServicesPreview = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Complete wedding day coverage with artistic storytelling and candid moments",
      icon: Heart,
      image: "photo-1500673922987-e212871fec22"
    },
    {
      title: "Engagement Sessions",
      description: "Romantic pre-wedding photography sessions in beautiful locations",
      icon: Camera,
      image: "photo-1618160702438-9b02ab6515c9"
    },
    {
      title: "Event Photography",
      description: "Corporate events, parties, and special occasions captured professionally",
      icon: Users,
      image: "photo-1466442929976-97f336a657be"
    },
    {
      title: "Portrait Sessions",
      description: "Individual and family portraits with creative artistic direction",
      icon: Sparkles,
      image: "photo-1470071459604-3b5ec3a7fe05"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Our <span className="text-accent italic">Services</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive photography services tailored to capture your most precious moments
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative h-full bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-2xl overflow-hidden border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500">
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${service.image}?w=400&h=300&fit=crop&auto=format`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/30 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-playfair text-lg font-bold text-foreground">
                    {service.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium text-lg hover:bg-accent/90 transition-colors cursor-pointer">
          <Camera className="w-5 h-5" />
          View All Services
        </div>
      </div>
    </div>
  );
};
