import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, Instagram, Facebook, Youtube } from 'lucide-react';
export const ContactInfo = () => {
  const contactMethods = [{
    icon: Phone,
    title: "Call Studio",
    subtitle: "Instant Connection",
    details: ["+91 98765 43210", "Available 10 AM - 8 PM"],
    link: "tel:+919876543210",
    bgColor: "bg-green-500/5",
    textColor: "text-green-600"
  }, {
    icon: Mail,
    title: "Email Studio",
    subtitle: "Detailed Inquiries",
    details: ["hello@darkroomproduction.in", "Response within 2 hours"],
    link: "mailto:hello@darkroomproduction.in",
    bgColor: "bg-blue-500/5",
    textColor: "text-blue-600"
  }, {
    icon: MapPin,
    title: "Visit Studio",
    subtitle: "Portfolio Viewing",
    details: ["123 Photography Street", "Mumbai, Maharashtra"],
    link: "https://maps.google.com",
    bgColor: "bg-purple-500/5",
    textColor: "text-purple-600"
  }, {
    icon: Clock,
    title: "Studio Hours",
    subtitle: "Always Creating",
    details: ["Mon - Sat: 10 AM - 8 PM", "Sunday: By Appointment"],
    link: null,
    bgColor: "bg-orange-500/5",
    textColor: "text-orange-600"
  }];
  const socialLinks = [{
    icon: Instagram,
    href: "https://instagram.com/darkroomproduction.in",
    label: "Instagram",
    followers: "15.2K"
  }, {
    icon: Facebook,
    href: "https://facebook.com/darkroomproduction",
    label: "Facebook",
    followers: "8.7K"
  }, {
    icon: Youtube,
    href: "https://youtube.com/darkroomproduction",
    label: "YouTube",
    followers: "5.1K"
  }];
  const testimonials = [{
    name: "Priya & Arjun",
    text: "Captured our love story beautifully! Every moment was perfect.",
    rating: 5,
    image: "👰"
  }, {
    name: "Rohit Sharma",
    text: "Professional team with incredible attention to detail.",
    rating: 5,
    image: "🤵"
  }, {
    name: "Meera Patel",
    text: "Best photography experience ever! Highly recommended.",
    rating: 5,
    image: "👩"
  }];
  return <div className="space-y-6">
      {/* Contact Methods Grid */}
      

      {/* Business Stats */}
      <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
        <CardContent className="p-6 text-center">
          <h4 className="font-playfair text-lg font-semibold mb-4">Why Choose Us</h4>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex justify-center mb-2">
                <Star className="w-5 h-5 text-accent fill-current" />
              </div>
              <div className="font-semibold text-accent">4.9/5</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
            <div>
              <div className="font-semibold text-accent">500+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="font-semibold text-accent">100%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <h4 className="font-playfair text-lg font-semibold mb-4 text-center">
            Follow Our Journey
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group text-center space-y-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                <social.icon className="w-6 h-6 mx-auto text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-medium">{social.label}</div>
                  <div className="text-xs text-muted-foreground">{social.followers}</div>
                </div>
              </a>)}
          </div>
        </CardContent>
      </Card>

      {/* Client Testimonials */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <h4 className="font-playfair text-lg font-semibold mb-4 text-center">
            What Clients Say
          </h4>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">{testimonial.name}</span>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-accent fill-current" />)}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.text}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>
    </div>;
};