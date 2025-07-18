import { useState } from 'react';
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
  Calendar
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@darkroomproduction.in", "booking@darkroomproduction.in"],
      link: "mailto:hello@darkroomproduction.in"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Photography Street", "Mumbai, Maharashtra 400001"],
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/darkroomproduction.in", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/darkroomproduction", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/darkroomproduction", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to capture your special moments? Let's discuss your vision and 
            create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-photo">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Date</label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event, preferred style, and any specific requirements..."
                    rows={5}
                    required
                    className="focus:ring-accent focus:border-accent"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lens"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-photo transition-all duration-300 lens-effect">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-playfair text-lg font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="hover:text-accent transition-colors"
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Booking */}
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-2">
                  Quick Booking
                </h4>
                <p className="mb-4 opacity-90">
                  Book a consultation call with our team to discuss your requirements.
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white text-accent hover:bg-white/90"
                >
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-playfair text-lg font-semibold mb-4 text-center">
                  Follow Our Work
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 darkroom-glow"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};