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
  Gift
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
      { threshold: 0.2 }
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
      deliverables: "25 photos + teaser + reel",
      gridSize: "standard"
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
      deliverables: "50 photos + videos + reels",
      gridSize: "large"
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
      deliverables: "100 photos + complete video suite",
      gridSize: "standard"
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
      testimonial: "Patrika Gate, Jal Mahal, Hawa Mahal, Toran Dwar coverage included",
      gridSize: "standard"
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
      testimonial: "City Palace, Lake Pichola, Saheliyon Ki Bari, Jag Mandir locations",
      gridSize: "standard"
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
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/20 text-accent px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-creative-entrance border border-accent/20 backdrop-blur-sm">
            <Award className="w-4 h-4" />
            Darkroom Production Services
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-creative-entrance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
            Wedding <span className="text-accent">Coverage</span> Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-creative-entrance" style={{ animationDelay: '0.4s' }}>
            Professional wedding photography and cinematography packages, plus stunning pre-wedding shoots in Jaipur and Udaipur.
          </p>
        </div>

        {/* Creative Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceCategories.map((category, index) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-8 py-4 rounded-2xl transition-all duration-500 animate-creative-entrance group relative overflow-hidden ${
                selectedCategory === category.id 
                ? 'bg-gradient-to-r from-accent to-accent-darker text-accent-foreground shadow-lg scale-105' 
                : 'hover:border-accent/50 hover:bg-accent/5 hover:scale-105 border-2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              {category.name}
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-darker/20 animate-pulse" />
              )}
            </Button>
          ))}
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 auto-rows-max">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`${
                service.gridSize === 'large' ? 'md:col-span-2 xl:col-span-1' : ''
              } ${
                visibleCards.includes(service.id) ? 'animate-creative-card-entrance' : 'opacity-0'
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

        {/* Modern Payment Terms */}
        <div className="bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-3xl p-8 border border-border/50 mb-20 backdrop-blur-sm">
          <h3 className="font-playfair text-3xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Payment Structure
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 rounded-2xl p-6 border border-border/30 backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-4 text-accent">Wedding Packages</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  ₹5,000 booking fee to secure date
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  50% due before the shoot
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  25% upon event completion
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  25% upon final delivery
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  All prices for one day coverage only
                </li>
              </ul>
            </div>
            <div className="bg-card/50 rounded-2xl p-6 border border-border/30 backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-4 text-accent">Pre-Wedding Shoots</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  ₹5,000 advance booking
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Balance on event day
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Additional reels: ₹500 each
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Extra photos (Udaipur): ₹1,000 for 10
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Travel beyond 30km: ₹1,000 extra
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Creative Process Timeline */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/20 text-accent px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-creative-entrance border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Our Creative Process
            </div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-creative-entrance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              From Booking to <span className="text-accent">Delivery</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-creative-entrance">
              Our streamlined process ensures professional coverage and timely delivery of your precious memories.
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 animate-creative-entrance">
          <div className="relative bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-3xl p-12 border border-accent/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <h4 className="font-playfair text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Ready to Book Your Package?
              </h4>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Secure your date with just ₹5,000 advance booking. Let's create beautiful memories together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-accent to-accent-darker hover:from-accent-darker hover:to-accent-darkest text-accent-foreground px-10 py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Your Date
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 px-10 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-6 h-6 mr-3" />
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
