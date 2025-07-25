
import { QuoteFormData } from '@/types/quote';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, DollarSign } from 'lucide-react';

interface RequirementsStepProps {
  data: QuoteFormData['requirements'];
  basePrice: number;
  onChange: (data: Partial<QuoteFormData['requirements']>) => void;
}

export const RequirementsStep = ({ data, basePrice, onChange }: RequirementsStepProps) => {
  const handleBudgetChange = (value: number[]) => {
    onChange({ budgetRange: [value[0], value[1]] });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Additional Requirements</h3>
        <p className="text-muted-foreground">Tell us more about your expectations</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <div className="space-y-4">
            <div className="px-4 py-2 bg-accent/10 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Selected Package:</span>
                <span className="font-medium">₹{basePrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹{data.budgetRange[0].toLocaleString()}</span>
                <span>₹{data.budgetRange[1].toLocaleString()}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="25000"
                  max="300000"
                  step="5000"
                  value={data.budgetRange[0]}
                  onChange={(e) => handleBudgetChange([parseInt(e.target.value), data.budgetRange[1]])}
                  className="absolute w-full h-2 bg-accent/20 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="25000"
                  max="300000"
                  step="5000"
                  value={data.budgetRange[1]}
                  onChange={(e) => handleBudgetChange([data.budgetRange[0], parseInt(e.target.value)])}
                  className="absolute w-full h-2 bg-accent/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Special Requirements & Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about any specific requirements, preferred photography style, special moments to capture, or any other details you'd like to share..."
            value={data.message}
            onChange={(e) => onChange({ message: e.target.value })}
            className="min-h-[120px] resize-none"
          />
        </div>
      </div>
    </div>
  );
};
