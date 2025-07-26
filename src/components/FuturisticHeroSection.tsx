
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Camera, Users, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HolographicBackground } from './HolographicBackground';
import { DigitalInterface } from './DigitalInterface';
import { PhotoCarousel3D } from './PhotoCarousel3D';
import { ProfessionalLightbox } from './ProfessionalLightbox';
import { YouTubePlayer } from './YouTubePlayer';

export const FuturisticHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImages = [
    {
      src: "https://i.ibb.co/W45vDkcK/batch-DSC02691.jpg",
      alt: "Beautiful wedding ceremony",
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision and professional excellence"
    },
    {
      src: "https://i.ibb.co/kVLyjLtM/batch-0-J3-A4454.jpg",
      alt: "Professional photography equipment",
      title: "Professional Excellence",
      description: "High-quality equipment and techniques for perfect results every time"
    },
    {
      src: "https://i.ibb.co/0pvPWR07/Darkroom-Production-at-18-06-32.jpg",
      alt: "Romantic couple portrait",
      title: "Pre-Wedding Sessions",
      description: "Beautiful engagement and couple photography to celebrate your love story"
    },
    {
      src: "https://i.ibb.co/3mbh7T1W/batch-268-A9520.jpg",
      alt: "Elegant bridal portrait",
      title: "Bridal Photography",
      description: "Elegant and timeless bridal portraits that capture your natural beauty"
    },
    {
      src: "https://i.ibb.co/v6pyM6NN/batch-0-J3-A1898.jpg",
      alt: "Wedding reception celebration",
      title: "Reception Photography",
      description: "Capturing the joy, celebration, and precious moments of your reception"
    }
  ];

  const stats = [
    { value: 600, label: "Weddings Captured", icon: Camera },
    { value: 10, label: "Years Experience", icon: Award },
    { value: 100, label: "Happy Clients", icon: Users, suffix: "%" }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchShowreel = () => {
    setVideoPlayerOpen(true);
  };

  return (
    <section className="hero-section-container futuristic-hero-container relative min-h-screen bg-background overflow-hidden pt-32 sm:pt-32 md:pt-28 lg:pt-12">
      {/* Holographic Background */}
      <HolographicBackground />

      {/* Main Content Grid */}
      <div className="hero-content relative z-30 min-h-screen">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen items-center">
            
            {/* Left Side - Digital Interface */}
            <div className="lg:col-span-5 space-y-8 relative z-40 flex flex-col justify-center min-h-[700px] lg:min-h-[900px]">
              <DigitalInterface 
                isLoaded={isLoaded}
                stats={stats}
                onViewPortfolio={handleViewPortfolio}
                onWatchShowreel={handleWatchShowreel}
              />
            </div>

            {/* Right Side - 3D Photo Showcase */}
            <div className="lg:col-span-7 relative z-30 flex items-center justify-center min-h-[600px] lg:min-h-[800px]">
              <PhotoCarousel3D 
                images={heroImages}
                isLoaded={isLoaded}
                onImageClick={handleImageClick}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Lightbox */}
      <ProfessionalLightbox 
        images={heroImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        selectedIndex={selectedImageIndex}
        onImageChange={setSelectedImageIndex}
      />

      {/* YouTube Video Player */}
      <YouTubePlayer 
        isOpen={videoPlayerOpen}
        onClose={() => setVideoPlayerOpen(false)}
        videoId="Mvfbh3ILFck"
      />
    </section>
  );
};
