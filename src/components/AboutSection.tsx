import { TeamShowcase } from './TeamShowcase';
import { OurApproach } from './OurApproach';
import { HappyClients } from './HappyClients';
import { Camera, Aperture, Focus, Sparkles, Heart, Star } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/10">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full animate-floating-slow">
          <Camera className="w-6 h-6 text-accent/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-2xl -rotate-12 animate-floating-medium">
          <Aperture className="w-5 h-5 text-accent/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full animate-floating-fast">
          <Focus className="w-3 h-3 text-accent/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-bl from-accent/12 to-transparent rounded-full animate-floating-medium" style={{
        animationDelay: '1.5s'
      }}>
          <Heart className="w-2.5 h-2.5 text-accent/35 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Enhanced Hero Introduction */}
      <div className="relative py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-md animate-pulse"></div>
              <span className="relative px-8 py-4 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full text-accent font-semibold border border-accent/25 shadow-lg backdrop-blur-sm">
                About Our Creative Studio
              </span>
            </div>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <span className="relative">
              Capturing Your{' '}
              <span className="relative text-accent">
                Perfect Moments
              </span>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up mb-8" style={{
          animationDelay: '0.4s'
        }}>
            We're a passionate team of photographers dedicated to telling your unique story through beautiful, timeless images that you'll treasure forever.
          </p>
          
          {/* Enhanced Stats with Correct Numbers */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm group-hover:border-accent/30 transition-all duration-300">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-foreground font-semibold">25+ Team Members</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm group-hover:border-accent/30 transition-all duration-300">
                <Camera className="w-4 h-4 text-accent" />
                <span className="text-foreground font-semibold">600+ Weddings</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm group-hover:border-accent/30 transition-all duration-300">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-foreground font-semibold">10 Years Experience</span>
              </div>
            </div>
          </div>

          {/* Enhanced Creative Quote */}
          <div className="mt-12 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/3 to-accent/6 rounded-2xl blur-xl"></div>
              <div className="relative p-8 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl border border-accent/15">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-lg text-foreground/80 italic font-light leading-relaxed">
                  "Photography is the art of frozen time... the ability to store emotion and feelings within a frame."
                </p>
                <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent/50 to-accent mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Team Showcase */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/5 to-background opacity-30"></div>
        <div className="relative">
          <TeamShowcase />
        </div>
      </div>

      {/* Enhanced Our Approach */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/3 to-background"></div>
        <div className="relative">
          <OurApproach />
        </div>
      </div>

      {/* Enhanced Happy Clients */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-accent/2 to-background opacity-50"></div>
        <div className="relative">
          <HappyClients />
        </div>
      </div>

      {/* Enhanced Footer Element */}
      <div className="relative py-12">
        
      </div>
    </section>;
};