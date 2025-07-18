import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Heart, Share } from 'lucide-react';

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'prewedding', name: 'Pre-Wedding' },
    { id: 'cinematic', name: 'Cinematic' },
    { id: 'portraits', name: 'Portraits' }
  ];

  // Portfolio items with placeholder content
  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      type: 'photo',
      title: 'Elegant Garden Wedding',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop',
      likes: 156
    },
    {
      id: 2,
      category: 'prewedding',
      type: 'photo',
      title: 'Romantic Beach Session',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop',
      likes: 243
    },
    {
      id: 3,
      category: 'cinematic',
      type: 'video',
      title: 'Traditional Wedding Film',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=600&h=400&fit=crop',
      likes: 389
    },
    {
      id: 4,
      category: 'wedding',
      type: 'photo',
      title: 'Destination Wedding',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      likes: 167
    },
    {
      id: 5,
      category: 'portraits',
      type: 'photo',
      title: 'Bridal Portraits',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&h=400&fit=crop',
      likes: 298
    },
    {
      id: 6,
      category: 'prewedding',
      type: 'video',
      title: 'Love Story Film',
      location: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop',
      likes: 421
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + Math.sin(i) * 30}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + (i % 3)}s`
                }}
              />
            ))}
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 relative">
            Our <span className="text-accent relative inline-block">
              Portfolio
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full animate-pulse" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Explore our collection of captured moments, each telling a unique story of love, joy, and celebration.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? 'bg-accent text-accent-foreground' 
                    : 'hover:bg-accent/10 hover:text-accent'
                } transition-all duration-300`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-photo transition-all duration-500 lens-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced Overlay with Animations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                  {/* Main Action Buttons */}
                  <div className="flex space-x-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/20 hover:bg-accent hover:text-accent-foreground backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                    {item.type === 'video' && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-accent/90 hover:bg-accent text-accent-foreground backdrop-blur-md border border-accent hover:scale-110 transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/20 hover:bg-accent hover:text-accent-foreground backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Share className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  {/* Enhanced Info Display */}
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <h3 className="font-playfair text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-accent text-sm font-medium mb-2">{item.location}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="w-4 h-4 text-accent" />
                      <span className="text-sm">{item.likes} likes</span>
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Video
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-playfair text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.location}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens"
          >
            Load More Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};