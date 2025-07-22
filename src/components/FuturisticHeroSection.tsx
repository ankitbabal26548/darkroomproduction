
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Camera, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HolographicBackground } from './HolographicBackground';
import { DigitalInterface } from './DigitalInterface';
import { PhotoCarousel3D } from './PhotoCarousel3D';
import { ProfessionalLightbox } from './ProfessionalLightbox';

export const FuturisticHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      alt: "Beautiful wedding ceremony",
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision and professional excellence"
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      alt: "Professional photography equipment",
      title: "Professional Excellence",
      description: "High-quality equipment and techniques for perfect results every time"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      alt: "Romantic couple portrait",
      title: "Pre-Wedding Sessions",
      description: "Beautiful engagement and couple photography to celebrate your love story"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      alt: "Elegant bridal portrait",
      title: "Bridal Photography",
      description: "Elegant and timeless bridal portraits that capture your natural beauty"
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      alt: "Wedding reception celebration",
      title: "Reception Photography",
      description: "Capturing the joy, celebration, and precious moments of your reception"
    }
  ];

  const stats = [
    { value: 500, label: "Weddings Captured", icon: Camera },
    { value: 10, label: "Years Experience", icon: Award },
    { value: 98, label: "Happy Couples", icon: Users, suffix: "%" }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
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
    </section>
  );
};
