
import { Camera, Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Sparkles, Aperture, Play, ExternalLink, Eye } from 'lucide-react';
import { useInstagramFeed } from '@/hooks/useInstagramFeed';
import { useState } from 'react';

export const Footer = () => {
  const { posts, loading, error } = useInstagramFeed();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Photography',
    'Pre-Wedding Shoots',
    'Cinematography',
    'Engagement Photography',
    'Portrait Sessions',
    'Event Coverage'
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <footer className="footer-container bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Photography Elements */}
        <div className="absolute top-20 left-10 text-accent/10 animate-floating-slow">
          <Camera className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-accent/10 animate-floating-medium">
          <Aperture className="w-6 h-6" />
        </div>
        <div className="absolute bottom-60 left-1/4 text-accent/10 animate-floating-fast">
          <Play className="w-5 h-5" />
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-32 right-1/3 text-accent/20 animate-sparkle-twinkle">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute bottom-40 right-10 text-accent/20 animate-sparkle-twinkle" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-60 left-1/3 text-accent/20 animate-sparkle-twinkle" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-5 h-5" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      </div>

      {/* Instagram Gallery Section */}
      <div className="border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-1 h-8 bg-accent rounded-full animate-pulse-slow" />
              <h3 className="font-playfair text-3xl font-bold bg-gradient-to-r from-white via-accent-lighter to-white bg-clip-text text-transparent">
                Latest From Our Lens
              </h3>
              <div className="w-1 h-8 bg-accent rounded-full animate-pulse-slow" />
            </div>
            <p className="text-white/70 text-lg">@darkroomproduction.in</p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="aspect-square bg-white/10 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-white/70 py-8">
              <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Unable to load Instagram posts</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="instagram-gallery-item aspect-square overflow-hidden rounded-lg group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedPost(post.id)}
                >
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{formatNumber(post.likes)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>💬</span>
                          <span>{post.comments}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* View More Button */}
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/darkroomproduction.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-darker to-accent hover:from-accent to-accent-lighter text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>View More on Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="footer-logo-container w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-darker to-accent border-2 border-accent/30 animate-gentle-bounce">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="font-playfair text-3xl font-bold bg-gradient-to-r from-white via-accent-lighter to-white bg-clip-text text-transparent">
                  Darkroom Production
                </h2>
                <p className="text-accent text-sm font-medium">Wedding Photography & Cinematography</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-8 max-w-md leading-relaxed">
              Creating timeless visual stories since 2010. We specialize in capturing 
              the beauty, emotion, and authenticity of your most precious moments with 
              artistic excellence and professional quality.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/darkroomproduction.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Instagram className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Facebook className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center hover:from-red-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Youtube className="w-6 h-6 text-red-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Camera className="w-3 h-3 text-accent" />
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
              <Phone className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">+91 98765 43210</p>
              <p className="text-white/70 text-sm">Call us anytime</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">hello@darkroomproduction.in</p>
              <p className="text-white/70 text-sm">Send us an email</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
              <MapPin className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">Mumbai, Maharashtra</p>
              <p className="text-white/70 text-sm">Visit our studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Darkroom Production. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current animate-pulse-slow" />
              <span>for capturing love stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              ✕
            </button>
            {posts.find(post => post.id === selectedPost) && (
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={posts.find(post => post.id === selectedPost)?.imageUrl}
                  alt={posts.find(post => post.id === selectedPost)?.caption}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <p className="text-gray-800 mb-4">{posts.find(post => post.id === selectedPost)?.caption}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{posts.find(post => post.id === selectedPost)?.location}</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{formatNumber(posts.find(post => post.id === selectedPost)?.likes || 0)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{posts.find(post => post.id === selectedPost)?.comments}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
