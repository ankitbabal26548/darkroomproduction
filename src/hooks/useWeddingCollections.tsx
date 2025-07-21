
import { useState, useEffect } from 'react';
import { WeddingCollection } from '@/types/portfolio';
import { weddingCollections as defaultCollections } from '@/data/weddingCollections';

export const useWeddingCollections = () => {
  const [collections, setCollections] = useState<WeddingCollection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCollections = () => {
    try {
      const savedCollections = localStorage.getItem('weddingCollections');
      if (savedCollections) {
        const parsedCollections = JSON.parse(savedCollections);
        setCollections(parsedCollections);
      } else {
        setCollections(defaultCollections);
        localStorage.setItem('weddingCollections', JSON.stringify(defaultCollections));
      }
    } catch (error) {
      console.error('Error loading collections:', error);
      setCollections(defaultCollections);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCollections();

    // Listen for storage changes from admin panel
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'weddingCollections') {
        loadCollections();
      }
    };

    // Listen for custom events (for same-tab updates)
    const handleCustomUpdate = () => {
      loadCollections();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('collectionsUpdated', handleCustomUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('collectionsUpdated', handleCustomUpdate);
    };
  }, []);

  const updateCollections = (newCollections: WeddingCollection[]) => {
    setCollections(newCollections);
    localStorage.setItem('weddingCollections', JSON.stringify(newCollections));
    
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('collectionsUpdated'));
  };

  return {
    collections,
    isLoading,
    updateCollections,
    refreshCollections: loadCollections
  };
};
