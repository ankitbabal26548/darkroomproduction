
import { useState } from 'react';
import { Menu, X, Phone, Mail, Aperture, Focus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoDisplay } from './LogoDisplay';
import { FilmStripBackground } from './FilmStripBackground';
import { CameraControls } from './CameraControls';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: '●' },
    { name: 'About', href: '#about', icon: '◐' },
    { name: 'Portfolio', href: '#portfolio', icon: '◑' },
    { name: 'Services', href: '#services', icon: '◒' },
    { name: 'Projects', href: '#projects', icon: '◓' },
    { name: 'Contact', href: '#contact', icon: '○' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border relative overflow-hidden">
      {/* Film Strip Background Effects */}
      <FilmStripBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <LogoDisplay />

          {/* Desktop Navigation with Camera Controls */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  {/* Aperture Icon */}
                  <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  
                  {/* Focus Ring Effect */}
                  <div className={`absolute inset-0 border border-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    activeSection === item.name.toLowerCase() ? 'opacity-100 scale-110' : 'scale-100'
                  }`} />
                  
                  {/* Viewfinder Grid on Hover */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="border border-accent/30" />
                    ))}
                  </div>
                </a>

                {/* Camera Shutter Animation */}
                <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Camera Controls */}
          <CameraControls />

          {/* Enhanced Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+91" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300 group"
            >
              <div className="relative">
                <Phone className="w-4 h-4" />
                <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
              </div>
              <span className="font-mono">+91 XXX XXX XXXX</span>
            </a>
            <a 
              href="mailto:hello@darkroomproduction.in"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300 group"
            >
              <div className="relative">
                <Mail className="w-4 h-4" />
                <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
              </div>
              <span className="font-mono">hello@darkroomproduction.in</span>
            </a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent/10 relative group"
            >
              <div className="relative">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                {/* Camera Shutter Effect */}
                <div className="absolute inset-0 border-2 border-accent/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-500 overflow-hidden relative ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile Film Strip Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg" />
        
        <div className="px-4 pt-2 pb-4 space-y-1 relative z-10">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 group"
              onClick={() => {
                setIsOpen(false);
                setActiveSection(item.name.toLowerCase());
              }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Camera Control Button Style */}
              <div className="w-8 h-8 border border-accent/30 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
                <span className="text-xs text-accent">{item.icon}</span>
              </div>
              <span className="font-medium">{item.name}</span>
              
              {/* Focus Indicator */}
              <div className="ml-auto w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />
            </a>
          ))}
          
          {/* Mobile Contact with Camera LCD Style */}
          <div className="pt-4 mt-4 border-t border-accent/20 space-y-3">
            <div className="bg-background/20 border border-accent/30 rounded-lg p-3 font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-accent text-xs tracking-wider">CONTACT</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-accent/50 rounded-full" />
                </div>
              </div>
              <a href="tel:+91" className="block text-muted-foreground hover:text-accent transition-colors mb-1">
                +91 XXX XXX XXXX
              </a>
              <a href="mailto:hello@darkroomproduction.in" className="block text-muted-foreground hover:text-accent transition-colors text-xs">
                hello@darkroomproduction.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Viewfinder Overlay (Desktop Only) */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full border-4 border-dashed border-accent/20">
          {/* Rule of Thirds Grid */}
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-accent/10" />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
