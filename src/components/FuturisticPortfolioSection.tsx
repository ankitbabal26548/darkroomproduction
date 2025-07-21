
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CinematicCollectionCard } from '@/components/CinematicCollectionCard';
import { EnergyFieldBackground } from '@/components/EnergyFieldBackground';
import { DramaticSeparator } from '@/components/DramaticSeparator';
import { CollectionLightbox } from '@/components/CollectionLightbox';
import { CollectionFilter } from '@/components/CollectionFilter';
import { useWeddingCollections } from '@/hooks/useWeddingCollections';
import { WeddingCollection } from '@/types/portfolio';
import { Sparkles, Heart } from 'lucide-react';

export const FuturisticPortfolioSection = () => {
  const { collections: weddingCollections, isLoading } = useWeddingCollections();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<WeddingCollection | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Stories', count: weddingCollections.length },
    { id: 'traditional', name: 'Classic Romance', count: weddingCollections.filter(c => c.category === 'traditional').length },
    { id: 'destination', name: 'Adventure Love', count: weddingCollections.filter(c => c.category === 'destination').length },
    { id: 'beach', name: 'Seaside Dreams', count: weddingCollections.filter(c => c.category === 'beach').length },
    { id: 'garden', name: 'Garden Paradise', count: weddingCollections.filter(c => c.category === 'garden').length },
    { id: 'palace', name: 'Royal Elegance', count: weddingCollections.filter(c => c.category === 'palace').length }
  ];

  const filteredCollections = useMemo(() => {
    return activeCategory === 'all' 
      ? weddingCollections 
      : weddingCollections.filter(collection => collection.category === activeCategory);
  }, [activeCategory, weddingCollections]);

  const openCollection = (collection: WeddingCollection) => {
    setSelectedCollection(collection);
    setLightboxOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev.filter(i => i !== cardIndex), cardIndex]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const cards = document.querySelectorAll('.cinematic-card-observer');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredCollections]);

  if (isLoading) {
    return (
      <section id="portfolio" className="relative py-20 overflow-hidden">
        <EnergyFieldBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="relative overflow-hidden cinematic-portfolio-section">
      <EnergyFieldBackground variant="primary" intensity="medium" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Header */}
        <div className="text-center py-20 mb-12">
          <div className="luxury-badge mb-8">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-base font-medium">Wedding Portfolio</span>
          </div>
          
          <h2 className="cinematic-title">
            Love Stories <span className="accent-gradient">Beautifully Told</span>
          </h2>
          
          <p className="cinematic-subtitle">
            Every couple has a unique story. We capture the magic, the emotions, and the unforgettable moments 
            that make your wedding day extraordinary. Explore our collection of beautiful love stories.
          </p>

          {/* Enhanced Filter */}
          <div className="luxury-filter-container mt-12">
            <CollectionFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Cinematic Collections */}
        <div className="cinematic-collections-timeline">
          {filteredCollections.map((collection, index) => (
            <div key={collection.id}>
              <div
                className="cinematic-card-observer"
                data-card-index={index}
              >
                <CinematicCollectionCard
                  collection={collection}
                  onOpen={() => openCollection(collection)}
                  index={index}
                  isVisible={visibleCards.includes(index)}
                  isAlternate={index % 2 === 1}
                />
              </div>
              
              {/* Dramatic Separator between collections */}
              {index < filteredCollections.length - 1 && (
                <div className="my-24 md:my-32">
                  <DramaticSeparator 
                    variant={index % 3 === 0 ? 'wave' : index % 3 === 1 ? 'geometric' : 'energy'}
                    height="large"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Elegant Call to Action */}
        <div className="text-center mt-32 py-20">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-6 text-muted-foreground">
              <div className="luxury-line" />
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-lg font-medium">
                  {filteredCollections.length} Beautiful Stories Shared
                </span>
              </div>
              <div className="luxury-line" />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="luxury-cta-main group relative overflow-hidden"
          >
            <span className="relative z-10 text-lg px-8 py-2">Ready to Tell Your Story?</span>
            <div className="luxury-button-shimmer" />
          </Button>
        </div>
      </div>

      {/* Collection Lightbox */}
      <CollectionLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        collection={selectedCollection}
      />
    </section>
  );
};
