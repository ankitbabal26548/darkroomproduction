import { Camera, Film, Heart, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { FilmStripTimeline } from './FilmStripTimeline';
import { DeveloperCard } from './DeveloperCard';
import { ViewfinderGrid } from './ViewfinderGrid';
export const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50
  });
  const features = [{
    icon: Camera,
    title: "Professional Photography",
    description: "Capturing moments with artistic vision and technical excellence"
  }, {
    icon: Film,
    title: "Cinematic Videography",
    description: "Creating cinematic stories that bring your special day to life"
  }, {
    icon: Heart,
    title: "Emotional Storytelling",
    description: "We don't just capture images, we preserve emotions and memories"
  }, {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Recognized for our artistic approach and professional service"
  }];
  const statistics = [{
    value: 500,
    suffix: '+',
    label: 'Weddings Captured'
  }, {
    value: 13,
    suffix: '+',
    label: 'Years Experience'
  }, {
    value: 50,
    suffix: '+',
    label: 'Awards Won'
  }];
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('about')?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        setMousePosition({
          x,
          y
        });
      }
    };
    const aboutSection = document.getElementById('about');
    aboutSection?.addEventListener('mousemove', handleMouseMove);
    return () => {
      aboutSection?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Viewfinder Grid Overlay */}
      <ViewfinderGrid />
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight-effect transition-all duration-100 ease-out pointer-events-none" style={{
      '--x': `${mousePosition.x}%`,
      '--y': `${mousePosition.y}%`
    } as React.CSSProperties} />

      {/* Film Grain Background */}
      <div className="absolute inset-0 film-grain opacity-5" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => <div key={i} className="absolute bg-accent/20 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${i * 0.7}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      }} />)}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-stagger-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Darkroom Production</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are passionate photographers and cinematographers dedicated to capturing 
            the beauty, emotion, and authenticity of your most precious moments.
          </p>
        </div>

        {/* Story Content */}
        <div className="text-center mb-16 space-y-6 animate-slide-in-up" style={{
        animationDelay: '200ms'
      }}>
          <h3 className="font-playfair text-3xl font-semibold">
            Crafting Visual Stories Since 2010
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Born from a passion for capturing life's most beautiful moments, Darkroom Production 
              has been at the forefront of wedding photography and cinematography. Our journey began 
              in the traditional darkrooms, where we learned the art of developing not just photographs, 
              but emotions and memories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we blend traditional techniques with modern technology to create timeless 
              visual narratives. Every wedding, every pre-wedding shoot, every moment we capture 
              is treated as a unique story waiting to be told.
            </p>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="flex justify-center items-center space-x-8 mb-16 animate-slide-in-up" style={{
        animationDelay: '400ms'
      }}>
          {statistics.map((stat, index) => <div key={index} className="text-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} className="mb-2" />
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>)}
        </div>

        {/* Film Strip Timeline */}
        

        {/* Features Grid with Developer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <DeveloperCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 150} />)}
        </div>

        {/* Camera Settings Display */}
        
      </div>
    </section>;
};