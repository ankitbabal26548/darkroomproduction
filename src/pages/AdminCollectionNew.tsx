
import { useNavigate } from 'react-router-dom';
import { CollectionForm } from '@/components/CollectionForm';
import { WeddingCollection } from '@/types/portfolio';
import { weddingCollections } from '@/data/weddingCollections';

export const AdminCollectionNew = () => {
  const navigate = useNavigate();

  const handleSave = (collection: WeddingCollection) => {
    // In a real app, this would save to a database
    // For now, we'll use local storage
    const existingCollections = JSON.parse(localStorage.getItem('weddingCollections') || JSON.stringify(weddingCollections));
    const updatedCollections = [...existingCollections, collection];
    localStorage.setItem('weddingCollections', JSON.stringify(updatedCollections));
    
    navigate('/admin/collections');
  };

  const handleCancel = () => {
    navigate('/admin/collections');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-playfair font-bold">Create New Collection</h2>
        <p className="text-muted-foreground">Add a new wedding portfolio collection</p>
      </div>
      
      <CollectionForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};
