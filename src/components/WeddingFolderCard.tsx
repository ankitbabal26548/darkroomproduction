
import { useState } from 'react';
import { Calendar, MapPin, Images, Star, Heart } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';

interface WeddingFolderCardProps {
  collection: WeddingCollection;
  onOpen: () => void;
  delay?: number;
}

export const WeddingFolderCard = ({ collection, onOpen, delay = 0 }: WeddingFolderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const previewImages = collection.images.slice(0, 3);

  return (
    <div
      className="group relative cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Folder Card */}
      <div className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Background Cards (Stacked Effect) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-2xl border border-white/20 transform rotate-1 translate-x-1 translate-y-1 shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md rounded-2xl border border-white/20 transform -rotate-0.5 translate-x-0.5 translate-y-0.5 shadow-lg" />
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl overflow-hidden">
          {/* Cover Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src={collection.coverImage}
              alt={collection.coupleName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Featured Badge */}
            {collection.featured && (
              <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium capitalize border border-white/20">
              {collection.category}
            </div>

            {/* Image Count */}
            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Images className="w-3 h-3" />
              {collection.images.length}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {collection.coupleName}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {collection.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{collection.weddingDate}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{collection.location}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1">
              {collection.highlights.slice(0, 2).map((highlight, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                >
                  {highlight}
                </span>
              ))}
              {collection.highlights.length > 2 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                  +{collection.highlights.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Hover Preview */}
          <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="h-full flex flex-col justify-center items-center p-6">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {previewImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="w-16 h-16 rounded-lg overflow-hidden transform transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      transform: isHovered ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)'
                    }}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-white font-medium mb-1">Open Collection</div>
                <div className="text-white/70 text-sm">View all {collection.images.length} photos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
