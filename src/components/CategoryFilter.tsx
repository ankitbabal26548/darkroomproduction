
import { Button } from '@/components/ui/button';
import { Camera, Heart, Film, User, Sparkles } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  count?: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'all':
        return <Sparkles className="w-4 h-4" />;
      case 'wedding':
        return <Heart className="w-4 h-4" />;
      case 'prewedding':
        return <Camera className="w-4 h-4" />;
      case 'cinematic':
        return <Film className="w-4 h-4" />;
      case 'portraits':
        return <User className="w-4 h-4" />;
      default:
        return <Camera className="w-4 h-4" />;
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
              ? 'bg-accent hover:bg-accent-darker text-accent-foreground shadow-lg' 
              : 'hover:bg-accent/10 hover:text-accent hover:border-accent/40'
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
