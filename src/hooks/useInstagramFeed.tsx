
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
    // Simulate API call delay
    const timer = setTimeout(() => {
      try {
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            imageUrl: 'https://i.ibb.co/W45vDkcK/batch-DSC02691.jpg',
            caption: 'Beautiful wedding ceremony captured in golden hour ✨ #WeddingPhotography #GoldenHour',
            likes: 284,
            comments: 23,
            timestamp: '2024-01-15T10:30:00Z',
            location: 'Jaipur, Rajasthan',
            tags: ['#WeddingPhotography', '#GoldenHour', '#Jaipur']
          },
          {
            id: '2',
            imageUrl: 'https://i.ibb.co/kVLyjLtM/batch-0-J3-A4454.jpg',
            caption: 'Pre-wedding magic in the stunning landscapes of Rajasthan 💕 #PreWedding #CoupleGoals',
            likes: 312,
            comments: 18,
            timestamp: '2024-01-14T14:20:00Z',
            location: 'Udaipur, Rajasthan',
            tags: ['#PreWedding', '#CoupleGoals', '#Udaipur']
          },
          {
            id: '3',
            imageUrl: 'https://i.ibb.co/0pvPWR07/Darkroom-Production-at-18-06-32.jpg',
            caption: 'Candid moments that tell the real story 📸 #CandidPhotography #WeddingMoments',
            likes: 198,
            comments: 15,
            timestamp: '2024-01-13T16:45:00Z',
            location: 'Jodhpur, Rajasthan',
            tags: ['#CandidPhotography', '#WeddingMoments', '#Jodhpur']
          },
          {
            id: '4',
            imageUrl: 'https://i.ibb.co/3mbh7T1W/batch-268-A9520.jpg',
            caption: 'Elegant bridal portrait session 👰 #BridalPhotography #WeddingDay',
            likes: 267,
            comments: 21,
            timestamp: '2024-01-12T11:15:00Z',
            location: 'Jaipur, Rajasthan',
            tags: ['#BridalPhotography', '#WeddingDay', '#Jaipur']
          },
          {
            id: '5',
            imageUrl: 'https://i.ibb.co/v6pyM6NN/batch-0-J3-A1898.jpg',
            caption: 'Reception celebrations full of joy and laughter 🎉 #WeddingReception #Celebration',
            likes: 189,
            comments: 12,
            timestamp: '2024-01-11T19:30:00Z',
            location: 'Jaipur, Rajasthan',
            tags: ['#WeddingReception', '#Celebration', '#Jaipur']
          },
          {
            id: '6',
            imageUrl: 'https://i.ibb.co/W45vDkcK/batch-DSC02691.jpg',
            caption: 'Destination wedding in the beautiful hills of Manali 🏔️ #DestinationWedding #Manali',
            likes: 445,
            comments: 34,
            timestamp: '2024-01-10T09:00:00Z',
            location: 'Manali, Himachal Pradesh',
            tags: ['#DestinationWedding', '#Manali', '#HimachalPradesh']
          },
          {
            id: '7',
            imageUrl: 'https://i.ibb.co/kVLyjLtM/batch-0-J3-A4454.jpg',
            caption: 'Traditional ceremonies captured with modern artistry 🎭 #TraditionalWedding #IndianWedding',
            likes: 223,
            comments: 19,
            timestamp: '2024-01-09T13:20:00Z',
            location: 'Udaipur, Rajasthan',
            tags: ['#TraditionalWedding', '#IndianWedding', '#Udaipur']
          },
          {
            id: '8',
            imageUrl: 'https://i.ibb.co/0pvPWR07/Darkroom-Production-at-18-06-32.jpg',
            caption: 'Behind the scenes of our latest wedding shoot 📷 #BehindTheScenes #WeddingPhotographer',
            likes: 156,
            comments: 8,
            timestamp: '2024-01-08T15:45:00Z',
            location: 'Jaipur, Rajasthan',
            tags: ['#BehindTheScenes', '#WeddingPhotographer', '#Jaipur']
          }
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { posts, loading, error };
};
