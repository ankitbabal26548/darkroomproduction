
import { MessageCircle, Camera, Gift, CheckCircle, ArrowRight } from 'lucide-react';

export const SimpleProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Let's Chat",
      description: "We start with a friendly conversation to understand your vision and preferences.",
      icon: MessageCircle,
      color: "from-blue-500/20 to-blue-500/10",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-500/10",
      details: "Free consultation • 30 minutes • No commitment"
    },
    {
      step: "02",
      title: "Capture Magic",
      description: "On the day, we'll create beautiful photos while keeping things relaxed and fun.",
      icon: Camera,
      color: "from-purple-500/20 to-purple-500/10",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-500/10",
      details: "Professional equipment • Creative direction • Comfortable atmosphere"
    },
    {
      step: "03",
      title: "Deliver Joy",
      description: "Within 2-3 weeks, you'll receive your edited photos in a beautiful online gallery.",
      icon: Gift,
      color: "from-green-500/20 to-green-500/10",
      accentColor: "text-green-600",
      bgColor: "bg-green-500/10",
      details: "Online gallery • High-resolution files • Print-ready quality"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Creative Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Simple{' '}
            <span className="text-gradient bg-gradient-to-r from-accent via-accent-lighter to-accent bg-clip-text text-transparent italic">
              Process
            </span>
          </h3>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/20 rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Working with us is easy and stress-free. Here's how we bring your vision to life
        </p>
      </div>

      {/* Interactive Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-64 bg-gradient-to-b from-accent/50 to-accent/20"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative text-center"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Step Connection Arrow (for mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent/60 animate-pulse" />
                </div>
              )}
              
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 h-full">
                
                {/* Step Icon & Number */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 ${step.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-12 h-12 ${step.accentColor} group-hover:animate-pulse`} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-accent to-accent-darker text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Completion Check (appears on hover) */}
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h4 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {step.description}
                  </p>
                  
                  {/* Details (appear on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="pt-3 border-t border-accent/20">
                      <p className="text-sm text-accent font-medium">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full border border-accent/20 backdrop-blur-sm">
          <MessageCircle className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Ready to start your journey?</span>
        </div>
      </div>
    </div>
  );
};
