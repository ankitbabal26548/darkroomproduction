
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectionForm } from '@/components/CollectionForm';
import { WeddingCollection } from '@/types/portfolio';
import { weddingCollections } from '@/data/weddingCollections';
import { Card, CardContent } from '@/components/ui/card';

export const AdminCollectionEdit = () => {
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

  const handleSave = (updatedCollection: WeddingCollection) => {
    const collections = JSON.parse(localStorage.getItem('weddingCollections') || JSON.stringify(weddingCollections));
    const updatedCollections = collections.map((c: WeddingCollection) => 
      c.id === updatedCollection.id ? updatedCollection : c
    );
    localStorage.setItem('weddingCollections', JSON.stringify(updatedCollections));
    
    navigate('/admin/collections');
  };

  const handleCancel = () => {
    navigate('/admin/collections');
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
      <div>
        <h2 className="text-3xl font-playfair font-bold">Edit Collection</h2>
        <p className="text-muted-foreground">Modify {collection.coupleName}'s wedding collection</p>
      </div>
      
      <CollectionForm 
        collection={collection} 
        onSave={handleSave} 
        onCancel={handleCancel} 
      />
    </div>
  );
};
