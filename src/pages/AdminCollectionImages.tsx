
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImageManager } from '@/components/ImageManager';
import { WeddingCollection } from '@/types/portfolio';
import { weddingCollections } from '@/data/weddingCollections';

export const AdminCollectionImages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState<WeddingCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCollection = () => {
      const collections = JSON.parse(localStorage.getItem('weddingCollections') || JSON.stringify(weddingCollections));
      const found = collections.find((c: WeddingCollection) => c.id === Number(id));
      setCollection(found || null);
      setLoading(false);
    };

    loadCollection();
  }, [id]);

  const handleUpdateCollection = (updatedCollection: WeddingCollection) => {
    const collections = JSON.parse(localStorage.getItem('weddingCollections') || JSON.stringify(weddingCollections));
    const updatedCollections = collections.map((c: WeddingCollection) => 
      c.id === updatedCollection.id ? updatedCollection : c
    );
    localStorage.setItem('weddingCollections', JSON.stringify(updatedCollections));
    setCollection(updatedCollection);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p>Loading collection...</p>
        </CardContent>
      </Card>
    );
  }

  if (!collection) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Collection not found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/collections">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-playfair font-bold">{collection.coupleName}</h2>
          <p className="text-muted-foreground">{collection.location} • {collection.weddingDate}</p>
        </div>
      </div>

      <ImageManager 
        collection={collection} 
        onUpdateCollection={handleUpdateCollection}
      />
    </div>
  );
};
