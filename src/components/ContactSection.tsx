
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  Send,
  Calendar,
  MessageCircle,
  Star,
  CheckCircle,
  Camera,
  Aperture,
  Film,
  Zap
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
    serviceType: ''
  });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate film development animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormStep(3); // Success step
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Studio",
      subtitle: "Instant Connection",
      details: ["+91 98765 43210", "Available 10 AM - 8 PM"],
      link: "tel:+919876543210",
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Studio",
      subtitle: "Detailed Inquiries",
      details: ["hello@darkroomproduction.in", "Response within 2 hours"],
      link: "mailto:hello@darkroomproduction.in",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      subtitle: "Portfolio Viewing",
      details: ["123 Photography Street", "Mumbai, Maharashtra"],
      link: "https://maps.google.com",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      subtitle: "Always Creating",
      details: ["Mon - Sat: 10 AM - 8 PM", "Sunday: By Appointment"],
      link: null,
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "text-orange-500"
    }
  ];

  const serviceOptions = [
    { value: 'wedding', label: 'Wedding Photography', icon: '💒' },
    { value: 'prewedding', label: 'Pre-Wedding Shoot', icon: '💕' },
    { value: 'portrait', label: 'Portrait Session', icon: '👤' },
    { value: 'event', label: 'Event Coverage', icon: '🎉' },
    { value: 'commercial', label: 'Commercial Photography', icon: '🏢' }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/darkroomproduction.in", label: "Instagram", followers: "15.2K" },
    { icon: Facebook, href: "https://facebook.com/darkroomproduction", label: "Facebook", followers: "8.7K" },
    { icon: Youtube, href: "https://youtube.com/darkroomproduction", label: "YouTube", followers: "5.1K" }
  ];

  const testimonials = [
    { name: "Priya & Arjun", text: "Captured our love story beautifully!", rating: 5, image: "👰" },
    { name: "Rohit Sharma", text: "Professional and creative team.", rating: 5, image: "🤵" },
    { name: "Meera Patel", text: "Best photography experience ever!", rating: 5, image: "👩" }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-accent/5 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-64 h-64 border border-accent/20 rounded-full animate-breathing opacity-40"
          style={{
            left: `${20 + mousePosition.x * 10}%`,
            top: `${30 + mousePosition.y * 5}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-lg rotate-45 animate-spin-slow opacity-30"
          style={{
            right: `${15 + mousePosition.x * 8}%`,
            top: `${60 + mousePosition.y * -3}%`
          }}
        />
        
        {/* Film Strip Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/30 to-transparent film-strip-dots" />
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/30 to-transparent film-strip-dots" />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/60 rounded-full animate-floating-particle opacity-70"
            style={{
              left: `${10 + i * 15 + mousePosition.x * 3}%`,
              top: `${20 + i * 10 + mousePosition.y * 2}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Aperture className="w-32 h-32 animate-spin-slow" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 relative z-10">
            Let's Create <span className="text-gradient">Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Let's discuss your vision and 
            create something extraordinary together.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex items-center space-x-2 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Camera className="w-5 h-5" />
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Form */}
          <div className="space-y-8">
            <Card className="shadow-professional darkroom-glow overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold">Send us a Message</h3>
                    <p className="text-muted-foreground">We'll respond within 2 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Indicator */}
                  <div className="flex items-center space-x-2 mb-6">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          step <= formStep 
                            ? 'bg-accent scale-110 shadow-glow' 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>

                  {formStep === 0 && (
                    <div className="space-y-6 animate-aperture-reveal">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative group">
                          <label className="block text-sm font-medium mb-2 text-accent">Full Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="lens-focus-effect"
                          />
                        </div>
                        <div className="relative group">
                          <label className="block text-sm font-medium mb-2 text-accent">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="lens-focus-effect"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative group">
                          <label className="block text-sm font-medium mb-2 text-accent">Phone Number</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="lens-focus-effect"
                          />
                        </div>
                        <div className="relative group">
                          <label className="block text-sm font-medium mb-2 text-accent">Service Type</label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md lens-focus-effect"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.icon} {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Button 
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 magnetic-hover"
                        size="lg"
                      >
                        Continue <Zap className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  )}

                  {formStep === 1 && (
                    <div className="space-y-6 animate-aperture-reveal">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-accent">Event Date</label>
                        <Input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="lens-focus-effect"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-accent">Tell us about your vision *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your event, preferred style, special moments you want captured, and any specific requirements..."
                          rows={5}
                          required
                          className="lens-focus-effect"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <Button 
                          type="button"
                          onClick={() => setFormStep(0)}
                          variant="outline"
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 magnetic-hover"
                          size="lg"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <Film className="w-5 h-5 animate-spin" />
                              <span>Developing...</span>
                            </div>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="text-center space-y-6 animate-aperture-reveal">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="font-playfair text-xl font-semibold">Message Sent Successfully!</h4>
                      <p className="text-muted-foreground">We'll get back to you within 2 hours with a detailed response.</p>
                      <Button 
                        type="button"
                        onClick={() => {
                          setFormStep(0);
                          setFormData({ name: '', email: '', phone: '', eventDate: '', message: '', serviceType: '' });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center hover:bg-green-500/20 transition-all duration-300 magnetic-hover"
              >
                <MessageCircle className="w-6 h-6 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <a 
                href="tel:+919876543210"
                className="group bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center hover:bg-blue-500/20 transition-all duration-300 magnetic-hover"
              >
                <Phone className="w-6 h-6 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Information & Interactive Elements */}
          <div className="space-y-8">
            {/* 3D Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`magnetic-contact-card cursor-pointer transition-all duration-500 ${
                    activeCard === index ? 'scale-105 shadow-glow' : 'hover:shadow-professional'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 transition-opacity duration-300 ${
                      activeCard === index ? 'opacity-100' : ''
                    }`} />
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className={`w-6 h-6 ${info.accentColor}`} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-playfair text-lg font-semibold mb-1">{info.title}</h4>
                        <p className="text-sm text-accent font-medium mb-2">{info.subtitle}</p>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="hover:text-accent transition-colors duration-300 lens-flare-hover"
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <Card className="darkroom-atmosphere">
              <CardContent className="p-6">
                <h4 className="font-playfair text-lg font-semibold mb-4 text-center">
                  What Our Clients Say
                </h4>
                <div className="relative h-24 overflow-hidden">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentTestimonial 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-accent fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 italic">"{testimonial.text}"</p>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">{testimonial.image}</span>
                          <span className="font-medium text-sm">{testimonial.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media Hub */}
            <Card className="professional-badge">
              <CardContent className="p-6">
                <h4 className="font-playfair text-lg font-semibold mb-4 text-center text-accent-foreground">
                  Follow Our Journey
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-center space-y-2 p-3 rounded-lg bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-all duration-300 magnetic-hover"
                    >
                      <social.icon className="w-6 h-6 mx-auto text-accent-foreground group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-medium text-accent-foreground">{social.label}</div>
                        <div className="text-xs text-accent-foreground/70">{social.followers}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Calendar Booking */}
            <Card className="bg-gradient-to-br from-accent to-accent-darker text-accent-foreground overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
              <CardContent className="p-6 text-center relative z-10">
                <Calendar className="w-12 h-12 mx-auto mb-4 animate-floating" />
                <h4 className="font-playfair text-xl font-semibold mb-2">
                  Book Consultation
                </h4>
                <p className="mb-4 opacity-90">
                  Free 30-minute consultation to discuss your vision and requirements.
                </p>
                <Button 
                  variant="secondary"
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 magnetic-hover"
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
