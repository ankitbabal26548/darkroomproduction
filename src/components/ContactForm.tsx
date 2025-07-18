
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, ArrowRight, ArrowLeft, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
    serviceType: ''
  });
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'wedding', label: 'Wedding Photography', icon: '💒', color: 'from-pink-500/20 to-rose-500/20' },
    { value: 'prewedding', label: 'Pre-Wedding Shoot', icon: '💕', color: 'from-purple-500/20 to-pink-500/20' },
    { value: 'portrait', label: 'Portrait Session', icon: '👤', color: 'from-blue-500/20 to-cyan-500/20' },
    { value: 'event', label: 'Event Coverage', icon: '🎉', color: 'from-green-500/20 to-emerald-500/20' },
    { value: 'commercial', label: 'Commercial Photography', icon: '🏢', color: 'from-orange-500/20 to-amber-500/20' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormStep(3);
  };

  const resetForm = () => {
    setFormStep(0);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      message: '',
      serviceType: ''
    });
  };

  return (
    <Card className="glass-card border-accent/20 backdrop-blur-md bg-gradient-to-br from-background/90 to-background/70 shadow-creative">
      <CardContent className="p-8">
        {/* Modern Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center animate-gentle-bounce">
              <Send className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Send us a Message
            </h3>
            <p className="text-muted-foreground">We'll respond within 2 hours</p>
          </div>
        </div>
        
        {/* Enhanced Progress Indicator */}
        <div className="flex items-center space-x-2 mb-8">
          {[0, 1, 2].map(step => (
            <div key={step} className="relative flex-1">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  step <= formStep 
                    ? 'bg-gradient-to-r from-accent to-accent-lighter' 
                    : 'bg-muted'
                }`}
              />
              {step <= formStep && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formStep === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                    <User className="w-4 h-4" />
                    <span>Full Name *</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="pl-4 pr-4 py-3 bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-300 rounded-xl"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                    <Mail className="w-4 h-4" />
                    <span>Email Address *</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="pl-4 pr-4 py-3 bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-300 rounded-xl"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="pl-4 pr-4 py-3 bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-300 rounded-xl"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                    <MessageSquare className="w-4 h-4" />
                    <span>Service Type</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:border-accent/50 focus:ring-accent/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map(option => (
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
                className="w-full bg-gradient-to-r from-accent to-accent-lighter text-accent-foreground hover:from-accent-darker hover:to-accent transition-all duration-300 py-3 rounded-xl font-semibold"
                size="lg"
              >
                Continue <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {formStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                  <Calendar className="w-4 h-4" />
                  <span>Event Date</span>
                </label>
                <Input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-300 rounded-xl"
                />
              </div>

              <div className="relative">
                <label className="flex items-center space-x-2 text-sm font-medium mb-3 text-accent">
                  <MessageSquare className="w-4 h-4" />
                  <span>Tell us about your vision *</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your event, preferred style, special moments you want captured, and any specific requirements..."
                  rows={5}
                  required
                  className="px-4 py-3 bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-300 rounded-xl resize-none"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="button"
                  onClick={() => setFormStep(0)}
                  variant="outline"
                  className="flex-1 py-3 rounded-xl border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-accent to-accent-lighter text-accent-foreground hover:from-accent-darker hover:to-accent transition-all duration-300 py-3 rounded-xl font-semibold"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
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
            <div className="text-center space-y-6 animate-fade-in">
              <div className="relative inline-flex">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="font-playfair text-xl font-semibold">Message Sent Successfully!</h4>
              <p className="text-muted-foreground">We'll get back to you within 2 hours with a detailed response.</p>
              <Button
                type="button"
                onClick={resetForm}
                variant="outline"
                className="transition-all duration-300 py-3 rounded-xl border-accent/30 hover:bg-accent/10"
              >
                Send Another Message
              </Button>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
