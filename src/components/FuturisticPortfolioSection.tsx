
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HolographicCollectionCard } from '@/components/HolographicCollectionCard';
import { ParticleBackground } from '@/components/ParticleBackground';
import { CollectionLightbox } from '@/components/CollectionLightbox';
import { CollectionFilter } from '@/components/CollectionFilter';
import { useWeddingCollections } from '@/hooks/useWeddingCollections';
import { WeddingCollection } from '@/types/portfolio';

export const FuturisticPortfolioSection = () => {
  const { collections: weddingCollections, isLoading } = useWeddingCollections();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<WeddingCollection | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Weddings', count: weddingCollections.length },
    { id: 'traditional', name: 'Traditional', count: weddingCollections.filter(c => c.category === 'traditional').length },
    { id: 'destination', name: 'Destination', count: weddingCollections.filter(c => c.category === 'destination').length },
    { id: 'beach', name: 'Beach', count: weddingCollections.filter(c => c.category === 'beach').length },
    { id: 'garden', name: 'Garden', count: weddingCollections.filter(c => c.category === 'garden').length },
    { id: 'palace', name: 'Palace', count: weddingCollections.filter(c => c.category === 'palace').length }
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
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.holographic-card-observer');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredCollections]);

  if (isLoading) {
    return (
      <section id="portfolio" className="relative py-20 overflow-hidden">
        <ParticleBackground />
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
    <section id="portfolio" className="relative py-20 overflow-hidden futuristic-portfolio-section">
      <ParticleBackground />
      
      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 holographic-grid-overlay pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="holographic-header-badge inline-block mb-6">
            <span className="text-sm font-mono uppercase tracking-wider">Digital Portfolio</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground futuristic-title">
            Wedding <span className="text-accent holographic-text">Collections</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our curated collection of love stories, each folder containing the complete journey of couples' 
            most precious moments captured with artistic vision and heartfelt passion.
          </p>

          {/* Category Filter */}
          <div className="holographic-filter-container">
            <CollectionFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Collections Timeline */}
        <div className="futuristic-collections-timeline space-y-32">
          {filteredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className="holographic-card-observer"
              data-card-index={index}
            >
              <HolographicCollectionCard
                collection={collection}
                onOpen={() => openCollection(collection)}
                index={index}
                isVisible={visibleCards.includes(index)}
                isAlternate={index % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-32">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 text-muted-foreground">
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-20 holographic-line" />
              <span className="text-sm font-mono uppercase tracking-wider holographic-text-glow">
                {filteredCollections.length} Collections Loaded
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-20 holographic-line" />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="holographic-cta-button relative overflow-hidden"
          >
            <span className="relative z-10">Access More Archives</span>
            <div className="holographic-button-overlay" />
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
