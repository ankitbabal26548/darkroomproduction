
import { useState, useRef, useEffect } from 'react';
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
  Download,
  Check,
  Award,
  Zap,
  Eye,
  Settings,
  MousePointer,
  MessageCircle
} from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track mouse position for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'video', name: 'Cinematography', icon: Video },
    { id: 'special', name: 'Special Events', icon: Star }
  ];

  const services = [
    {
      id: 1,
      icon: Camera,
      title: "Wedding Photography",
      category: 'photography',
      description: "Complete wedding day coverage with artistic vision and professional quality",
      features: [
        { name: "Traditional & Candid", premium: false },
        { name: "High-Resolution Images", premium: false },
        { name: "Same-Day Editing", premium: true },
        { name: "Online Gallery", premium: false },
        { name: "Professional Retouching", premium: true },
        { name: "USB + Cloud Backup", premium: true }
      ],
      price: 75000,
      originalPrice: 90000,
      popular: false,
      duration: "8-10 hours",
      deliverables: "500+ edited photos",
      testimonial: "Absolutely stunning work! Captured every emotion perfectly.",
      rating: 4.9,
      completedProjects: 150
    },
    {
      id: 2,
      icon: Video,
      title: "Wedding Cinematography", 
      category: 'video',
      description: "Cinematic wedding films that tell your unique love story beautifully",
      features: [
        { name: "4K Video Quality", premium: false },
        { name: "Drone Coverage", premium: true },
        { name: "Highlight Reel (3-5min)", premium: false },
        { name: "Full Feature Film (45min)", premium: true },
        { name: "Multi-Camera Setup", premium: true },
        { name: "Color Grading", premium: true }
      ],
      price: 125000,
      originalPrice: 150000,
      popular: true,
      duration: "Full day",
      deliverables: "Highlight reel + Feature film",
      testimonial: "Like watching a Hollywood movie of our special day!",
      rating: 5.0,
      completedProjects: 85
    },
    {
      id: 3,
      icon: Heart,
      title: "Pre-Wedding Shoot",
      category: 'photography',
      description: "Romantic pre-wedding sessions in stunning locations of your choice",
      features: [
        { name: "Location Scouting", premium: false },
        { name: "2 Outfit Changes", premium: false },
        { name: "Props & Styling", premium: true },
        { name: "Digital Album", premium: false },
        { name: "Social Media Package", premium: true },
        { name: "Anniversary Prints", premium: true }
      ],
      price: 35000,
      originalPrice: 45000,
      popular: false,
      duration: "4-6 hours",
      deliverables: "150+ edited photos",
      testimonial: "Made us feel like movie stars in every shot!",
      rating: 4.8,
      completedProjects: 200
    },
    {
      id: 4,
      icon: Users,
      title: "Engagement Photography",
      category: 'special',
      description: "Intimate engagement sessions capturing the joy of your special announcement",
      features: [
        { name: "Indoor/Outdoor Options", premium: false },
        { name: "Family Portraits", premium: false },
        { name: "Ring Close-ups", premium: true },
        { name: "Social Media Ready", premium: false },
        { name: "Announcement Cards", premium: true },
        { name: "Quick Turnaround", premium: true }
      ],
      price: 25000,
      originalPrice: 30000,
      popular: false,
      duration: "2-3 hours",
      deliverables: "100+ edited photos",
      testimonial: "Perfect for announcing our engagement to family!",
      rating: 4.7,
      completedProjects: 120
    }
  ];

  const processSteps = [
    {
      id: 1,
      icon: Calendar,
      title: "Consultation & Planning",
      subtitle: "Your Vision, Our Expertise",
      description: "We start with an in-depth consultation to understand your unique story, style preferences, and vision for your special day.",
      details: [
        "Personalized mood board creation",
        "Timeline and shot list planning",
        "Location scouting recommendations",
        "Equipment and crew planning"
      ],
      duration: "1-2 hours",
      timing: "2-4 weeks before event"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Pre-Production",
      subtitle: "Setting the Stage",
      description: "Detailed planning phase where we scout locations, coordinate with vendors, and finalize all creative and technical aspects.",
      details: [
        "Location permits and permissions",
        "Vendor coordination meetings",
        "Equipment testing and backup plans",
        "Final timeline confirmation"
      ],
      duration: "2-3 days",
      timing: "1-2 weeks before event"
    },
    {
      id: 3,
      icon: Camera,
      title: "Production Day",
      subtitle: "Capturing Magic",
      description: "The main event where our professional team captures every precious moment with artistic excellence and technical precision.",
      details: [
        "Multi-angle coverage setup",
        "Candid and posed photography",
        "Real-time backup and storage",
        "Continuous quality monitoring"
      ],
      duration: "Full day coverage",
      timing: "Your special day"
    },
    {
      id: 4,
      icon: Palette,
      title: "Post-Production",
      subtitle: "Crafting Perfection",
      description: "Expert editing, color grading, and enhancement to transform raw captures into stunning visual masterpieces.",
      details: [
        "Professional color correction",
        "Advanced retouching and enhancement",
        "Cinematic editing and transitions",
        "Music and audio synchronization"
      ],
      duration: "2-3 weeks",
      timing: "After event completion"
    },
    {
      id: 5,
      icon: Download,
      title: "Delivery & Beyond",
      subtitle: "Your Memories, Forever",
      description: "Final delivery of your beautifully crafted memories in multiple formats, plus ongoing support and additional services.",
      details: [
        "High-resolution digital delivery",
        "Online gallery with sharing options",
        "Physical prints and albums",
        "Anniversary and milestone services"
      ],
      duration: "Lifetime access",
      timing: "3-4 weeks after event"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full animate-floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-floating" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            Professional Photography Services
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Our Creative <span className="text-accent bg-gradient-to-r from-accent to-accent-lighter bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform your special moments into timeless masterpieces with our comprehensive photography and cinematography services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category, index) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`group relative overflow-hidden px-6 py-3 rounded-full transition-all duration-300 animate-fade-in-up ${
                selectedCategory === category.id 
                ? 'bg-accent text-accent-foreground shadow-lg scale-105' 
                : 'hover:border-accent/50 hover:bg-accent/5'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-lighter opacity-20 animate-pulse" />
              )}
            </Button>
          ))}
        </div>

        {/* 3D Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <Card className={`relative overflow-hidden transition-all duration-500 cursor-pointer h-full
                ${activeService === service.id ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'}
                ${service.popular ? 'ring-2 ring-accent shadow-accent/20' : ''}
                lens-effect professional-glow magnetic-hover`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground px-4 py-2 rounded-bl-2xl text-sm font-bold z-10 animate-pulse">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}

                {/* Service Header */}
                <div className="relative p-6 bg-gradient-to-br from-muted/30 to-background">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                      ${activeService === service.id ? 'bg-accent text-accent-foreground scale-110' : 'bg-accent/10 text-accent'}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{service.completedProjects} projects</div>
                    </div>
                  </div>

                  <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Service Stats */}
                  <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {service.deliverables}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 pt-0">
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, activeService === service.id ? service.features.length : 4).map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm transition-all duration-300
                        ${activeService === service.id ? 'animate-fade-in' : ''}`}
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                          ${feature.premium ? 'bg-accent text-accent-foreground' : 'bg-muted'}`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={feature.premium ? 'font-medium' : ''}>{feature.name}</span>
                        {feature.premium && <Zap className="w-3 h-3 text-accent" />}
                      </div>
                    ))}
                  </div>

                  {/* Testimonial (shown when active) */}
                  {activeService === service.id && (
                    <div className="bg-muted/50 p-4 rounded-lg mb-4 animate-fade-in">
                      <p className="text-sm italic text-muted-foreground">"{service.testimonial}"</p>
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-playfair text-2xl font-bold text-accent">
                          ₹{service.price.toLocaleString()}
                        </span>
                        {service.originalPrice > service.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{service.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">Starting price</div>
                    </div>
                    
                    {service.originalPrice > service.price && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Save ₹{(service.originalPrice - service.price).toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button 
                    className={`w-full transition-all duration-300 group/btn
                      ${activeService === service.id 
                        ? 'bg-accent hover:bg-accent-darker shadow-lg' 
                        : 'bg-accent/90 hover:bg-accent'}`}
                  >
                    <MousePointer className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Creative Process Timeline */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Settings className="w-4 h-4" />
              Our Creative Process
            </div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              From Vision to <span className="text-accent">Reality</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Our proven 5-step process ensures every project exceeds expectations from initial consultation to final delivery.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-lighter to-accent transform -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Step Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 mx-auto bg-background border-4 border-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <step.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                    <h4 className="font-playfair text-lg font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h4>
                    <p className="text-accent text-sm font-medium mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{step.description}</p>
                    
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {step.timing}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-16 bg-accent/30 mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-xl p-4">
                    <h4 className="font-playfair text-lg font-bold mb-1">{step.title}</h4>
                    <p className="text-accent text-sm font-medium mb-2">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{step.duration}</span>
                      <span>•</span>
                      <span>{step.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
            <h4 className="font-playfair text-2xl font-bold mb-4">Ready to Create Something Amazing?</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create a customized package that perfectly captures your special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-darker px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Instant Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
