
import { Camera, Palette, Sparkles, Gift } from 'lucide-react';

export const OurProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We start by understanding your vision, style preferences, and dream locations to create a personalized photography experience.",
      icon: Camera,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      step: "02", 
      title: "The Photography Session",
      description: "Professional photography session with creative direction, perfect lighting, and capturing those authentic, candid moments.",
      icon: Sparkles,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      step: "03",
      title: "Post-Production Magic",
      description: "Expert editing and retouching to enhance colors, lighting, and create that signature artistic look you'll love.",
      icon: Palette,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Receive your stunning photos in high resolution with a beautiful online gallery and optional prints package.",
      icon: Gift,
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Our Creative <span className="text-accent italic">Process</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From initial consultation to final delivery, we ensure every step creates magic
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {processSteps.map((step, index) => (
          <div 
            key={index}
            className="group relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative h-full">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 h-full group-hover:border-accent/40 transition-all duration-500">
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="font-playfair text-2xl font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent/30 rounded-full"></div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-accent/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Element */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
          <Camera className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium">Perfection in every frame</span>
        </div>
      </div>
    </div>
  );
};
