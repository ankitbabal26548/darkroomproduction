
import { useState } from 'react';
import { useInstagramFeed } from '@/hooks/useInstagramFeed';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

export const InstagramFeed = () => {
  const { posts, isLoading, error } = useInstagramFeed();
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 4, posts.length));
  };

  if (error) {
    return (
      <div className="text-center py-8">
        <Instagram className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">Unable to load Instagram posts</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-creative-entrance border border-pink-500/20 backdrop-blur-sm">
          <Instagram className="w-4 h-4" />
          Follow @darkroomproduction.in
        </div>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-pink-600 bg-clip-text text-transparent">
          Latest from Instagram
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay updated with our latest work and behind-the-scenes moments
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="aspect-square animate-pulse">
              <CardContent className="p-0 h-full">
                <div className="bg-muted rounded-lg h-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <Card 
              key={post.id} 
              className="group aspect-square overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-pink-500/30 animate-creative-entrance"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(post.permalink, '_blank')}
            >
              <CardContent className="p-0 h-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img 
                  src={post.media_url} 
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translateY-full group-hover:translateY-0 transition-transform duration-300 z-20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{Math.floor(Math.random() * 500) + 100}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <p className="text-xs line-clamp-2 text-white/90">
                    {post.caption?.substring(0, 100)}...
                  </p>
                </div>

                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                    <Share2 className="w-3 h-3 text-white" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!isLoading && visiblePosts < posts.length && (
        <div className="text-center">
          <Button 
            onClick={loadMore}
            variant="outline"
            className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/30 hover:border-pink-500/50 text-pink-600 hover:text-pink-700"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
};
