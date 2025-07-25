
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { 
  Camera, 
  Video, 
  Heart, 
  MapPin, 
  Calendar, 
  Star,
  Download,
  Award,
  MessageCircle,
  Crown,
  Sparkles,
  Gift,
  Aperture,
  Focus,
  Zap,
  Film,
  Settings
} from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedCategory]);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'wedding', name: 'Wedding Coverage', icon: Heart },
    { id: 'prewedding', name: 'Pre-Wedding Shoots', icon: Camera }
  ];

  const services = [
    {
      id: 1,
      icon: Gift,
      title: "Silver Package",
      category: 'wedding',
      tier: 'silver' as const,
      description: "Essential wedding coverage with traditional photography and videography for your special day",
      features: [
        { name: "1 Traditional Photographer", premium: false },
        { name: "1 Traditional Videographer", premium: false },
        { name: "1-Hour Ceremony Coverage", premium: false },
        { name: "Wedding Teaser (1-2 min)", premium: false },
        { name: "1 Social Media Reel", premium: false },
        { name: "25 Fully Edited Photos", premium: false }
      ],
      price: 35000,
      popular: false,
      duration: "1 hour coverage",
      deliverables: "25 photos + teaser + reel"
    },
    {
      id: 2,
      icon: Award,
      title: "Gold Package", 
      category: 'wedding',
      tier: 'gold' as const,
      description: "Enhanced wedding coverage with cinematic videography, candid photography and aerial drone shots",
      features: [
        { name: "1 Traditional Photographer", premium: false },
        { name: "1 Traditional Videographer", premium: false },
        { name: "1 Cinematic Videographer", premium: true },
        { name: "1 Candid Photographer", premium: true },
        { name: "Aerial Drone Coverage", premium: true },
        { name: "2-Hour Wedding Video", premium: true },
        { name: "Highlight Reel (3-5 min)", premium: true },
        { name: "Wedding Teaser (1 min)", premium: false },
        { name: "2 Social Media Reels", premium: false },
        { name: "50 Fully Edited Photos", premium: false }
      ],
      price: 65000,
      popular: true,
      duration: "Extended coverage",
      deliverables: "50 photos + videos + reels"
    },
    {
      id: 3,
      icon: Crown,
      title: "Platinum Package",
      category: 'wedding',
      tier: 'platinum' as const,
      description: "Premium wedding coverage with multiple cinematographers, candid photographers and comprehensive documentation",
      features: [
        { name: "1 Traditional Photographer", premium: false },
        { name: "1 Traditional Videographer", premium: false },
        { name: "2 Cinematic Videographers", premium: true },
        { name: "2 Candid Photographers", premium: true },
        { name: "Aerial Drone Coverage", premium: true },
        { name: "5-Hour Wedding Video", premium: true },
        { name: "Cinematic Film (8-15 min)", premium: true },
        { name: "Highlight Reel (3-5 min)", premium: true },
        { name: "Wedding Teaser (1 min)", premium: false },
        { name: "5 Social Media Reels", premium: true },
        { name: "100 Fully Edited Photos", premium: true }
      ],
      price: 100000,
      popular: false,
      duration: "Full day coverage",
      deliverables: "100 photos + complete video suite"
    },
    {
      id: 4,
      icon: Heart,
      title: "Jaipur Pre-Wedding Shoot",
      category: 'prewedding',
      tier: 'gold' as const,
      description: "Vibrant pre-wedding shoot in the Pink City with iconic locations and professional editing",
      features: [
        { name: "50 Fully Edited Photos", premium: false },
        { name: "Highlight Video (3-4 min)", premium: false },
        { name: "2 Social Media Reels", premium: false },
        { name: "7 Wedding Countdown Photos", premium: true },
        { name: "Iconic Jaipur Locations", premium: true },
        { name: "3-4 Outfit Changes", premium: false },
        { name: "1-Day Shoot: ₹25,000", premium: false },
        { name: "2-Day Shoot: ₹35,000", premium: true }
      ],
      price: 25000,
      popular: false,
      duration: "1-2 days",
      deliverables: "50 photos + video + reels",
      testimonial: "Patrika Gate, Jal Mahal, Hawa Mahal, Toran Dwar coverage included"
    },
    {
      id: 5,
      icon: MapPin,
      title: "Udaipur Pre-Wedding Shoot",
      category: 'prewedding',
      tier: 'platinum' as const,
      description: "Capture your love story in the City of Lakes with comprehensive 2-day coverage and raw footage",
      features: [
        { name: "50 Professionally Edited Photos", premium: false },
        { name: "Cinematic Video (3-4 min)", premium: false },
        { name: "2 Engaging Reels", premium: false },
        { name: "7 Wedding Countdown Photos", premium: true },
        { name: "All Raw Footage on 64GB Pendrive", premium: true },
        { name: "3-4 Outfit Changes", premium: false },
        { name: "2-Day Comprehensive Coverage", premium: true }
      ],
      price: 40000,
      popular: false,
      duration: "2 days",
      deliverables: "50 photos + video + raw footage",
      testimonial: "City Palace, Lake Pichola, Saheliyon Ki Bari, Jag Mandir locations"
    }
  ];

  const processSteps = [
    {
      id: 1,
      icon: Calendar,
      title: "Booking & Planning",
      subtitle: "Secure Your Date",
      description: "Start with a ₹5,000 advance booking to secure your date and begin planning your perfect shoot.",
      duration: "Immediate",
      timing: "At time of booking",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Pre-Production",
      subtitle: "Location & Logistics",
      description: "Detailed planning including location scouting, equipment setup, and coordination with all stakeholders.",
      duration: "2-3 days",
      timing: "1 week before event",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Camera,
      title: "Production Day",
      subtitle: "Capturing Your Moments",
      description: "Professional coverage on your special day with our experienced team using top-tier equipment.",
      duration: "As per package",
      timing: "Your event day",
      color: "from-accent to-accent-lighter"
    },
    {
      id: 4,
      icon: Video,
      title: "Post-Production",
      subtitle: "Professional Editing",
      description: "Expert editing, color grading, and enhancement to create stunning final deliverables.",
      duration: "25-45 days",
      timing: "After event completion",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      icon: Download,
      title: "Delivery",
      subtitle: "Your Memories Ready",
      description: "Complete soft-copy delivery on your cloud drive with all edited photos and videos.",
      duration: "Lifetime access",
      timing: "25-45 days post-event",
      color: "from-rose-500 to-orange-500"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Photography Equipment Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 animate-parallax-float">
          <Camera className="w-full h-full text-accent" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 animate-parallax-float" style={{ animationDelay: '2s' }}>
          <Video className="w-full h-full text-accent" />
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 animate-parallax-float" style={{ animationDelay: '4s' }}>
          <Aperture className="w-full h-full text-accent" />
        </div>
        <div className="absolute bottom-20 right-10 w-10 h-10 animate-parallax-float" style={{ animationDelay: '6s' }}>
          <Focus className="w-full h-full text-accent" />
        </div>
      </div>

      {/* Rule of Thirds Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-accent animate-grid-pulse" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-accent animate-grid-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-accent animate-grid-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-accent animate-grid-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Creative Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Floating Camera Elements */}
          <div className="absolute -top-8 left-1/4 w-8 h-8 opacity-20 animate-equipment-bounce">
            <Settings className="w-full h-full text-accent" />
          </div>
          <div className="absolute -top-4 right-1/4 w-6 h-6 opacity-30 animate-equipment-bounce" style={{ animationDelay: '0.5s' }}>
            <Film className="w-full h-full text-accent" />
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/20 text-accent px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-semibold mb-6 md:mb-8 animate-creative-entrance border border-accent/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/15 to-accent/5 animate-film-strip-roll" />
            <Award className="w-4 h-4 z-10 animate-equipment-bounce" />
            <span className="z-10">Darkroom Production Services</span>
          </div>

          <div className="relative mb-4 md:mb-6">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl font-bold animate-creative-entrance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent relative" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block animate-typewriter overflow-hidden whitespace-nowrap">
                Wedding <span className="text-accent">Coverage</span> Packages
              </span>
            </h2>
            {/* Lens Flare Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-sparkle-burst opacity-50" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-creative-entrance px-4 relative" style={{ animationDelay: '0.4s' }}>
            Professional wedding photography and cinematography packages, plus stunning pre-wedding shoots in Jaipur and Udaipur.
            <div className="absolute -right-4 top-0 w-1 h-1 bg-accent rounded-full animate-sparkle-twinkle" />
          </p>
        </div>

        {/* Enhanced Category Filter with Aperture Design */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-2">
          {serviceCategories.map((category, index) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              className={`px-4 md:px-8 py-2 md:py-4 rounded-full transition-all duration-700 animate-creative-entrance group relative overflow-hidden text-sm md:text-base ${
                selectedCategory === category.id 
                ? 'bg-gradient-to-r from-accent to-accent-darker text-accent-foreground shadow-lg scale-105' 
                : 'hover:border-accent/50 hover:bg-accent/5 hover:scale-105 border-2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {/* Aperture Background */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-aperture-open opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-2 z-10 relative">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-4 h-4 group-hover:animate-equipment-bounce transition-transform duration-300" />
                </div>
                {category.name}
              </div>
              
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-darker/20 rounded-full animate-lens-focus" />
              )}
            </Button>
          ))}
        </div>

        {/* Enhanced Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`${
                visibleCards.includes(service.id) ? 'animate-mobile-card-entrance' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ServiceCard
                {...service}
                isExpanded={activeService === service.id}
                onToggleExpand={() => setActiveService(activeService === service.id ? null : service.id)}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Payment Terms Section */}
        <div className="bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/50 mb-16 md:mb-20 backdrop-blur-sm relative overflow-hidden">
          {/* Photography Equipment Background */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-10 animate-shutter-speed">
            <Aperture className="w-full h-full text-accent" />
          </div>
          
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Payment Structure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-accent animate-gentle-bounce" />
              </div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Wedding Packages</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" />
                  ₹5,000 booking fee to secure date
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '0.5s' }} />
                  50% due before the shoot
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '1s' }} />
                  25% upon event completion
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '1.5s' }} />
                  25% upon final delivery
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '2s' }} />
                  All prices for one day coverage only
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Camera className="w-4 h-4 text-accent animate-gentle-bounce" />
              </div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Pre-Wedding Shoots</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" />
                  ₹5,000 advance booking
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '0.5s' }} />
                  Balance on event day
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '1s' }} />
                  Additional reels: ₹500 each
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '1.5s' }} />
                  Extra photos (Udaipur): ₹1,000 for 10
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 animate-sparkle-twinkle" style={{ animationDelay: '2s' }} />
                  Travel beyond 30km: ₹1,000 extra
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Process Timeline */}
        <div className="relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/20 text-accent px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-semibold mb-6 md:mb-8 animate-creative-entrance border border-accent/20 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/15 to-accent/5 animate-film-strip-roll" />
              <Sparkles className="w-4 h-4 z-10 animate-sparkle-burst" />
              <span className="z-10">Our Creative Process</span>
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-creative-entrance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              From Booking to <span className="text-accent">Delivery</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-creative-entrance px-4">
              Our streamlined process ensures professional coverage and timely delivery of your precious memories.
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 md:mt-20 animate-creative-entrance">
          <div className="relative bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-accent/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 opacity-20 animate-equipment-bounce">
              <Zap className="w-full h-full text-accent" />
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 opacity-30 animate-equipment-bounce" style={{ animationDelay: '1s' }}>
              <Star className="w-full h-full text-accent" />
            </div>
            
            <div className="relative z-10">
              <h4 className="font-playfair text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Ready to Book Your Package?
              </h4>
              <p className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-base md:text-lg px-4">
                Secure your date with just ₹5,000 advance booking. Let's create beautiful memories together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-accent-darker hover:from-accent-darker hover:to-accent-darkest text-accent-foreground px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 animate-equipment-bounce" />
                  Book Your Date
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 animate-equipment-bounce" />
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
