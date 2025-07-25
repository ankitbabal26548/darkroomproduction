
import { Star, Heart } from 'lucide-react';

export const HappyClients = () => {
  const testimonials = [
    {
      name: "Sarah & Mike",
      event: "Wedding Photography",
      quote: "Alex made our wedding day so special! The photos are absolutely beautiful and capture every emotion perfectly. We couldn't be happier!",
      rating: 5
    },
    {
      name: "Emma Johnson",
      event: "Engagement Session",
      quote: "We felt so comfortable during our shoot. Alex has a great eye for natural moments and the results exceeded our expectations.",
      rating: 5
    },
    {
      name: "The Martinez Family",
      event: "Family Portrait",
      quote: "Working with Alex was a wonderful experience. Patient with our kids and delivered stunning family photos we'll treasure forever.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Happy <span className="text-accent italic">Clients</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's what some of our wonderful clients have to say about their experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-background/50 rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
