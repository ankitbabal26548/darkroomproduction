
import { QuoteFormData, AddOnOption } from '@/types/quote';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, Package, X } from 'lucide-react';
import { useState } from 'react';

interface AddOnsStepProps {
  data: QuoteFormData['addOns'];
  addOnOptions: AddOnOption[];
  onChange: (data: Partial<QuoteFormData['addOns']>) => void;
}

export const AddOnsStep = ({ data, addOnOptions, onChange }: AddOnsStepProps) => {
  const [customAddOn, setCustomAddOn] = useState('');

  const handleAddOnToggle = (addOnId: string) => {
    const updates: Partial<QuoteFormData['addOns']> = {};
    
    switch (addOnId) {
      case 'extra-reels':
        updates.extraReels = !data.extraReels;
        break;
      case 'additional-photos':
        updates.additionalPhotos = !data.additionalPhotos;
        break;
      case 'travel-charges':
        updates.travelCharges = !data.travelCharges;
        break;
    }
    
    onChange(updates);
  };

  const addCustomAddOn = () => {
    if (customAddOn.trim() && !data.customAddOns.includes(customAddOn.trim())) {
      onChange({
        customAddOns: [...data.customAddOns, customAddOn.trim()],
      });
      setCustomAddOn('');
    }
  };

  const removeCustomAddOn = (addOn: string) => {
    onChange({
      customAddOns: data.customAddOns.filter(item => item !== addOn),
    });
  };

  const getAddOnState = (addOnId: string) => {
    switch (addOnId) {
      case 'extra-reels':
        return data.extraReels;
      case 'additional-photos':
        return data.additionalPhotos;
      case 'travel-charges':
        return data.travelCharges;
      default:
        return false;
    }
  };

  const calculateAddOnTotal = () => {
    let total = 0;
    if (data.extraReels) total += 5000;
    if (data.additionalPhotos) total += 3000;
    if (data.travelCharges) total += 2000;
    return total;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Add-ons & Extras</h3>
        <p className="text-muted-foreground">Customize your package with additional services</p>
      </div>

      <div className="space-y-4">
        {addOnOptions.map((addOn) => {
          const isSelected = getAddOnState(addOn.id);
          return (
            <Card
              key={addOn.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected ? 'ring-2 ring-accent bg-accent/5' : 'hover:border-accent/50'
              }`}
              onClick={() => handleAddOnToggle(addOn.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{addOn.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">₹{addOn.price.toLocaleString()}</Badge>
                    <Button
                      type="button"
                      size="sm"
                      variant={isSelected ? 'default' : 'outline'}
                      className="h-8 w-8 p-0"
                    >
                      {isSelected ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{addOn.description}</p>
              </CardContent>
            </Card>
          );
        })}

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Custom Add-ons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex space-x-2">
              <Input
                placeholder="Add custom requirement"
                value={customAddOn}
                onChange={(e) => setCustomAddOn(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomAddOn()}
              />
              <Button type="button" onClick={addCustomAddOn} disabled={!customAddOn.trim()}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            {data.customAddOns.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.customAddOns.map((addOn, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                    <span>{addOn}</span>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => removeCustomAddOn(addOn)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {calculateAddOnTotal() > 0 && (
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Add-ons Total:</span>
                <span className="text-xl font-bold text-accent">₹{calculateAddOnTotal().toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
