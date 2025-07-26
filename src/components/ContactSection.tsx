
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { Star, Camera, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl rotate-12 animate-float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/15 to-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-tr from-accent/25 to-transparent rounded-xl rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header with Creative Typography */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 animate-gentle-bounce">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Let's Create <span className="text-gradient bg-gradient-to-r from-accent to-accent-lighter bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to capture your special moments? Let's discuss your vision and 
            bring your dreams to life through our lens.
          </p>
          
          {/* Modern Professional Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold text-accent">5.0/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Camera className="w-4 h-4 text-accent" />
              <span className="font-semibold text-accent">600+ Weddings</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="font-semibold text-accent">100% Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Creative Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Form (3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-8">
            <ContactForm />
            
            {/* Quick Contact Actions with Modern Design */}
            <Card className="glass-card border-accent/20 backdrop-blur-md bg-gradient-to-br from-background/80 to-background/60">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-6 text-center">
                  Need Immediate Response?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/919929795556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden p-6 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-xl transition-all duration-300 hover:scale-105 border border-green-200/50"
                  >
                    <div className="relative z-10">
                      <MessageCircle className="w-6 h-6 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-sm font-semibold text-green-700 mb-1">WhatsApp Chat</div>
                      <div className="text-xs text-green-600">Instant Reply</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="tel:+919929795556" 
                    className="group relative overflow-hidden p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl transition-all duration-300 hover:scale-105 border border-blue-200/50"
                  >
                    <div className="relative z-10">
                      <Phone className="w-6 h-6 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-sm font-semibold text-blue-700 mb-1">Call Direct</div>
                      <div className="text-xs text-blue-600">10 AM - 8 PM</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Information (2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            <ContactInfo />
          </div>
        </div>

        {/* Modern Bottom Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted by 600+ happy clients across India</span>
          </div>
        </div>
      </div>

      {/* Modern Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
