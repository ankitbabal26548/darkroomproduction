
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Clock, Eye, Sparkles, Camera, Video, Aperture, Focus, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  name: string;
  premium: boolean;
}

interface ServiceCardProps {
  id: number;
  icon: LucideIcon;
  title: string;
  tier: 'silver' | 'gold' | 'platinum';
  description: string;
  features: ServiceFeature[];
  price: number;
  originalPrice?: number;
  popular: boolean;
  duration: string;
  deliverables: string;
  testimonial?: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  tier,
  description,
  features,
  price,
  originalPrice,
  popular,
  duration,
  deliverables,
  testimonial,
  isExpanded,
  onToggleExpand
}: ServiceCardProps) => {
  const getTierTheme = () => {
    switch (tier) {
      case 'platinum':
        return {
          border: 'border-slate-300 hover:border-slate-400',
          accent: 'text-slate-600',
          bg: 'from-slate-50 to-slate-100',
          glow: 'shadow-slate-500/20',
          iconBg: 'from-slate-100 to-slate-200',
          metal: 'Platinum'
        };
      case 'gold':
        return {
          border: 'border-yellow-300 hover:border-yellow-400',
          accent: 'text-yellow-600',
          bg: 'from-yellow-50 to-yellow-100',
          glow: 'shadow-yellow-500/20',
          iconBg: 'from-yellow-100 to-yellow-200',
          metal: 'Gold'
        };
      default:
        return {
          border: 'border-gray-300 hover:border-gray-400',
          accent: 'text-gray-600',
          bg: 'from-gray-50 to-gray-100',
          glow: 'shadow-gray-500/20',
          iconBg: 'from-gray-100 to-gray-200',
          metal: 'Silver'
        };
    }
  };

  const theme = getTierTheme();

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-700 cursor-pointer h-full
        hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transform-gpu
        ${popular ? 'ring-2 ring-accent border-accent/50 scale-[1.02] z-10' : `border-2 ${theme.border}`}
        bg-card/90 backdrop-blur-sm mobile-hover-safe animate-lens-focus
        ${theme.glow} hover:shadow-xl
      `}
      onClick={onToggleExpand}
    >
      {/* Photography Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-accent/20 rounded-full animate-shutter-speed" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border border-accent/10 rounded-full animate-aperture-open" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/5 rounded-full animate-lens-focus" />
      </div>

      {/* Film Strip Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 animate-film-strip-roll" />
      </div>

      {/* Enhanced Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-accent via-accent-darker to-accent-darkest text-accent-foreground px-3 md:px-4 py-2 rounded-bl-xl md:rounded-bl-2xl text-xs md:text-sm font-bold z-20 shadow-lg animate-sparkle-burst">
          <Star className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
          Most Popular
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle-twinkle" />
        </div>
      )}

      {/* Tier Badge */}
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${theme.bg} ${theme.accent} border ${theme.border} shadow-lg z-10`}>
        {theme.metal}
      </div>

      {/* Service Header */}
      <div className="p-4 md:p-8 border-b border-border/20 relative z-10">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${theme.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${theme.accent} relative overflow-hidden`}>
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent z-10" />
            {/* Camera Aperture Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl md:rounded-2xl animate-aperture-open" />
          </div>
          
          {/* Photography Equipment Icons */}
          <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <Camera className="w-4 h-4 text-accent animate-equipment-bounce" style={{ animationDelay: '0s' }} />
            <Video className="w-4 h-4 text-accent animate-equipment-bounce" style={{ animationDelay: '0.2s' }} />
            <Aperture className="w-4 h-4 text-accent animate-equipment-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        <h3 className="font-playfair text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-accent transition-colors duration-300 relative">
          {title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Enhanced Service Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors duration-300">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
            </div>
            <span className="truncate">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors duration-300">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Eye className="w-4 h-4 text-accent flex-shrink-0" />
            </div>
            <span className="truncate">{deliverables}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4 md:p-8 relative z-10">
        {/* Enhanced Features List */}
        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
          {features.slice(0, isExpanded ? features.length : 5).map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 text-sm group/feature hover:bg-muted/30 p-2 rounded-lg transition-all duration-300 animate-creative-entrance"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 relative overflow-hidden
                ${feature.premium 
                  ? 'bg-gradient-to-br from-accent to-accent-darker text-accent-foreground shadow-lg shadow-accent/30' 
                  : 'bg-muted border-2 border-border group-hover/feature:border-accent/50 group-hover/feature:bg-accent/10'
                }`}>
                {feature.premium ? (
                  <>
                    <Zap className="w-3 h-3 animate-sparkle-burst" />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full animate-sparkle-twinkle" />
                  </>
                ) : (
                  <Check className="w-3 h-3 text-accent" />
                )}
              </div>
              <span className={`flex-1 ${feature.premium ? 'font-semibold text-foreground' : 'text-muted-foreground'} group-hover/feature:text-foreground transition-colors leading-relaxed`}>
                {feature.name}
              </span>
              {feature.premium && (
                <Focus className="w-4 h-4 text-accent opacity-0 group-hover/feature:opacity-100 transition-opacity flex-shrink-0 animate-lens-focus" />
              )}
            </div>
          ))}
          {features.length > 5 && !isExpanded && (
            <div className="text-sm text-accent pl-9 font-medium animate-creative-pulse">
              +{features.length - 5} more premium features
            </div>
          )}
        </div>

        {/* Enhanced Testimonial */}
        {isExpanded && testimonial && (
          <div className="relative bg-gradient-to-r from-accent/5 to-accent/10 p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 border border-accent/20 overflow-hidden">
            <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-accent animate-equipment-bounce" />
            </div>
            <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
              <span className="text-accent text-lg">"</span>
              {testimonial}
              <span className="text-accent text-lg">"</span>
            </p>
          </div>
        )}

        {/* Enhanced Pricing with Animation */}
        <div className="flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-2">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="font-playfair text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-accent-darker bg-clip-text text-transparent animate-price-count">
                ₹{price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-base md:text-lg text-muted-foreground line-through opacity-75">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Package price</div>
          </div>
          
          {originalPrice && originalPrice > price && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg animate-sparkle-burst">
              Save ₹{(originalPrice - price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Enhanced Action Button */}
        <Button className="w-full bg-gradient-to-r from-accent to-accent-darker hover:from-accent-darker hover:to-accent-darkest text-accent-foreground py-4 md:py-6 rounded-xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mobile-touch-target relative overflow-hidden group/button">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700 animate-camera-shutter" />
          <Camera className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 animate-equipment-bounce" />
          Book This Package
        </Button>

        {/* Enhanced Expand/Collapse Indicator */}
        <div className="text-center mt-3 md:mt-4">
          <div className={`inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground transition-all duration-300 hover:text-accent ${isExpanded ? 'rotate-180' : ''}`}>
            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Eye className="w-3 h-3 md:w-4 md:h-4 animate-lens-focus" />
            </div>
            {isExpanded ? 'Less Details' : 'More Details'}
          </div>
        </div>
      </CardContent>

      {/* Floating Photography Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-8 w-2 h-2 bg-accent/30 rounded-full animate-parallax-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 left-8 w-1 h-1 bg-accent/40 rounded-full animate-parallax-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-accent/20 rounded-full animate-parallax-float" style={{ animationDelay: '4s' }} />
      </div>
    </Card>
  );
};
