
import { TeamShowcase } from './TeamShowcase';
import { OurApproach } from './OurApproach';
import { SimpleProcess } from './SimpleProcess';
import { HappyClients } from './HappyClients';
import { PhotographyPassion } from './PhotographyPassion';
import { Camera, Aperture, Focus } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full animate-floating-slow">
          <Camera className="w-8 h-8 text-accent/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-bl from-accent/15 to-transparent rounded-2xl -rotate-12 animate-floating-medium">
          <Aperture className="w-6 h-6 text-accent/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full animate-floating-fast">
          <Focus className="w-4 h-4 text-accent/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Enhanced Hero Introduction */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <span className="px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full text-accent font-medium border border-accent/30 shadow-lg backdrop-blur-sm">
              About Our Team
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Capturing Your{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic animate-gradient-shift">
              Perfect Moments
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We're a passionate team of photographers dedicated to telling your unique story through beautiful, timeless images that you'll treasure forever.
          </p>
          
          {/* Floating Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium">5 Team Members</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-accent font-medium">100+ Happy Couples</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-accent font-medium">3 Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Showcase */}
      <div className="relative py-16 bg-gradient-to-br from-muted/30 to-muted/10">
        <TeamShowcase />
      </div>

      {/* Enhanced Our Approach */}
      <div className="relative py-16">
        <OurApproach />
      </div>

      {/* Interactive Simple Process */}
      <div className="relative py-16 bg-gradient-to-br from-muted/20 to-background">
        <SimpleProcess />
      </div>

      {/* Dynamic Happy Clients */}
      <div className="relative py-16">
        <HappyClients />
      </div>

      {/* Creative Photography Passion */}
      <div className="relative py-16 bg-gradient-to-br from-accent/5 to-background">
        <PhotographyPassion />
      </div>
    </section>
  );
};
