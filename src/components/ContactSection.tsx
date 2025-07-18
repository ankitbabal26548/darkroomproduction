
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { Star, Camera, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-background via-muted/20 to-accent/5">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Let's Create <span className="text-gradient">Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to capture your special moments? Let's discuss your vision and 
            create something extraordinary together.
          </p>
          
          {/* Professional Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2 text-accent">
              <Camera className="w-5 h-5" />
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2 text-accent">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <ContactForm />
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Trusted by 500+ happy clients across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
