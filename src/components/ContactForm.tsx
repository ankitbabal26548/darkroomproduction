
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

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
    { value: 'wedding', label: 'Wedding Photography', icon: '💒' },
    { value: 'prewedding', label: 'Pre-Wedding Shoot', icon: '💕' },
    { value: 'portrait', label: 'Portrait Session', icon: '👤' },
    { value: 'event', label: 'Event Coverage', icon: '🎉' },
    { value: 'commercial', label: 'Commercial Photography', icon: '🏢' }
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
    <Card className="shadow-elegant border-border/50">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <Send className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-semibold">Send us a Message</h3>
            <p className="text-muted-foreground">We'll respond within 2 hours</p>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex items-center space-x-2 mb-8">
          {[0, 1, 2].map(step => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                step <= formStep ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formStep === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-accent">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-accent">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-accent">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-accent">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md transition-all duration-300 focus:ring-2 focus:ring-accent/20"
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
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                size="lg"
              >
                Continue <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {formStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-medium mb-2 text-accent">Event Date</label>
                <Input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
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
                  className="transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="button"
                  onClick={() => setFormStep(0)}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
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
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-playfair text-xl font-semibold">Message Sent Successfully!</h4>
              <p className="text-muted-foreground">We'll get back to you within 2 hours with a detailed response.</p>
              <Button
                type="button"
                onClick={resetForm}
                variant="outline"
                className="transition-all duration-300"
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
