
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { QuoteFormData, LocationOption } from '@/types/quote';
import { Calendar as CalendarIcon, MapPin, Heart, Camera } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface EventDetailsStepProps {
  data: QuoteFormData['eventDetails'];
  onChange: (data: Partial<QuoteFormData['eventDetails']>) => void;
  locationOptions: LocationOption[];
}

export const EventDetailsStep = ({ data, onChange, locationOptions }: EventDetailsStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Event Details</h3>
        <p className="text-muted-foreground">Tell us about your special day</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Event Type *</Label>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant={data.eventType === 'wedding' ? 'default' : 'outline'}
              onClick={() => onChange({ eventType: 'wedding' })}
              className="h-12 flex items-center space-x-2"
            >
              <Heart className="w-4 h-4" />
              <span>Wedding</span>
            </Button>
            <Button
              type="button"
              variant={data.eventType === 'pre-wedding' ? 'default' : 'outline'}
              onClick={() => onChange({ eventType: 'pre-wedding' })}
              className="h-12 flex items-center space-x-2"
            >
              <Camera className="w-4 h-4" />
              <span>Pre-wedding</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Event Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12",
                  !data.eventDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {data.eventDate ? format(data.eventDate, "PPP") : "Select event date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={data.eventDate || undefined}
                onSelect={(date) => onChange({ eventDate: date || null })}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Location *</Label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {locationOptions.slice(0, -1).map((location) => (
                <Button
                  key={location.id}
                  type="button"
                  variant={data.location === location.name ? 'default' : 'outline'}
                  onClick={() => onChange({ location: location.name, customLocation: '' })}
                  className="h-10"
                >
                  {location.name}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              variant={data.location === 'Other Location' ? 'default' : 'outline'}
              onClick={() => onChange({ location: 'Other Location' })}
              className="w-full h-10"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Other Location
            </Button>
            {data.location === 'Other Location' && (
              <Input
                placeholder="Enter custom location"
                value={data.customLocation || ''}
                onChange={(e) => onChange({ customLocation: e.target.value })}
                className="animate-fade-in"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
