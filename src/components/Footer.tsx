
import { Camera, Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  // Sample Instagram-style gallery images
  const instagramImages = [
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=150&h=150&fit=crop'
  ];

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
    <footer className="footer-container bg-primary text-primary-foreground relative z-10">
      {/* Instagram Gallery Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-semibold mb-2">
              Follow Our Latest Work
            </h3>
            <p className="text-white/70">@darkroomproduction.in</p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="https://instagram.com/darkroomproduction.in"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-gallery-item aspect-square overflow-hidden rounded-lg group relative"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="footer-logo-container w-12 h-12 flex items-center justify-center rounded-full border-2 border-accent">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold">Darkroom Production</h2>
                <p className="text-white/70 text-sm">Wedding Photography & Cinematography</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
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
                className="footer-social-link w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/darkroomproduction"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-accent" />
            <div>
              <p className="text-white/90">+91 98765 43210</p>
              <p className="text-white/70 text-sm">Call us anytime</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-accent" />
            <div>
              <p className="text-white/90">hello@darkroomproduction.in</p>
              <p className="text-white/70 text-sm">Send us an email</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-accent" />
            <div>
              <p className="text-white/90">Mumbai, Maharashtra</p>
              <p className="text-white/70 text-sm">Visit our studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Darkroom Production. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>for capturing love stories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
