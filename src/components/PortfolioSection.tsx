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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our <span className="text-accent text-shadow-glow">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            Explore our collection of captured moments, each telling a unique story of love, joy, and celebration.
          </p>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? 'bg-accent text-accent-foreground shadow-lens darkroom-glow' 
                    : 'hover:bg-accent/10 hover:text-accent glass-effect'
                } transition-all duration-300 magnetic-hover font-medium`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-photo transition-all duration-700 lens-effect animate-fade-in-up magnetic-hover glass-effect darkroom-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 film-grain"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-accent/20 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="glass-effect hover:bg-accent hover:text-accent-foreground backdrop-blur-sm darkroom-glow magnetic-hover"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                    {item.type === 'video' && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="glass-effect hover:bg-accent hover:text-accent-foreground backdrop-blur-sm darkroom-glow magnetic-hover"
                      >
                        <Play className="w-5 h-5" />
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="glass-effect hover:bg-accent hover:text-accent-foreground backdrop-blur-sm darkroom-glow magnetic-hover"
                    >
                      <Share className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Type Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-3 right-3 glass-effect bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm animate-bounce-gentle">
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

        {/* Enhanced Load More */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens darkroom-glow magnetic-hover animated-border font-bold px-8 py-4"
          >
            Load More Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};