
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
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-80 bg-card border border-border/50 hover:border-accent/30 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onView}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Image */}
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Always Visible Bottom Gradient & Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-24 p-4 flex flex-col justify-end">
          <h3 className="font-playfair text-lg font-bold text-white mb-1 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm mb-1 flex items-center gap-1">
            📍 {item.location}
          </p>
          {item.client && (
            <p className="text-white/75 text-xs">
              Client: {item.client}
            </p>
          )}
        </div>

        {/* Enhanced Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Hover Content - positioned to not interfere with bottom info */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top Section - Badges and Quick View */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                {item.featured && (
                  <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3 h-3" />
                    Featured Work
                  </div>
                )}
                {item.type === 'video' && (
                  <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20">
                    🎬 Video
                  </div>
                )}
                {item.award && (
                  <div className="bg-gradient-to-r from-yellow-400/90 to-yellow-500/90 backdrop-blur-sm text-yellow-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                    🏆 {item.award}
                  </div>
                )}
              </div>
              
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 w-11 h-11 transition-all duration-300 hover:scale-110"
                onClick={(e) => { e.stopPropagation(); onView(); }}
              >
                <Eye className="w-5 h-5 text-white" />
              </Button>
            </div>

            {/* Center Play Button for Videos */}
            {item.type === 'video' && (
              <div className="flex items-center justify-center">
                <Button
                  size="icon"
                  className="w-18 h-18 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:scale-110 shadow-2xl"
                  onClick={(e) => { e.stopPropagation(); onView(); }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </Button>
              </div>
            )}

            {/* Bottom Section - Additional Details */}
            <div className="space-y-3 mb-16">
              {item.description && (
                <p className="text-white/90 text-sm leading-relaxed line-clamp-2 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  {item.description}
                </p>
              )}
              
              <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium">{item.likes}</span>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
                {item.date && (
                  <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-md">
                    {item.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
