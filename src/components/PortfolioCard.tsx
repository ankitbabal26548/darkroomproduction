
import { useState, useRef } from 'react';
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
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  className?: string;
}

export const PortfolioCard = ({ item, onView, size = 'medium', className = '' }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    setIsHovered(false);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1 h-64';
      case 'large':
        return 'col-span-2 row-span-2 h-[520px]';
      case 'wide':
        return 'col-span-2 row-span-1 h-64';
      case 'tall':
        return 'col-span-1 row-span-2 h-[520px]';
      default:
        return 'col-span-1 row-span-1 h-80';
    }
  };

  return (
    <Card 
      ref={cardRef}
      className={`group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl lens-effect magnetic-hover ${getSizeClasses()} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onView}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Image */}
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Award className="w-3 h-3" />
              Featured
            </div>
          </div>
        )}

        {/* Type Badge */}
        {item.type === 'video' && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Video
            </div>
          </div>
        )}

        {/* Award Badge */}
        {item.award && (
          <div className="absolute top-12 left-4 z-10">
            <div className="bg-yellow-500/90 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
              {item.award}
            </div>
          </div>
        )}

        {/* Hover Overlay Actions */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-3">
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/20 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm transform transition-all duration-300 hover:scale-110"
              onClick={(e) => { e.stopPropagation(); onView(); }}
            >
              <Eye className="w-4 h-4" />
            </Button>
            {item.type === 'video' && (
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/20 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm transform transition-all duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <Play className="w-4 h-4" />
              </Button>
            )}
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/20 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm transform transition-all duration-300 hover:scale-110"
              onClick={(e) => e.stopPropagation()}
            >
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-playfair text-lg font-semibold mb-1 line-clamp-2">{item.title}</h3>
          <p className="text-white/80 text-sm mb-2">{item.location}</p>
          {item.client && (
            <p className="text-white/60 text-xs mb-2">Client: {item.client}</p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-white/70">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{item.likes}</span>
            </div>
            {item.date && (
              <span className="text-white/60 text-xs">{item.date}</span>
            )}
          </div>
        </div>

        {/* Aperture Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-accent/30 via-transparent to-transparent" />
        </div>
      </div>
    </Card>
  );
};
