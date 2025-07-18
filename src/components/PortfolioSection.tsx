import { useState, useMemo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PortfolioCard } from '@/components/PortfolioCard';
import { PortfolioLightbox } from '@/components/PortfolioLightbox';
import { CategoryFilter } from '@/components/CategoryFilter';

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Work', count: 12 },
    { id: 'wedding', name: 'Weddings', count: 4 },
    { id: 'prewedding', name: 'Pre-Wedding', count: 3 },
    { id: 'cinematic', name: 'Cinematic', count: 2 },
    { id: 'portraits', name: 'Portraits', count: 3 }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      type: 'photo' as const,
      title: 'Elegant Garden Wedding',
      location: 'Royal Botanical Gardens, Mumbai',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      likes: 342,
      featured: true,
      description: 'A breathtaking ceremony surrounded by blooming roses and vintage architecture.',
      client: 'Priya & Arjun',
      date: 'March 2024',
      award: 'Best Wedding Photo 2024'
    },
    {
      id: 2,
      category: 'prewedding',
      type: 'photo' as const,
      title: 'Romantic Beach Session',
      location: 'Arambol Beach, Goa',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      likes: 456,
      description: 'Golden hour magic captured against the serene Goan coastline.',
      client: 'Meera & Karan',
      date: 'February 2024'
    },
    {
      id: 3,
      category: 'cinematic',
      type: 'video' as const,
      title: 'Traditional Wedding Film',
      location: 'Udaipur Palace, Rajasthan',
      image: 'https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=800&h=600&fit=crop',
      likes: 623,
      featured: true,
      description: 'A cinematic journey through royal Rajasthani wedding traditions.',
      client: 'Aadhya & Vikram',
      date: 'January 2024'
    },
    {
      id: 4,
      category: 'wedding',
      type: 'photo' as const,
      title: 'Destination Wedding',
      location: 'Backwaters, Kerala',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      likes: 289,
      description: 'Love floating on the tranquil backwaters of God\'s own country.',
      client: 'Sanya & Rohit',
      date: 'December 2023'
    },
    {
      id: 5,
      category: 'portraits',
      type: 'photo' as const,
      title: 'Bridal Portraits',
      location: 'Heritage Studio, Delhi',
      image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop',
      likes: 534,
      description: 'Timeless elegance captured in intimate bridal portrait sessions.',
      client: 'Kavya',
      date: 'November 2023',
      award: 'Portrait Excellence'
    },
    {
      id: 6,
      category: 'prewedding',
      type: 'video' as const,
      title: 'Love Story Film',
      location: 'City Palace, Udaipur',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop',
      likes: 701,
      featured: true,
      description: 'A tale of two hearts against the backdrop of royal architecture.',
      client: 'Ishita & Aryan',
      date: 'October 2023'
    },
    {
      id: 7,
      category: 'wedding',
      type: 'photo' as const,
      title: 'Mountain Wedding',
      location: 'Manali, Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      likes: 412,
      description: 'Love elevated to new heights in the Himalayan foothills.',
      client: 'Tara & Neel',
      date: 'September 2023'
    },
    {
      id: 8,
      category: 'portraits',
      type: 'photo' as const,
      title: 'Corporate Headshots',
      location: 'Modern Studio, Bangalore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      likes: 198,
      description: 'Professional portraits that capture personality and professionalism.',
      client: 'Tech Startup Team',
      date: 'August 2023'
    },
    {
      id: 9,
      category: 'cinematic',
      type: 'video' as const,
      title: 'Documentary Wedding',
      location: 'Jaipur, Rajasthan',
      image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=800&h=600&fit=crop',
      likes: 389,
      description: 'Authentic moments woven into a beautiful narrative.',
      client: 'Riya & Sameer',
      date: 'July 2023'
    },
    {
      id: 10,
      category: 'prewedding',
      type: 'photo' as const,
      title: 'Urban Love Story',
      location: 'Mumbai Skyline',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
      likes: 267,
      description: 'Modern romance against the bustling cityscape.',
      client: 'Anaya & Dev',
      date: 'June 2023'
    },
    {
      id: 11,
      category: 'portraits',
      type: 'photo' as const,
      title: 'Fashion Editorial',
      location: 'Fashion District, Delhi',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
      likes: 445,
      description: 'High-fashion meets artistic vision in stunning editorial portraits.',
      client: 'Fashion Magazine',
      date: 'May 2023'
    },
    {
      id: 12,
      category: 'wedding',
      type: 'photo' as const,
      title: 'Beach Wedding Ceremony',
      location: 'Varca Beach, Goa',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      likes: 356,
      description: 'Vows exchanged as the sun sets over the Arabian Sea.',
      client: 'Deepika & Raj',
      date: 'April 2023'
    }
  ];

  const filteredItems = useMemo(() => {
    return activeCategory === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentLightboxIndex((prev) => 
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  const previousImage = () => {
    setCurrentLightboxIndex((prev) => 
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  // Dynamic grid sizing for masonry effect
  const getGridItemClass = (index: number, item: any) => {
    const classes = ['portfolio-grid-item'];
    
    // Mobile: All items single column
    // Tablet and up: Dynamic sizing
    if (item.featured) {
      classes.push('sm:col-span-2 sm:row-span-2'); // Large featured items
    } else if (index % 5 === 2) {
      classes.push('sm:col-span-2'); // Wide items
    } else if (index % 7 === 1) {
      classes.push('sm:row-span-2'); // Tall items
    }
    
    return classes.join(' ');
  };

  return (
    <section id="portfolio" className="py-12 sm:py-20 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Mobile-First Design */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 transform -skew-y-1 rounded-3xl" />
            <h2 className={`font-playfair text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground relative z-10 transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
            }`}>
              Our <span className="text-gradient bg-gradient-to-r from-accent to-accent-lighter bg-clip-text text-transparent">Portfolio</span>
            </h2>
          </div>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            Discover our collection of captured moments, each telling a unique story of love, joy, and celebration. 
            Every frame is crafted with passion and artistic vision.
          </p>

          {/* Enhanced Category Filter */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Mobile-First Masonry Grid */}
        <div className="portfolio-masonry-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${getGridItemClass(index, item)} transition-all duration-700 ${
                isVisible ? 'animate-portfolio-stagger opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                animationDelay: `${(index * 100) + 600}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              <PortfolioCard
                item={item}
                onView={() => openLightbox(index)}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Enhanced Load More Section */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center space-x-4 text-muted-foreground">
              <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent w-16 sm:w-20" />
              <span className="text-sm font-medium bg-card px-4 py-2 rounded-full border border-border">
                Showing {filteredItems.length} of 50+ projects
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent w-16 sm:w-20" />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-darker text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 rounded-xl hover:scale-105 active:scale-95 touch-manipulation"
          >
            Load More Projects
          </Button>
        </div>
      </div>

      {/* Enhanced Lightbox with Fixed Z-Index */}
      <PortfolioLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentLightboxIndex}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};
