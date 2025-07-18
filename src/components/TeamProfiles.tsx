
import { Camera, Award, Heart, Star } from 'lucide-react';

export const TeamProfiles = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead Photographer",
      specialty: "Wedding Photography",
      experience: "8 Years",
      description: "Passionate about capturing authentic moments and genuine emotions that tell your unique love story.",
      skills: ["Portrait Photography", "Creative Composition", "Natural Lighting"],
      image: "photo-1500673922987-e212871fec22"
    },
    {
      name: "Sarah Williams", 
      role: "Creative Director",
      specialty: "Artistic Vision",
      experience: "6 Years",
      description: "Brings artistic flair and creative direction to every shoot, ensuring each photo is a work of art.",
      skills: ["Art Direction", "Color Theory", "Visual Storytelling"],
      image: "photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Michael Torres",
      role: "Event Photographer",
      specialty: "Candid Moments",
      experience: "5 Years", 
      description: "Specializes in capturing those spontaneous, heartfelt moments that happen when you least expect them.",
      skills: ["Event Coverage", "Candid Photography", "Quick Reflexes"],
      image: "photo-1466442929976-97f336a657be"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Meet the <span className="text-accent italic">Artists</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The passionate individuals behind every perfect shot, dedicated to bringing your vision to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div 
            key={index}
            className="group relative team-card-animation"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Artistic Card */}
            <div className="relative bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl p-8 border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500 h-full">
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${member.image}?w=400&h=400&fit=crop&auto=format`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {member.experience}
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-playfair text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground italic">{member.specialty}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-foreground">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-4 border-t border-accent/10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Client Favorite</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-accent/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Stats */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 px-8 py-4 bg-accent/5 rounded-2xl border border-accent/20">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">15+ Team Members</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">50+ Awards</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">100% Passion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
