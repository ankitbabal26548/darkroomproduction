
export interface QuoteFormData {
  personalDetails: {
    name: string;
    email: string;
    phone: string;
  };
  eventDetails: {
    eventType: 'wedding' | 'pre-wedding';
    eventDate: Date | null;
    location: string;
    customLocation?: string;
  };
  packageSelection: {
    packageType: 'silver' | 'gold' | 'platinum' | 'pre-wedding-jaipur' | 'pre-wedding-udaipur';
    basePrice: number;
  };
  addOns: {
    extraReels: boolean;
    additionalPhotos: boolean;
    travelCharges: boolean;
    customAddOns: string[];
  };
  requirements: {
    message: string;
    budgetRange: [number, number];
  };
}

export interface PackageOption {
  id: string;
  name: string;
  type: 'silver' | 'gold' | 'platinum' | 'pre-wedding-jaipur' | 'pre-wedding-udaipur';
  price: number;
  features: string[];
  popular?: boolean;
  eventType: 'wedding' | 'pre-wedding';
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface LocationOption {
  id: string;
  name: string;
  type: 'city' | 'venue';
}
