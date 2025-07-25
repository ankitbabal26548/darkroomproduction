
import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  location?: string;
  tags: string[];
}

export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop',
            caption: 'Capturing the perfect moment of eternal love 💕',
            likes: 1247,
            comments: 89,
            timestamp: '2024-01-15T10:30:00Z',
            location: 'Mumbai, India',
            tags: ['wedding', 'photography', 'love', 'mumbai']
          },
          {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=300&fit=crop',
            caption: 'Pre-wedding magic in the golden hour ✨',
            likes: 892,
            comments: 45,
            timestamp: '2024-01-14T18:45:00Z',
            location: 'Goa, India',
            tags: ['prewedding', 'goldenhour', 'romance', 'goa']
          },
          {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=300&h=300&fit=crop',
            caption: 'Every detail tells a story 📸',
            likes: 654,
            comments: 32,
            timestamp: '2024-01-13T14:20:00Z',
            location: 'Delhi, India',
            tags: ['details', 'wedding', 'photography', 'story']
          },
          {
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop',
            caption: 'Candid moments that last forever 💖',
            likes: 1156,
            comments: 67,
            timestamp: '2024-01-12T16:15:00Z',
            location: 'Pune, India',
            tags: ['candid', 'moments', 'wedding', 'forever']
          },
          {
            id: '5',
            imageUrl: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=300&h=300&fit=crop',
            caption: 'Traditional elegance meets modern artistry 🎨',
            likes: 923,
            comments: 54,
            timestamp: '2024-01-11T12:00:00Z',
            location: 'Rajasthan, India',
            tags: ['traditional', 'elegance', 'art', 'rajasthan']
          },
          {
            id: '6',
            imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&h=300&fit=crop',
            caption: 'Love in its purest form 💕',
            likes: 1389,
            comments: 78,
            timestamp: '2024-01-10T09:30:00Z',
            location: 'Kerala, India',
            tags: ['love', 'pure', 'wedding', 'kerala']
          },
          {
            id: '7',
            imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop',
            caption: 'Celebrating the union of two souls 🌟',
            likes: 756,
            comments: 41,
            timestamp: '2024-01-09T19:45:00Z',
            location: 'Bangalore, India',
            tags: ['union', 'souls', 'celebration', 'bangalore']
          },
          {
            id: '8',
            imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=300&fit=crop',
            caption: 'Where dreams become reality ✨',
            likes: 1098,
            comments: 63,
            timestamp: '2024-01-08T11:20:00Z',
            location: 'Udaipur, India',
            tags: ['dreams', 'reality', 'wedding', 'udaipur']
          }
        ];
        
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to load Instagram posts');
        console.error('Instagram feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, loading, error };
};
