
import { useEffect, useState, useRef } from 'react';
import { Users, Calendar, Award, Heart, Star, Camera } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const ArtisticStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 500, suffix: "+", label: "Wedding Sessions Completed", icon: Heart, color: "from-pink-500/20 to-red-500/20" },
    { number: 8, suffix: "+", label: "Years of Experience", icon: Calendar, color: "from-blue-500/20 to-cyan-500/20" },
    { number: 15, suffix: "+", label: "Photography Awards Won", icon: Award, color: "from-yellow-500/20 to-orange-500/20" },
    { number: 99, suffix: "%", label: "Client Satisfaction Rate", icon: Star, color: "from-green-500/20 to-emerald-500/20" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Excellence in <span className="text-accent italic">Numbers</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every statistic reflects our commitment to delivering exceptional photography experiences
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Artistic Card Design */}
            <div className="relative h-full">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 h-full flex flex-col items-center text-center space-y-6 group-hover:border-accent/40 transition-all duration-500">
                
                {/* Artistic Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Camera className="w-3 h-3 text-accent-foreground" />
                  </div>
                </div>

                {/* Animated Number */}
                <div className="space-y-2">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-accent">
                    {isVisible && (
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-lg text-foreground leading-tight">
                    {stat.label}
                  </h4>
                </div>

                {/* Artistic Progress Line */}
                <div className="w-full">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Artistic Element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
          <Heart className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Trusted by couples worldwide</span>
        </div>
      </div>
    </div>
  );
};
