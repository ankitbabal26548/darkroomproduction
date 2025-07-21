
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, Images, Heart, Eye } from 'lucide-react';
import { weddingCollections } from '@/data/weddingCollections';
import { WeddingCollection } from '@/types/portfolio';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCollections: 0,
    totalImages: 0,
    featuredCollections: 0,
    totalViews: 0
  });

  useEffect(() => {
    const totalCollections = weddingCollections.length;
    const totalImages = weddingCollections.reduce((sum, collection) => sum + collection.images.length, 0);
    const featuredCollections = weddingCollections.filter(c => c.featured).length;
    
    setStats({
      totalCollections,
      totalImages,
      featuredCollections,
      totalViews: Math.floor(Math.random() * 10000) + 5000 // Mock data
    });
  }, []);

  const statCards = [
    {
      title: 'Total Collections',
      value: stats.totalCollections,
      description: 'Wedding portfolio collections',
      icon: FolderOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Total Images',
      value: stats.totalImages,
      description: 'Images across all collections',
      icon: Images,
      color: 'text-green-600'
    },
    {
      title: 'Featured Collections',
      value: stats.featuredCollections,
      description: 'Highlighted collections',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      description: 'Portfolio page views',
      icon: Eye,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-playfair font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Portfolio management overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Collections */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Collections</CardTitle>
          <CardDescription>Latest wedding portfolio additions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weddingCollections.slice(0, 5).map((collection) => (
              <div key={collection.id} className="flex items-center space-x-4">
                <img 
                  src={collection.coverImage} 
                  alt={collection.coupleName}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{collection.coupleName}</p>
                  <p className="text-sm text-muted-foreground">
                    {collection.location} • {collection.images.length} images
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {collection.weddingDate}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
