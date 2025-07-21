
import { useState, useEffect, useRef } from 'react';
import { HolographicFolderCard } from '@/components/HolographicFolderCard';
import { ParticleField } from '@/components/ParticleField';
import { useWeddingCollections } from '@/hooks/useWeddingCollections';
import { WeddingCollection } from '@/types/portfolio';

export const FuturisticPortfolioSection = () => {
  const { collections: weddingCollections, isLoading } = useWeddingCollections();
  const [visibleCollections, setVisibleCollections] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setVisibleCollections(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [weddingCollections]);

  if (isLoading) {
    return (
      <section className="py-20 overflow-hidden relative">
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
    <section ref={sectionRef} id="portfolio" className="relative min-h-screen overflow-hidden bg-background">
      {/* Futuristic Background */}
      <div className="absolute inset-0 opacity-30">
        <ParticleField />
      </div>
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="futuristic-mesh-bg"></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Futuristic Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="font-mono text-4xl md:text-7xl font-bold mb-6 text-foreground futuristic-glow">
              <span className="text-accent neon-text">&gt;</span> DIGITAL_ARCHIVE
              <span className="text-accent neon-text">_</span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-mono">
            <span className="text-accent">[ACCESSING]</span> Curated collection of captured moments_
            <br />
            <span className="text-accent">[STATUS]</span> Ready for neural interface exploration_
          </p>

          {/* Terminal-style loading bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-black/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 text-accent mb-2">
                <span className="animate-pulse">●</span>
                <span>LOADING_COLLECTIONS.exe</span>
              </div>
              <div className="h-1 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent to-accent-lighter animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Collections Timeline */}
        <div className="space-y-32">
          {weddingCollections.map((collection, index) => (
            <div
              key={collection.id}
              data-index={index}
              className={`transition-all duration-1000 ${
                visibleCollections.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <HolographicFolderCard
                collection={collection}
                index={index}
                isVisible={visibleCollections.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Data Footer */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-4 text-muted-foreground font-mono">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent w-20" />
            <span className="text-sm">
              <span className="text-accent">[TOTAL_RECORDS]</span> {weddingCollections.length}_COLLECTIONS
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
