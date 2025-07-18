
import { useState, useEffect } from 'react';
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
  const [isRevealed, setIsRevealed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Handle touch events for mobile interaction
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    
    // Swipe up to reveal details
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIsRevealed(true);
      } else {
        setIsRevealed(false);
      }
    }
    
    setTouchStart(null);
  };

  // Category color mapping
  const getCategoryColor = (category: string) => {
    const colors = {
      wedding: 'from-rose-500/20 to-pink-500/20 border-rose-200/30',
      prewedding: 'from-purple-500/20 to-violet-500/20 border-purple-200/30',
      cinematic: 'from-blue-500/20 to-cyan-500/20 border-blue-200/30',
      portraits: 'from-emerald-500/20 to-green-500/20 border-emerald-200/30'
    };
    return colors[category as keyof typeof colors] || 'from-accent/20 to-accent-lighter/20 border-accent/30';
  };

  return (
    <Card 
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl h-full bg-card border border-border/50 hover:border-accent/30 rounded-2xl touch-manipulation ${className}`}
      onClick={onView}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ 
        transform: isRevealed ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Image Container with Loading State */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" />
        )}
        
        {/* Main Image */}
        <img 
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110 group-active:scale-105`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(item.category)} backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground border transition-all duration-300 group-hover:scale-110`}>
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-accent/90 to-accent-darker/90 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg animate-gentle-pulse">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Video Indicator */}
        {item.type === 'video' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="icon"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:scale-110 shadow-2xl"
              onClick={(e) => { e.stopPropagation(); onView(); }}
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
            </Button>
          </div>
        )}

        {/* Always Visible Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6">
          <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm mb-2 flex items-center gap-1">
            📍 {item.location}
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white/80">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium">{item.likes}</span>
            </div>
            
            {/* Mobile: Show details toggle, Desktop: Show on hover */}
            <div className="sm:hidden">
              <Button
                size="sm"
                variant="ghost"
                className="text-white/80 hover:text-white text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRevealed(!isRevealed);
                }}
              >
                {isRevealed ? 'Less' : 'More'}
              </Button>
            </div>
          </div>
        </div>

        {/* Revealed Details for Mobile / Hover for Desktop */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/98 via-black/85 to-black/40 backdrop-blur-sm transition-all duration-500 ${
          isRevealed ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'
        }`}>
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                {item.award && (
                  <div className="bg-gradient-to-r from-yellow-400/90 to-yellow-500/90 backdrop-blur-sm text-yellow-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                    🏆 {item.award}
                  </div>
                )}
              </div>
              
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 w-10 h-10 sm:w-11 sm:h-11 transition-all duration-300 hover:scale-110 touch-manipulation"
                onClick={(e) => { e.stopPropagation(); onView(); }}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Button>
            </div>

            {/* Bottom Section */}
            <div className="space-y-4">
              {item.description && (
                <p className="text-white/90 text-sm leading-relaxed line-clamp-2 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  {item.description}
                </p>
              )}
              
              <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="space-y-1 text-white/80 text-xs">
                  {item.client && <p>Client: {item.client}</p>}
                  {item.date && <p>Date: {item.date}</p>}
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-300 touch-manipulation"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
