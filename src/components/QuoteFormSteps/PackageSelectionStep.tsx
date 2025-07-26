
import { PackageOption, QuoteFormData } from '@/types/quote';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Camera } from 'lucide-react';

interface PackageSelectionStepProps {
  data: QuoteFormData['packageSelection'];
  eventType: 'wedding' | 'pre-wedding';
  packageOptions: PackageOption[];
  onChange: (data: Partial<QuoteFormData['packageSelection']>) => void;
}

export const PackageSelectionStep = ({ data, eventType, packageOptions, onChange }: PackageSelectionStepProps) => {
  const filteredPackages = packageOptions.filter(pkg => pkg.eventType === eventType);

  const handlePackageSelect = (pkg: PackageOption) => {
    onChange({
      packageType: pkg.type,
      basePrice: pkg.price,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Camera className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Choose Your Package</h3>
        <p className="text-muted-foreground">Select the perfect package for your {eventType}</p>
      </div>

      <div className="grid gap-4">
        {filteredPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              data.packageType === pkg.type
                ? 'ring-2 ring-accent bg-accent/5'
                : 'hover:border-accent/50'
            }`}
            onClick={() => handlePackageSelect(pkg)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  {pkg.popular && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-accent">₹{pkg.price.toLocaleString()}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Check className="w-3 h-3 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {data.packageType === pkg.type && (
                  <div className="flex items-center space-x-2 text-sm text-accent animate-fade-in">
                    <Check className="w-4 h-4" />
                    <span className="font-medium">Selected</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <p className="text-sm text-muted-foreground">
          <span className="text-accent font-semibold">Note:</span> All prices are starting amounts. 
          Final cost may vary based on specific requirements, duration, and additional services.
        </p>
      </div>
    </div>
  );
};
