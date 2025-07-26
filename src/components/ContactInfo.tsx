
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Studio",
      subtitle: "Instant Connection",
      details: ["+91 99297 95556", "Available 10 AM - 8 PM"],
      link: "tel:+919929795556",
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
      details: ["Rajasthan, India", "Jaipur • Udaipur • Jodhpur"],
      link: "#",
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
      href: "https://www.instagram.com/darkroomproduction.in",
      label: "Instagram",
      followers: "15.2K",
      color: "from-pink-500/10 to-rose-500/10",
      textColor: "text-pink-600",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/darkroomproduction.in",
      label: "Facebook",
      followers: "8.7K",
      color: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-600",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@darkroomproduction5738",
      label: "YouTube",
      followers: "5.1K",
      color: "from-red-500/10 to-orange-500/10",
      textColor: "text-red-600",
      borderColor: "border-red-500/20"
    }
  ];

  const testimonials = [
    {
      name: "Gargi Behere",
      text: "Quick response for Jaipur session! Photos turned out really lovely and they were great to work with.",
      rating: 5,
      image: "👩",
      bgColor: "from-pink-500/5 to-rose-500/5"
    },
    {
      name: "Darshan HR",
      text: "Incredible photography with creativity and attention to detail. Highly recommend Sachin Singh!",
      rating: 5,
      image: "👨",
      bgColor: "from-blue-500/5 to-indigo-500/5"
    },
    {
      name: "Pooja Kothari",
      text: "Amazing pre-wedding experience in Manali! Professional team exceeded expectations.",
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
          <Card key={index} className={`glass-card border-accent/20 backdrop-blur-sm bg-gradient-to-br ${method.bgColor} hover:${method.borderColor} transition-all duration-300 hover:scale-105`}>
            <CardContent className="p-4">
              {method.link ? (
                <a href={method.link} className="block">
                  <div className="flex items-center space-x-3 mb-3">
                    <method.icon className={`w-5 h-5 ${method.textColor}`} />
                    <div>
                      <h4 className="font-semibold text-sm">{method.title}</h4>
                      <p className="text-xs text-muted-foreground">{method.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-xs text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </a>
              ) : (
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <method.icon className={`w-5 h-5 ${method.textColor}`} />
                    <div>
                      <h4 className="font-semibold text-sm">{method.title}</h4>
                      <p className="text-xs text-muted-foreground">{method.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-xs text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Business Stats */}
      <Card className="glass-card border-accent/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="font-playfair text-lg font-semibold mb-4 text-center">Our Achievement</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">600+</div>
              <div className="text-xs text-muted-foreground">Weddings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">10</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">100%</div>
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
