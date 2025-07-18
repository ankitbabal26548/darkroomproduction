
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { 
  Camera, 
  Video, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  Palette,
  Download,
  Award,
  Settings,
  MessageCircle,
  Clock
} from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'photography', name: 'Photography' },
    { id: 'video', name: 'Cinematography' },
    { id: 'special', name: 'Special Events' }
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
    <section id="services" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            Professional Photography Services
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Our Creative <span className="text-accent">Services</span>
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
              className={`px-6 py-3 rounded-full transition-all duration-300 animate-fade-in-up ${
                selectedCategory === category.id 
                ? 'bg-accent text-accent-foreground shadow-md' 
                : 'hover:border-accent/50 hover:bg-accent/5'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                {...service}
                isExpanded={activeService === service.id}
                onToggleExpand={() => setActiveService(activeService === service.id ? null : service.id)}
              />
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

          <ProcessTimeline steps={processSteps} />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
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
