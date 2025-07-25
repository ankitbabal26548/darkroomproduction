
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { QuoteFormData } from '@/types/quote';
import { User, Mail, Phone } from 'lucide-react';

interface PersonalDetailsStepProps {
  data: QuoteFormData['personalDetails'];
  onChange: (data: Partial<QuoteFormData['personalDetails']>) => void;
}

export const PersonalDetailsStep = ({ data, onChange }: PersonalDetailsStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Personal Details</h3>
        <p className="text-muted-foreground">Tell us about yourself</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
