
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Clock, Eye, Sparkles } from 'lucide-react';
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
  const getTierBorderColor = () => {
    switch (tier) {
      case 'platinum':
        return 'border-slate-300 hover:border-slate-400';
      case 'gold':
        return 'border-yellow-300 hover:border-yellow-400';
      default:
        return 'border-gray-300 hover:border-gray-400';
    }
  };

  const getTierAccentColor = () => {
    switch (tier) {
      case 'platinum':
        return 'text-slate-600';
      case 'gold':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer h-full
        hover:shadow-2xl hover:-translate-y-2 transform-gpu
        ${popular ? 'ring-2 ring-accent border-accent/50 scale-[1.02]' : `border-2 ${getTierBorderColor()}`}
        bg-card/90 backdrop-blur-sm mobile-hover-safe
      `}
      onClick={onToggleExpand}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-muted/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground px-3 md:px-4 py-2 rounded-bl-xl md:rounded-bl-2xl text-xs md:text-sm font-bold z-20 shadow-lg">
          <Star className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2 animate-pulse" />
          Most Popular
        </div>
      )}

      {/* Service Header */}
      <div className="p-4 md:p-8 border-b border-border/20 relative z-10">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${getTierAccentColor()}`}>
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
        </div>

        <h3 className="font-playfair text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Service Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="truncate">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="truncate">{deliverables}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4 md:p-8 relative z-10">
        {/* Features List */}
        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
          {features.slice(0, isExpanded ? features.length : 5).map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 text-sm group/feature hover:bg-muted/30 p-2 rounded-lg transition-colors duration-200"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5
                ${feature.premium 
                  ? 'bg-gradient-to-br from-accent to-accent-darker text-accent-foreground shadow-md' 
                  : 'bg-muted border-2 border-border group-hover/feature:border-accent/50'
                }`}>
                <Check className="w-2 h-2 md:w-3 md:h-3" />
              </div>
              <span className={`flex-1 ${feature.premium ? 'font-semibold text-foreground' : 'text-muted-foreground'} group-hover/feature:text-foreground transition-colors leading-relaxed`}>
                {feature.name}
              </span>
              {feature.premium && (
                <Sparkles className="w-3 h-3 text-accent opacity-0 group-hover/feature:opacity-100 transition-opacity flex-shrink-0" />
              )}
            </div>
          ))}
          {features.length > 5 && !isExpanded && (
            <div className="text-sm text-accent pl-6 md:pl-8 font-medium">
              +{features.length - 5} more premium features
            </div>
          )}
        </div>

        {/* Testimonial */}
        {isExpanded && testimonial && (
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 border border-accent/20">
            <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
              <span className="text-accent text-lg">"</span>
              {testimonial}
              <span className="text-accent text-lg">"</span>
            </p>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-2">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="font-playfair text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-accent-darker bg-clip-text text-transparent">
                ₹{price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-base md:text-lg text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Package price</div>
          </div>
          
          {originalPrice && originalPrice > price && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm">
              Save ₹{(originalPrice - price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-to-r from-accent to-accent-darker hover:from-accent-darker hover:to-accent-darkest text-accent-foreground py-4 md:py-6 rounded-xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mobile-touch-target">
          Book This Package
        </Button>

        {/* Expand/Collapse Indicator */}
        <div className="text-center mt-3 md:mt-4">
          <div className={`inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <Eye className="w-3 h-3 md:w-4 md:h-4" />
            {isExpanded ? 'Less Details' : 'More Details'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
