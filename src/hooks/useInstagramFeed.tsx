
import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setIsLoading(true);
        
        // For demo purposes, we'll create mock Instagram posts
        // In production, you would integrate with Instagram Basic Display API
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            media_type: 'IMAGE',
            media_url: '/placeholder.svg',
            permalink: 'https://instagram.com/darkroomproduction.in',
            caption: 'Capturing beautiful moments at a destination wedding in Udaipur ✨📸 #WeddingPhotography #Udaipur #DestinationWedding',
            timestamp: '2024-01-15T10:30:00Z'
          },
          {
            id: '2',
            media_type: 'IMAGE',
            media_url: '/placeholder.svg',
            permalink: 'https://instagram.com/darkroomproduction.in',
            caption: 'Pre-wedding shoot magic in the Pink City 💕 #PreWeddingShoot #Jaipur #CoupleGoals',
            timestamp: '2024-01-14T15:45:00Z'
          },
          {
            id: '3',
            media_type: 'VIDEO',
            media_url: '/placeholder.svg',
            thumbnail_url: '/placeholder.svg',
            permalink: 'https://instagram.com/darkroomproduction.in',
            caption: 'Behind the scenes of our latest wedding film 🎬 #BehindTheScenes #WeddingFilm #Cinematography',
            timestamp: '2024-01-13T09:20:00Z'
          },
          {
            id: '4',
            media_type: 'IMAGE',
            media_url: '/placeholder.svg',
            permalink: 'https://instagram.com/darkroomproduction.in',
            caption: 'Golden hour perfection 🌅 #GoldenHour #WeddingPhotography #CandidMoments',
            timestamp: '2024-01-12T18:30:00Z'
          }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch Instagram posts');
        console.error('Instagram API Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, isLoading, error };
};
