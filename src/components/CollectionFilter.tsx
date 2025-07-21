
import { Button } from '@/components/ui/button';
import { Heart, Palmtree, Waves, Trees, Crown, Sparkles } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  count?: number;
}

interface CollectionFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CollectionFilter = ({ categories, activeCategory, onCategoryChange }: CollectionFilterProps) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'all':
        return <Sparkles className="w-4 h-4" />;
      case 'traditional':
        return <Heart className="w-4 h-4" />;
      case 'destination':
        return <Palmtree className="w-4 h-4" />;
      case 'beach':
        return <Waves className="w-4 h-4" />;
      case 'garden':
        return <Trees className="w-4 h-4" />;
      case 'palace':
        return <Crown className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`transition-all duration-300 ${
            activeCategory === category.id 
              ? 'bg-accent hover:bg-accent-darker text-accent-foreground shadow-lg scale-105' 
              : 'hover:bg-accent/10 hover:text-accent hover:border-accent/40 hover:scale-105'
          }`}
          style={{ 
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div className="flex items-center space-x-2">
            {getCategoryIcon(category.id)}
            <span className="font-medium">{category.name}</span>
            {category.count && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-accent-foreground/20 text-accent-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category.count}
              </span>
            )}
          </div>
        </Button>
      ))}
    </div>
  );
};
