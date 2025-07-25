
import { Star, Heart, Quote, Camera, Users } from 'lucide-react';

export const HappyClients = () => {
  const testimonials = [
    {
      name: "Sarah & Mike",
      event: "Wedding Photography",
      quote: "Alex and the team made our wedding day so special! The photos are absolutely beautiful and capture every emotion perfectly. We couldn't be happier!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop&auto=format",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      name: "Emma Johnson",
      event: "Engagement Session",
      quote: "We felt so comfortable during our shoot. The team has a great eye for natural moments and the results exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      name: "The Martinez Family",
      event: "Family Portrait",
      quote: "Working with this team was a wonderful experience. Patient with our kids and delivered stunning family photos we'll treasure forever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Creative Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Happy{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Clients
            </span>
          </h3>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-accent animate-pulse" />
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's what some of our wonderful clients have to say about their experience
        </p>
        
        {/* Stats Row */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-accent text-accent" />
            <span className="text-accent font-bold">4.9/5</span>
            <span className="text-muted-foreground">Average Rating</span>
          </div>
          <div className="w-px h-6 bg-accent/20"></div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-accent font-bold">100+</span>
            <span className="text-muted-foreground">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Main Card */}
            <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 h-full">
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              
              {/* Rating Stars */}
              <div className="flex mb-6 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-accent text-accent animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic text-center group-hover:text-foreground transition-colors">
                "{testimonial.quote}"
              </p>
              
              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent/20 group-hover:border-accent/50 transition-colors">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 backdrop-blur-sm">
          <Camera className="w-5 h-5 text-accent animate-pulse" />
          <span className="text-accent font-medium">Join our family of happy clients</span>
        </div>
      </div>
    </div>
  );
};
