
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Clock, Eye } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  name: string;
  premium: boolean;
}

interface ServiceCardProps {
  id: number;
  icon: LucideIcon;
  title: string;
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
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 cursor-pointer h-full
        hover:shadow-lg hover:-translate-y-1
        ${popular ? 'ring-2 ring-accent border-accent/50' : 'border-border/50 hover:border-accent/30'}
      `}
      onClick={onToggleExpand}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 rounded-bl-lg text-xs font-semibold z-10">
          <Star className="w-3 h-3 inline mr-1" />
          Popular
        </div>
      )}

      {/* Service Header */}
      <div className="p-6 border-b border-border/30">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
          </div>
        </div>

        <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>

        {/* Service Stats */}
        <div className="flex gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {deliverables}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Features List */}
        <div className="space-y-2 mb-6">
          {features.slice(0, isExpanded ? features.length : 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                ${feature.premium ? 'bg-accent text-accent-foreground' : 'bg-muted'}`}>
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className={feature.premium ? 'font-medium' : ''}>{feature.name}</span>
            </div>
          ))}
          {features.length > 4 && !isExpanded && (
            <div className="text-xs text-muted-foreground pl-6">
              +{features.length - 4} more features
            </div>
          )}
        </div>

        {/* Testimonial (shown when expanded) */}
        {isExpanded && testimonial && (
          <div className="bg-muted/30 p-4 rounded-lg mb-4">
            <p className="text-sm italic text-muted-foreground">"{testimonial}"</p>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-playfair text-2xl font-bold text-accent">
                ₹{price.toLocaleString()}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">Package price</div>
          </div>
          
          {originalPrice && originalPrice > price && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Save ₹{(originalPrice - price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button className="w-full bg-accent hover:bg-accent-darker text-accent-foreground">
          Book This Package
        </Button>
      </CardContent>
    </Card>
  );
};
