
import { OurProcess } from './OurProcess';
import { ArtisticStats } from './ArtisticStats';
import { AwardsShowcase } from './AwardsShowcase';
import { TeamProfiles } from './TeamProfiles';
import { PhilosophyManifesto } from './PhilosophyManifesto';
import { ServicesPreview } from './ServicesPreview';
import { BehindTheScenes } from './BehindTheScenes';
import { CreativeTestimonials } from './CreativeTestimonials';

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 creative-bg-pattern opacity-20"></div>
      
      {/* Photography-Focused Hero Header */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 creative-header-animation">
            <div className="inline-block mb-6">
              <span className="px-8 py-3 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-full text-accent font-medium border border-accent/30 backdrop-blur-sm">
                About Darkroom Production
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8 artistic-gradient-text">
              Capturing Life's<br />
              <span className="text-accent italic">Perfect Moments</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Professional photography studio specializing in weddings, portraits, and events with artistic vision and technical excellence
            </p>
          </div>
        </div>
      </div>

      {/* Creative Process */}
      <div className="relative py-16 bg-gradient-to-b from-background via-muted/10 to-background">
        <OurProcess />
      </div>

      {/* Artistic Wave Divider */}
      <div className="artistic-wave-divider">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-accent/10">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Photography Statistics */}
      <div className="relative py-20 bg-muted/20">
        <ArtisticStats />
      </div>

      {/* Awards & Recognition */}
      <div className="relative py-20">
        <AwardsShowcase />
      </div>

      {/* Services Preview */}
      <div className="relative py-20 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <ServicesPreview />
      </div>

      {/* Team Profiles */}
      <div className="relative py-20">
        <TeamProfiles />
      </div>

      {/* Behind the Scenes */}
      <div className="relative py-20 bg-muted/20">
        <BehindTheScenes />
      </div>

      {/* Philosophy Manifesto */}
      <div className="relative py-20 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <PhilosophyManifesto />
      </div>

      {/* Creative Testimonials */}
      <div className="relative py-20">
        <CreativeTestimonials />
      </div>
    </section>
  );
};
