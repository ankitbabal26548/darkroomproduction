
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Star, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { weddingCollections } from '@/data/weddingCollections';
import { WeddingCollection } from '@/types/portfolio';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export const AdminCollections = () => {
  const [collections, setCollections] = useState<WeddingCollection[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    // Load from localStorage or use default data
    const savedCollections = localStorage.getItem('weddingCollections');
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    } else {
      setCollections(weddingCollections);
      localStorage.setItem('weddingCollections', JSON.stringify(weddingCollections));
    }
  }, []);

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.coupleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || collection.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'traditional', 'destination', 'beach', 'garden', 'palace', 'modern'];

  const handleDelete = (id: number) => {
    const updatedCollections = collections.filter(c => c.id !== id);
    setCollections(updatedCollections);
    localStorage.setItem('weddingCollections', JSON.stringify(updatedCollections));
    
    toast({
      title: "Collection Deleted",
      description: "The wedding collection has been removed.",
    });
  };

  const toggleFeatured = (id: number) => {
    const updatedCollections = collections.map(c => 
      c.id === id ? { ...c, featured: !c.featured } : c
    );
    setCollections(updatedCollections);
    localStorage.setItem('weddingCollections', JSON.stringify(updatedCollections));
    
    toast({
      title: "Collection Updated",
      description: "Featured status has been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-playfair font-bold">Wedding Collections</h2>
          <p className="text-muted-foreground">Manage your wedding portfolio collections</p>
        </div>
        <Link to="/admin/collections/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Collection
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-input bg-background rounded-md"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollections.map((collection) => (
          <Card key={collection.id} className="group hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={collection.coverImage}
                alt={collection.coupleName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {collection.featured && (
                  <Badge className="bg-yellow-500/90 text-yellow-900">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge variant="secondary" className="capitalize">
                  {collection.category}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg">{collection.coupleName}</CardTitle>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{collection.location}</p>
                <p>{collection.weddingDate}</p>
                <p>{collection.images.length} images</p>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFeatured(collection.id)}
                    title="Toggle Featured"
                  >
                    <Star className={`w-4 h-4 ${collection.featured ? 'fill-current text-yellow-500' : ''}`} />
                  </Button>
                  <Link to={`/admin/collections/${collection.id}/edit`}>
                    <Button variant="outline" size="sm" title="Edit Collection">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to={`/admin/collections/${collection.id}/images`}>
                    <Button variant="outline" size="sm" title="Manage Images">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      title="Delete Collection"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Collection</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{collection.coupleName}"? This action cannot be undone and will remove all associated images.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={() => handleDelete(collection.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCollections.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No collections found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
