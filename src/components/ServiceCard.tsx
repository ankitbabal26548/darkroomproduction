
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Clock, Eye, Sparkles, Award, Crown } from 'lucide-react';
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
  const getTierConfig = () => {
    switch (tier) {
      case 'platinum':
        return {
          gradient: 'from-slate-100 via-slate-200 to-slate-300',
          borderGradient: 'from-slate-400 to-slate-600',
          accent: 'text-slate-700',
          iconBg: 'bg-gradient-to-br from-slate-400 to-slate-600',
          badge: <Crown className="w-4 h-4" />
        };
      case 'gold':
        return {
          gradient: 'from-yellow-100 via-yellow-200 to-amber-200',
          borderGradient: 'from-yellow-400 to-amber-500',
          accent: 'text-yellow-700',
          iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-500',
          badge: <Award className="w-4 h-4" />
        };
      default:
        return {
          gradient: 'from-gray-50 via-gray-100 to-gray-150',
          borderGradient: 'from-gray-300 to-gray-400',
          accent: 'text-gray-600',
          iconBg: 'bg-gradient-to-br from-gray-400 to-gray-500',
          badge: <Sparkles className="w-4 h-4" />
        };
    }
  };

  const tierConfig = getTierConfig();

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer h-full
        hover:shadow-2xl hover:-translate-y-2 transform-gpu
        ${popular ? 'ring-2 ring-accent border-accent/50 scale-105' : 'border-border/30 hover:border-accent/40'}
        ${tier === 'gold' ? 'bg-gradient-to-br from-card via-card to-accent/5' : 'bg-card/80'}
        backdrop-blur-sm
      `}
      onClick={onToggleExpand}
    >
      {/* Tier Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tierConfig.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Border Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tierConfig.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />

      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-accent-darker text-accent-foreground px-4 py-2 rounded-bl-2xl text-sm font-bold z-20 shadow-lg">
          <Star className="w-4 h-4 inline mr-2 animate-pulse" />
          Most Popular
        </div>
      )}

      {/* Tier Badge */}
      <div className={`absolute top-4 left-4 ${tierConfig.iconBg} text-white px-3 py-1 rounded-full text-xs font-semibold z-10 flex items-center gap-1 shadow-lg`}>
        {tierConfig.badge}
        {tier.charAt(0).toUpperCase() + tier.slice(1)}
      </div>

      {/* Service Header */}
      <div className="p-8 border-b border-border/20 relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl ${tierConfig.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        <h3 className="font-playfair text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Service Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-4 h-4 text-accent" />
            <span>{deliverables}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-8 relative z-10">
        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.slice(0, isExpanded ? features.length : 5).map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 text-sm group/feature hover:bg-muted/30 p-2 rounded-lg transition-colors duration-200"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
                ${feature.premium 
                  ? 'bg-gradient-to-br from-accent to-accent-darker text-accent-foreground shadow-md' 
                  : 'bg-muted border-2 border-border group-hover/feature:border-accent/50'
                }`}>
                <Check className="w-3 h-3" />
              </div>
              <span className={`${feature.premium ? 'font-semibold text-foreground' : 'text-muted-foreground'} group-hover/feature:text-foreground transition-colors`}>
                {feature.name}
              </span>
              {feature.premium && (
                <Sparkles className="w-3 h-3 text-accent ml-auto opacity-0 group-hover/feature:opacity-100 transition-opacity" />
              )}
            </div>
          ))}
          {features.length > 5 && !isExpanded && (
            <div className="text-sm text-accent pl-8 font-medium">
              +{features.length - 5} more premium features
            </div>
          )}
        </div>

        {/* Testimonial */}
        {isExpanded && testimonial && (
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-2xl mb-6 border border-accent/20">
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              <span className="text-accent text-lg">"</span>
              {testimonial}
              <span className="text-accent text-lg">"</span>
            </p>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="font-playfair text-3xl font-bold bg-gradient-to-r from-accent to-accent-darker bg-clip-text text-transparent">
                ₹{price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">Package price</div>
          </div>
          
          {originalPrice && originalPrice > price && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold shadow-sm">
              Save ₹{(originalPrice - price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-to-r from-accent to-accent-darker hover:from-accent-darker hover:to-accent-darkest text-accent-foreground py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Book This Package
        </Button>

        {/* Expand/Collapse Indicator */}
        <div className="text-center mt-4">
          <div className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <Eye className="w-4 h-4" />
            {isExpanded ? 'Less Details' : 'More Details'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
