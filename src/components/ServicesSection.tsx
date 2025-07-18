
import { useState } from 'react';
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
  Palette,
  Download,
  Award,
  Settings,
  MessageCircle,
  Clock,
  Crown
} from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'wedding', name: 'Wedding Coverage' },
    { id: 'prewedding', name: 'Pre-Wedding Shoots' }
  ];

  const services = [
    // Wedding Coverage Packages
    {
      id: 1,
      icon: Camera,
      title: "Silver Package",
      category: 'wedding',
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
      icon: Video,
      title: "Gold Package", 
      category: 'wedding',
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
    // Pre-Wedding Shoot Packages
    {
      id: 4,
      icon: Heart,
      title: "Jaipur Pre-Wedding Shoot",
      category: 'prewedding',
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
      details: [
        "₹5,000 advance booking required",
        "Date confirmation and scheduling",
        "Location planning and permissions",
        "Outfit and styling consultation"
      ],
      duration: "Immediate",
      timing: "At time of booking"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Pre-Production",
      subtitle: "Location & Logistics",
      description: "Detailed planning including location scouting, equipment setup, and coordination with all stakeholders.",
      details: [
        "Location permits and access",
        "Equipment and crew coordination",
        "Timeline finalization",
        "Backup plan preparation"
      ],
      duration: "2-3 days",
      timing: "1 week before event"
    },
    {
      id: 3,
      icon: Camera,
      title: "Production Day",
      subtitle: "Capturing Your Moments",
      description: "Professional coverage on your special day with our experienced team using top-tier equipment.",
      details: [
        "Multi-angle coverage setup",
        "Traditional and candid photography",
        "Cinematic videography",
        "Drone coverage (selected packages)"
      ],
      duration: "As per package",
      timing: "Your event day"
    },
    {
      id: 4,
      icon: Palette,
      title: "Post-Production",
      subtitle: "Professional Editing",
      description: "Expert editing, color grading, and enhancement to create stunning final deliverables.",
      details: [
        "Professional photo retouching",
        "Video editing and color grading",
        "Reel creation for social media",
        "Quality assurance and review"
      ],
      duration: "25-45 days",
      timing: "After event completion"
    },
    {
      id: 5,
      icon: Download,
      title: "Delivery",
      subtitle: "Your Memories Ready",
      description: "Complete soft-copy delivery on your cloud drive with all edited photos and videos.",
      details: [
        "Cloud drive delivery",
        "High-resolution photo downloads",
        "Video files in multiple formats",
        "Social media ready content"
      ],
      duration: "Lifetime access",
      timing: "25-45 days post-event"
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
            Darkroom Production Services
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Wedding <span className="text-accent">Coverage</span> Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional wedding photography and cinematography packages, plus stunning pre-wedding shoots in Jaipur and Udaipur.
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
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
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

        {/* Payment Terms */}
        <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20 mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-center">Payment Structure</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Wedding Packages</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ₹5,000 booking fee to secure date</li>
                <li>• 50% due before the shoot</li>
                <li>• 25% upon event completion</li>
                <li>• 25% upon final delivery</li>
                <li>• All prices for one day coverage only</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Pre-Wedding Shoots</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ₹5,000 advance booking</li>
                <li>• Balance on event day</li>
                <li>• Additional reels: ₹500 each</li>
                <li>• Extra photos (Udaipur): ₹1,000 for 10</li>
                <li>• Travel beyond 30km: ₹1,000 extra</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Creative Process Timeline */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Settings className="w-4 h-4" />
              Our Production Process
            </div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              From Booking to <span className="text-accent">Delivery</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Our streamlined process ensures professional coverage and timely delivery of your precious memories.
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
            <h4 className="font-playfair text-2xl font-bold mb-4">Ready to Book Your Package?</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Secure your date with just ₹5,000 advance booking. Let's create beautiful memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-darker px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Date
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
