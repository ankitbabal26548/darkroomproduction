
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { WeddingFolderCard } from '@/components/WeddingFolderCard';
import { CollectionLightbox } from '@/components/CollectionLightbox';
import { CollectionFilter } from '@/components/CollectionFilter';
import { weddingCollections } from '@/data/weddingCollections';
import { WeddingCollection } from '@/types/portfolio';

export const PortfolioSection = () => {
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
  }, [activeCategory]);

  const openCollection = (collection: WeddingCollection) => {
    setSelectedCollection(collection);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Wedding <span className="text-accent">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our curated collection of love stories, each folder containing the complete journey of couples' 
            most precious moments captured with artistic vision and heartfelt passion.
          </p>

          {/* Category Filter */}
          <CollectionFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className="collection-item-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <WeddingFolderCard
                collection={collection}
                onOpen={() => openCollection(collection)}
                delay={index * 100}
              />
            </div>
          ))}
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
