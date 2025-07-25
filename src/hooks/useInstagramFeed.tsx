
import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
}

export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        // For demo purposes, using placeholder images that look like Instagram posts
        // In production, you would use Instagram Basic Display API
        const demoImages = [
          'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=300&fit=crop',
        ];

        const demoPosts: InstagramPost[] = demoImages.map((url, index) => ({
          id: `post_${index}`,
          media_url: url,
          caption: `Beautiful wedding moment #${index + 1}`,
          permalink: 'https://instagram.com/darkroomproduction.in',
          media_type: 'IMAGE' as const,
          timestamp: new Date(Date.now() - index * 86400000).toISOString(),
        }));

        setPosts(demoPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, loading, error };
};
