import { Camera, Award, Heart, Star, Edit3, Video, Plane } from 'lucide-react';

export const TeamShowcase = () => {
  const owner = {
    name: "Sachin Singh",
    role: "Owner & Lead Photographer", 
    experience: "10 Years",
    specialty: "All Types Photography",
    description: "Founded Darkroom Production in 2015 with a passion for capturing love stories. Has photographed 300+ weddings with 5-star rating and specializes in creating timeless memories.",
    image: "https://i.ibb.co/jvc4TBzz/Whats-App-Image-2025-07-26-at-6-29-09-PM.jpg",
    stats: { weddings: "300+", rating: "5.0" },
    gradient: "from-accent/15 to-accent/8"
  };

  const teamMembers = [
    {
      name: "Mohan Saini",
      role: "Cinematographer",
      experience: "6 Years", 
      specialty: "Wedding Cinematography",
      description: "Expert cinematographer specializing in wedding films and storytelling through moving images.",
      image: "https://i.ibb.co/mF0GLX41/Whats-App-Image-2025-07-26-at-6-25-14-PM.jpg",
      icon: Video,
      gradient: "from-blue-500/15 to-blue-500/8"
    },
    {
      name: "Vikas",
      role: "Candid Photographer",
      experience: "7 Years",
      specialty: "Candid Photography", 
      description: "Specializes in capturing natural, unposed moments and genuine emotions during weddings.",
      image: "https://i.ibb.co/0pjGgtMR/Whats-App-Image-2025-07-26-at-6-24-36-PM.jpg",
      icon: Camera,
      gradient: "from-purple-500/15 to-purple-500/8"
    },
    {
      name: "Shubham Kumar",
      role: "Post Production",
      experience: "6 Years",
      specialty: "Photo Editor",
      description: "Master of digital artistry and photo editing, bringing out the best in every photograph through post-production.",
      image: "https://i.ibb.co/Kp8kvtJ1/Whats-App-Image-2025-07-26-at-6-31-59-PM.jpg",
      icon: Edit3,
      gradient: "from-green-500/15 to-green-500/8"
    },
    {
      name: "Kanhaiya",
      role: "Drone Operator",
      experience: "8 Years",
      specialty: "Aerial Photography",
      description: "Expert drone operator capturing stunning aerial shots and unique perspectives for weddings and events.",
      image: "https://i.ibb.co/MxbN4wkx/Whats-App-Image-2025-07-26-at-6-24-09-PM.jpg",
      icon: Plane,
      gradient: "from-pink-500/15 to-pink-500/8"
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
          A passionate team of 25+ professionals dedicated to capturing your most precious moments
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
                  <div className="text-sm text-muted-foreground">Star Rating</div>
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
          <span className="text-accent font-semibold">25+ professionals united by passion, driven by creativity</span>
        </div>
      </div>
    </div>
  );
};
