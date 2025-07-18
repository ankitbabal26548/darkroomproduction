
import { Button } from '@/components/ui/button';
import { Camera, Heart, Film, User, Sparkles } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
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
          className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 ${
            activeCategory === category.id 
              ? 'bg-gradient-to-r from-accent to-accent-darker text-accent-foreground shadow-xl shadow-accent/25' 
              : 'hover:bg-accent/10 hover:text-accent hover:border-accent/40 hover:shadow-lg'
          }`}
          style={{ 
            animationDelay: `${index * 100}ms`,
            transform: activeCategory === category.id ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          {/* Background Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-darker/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            activeCategory === category.id ? 'opacity-100' : ''
          }`} />
          
          {/* Icon and Text */}
          <div className="relative flex items-center space-x-2 z-10">
            {getCategoryIcon(category.id)}
            <span className="font-medium">{category.name}</span>
            {category.count && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-accent-foreground/20 text-accent-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category.count}
              </span>
            )}
          </div>

          {/* Hover Effect Lines */}
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent to-accent-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          
          {/* Active Indicator */}
          {activeCategory === category.id && (
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 animate-pulse" />
          )}
        </Button>
      ))}
    </div>
  );
};
