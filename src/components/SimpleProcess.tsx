
import { MessageCircle, Camera, Gift } from 'lucide-react';

export const SimpleProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Let's Chat",
      description: "We start with a friendly conversation to understand your vision and preferences.",
      icon: MessageCircle
    },
    {
      step: "02",
      title: "Capture Magic",
      description: "On the day, we'll create beautiful photos while keeping things relaxed and fun.",
      icon: Camera
    },
    {
      step: "03",
      title: "Deliver Joy",
      description: "Within 2-3 weeks, you'll receive your edited photos in a beautiful online gallery.",
      icon: Gift
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Our Simple <span className="text-accent italic">Process</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Working with us is easy and stress-free. Here's how we bring your vision to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
            </div>
            <h4 className="font-playfair text-xl font-bold text-foreground mb-3">
              {step.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
