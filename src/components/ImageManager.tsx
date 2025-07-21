
import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { WeddingImage, WeddingCollection } from '@/types/portfolio';
import { useToast } from '@/hooks/use-toast';

interface ImageManagerProps {
  collection: WeddingCollection;
  onUpdateCollection: (collection: WeddingCollection) => void;
}

export const ImageManager = ({ collection, onUpdateCollection }: ImageManagerProps) => {
  const [images, setImages] = useState<WeddingImage[]>(collection.images);
  const [selectedImage, setSelectedImage] = useState<WeddingImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNewImage, setIsNewImage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    category: 'ceremony' as WeddingImage['category']
  });
  const { toast } = useToast();

  useEffect(() => {
    setImages(collection.images);
  }, [collection]);

  const handleAddImage = () => {
    setSelectedImage(null);
    setIsNewImage(true);
    setFormData({
      title: '',
      image: '',
      description: '',
      category: 'ceremony'
    });
    setIsDialogOpen(true);
  };

  const handleEditImage = (image: WeddingImage) => {
    setSelectedImage(image);
    setIsNewImage(false);
    setFormData({
      title: image.title,
      image: image.image,
      description: image.description || '',
      category: image.category
    });
    setIsDialogOpen(true);
  };

  const handleSaveImage = () => {
    if (!formData.title || !formData.image) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const imageData: WeddingImage = {
      id: selectedImage?.id || Date.now(),
      title: formData.title,
      image: formData.image,
      description: formData.description,
      category: formData.category
    };

    let updatedImages;
    if (isNewImage) {
      updatedImages = [...images, imageData];
    } else {
      updatedImages = images.map(img => 
        img.id === selectedImage?.id ? imageData : img
      );
    }

    setImages(updatedImages);
    
    const updatedCollection = {
      ...collection,
      images: updatedImages
    };
    
    onUpdateCollection(updatedCollection);
    setIsDialogOpen(false);
    
    toast({
      title: isNewImage ? "Image Added" : "Image Updated",
      description: `Image "${formData.title}" has been ${isNewImage ? 'added' : 'updated'}.`,
    });
  };

  const handleDeleteImage = (imageId: number) => {
    const updatedImages = images.filter(img => img.id !== imageId);
    setImages(updatedImages);
    
    const updatedCollection = {
      ...collection,
      images: updatedImages
    };
    
    onUpdateCollection(updatedCollection);
    
    toast({
      title: "Image Deleted",
      description: "The image has been removed from the collection.",
    });
  };

  const categories = ['ceremony', 'reception', 'portraits', 'candid', 'details'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Manage Images</h3>
          <p className="text-muted-foreground">{images.length} images in this collection</p>
        </div>
        <Button onClick={handleAddImage}>
          <Plus className="w-4 h-4 mr-2" />
          Add Image
        </Button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="group">
            <div className="relative">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="capitalize">
                  {image.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleEditImage(image)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteImage(image.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h4 className="font-medium text-sm truncate">{image.title}</h4>
              {image.description && (
                <p className="text-xs text-muted-foreground truncate mt-1">
                  {image.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {images.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No images in this collection yet.</p>
            <Button onClick={handleAddImage} className="mt-4">
              Add Your First Image
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isNewImage ? 'Add New Image' : 'Edit Image'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="imageTitle">Title *</Label>
              <Input
                id="imageTitle"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Wedding Ceremony"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL *</Label>
              <Input
                id="imageUrl"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                placeholder="https://..."
              />
              {formData.image && (
                <div className="mt-2">
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    className="w-full h-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageCategory">Category</Label>
              <select
                id="imageCategory"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as WeddingImage['category'] }))}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageDescription">Description</Label>
              <Textarea
                id="imageDescription"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Optional description..."
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSaveImage} className="flex-1">
                {isNewImage ? 'Add Image' : 'Update Image'}
              </Button>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
