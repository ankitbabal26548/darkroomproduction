
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, X, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { WeddingCollection } from '@/types/portfolio';
import { useToast } from '@/hooks/use-toast';
import { weddingCollections } from '@/data/weddingCollections';

interface CollectionFormProps {
  collection?: WeddingCollection;
  onSave: (collection: WeddingCollection) => void;
  onCancel: () => void;
}

export const CollectionForm = ({ collection, onSave, onCancel }: CollectionFormProps) => {
  const [formData, setFormData] = useState({
    coupleName: '',
    weddingDate: '',
    location: '',
    coverImage: '',
    category: 'traditional' as WeddingCollection['category'],
    description: '',
    highlights: [] as string[],
    featured: false
  });
  const [date, setDate] = useState<Date>();
  const [newHighlight, setNewHighlight] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (collection) {
      setFormData({
        coupleName: collection.coupleName,
        weddingDate: collection.weddingDate,
        location: collection.location,
        coverImage: collection.coverImage,
        category: collection.category,
        description: collection.description,
        highlights: [...collection.highlights],
        featured: collection.featured || false
      });
      setImagePreview(collection.coverImage);
      setDate(new Date(collection.weddingDate));
    }
  }, [collection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.coupleName || !formData.location || !formData.coverImage) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const newCollection: WeddingCollection = {
      id: collection?.id || Date.now(),
      coupleName: formData.coupleName,
      weddingDate: formData.weddingDate,
      location: formData.location,
      coverImage: formData.coverImage,
      category: formData.category,
      description: formData.description,
      highlights: formData.highlights,
      featured: formData.featured,
      images: collection?.images || []
    };

    onSave(newCollection);
    
    toast({
      title: collection ? "Collection Updated" : "Collection Created",
      description: `${formData.coupleName}'s wedding has been ${collection ? 'updated' : 'created'}.`,
    });
  };

  const addHighlight = () => {
    if (newHighlight.trim() && !formData.highlights.includes(newHighlight.trim())) {
      setFormData(prev => ({
        ...prev,
        highlights: [...prev.highlights, newHighlight.trim()]
      }));
      setNewHighlight('');
    }
  };

  const removeHighlight = (highlight: string) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter(h => h !== highlight)
    }));
  };

  const handleImageUrlChange = (url: string) => {
    setFormData(prev => ({ ...prev, coverImage: url }));
    setImagePreview(url);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{collection ? 'Edit Collection' : 'Create New Collection'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Couple Name */}
          <div className="space-y-2">
            <Label htmlFor="coupleName">Couple Name *</Label>
            <Input
              id="coupleName"
              value={formData.coupleName}
              onChange={(e) => setFormData(prev => ({ ...prev, coupleName: e.target.value }))}
              placeholder="e.g., Amit & Pooja"
              required
            />
          </div>

          {/* Wedding Date */}
          <div className="space-y-2">
            <Label>Wedding Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate);
                    if (newDate) {
                      setFormData(prev => ({ 
                        ...prev, 
                        weddingDate: format(newDate, "MMMM d, yyyy") 
                      }));
                    }
                  }}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="e.g., Jaipur Palace, Rajasthan"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as WeddingCollection['category'] }))}
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
            >
              <option value="traditional">Traditional</option>
              <option value="destination">Destination</option>
              <option value="beach">Beach</option>
              <option value="garden">Garden</option>
              <option value="palace">Palace</option>
              <option value="modern">Modern</option>
            </select>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL *</Label>
            <Input
              id="coverImage"
              value={formData.coverImage}
              onChange={(e) => handleImageUrlChange(e.target.value)}
              placeholder="https://..."
              required
            />
            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Cover preview" 
                  className="w-32 h-24 object-cover rounded-lg border"
                  onError={() => setImagePreview('')}
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the wedding celebration..."
              rows={3}
            />
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <Label>Highlights</Label>
            <div className="flex gap-2">
              <Input
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Add a highlight..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
              />
              <Button type="button" onClick={addHighlight} size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {highlight}
                  <button
                    type="button"
                    onClick={() => removeHighlight(highlight)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
              className="rounded border-input"
            />
            <Label htmlFor="featured">Featured Collection</Label>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          {collection ? 'Update Collection' : 'Create Collection'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  );
};
