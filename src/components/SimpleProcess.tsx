
import { MessageSquare, Calendar, Camera, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export const SimpleProcess = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We start with a friendly chat about your vision, preferences, and special requirements for your big day.",
      duration: "30 min",
      color: "from-blue-500/15 to-blue-500/8",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-500/8"
    },
    {
      number: "02",
      icon: Calendar,
      title: "Planning & Booking",
      description: "We'll discuss timeline, locations, and finalize all details. Then secure your date with our booking process.",
      duration: "1 hour",
      color: "from-purple-500/15 to-purple-500/8",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/8"
    },
    {
      number: "03",
      icon: Camera,
      title: "Photography Session",
      description: "On your special day, we capture every precious moment with our professional equipment and creative vision.",
      duration: "Full day",
      color: "from-green-500/15 to-green-500/8",
      accentColor: "text-green-600",
      bgColor: "bg-green-500/8"
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Editing & Delivery",
      description: "We carefully edit your photos and deliver a beautiful gallery within 2-3 weeks of your event.",
      duration: "2-3 weeks",
      color: "from-orange-500/15 to-orange-500/8",
      accentColor: "text-orange-600",
      bgColor: "bg-orange-500/8"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Clean Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Simple{' '}
            <span className="relative text-accent">
              Process
            </span>
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From our first conversation to delivering your beautiful photos, we make the entire process smooth and enjoyable
        </p>
      </div>

      {/* Enhanced Process Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/30 via-accent/20 to-accent/30 transform -translate-y-1/2 z-0"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Clean Main Card */}
              <div className="relative bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/15 hover:border-accent/25 transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105 h-full">
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/15 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-6 h-6 ${step.accentColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/8 rounded-full mt-4">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    <span className="text-xs text-accent font-semibold">{step.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-accent/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Clean Call-to-Action */}
      <div className="mt-16 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/8 rounded-full blur-md"></div>
          <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/8 to-accent/4 rounded-full border border-accent/20 backdrop-blur-sm">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-foreground font-semibold">Ready to get started?</span>
          </div>
        </div>
      </div>
    </div>
  );
};
