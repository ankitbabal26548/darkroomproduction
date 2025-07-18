import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Video, 
  Heart, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  Palette,
  Download
} from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Complete wedding day coverage with artistic vision and professional quality",
      features: ["Traditional & Candid", "High-Resolution Images", "Same-Day Editing", "Online Gallery"],
      price: "Starting from ₹75,000",
      popular: false
    },
    {
      icon: Video,
      title: "Wedding Cinematography", 
      description: "Cinematic wedding films that tell your unique love story beautifully",
      features: ["4K Video Quality", "Drone Coverage", "Highlight Reel", "Full Feature Film"],
      price: "Starting from ₹1,25,000",
      popular: true
    },
    {
      icon: Heart,
      title: "Pre-Wedding Shoot",
      description: "Romantic pre-wedding sessions in stunning locations of your choice",
      features: ["Location Scouting", "Costume Changes", "Props & Styling", "Digital Album"],
      price: "Starting from ₹35,000",
      popular: false
    },
    {
      icon: Users,
      title: "Engagement Photography",
      description: "Intimate engagement sessions capturing the joy of your special announcement",
      features: ["Indoor/Outdoor Options", "Family Portraits", "Ring Close-ups", "Social Media Ready"],
      price: "Starting from ₹25,000",
      popular: false
    }
  ];

  const timeline = [
    {
      icon: Calendar,
      title: "Consultation",
      description: "Initial meeting to discuss your vision, requirements, and preferences"
    },
    {
      icon: MapPin,
      title: "Planning",
      description: "Location scouting, timeline creation, and detailed shoot planning"
    },
    {
      icon: Camera,
      title: "Shooting",
      description: "Professional photography and videography on your special day"
    },
    {
      icon: Palette,
      title: "Post-Production",
      description: "Expert editing, color grading, and final touches to your images/videos"
    },
    {
      icon: Download,
      title: "Delivery",
      description: "Final delivery of high-quality images and videos in your preferred format"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional photography and cinematography services tailored to capture 
            your special moments with artistic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden hover:shadow-photo transition-all duration-500 lens-effect group ${
                service.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm text-center mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-3 h-3 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <p className="font-playfair text-lg font-semibold text-accent text-center mb-4">
                    {service.price}
                  </p>
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Our <span className="text-accent">Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and 
              professional experience throughout your photography journey.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <step.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                </div>
                
                {/* Step Number */}
                <div className="w-8 h-8 mx-auto mb-3 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <h4 className="font-playfair text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                
                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/20 transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};