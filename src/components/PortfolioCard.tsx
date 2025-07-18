
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Heart, Share, Award } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: string;
  type: 'photo' | 'video';
  title: string;
  location: string;
  image: string;
  likes: number;
  description?: string;
  client?: string;
  date?: string;
  featured?: boolean;
  award?: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  onView: () => void;
  className?: string;
}

export const PortfolioCard = ({ item, onView, className = '' }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onView}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Image */}
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {item.featured && (
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Award className="w-3 h-3" />
              Featured
            </div>
          )}
          {item.type === 'video' && (
            <div className="bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Video
            </div>
          )}
          {item.award && (
            <div className="bg-yellow-500/90 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
              {item.award}
            </div>
          )}
        </div>

        {/* Center Play Button for Videos */}
        {item.type === 'video' && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30"
              onClick={(e) => { e.stopPropagation(); onView(); }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </Button>
          </div>
        )}

        {/* Content Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <h3 className="font-playfair text-lg font-semibold mb-1 line-clamp-2">{item.title}</h3>
          <p className="text-white/80 text-sm mb-2">{item.location}</p>
          {item.client && (
            <p className="text-white/60 text-xs mb-3">Client: {item.client}</p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-white/70">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{item.likes}</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20 w-8 h-8"
                onClick={(e) => e.stopPropagation()}
              >
                <Share className="w-4 h-4" />
              </Button>
            </div>
            {item.date && (
              <span className="text-white/60 text-xs">{item.date}</span>
            )}
          </div>
        </div>

        {/* Quick View Button */}
        <div className={`absolute top-4 right-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 w-10 h-10"
            onClick={(e) => { e.stopPropagation(); onView(); }}
          >
            <Eye className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
