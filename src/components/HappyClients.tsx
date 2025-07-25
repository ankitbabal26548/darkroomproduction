
import { Star, Quote, Heart, Camera, Users, CheckCircle } from 'lucide-react';

export const HappyClients = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      type: "Wedding Photography",
      rating: 5,
      text: "Absolutely stunning photos! The team captured every precious moment of our wedding day. Their attention to detail and creativity exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a45c1f?w=100&h=100&fit=crop&auto=format",
      event: "June 2024 Wedding"
    },
    {
      name: "Emma & David",
      type: "Pre-Wedding Session",
      rating: 5,
      text: "The pre-wedding shoot was so much fun! They made us feel comfortable and natural. The photos are absolutely beautiful and perfectly capture our love story.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
      event: "March 2024 Session"
    },
    {
      name: "Jessica & Ryan",
      type: "Engagement Photos",
      rating: 5,
      text: "Professional, creative, and so easy to work with! The photos turned out amazing and we couldn't be happier with the results. Highly recommend!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format",
      event: "January 2024 Engagement"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Clean Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Happy{' '}
            <span className="relative text-accent">
              Clients
            </span>
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it - hear what our couples have to say about their experience with us
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/8 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Clean Main Card */}
            <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/15 hover:border-accent/25 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105 h-full">
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent/15 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent" />
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-muted/80 to-muted/50 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent font-medium text-sm">{testimonial.type}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Event Date */}
              <div className="flex items-center gap-2 pt-4 border-t border-accent/10">
                <Camera className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">{testimonial.event}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center group">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-accent/8 to-accent/4 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-accent" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">100+</div>
          <div className="text-muted-foreground">Happy Couples</div>
        </div>
        
        <div className="text-center group">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-accent/8 to-accent/4 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-accent fill-accent" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">4.9</div>
          <div className="text-muted-foreground">Average Rating</div>
        </div>
        
        <div className="text-center group">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-accent/8 to-accent/4 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">100%</div>
          <div className="text-muted-foreground">Satisfaction Rate</div>
        </div>
      </div>

      {/* Clean Call-to-Action */}
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md"></div>
          <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-foreground font-semibold">Join our family of happy couples</span>
          </div>
        </div>
      </div>
    </div>
  );
};
