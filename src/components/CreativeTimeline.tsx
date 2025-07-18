
import { useState } from 'react';
import { Calendar, Award, Users, Camera, Heart, Star } from 'lucide-react';

export const CreativeTimeline = () => {
  const [activeYear, setActiveYear] = useState(2023);

  const timelineData = [
    {
      year: 2010,
      title: "The Beginning",
      subtitle: "A Passion Ignited",
      description: "What started as a love for capturing moments became a mission to preserve memories that last forever.",
      icon: Camera,
      image: "photo-1500673922987-e212871fec22",
      stats: "First camera, infinite dreams"
    },
    {
      year: 2015,
      title: "Recognition",
      subtitle: "Excellence Acknowledged", 
      description: "Our unique approach to wedding photography earned us our first industry award and recognition.",
      icon: Award,
      image: "photo-1618160702438-9b02ab6515c9",
      stats: "15+ Awards won"
    },
    {
      year: 2018,
      title: "Growing Family",
      subtitle: "Building the Team",
      description: "Expanding our passionate team of artists to serve more couples across the region with dedication.",
      icon: Users,
      image: "photo-1466442929976-97f336a657be",
      stats: "5 talented photographers"
    },
    {
      year: 2023,
      title: "500+ Love Stories",
      subtitle: "Milestone Celebrated",
      description: "Reaching our 500th wedding celebration, each one unique, each one a masterpiece of love and joy.",
      icon: Heart,
      image: "photo-1470071459604-3b5ec3a7fe05",
      stats: "500+ couples served"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Our Journey <span className="text-accent italic">Through Time</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every milestone tells a story of growth, passion, and dedication to the art of photography
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-background/80 backdrop-blur-sm rounded-full p-2 border border-accent/20">
          {timelineData.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeYear === item.year
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>

      {/* Active Timeline Item */}
      <div className="timeline-content">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className={`transition-all duration-700 ${
              activeYear === item.year 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8 absolute pointer-events-none'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8 lg:order-1">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent font-medium">{item.stats}</span>
                </div>
                
                <div>
                  <h4 className="font-playfair text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xl text-accent font-medium mb-4 italic">
                    {item.subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/20 rounded-full border-2 border-background flex items-center justify-center">
                        <Star className="w-4 h-4 text-accent" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Team Achievement</span>
                </div>
              </div>

              {/* Visual Side */}
              <div className="lg:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl p-8 border border-accent/20 backdrop-blur-sm">
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={`https://images.unsplash.com/${item.image}?w=600&h=400&fit=crop&auto=format`}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-accent font-medium">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
