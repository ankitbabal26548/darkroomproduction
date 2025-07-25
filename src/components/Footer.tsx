
import { Camera, Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Sparkles, Star } from 'lucide-react';
import { useInstagramFeed } from '@/hooks/useInstagramFeed';

export const Footer = () => {
  const { posts, loading } = useInstagramFeed();

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

  return (
    <footer className="footer-container bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-accent-lighter rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/50 rounded-full blur-3xl animate-pulse-medium" />
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-accent-darker rounded-full blur-2xl animate-floating-slow" />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute w-4 h-4 text-accent/40 animate-sparkle-twinkle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Instagram Gallery Section */}
      <div className="border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-accent mr-2 animate-gentle-bounce" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-accent-lighter to-accent bg-clip-text text-transparent">
                Follow Our Journey
              </h3>
              <Star className="w-6 h-6 text-accent ml-2 animate-gentle-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-white/80 text-lg">@darkroomproduction.in</p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
              <Instagram className="w-5 h-5 text-accent animate-gentle-bounce" style={{ animationDelay: '1s' }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {loading ? (
              // Loading skeleton
              [...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/10 rounded-xl animate-pulse"
                />
              ))
            ) : (
              posts.slice(0, 8).map((post, index) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-gallery-item aspect-square overflow-hidden rounded-xl group relative transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={post.media_url}
                    alt={post.caption || `Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="footer-logo-container w-16 h-16 bg-gradient-to-br from-accent to-accent-darker rounded-full flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-lighter to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Camera className="w-8 h-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
              </div>
              <div>
                <h2 className="font-playfair text-3xl font-bold bg-gradient-to-r from-white to-accent-lighter bg-clip-text text-transparent">
                  Darkroom Production
                </h2>
                <p className="text-white/80 text-lg">Wedding Photography & Cinematography</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-8 max-w-md text-lg leading-relaxed">
              Creating timeless visual stories since 2010. We specialize in capturing 
              the beauty, emotion, and authenticity of your most precious moments with 
              artistic excellence and professional quality.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/darkroomproduction.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center hover:from-accent hover:to-accent-darker transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Instagram className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://facebook.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center hover:from-accent hover:to-accent-darker transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Facebook className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://youtube.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center hover:from-accent hover:to-accent-darker transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Youtube className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-accent-lighter">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-playfair text-xl font-semibold mb-6 text-accent-lighter">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-white/80 flex items-center group">
                    <Camera className="w-3 h-3 text-accent mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
          <div className="flex items-center space-x-4 group transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-darker rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">+91 98765 43210</p>
              <p className="text-white/70 text-sm">Call us anytime</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-darker rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">hello@darkroomproduction.in</p>
              <p className="text-white/70 text-sm">Send us an email</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-darker rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/90 font-semibold">Mumbai, Maharashtra</p>
              <p className="text-white/70 text-sm">Visit our studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Darkroom Production. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current animate-gentle-bounce" />
              <span>for capturing love stories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
