
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Heart, Share, Award, MapPin, User } from 'lucide-react';

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
      className={`group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-80 relative bg-card border-border/50 hover:border-accent/30 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onView}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img 
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Subtle gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Top Badges - Always Visible */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {item.featured && (
            <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <Award className="w-3 h-3" />
              Featured
            </div>
          )}
          {item.type === 'video' && (
            <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
              Video
            </div>
          )}
          {item.award && (
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {item.award}
            </div>
          )}
        </div>

        {/* Category Color Indicator */}
        <div className="absolute top-4 right-4 z-20">
          <div className={`w-3 h-3 rounded-full shadow-lg ${
            item.category === 'wedding' ? 'bg-rose-400' :
            item.category === 'prewedding' ? 'bg-pink-400' :
            item.category === 'cinematic' ? 'bg-purple-400' :
            item.category === 'portraits' ? 'bg-blue-400' : 'bg-accent'
          }`} />
        </div>

        {/* Center Play Button for Videos - Only on Hover */}
        {item.type === 'video' && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center z-30 animate-fade-in">
            <Button
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40 shadow-2xl transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); onView(); }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </Button>
          </div>
        )}

        {/* Always Visible Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <h3 className="font-playfair text-lg font-bold mb-2 line-clamp-1">{item.title}</h3>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-white/90">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[120px]">{item.location}</span>
                </div>
                {item.client && (
                  <div className="flex items-center gap-1 text-white/80">
                    <User className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[100px]">{item.client}</span>
                  </div>
                )}
              </div>
              
              {item.date && (
                <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">
                  {item.date}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover Overlay with Additional Details */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
            {item.description && (
              <p className="text-center text-sm text-white/90 mb-4 line-clamp-3 bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                {item.description}
              </p>
            )}
            
            <div className="flex items-center gap-4 mt-auto mb-20">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium">{item.likes}</span>
              </div>
              
              <Button
                size="icon"
                variant="ghost"
                className="bg-black/30 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Share className="w-4 h-4" />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="bg-black/30 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white"
                onClick={(e) => { e.stopPropagation(); onView(); }}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
