
import { useState, useRef } from 'react';
import { Calendar, MapPin, Images, Star, Eye, Play } from 'lucide-react';
import { WeddingCollection } from '@/types/portfolio';
import { Button } from '@/components/ui/button';

interface HolographicFolderCardProps {
  collection: WeddingCollection;
  index: number;
  isVisible: boolean;
}

export const HolographicFolderCard = ({ collection, index, isVisible }: HolographicFolderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (y / rect.height) * 10;
    const rotateY = (x / rect.width) * -10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div className={`relative w-full ${isEven ? 'lg:pr-32' : 'lg:pl-32'}`}>
      {/* Connection Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-accent/50 to-transparent -top-16 hidden lg:block"></div>
      
      {/* Index Indicator */}
      <div className={`absolute top-8 ${isEven ? 'lg:right-8' : 'lg:left-8'} left-4 lg:left-auto`}>
        <div className="w-12 h-12 rounded-full border-2 border-accent/50 bg-background/80 backdrop-blur-md flex items-center justify-center font-mono text-accent font-bold">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div
        ref={cardRef}
        className="holographic-card group relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Container */}
        <div className="relative bg-background/10 backdrop-blur-xl rounded-3xl border border-accent/30 overflow-hidden transition-all duration-700 hover:border-accent/60 hover:shadow-neon">
          
          {/* Holographic Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="holographic-grid"></div>
          </div>

          {/* Content Layout */}
          <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} min-h-[500px]`}>
            
            {/* Image Section */}
            <div className="relative lg:w-3/5 h-64 lg:h-auto overflow-hidden">
              <img
                src={collection.coverImage}
                alt={collection.coupleName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Reduced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Holographic UI Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 space-y-2">
                  {collection.featured && (
                    <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 font-mono">
                      <Star className="w-3 h-3 fill-current" />
                      FEATURED
                    </div>
                  )}
                  <div className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-mono border border-white/20">
                    {collection.category.toUpperCase()}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5">
                  <Images className="w-3 h-3" />
                  {collection.images.length}_FILES
                </div>
              </div>

              {/* Scan Line Animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="scan-line-overlay"></div>
              </div>

              {/* Hover Play Button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
              }`}>
                <Button
                  size="icon"
                  className="w-20 h-20 rounded-full bg-accent/20 hover:bg-accent/30 backdrop-blur-md border-2 border-accent/50 transition-all duration-300 hover:scale-110"
                >
                  <Eye className="w-8 h-8 text-accent" />
                </Button>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                
                {/* Main Title */}
                <div>
                  <h3 className="font-mono text-2xl lg:text-3xl font-bold text-foreground mb-2 futuristic-glow">
                    {collection.coupleName}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                {/* Metadata Terminal */}
                <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-accent/20 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-accent">[DATE]</span>
                      <span>{collection.weddingDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-accent">[LOCATION]</span>
                      <span>{collection.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Images className="w-4 h-4 text-accent" />
                      <span className="text-accent">[ASSETS]</span>
                      <span>{collection.images.length}_images</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {collection.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs rounded-lg font-mono hover:bg-accent/20 transition-colors"
                    >
                      {highlight.toUpperCase()}
                    </span>
                  ))}
                  {collection.highlights.length > 3 && (
                    <span className="px-3 py-1.5 bg-muted/20 border border-muted/30 text-muted-foreground text-xs rounded-lg font-mono">
                      +{collection.highlights.length - 3}_MORE
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    className="bg-accent/20 hover:bg-accent/30 text-accent border border-accent/50 hover:border-accent font-mono transition-all duration-300 hover:shadow-neon"
                    size="lg"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    ACCESS_COLLECTION
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Holographic Border Effect */}
          <div className="absolute inset-0 rounded-3xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none holographic-border"></div>
        </div>
      </div>
    </div>
  );
};
