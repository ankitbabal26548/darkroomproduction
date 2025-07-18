
import { Star, Quote, Heart } from 'lucide-react';

export const CreativeTestimonials = () => {
  const testimonials = [
    {
      quote: "Darkroom Production didn't just photograph our wedding, they captured our souls. Every image tells the story of our love in the most beautiful way imaginable.",
      client: "Emma & James",
      event: "Destination Wedding • Tuscany",
      rating: 5,
      initials: "E&J",
      image: "photo-1500673922987-e212871fec22"
    },
    {
      quote: "The team's artistic vision and attention to detail exceeded all our expectations. Our photos are pure magic - every single one could be framed as art.",
      client: "Maria & David",
      event: "Garden Wedding • California",
      rating: 5,
      initials: "M&D",
      image: "photo-1618160702438-9b02ab6515c9"
    },
    {
      quote: "Professional, creative, and incredibly talented. They made us feel comfortable and captured moments we didn't even know were happening. Simply incredible!",
      client: "Lisa & Michael",
      event: "Beach Wedding • Hawaii",
      rating: 5,
      initials: "L&M",
      image: "photo-1466442929976-97f336a657be"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Love <span className="text-accent italic">Stories</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from the couples whose special moments we've had the honor to capture
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="group testimonial-card-animation"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Testimonial Card */}
            <div className="relative h-full bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl p-8 border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-500">
              
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-accent text-accent star-animation"
                      style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-playfair text-lg md:text-xl text-foreground mb-6 italic leading-relaxed text-center">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Photo Section */}
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-muted to-muted/50 rounded-full overflow-hidden border-3 border-accent/20">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?w=200&h=200&fit=crop&auto=format`}
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Client Info */}
              <div className="text-center space-y-2">
                <cite className="text-lg font-semibold text-foreground not-italic">
                  {testimonial.client}
                </cite>
                <p className="text-sm text-muted-foreground">
                  {testimonial.event}
                </p>
              </div>

              {/* Love Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Loved It!</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-accent/30 rounded-full"></div>
              <div className="absolute bottom-12 right-6 w-2 h-2 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Rating */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-6 px-8 py-4 bg-accent/10 rounded-2xl border border-accent/20">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-accent text-accent" />
            <span className="text-2xl font-bold text-accent">4.9</span>
            <span className="text-muted-foreground">out of 5</span>
          </div>
          <div className="w-px h-8 bg-accent/20"></div>
          <div className="text-muted-foreground">
            <span className="font-semibold text-foreground">500+</span> Happy Couples
          </div>
        </div>
      </div>
    </div>
  );
};
