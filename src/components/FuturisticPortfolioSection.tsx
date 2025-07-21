
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { WeddingAlbumCard } from '@/components/WeddingAlbumCard';
import { CollectionLightbox } from '@/components/CollectionLightbox';
import { CollectionFilter } from '@/components/CollectionFilter';
import { useWeddingCollections } from '@/hooks/useWeddingCollections';
import { WeddingCollection } from '@/types/portfolio';

export const FuturisticPortfolioSection = () => {
  const { collections: weddingCollections, isLoading } = useWeddingCollections();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<WeddingCollection | null>(null);

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

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 overflow-x-hidden futuristic-portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    <section id="portfolio" className="py-20 overflow-x-hidden futuristic-portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Wedding <span className="text-accent">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our curated collection of love stories, each album containing the complete journey of couples' 
            most precious moments captured with artistic vision and heartfelt passion.
          </p>

          {/* Category Filter */}
          <CollectionFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Collections Grid - 2 Column Layout */}
        <div className="futuristic-grid-container mb-16">
          <div className="grid-energy-overlay" />
          <div className="grid-particles-system">
            <div className="particle-stream-horizontal" />
            <div className="particle-stream-vertical" />
          </div>
          
          <div className="futuristic-collections-grid">
            {filteredCollections.map((collection, index) => (
              <div
                key={collection.id}
                className={`collection-grid-item collection-grid-animate`}
                style={{ 
                  animationDelay: `${Math.floor(index / 2) * 300 + (index % 2) * 150}ms` 
                }}
                data-row={Math.floor(index / 2)}
                data-col={index % 2}
              >
                <WeddingAlbumCard
                  collection={collection}
                  onOpen={() => openCollection(collection)}
                  delay={Math.floor(index / 2) * 300 + (index % 2) * 150}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 text-muted-foreground">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20" />
              <span className="text-sm font-medium">
                Showing {filteredCollections.length} wedding collections
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20" />
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-darker text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
          >
            View More Collections
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
