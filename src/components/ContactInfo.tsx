
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Studio",
      subtitle: "Instant Connection",
      details: ["+91 98765 43210", "Available 10 AM - 8 PM"],
      link: "tel:+919876543210",
      bgColor: "from-green-500/10 to-emerald-500/10",
      textColor: "text-green-600",
      borderColor: "border-green-500/20"
    },
    {
      icon: Mail,
      title: "Email Studio",
      subtitle: "Detailed Inquiries",
      details: ["hello@darkroomproduction.in", "Response within 2 hours"],
      link: "mailto:hello@darkroomproduction.in",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      textColor: "text-blue-600",
      borderColor: "border-blue-500/20"
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      subtitle: "Portfolio Viewing",
      details: ["123 Photography Street", "Mumbai, Maharashtra"],
      link: "https://maps.google.com",
      bgColor: "from-purple-500/10 to-pink-500/10",
      textColor: "text-purple-600",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      subtitle: "Always Creating",
      details: ["Mon - Sat: 10 AM - 8 PM", "Sunday: By Appointment"],
      link: null,
      bgColor: "from-orange-500/10 to-amber-500/10",
      textColor: "text-orange-600",
      borderColor: "border-orange-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/darkroomproduction.in",
      label: "Instagram",
      followers: "15.2K",
      color: "from-pink-500/10 to-rose-500/10",
      textColor: "text-pink-600",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/darkroomproduction",
      label: "Facebook",
      followers: "8.7K",
      color: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-600",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/darkroomproduction",
      label: "YouTube",
      followers: "5.1K",
      color: "from-red-500/10 to-orange-500/10",
      textColor: "text-red-600",
      borderColor: "border-red-500/20"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun",
      text: "Captured our love story beautifully! Every moment was perfect.",
      rating: 5,
      image: "👰",
      bgColor: "from-pink-500/5 to-rose-500/5"
    },
    {
      name: "Rohit Sharma",
      text: "Professional team with incredible attention to detail.",
      rating: 5,
      image: "🤵",
      bgColor: "from-blue-500/5 to-indigo-500/5"
    },
    {
      name: "Meera Patel",
      text: "Best photography experience ever! Highly recommended.",
      rating: 5,
      image: "👩",
      bgColor: "from-purple-500/5 to-pink-500/5"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className={`glass-card border ${method.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}>
            <CardContent className="p-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${method.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className={`w-6 h-6 ${method.textColor}`} />
              </div>
              <h4 className="font-playfair text-lg font-semibold mb-1">{method.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{method.subtitle}</p>
              <div className="space-y-1">
                {method.details.map((detail, i) => (
                  <div key={i} className={`text-sm ${i === 0 ? 'font-medium ' + method.textColor : 'text-muted-foreground'}`}>
                    {detail}
                  </div>
                ))}
              </div>
              {method.link && (
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center text-sm ${method.textColor} hover:underline mt-3 font-medium`}
                >
                  Connect Now →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Business Stats */}
      <Card className="glass-card border-accent/20 backdrop-blur-md bg-gradient-to-br from-accent/5 to-accent/10">
        <CardContent className="p-6 text-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">1200+</div>
              <div className="text-xs text-muted-foreground">Photos Taken</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="glass-card border-accent/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="font-playfair text-lg font-semibold mb-4 text-center flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-accent" />
            <span>Follow Our Journey</span>
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group text-center space-y-3 p-4 rounded-xl bg-gradient-to-br ${social.color} border ${social.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <social.icon className={`w-6 h-6 mx-auto ${social.textColor} group-hover:scale-110 transition-transform`} />
                <div>
                  <div className="text-xs font-medium">{social.label}</div>
                  <div className={`text-xs ${social.textColor} font-semibold`}>{social.followers}</div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Client Testimonials */}
      <Card className="glass-card border-accent/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="font-playfair text-lg font-semibold mb-4 text-center flex items-center justify-center space-x-2">
            <Star className="w-5 h-5 text-accent fill-current" />
            <span>What Clients Say</span>
          </h4>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-4 bg-gradient-to-br ${testimonial.bgColor} rounded-xl border border-accent/10 hover:border-accent/20 transition-all duration-300`}>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-sm">{testimonial.name}</span>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
