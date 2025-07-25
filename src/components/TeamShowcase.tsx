
import { Camera, Award, Heart, Star, Edit3 } from 'lucide-react';

export const TeamShowcase = () => {
  const owner = {
    name: "Alex Thompson",
    role: "Owner & Lead Photographer",
    experience: "5 Years",
    specialty: "Wedding Photography",
    description: "Founded our studio with a passion for capturing love stories. Specializes in candid moments and artistic compositions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    stats: { weddings: "80+", rating: "4.9" },
    gradient: "from-accent/15 to-accent/8"
  };

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Senior Photographer",
      experience: "3 Years",
      specialty: "Portrait Specialist",
      description: "Expert in capturing personality and emotion in every portrait session.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a45c1f?w=300&h=300&fit=crop&auto=format",
      icon: Camera,
      gradient: "from-blue-500/15 to-blue-500/8"
    },
    {
      name: "Mark Rodriguez",
      role: "Creative Photographer",
      experience: "2 Years",
      specialty: "Artistic Shots",
      description: "Brings a unique creative vision to every project with innovative techniques.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
      icon: Star,
      gradient: "from-purple-500/15 to-purple-500/8"
    },
    {
      name: "Lisa Chen",
      role: "Event Photographer",
      experience: "1.5 Years",
      specialty: "Event Coverage",
      description: "Specializes in capturing the energy and excitement of special events.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format",
      icon: Heart,
      gradient: "from-pink-500/15 to-pink-500/8"
    },
    {
      name: "David Park",
      role: "Photo Editor",
      experience: "3 Years",
      specialty: "Post-Production",
      description: "Master of digital artistry, bringing out the best in every photograph.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format",
      icon: Edit3,
      gradient: "from-green-500/15 to-green-500/8"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Clean Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Our{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-accent-lighter bg-clip-text text-transparent italic">
              Creative Team
            </span>
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A passionate group of professionals dedicated to capturing your most precious moments
        </p>
      </div>

      {/* Owner/Lead Photographer - Featured */}
      <div className="mb-16">
        <div className="group relative bg-gradient-to-br from-background/95 to-background/80 rounded-3xl p-8 border border-accent/15 backdrop-blur-sm hover:border-accent/25 transition-all duration-500 hover:shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Owner Photo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/50 rounded-2xl overflow-hidden">
                <img 
                  src={owner.image}
                  alt={owner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                {owner.experience} Leading
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
            </div>

            {/* Owner Content */}
            <div className="space-y-6">
              <div>
                <h4 className="font-playfair text-3xl font-bold text-foreground mb-2">
                  {owner.name}
                </h4>
                <p className="text-accent font-semibold text-lg mb-1">{owner.role}</p>
                <p className="text-accent/70 text-sm mb-4">{owner.specialty}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {owner.description}
                </p>
              </div>

              {/* Owner Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-accent/15">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">{owner.stats.weddings}</div>
                  <div className="text-sm text-muted-foreground">Weddings Shot</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">{owner.stats.rating}</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Clean Card Design */}
            <div className="relative h-full">
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/15 h-full group-hover:border-accent/25 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105">
                
                {/* Photo */}
                <div className="relative mb-4">
                  <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/50 rounded-xl overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/15 rounded-full flex items-center justify-center">
                    <member.icon className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-accent font-semibold text-sm mb-1">{member.role}</p>
                    <p className="text-accent/70 text-xs mb-2">{member.specialty}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Experience Badge */}
                  <div className="pt-3 border-t border-accent/10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/8 rounded-full">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-xs text-accent font-semibold">{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Team Unity Message */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm">
          <Heart className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold">United by passion, driven by creativity</span>
        </div>
      </div>
    </div>
  );
};
