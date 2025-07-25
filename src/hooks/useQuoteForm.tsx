
import { useState, useCallback } from 'react';
import { QuoteFormData, PackageOption, AddOnOption, LocationOption } from '@/types/quote';

const initialFormData: QuoteFormData = {
  personalDetails: {
    name: '',
    email: '',
    phone: '',
  },
  eventDetails: {
    eventType: 'wedding',
    eventDate: null,
    location: '',
    customLocation: '',
  },
  packageSelection: {
    packageType: 'silver',
    basePrice: 0,
  },
  addOns: {
    extraReels: false,
    additionalPhotos: false,
    travelCharges: false,
    customAddOns: [],
  },
  requirements: {
    message: '',
    budgetRange: [50000, 200000],
  },
};

export const useQuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = useCallback((section: keyof QuoteFormData, data: Partial<QuoteFormData[keyof QuoteFormData]>) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setCurrentStep(0);
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  }, []);

  const packageOptions: PackageOption[] = [
    {
      id: 'silver',
      name: 'Silver Package',
      type: 'silver',
      price: 50000,
      eventType: 'wedding',
      features: ['300+ Photos', 'Basic Editing', '2 Photographers', 'Online Gallery'],
    },
    {
      id: 'gold',
      name: 'Gold Package',
      type: 'gold',
      price: 75000,
      eventType: 'wedding',
      features: ['500+ Photos', 'Premium Editing', '3 Photographers', 'Same Day Editing', 'Online Gallery'],
      popular: true,
    },
    {
      id: 'platinum',
      name: 'Platinum Package',
      type: 'platinum',
      price: 100000,
      eventType: 'wedding',
      features: ['800+ Photos', 'Professional Editing', '4 Photographers', 'Same Day Editing', 'Photo Album', 'Online Gallery'],
    },
    {
      id: 'pre-wedding-jaipur',
      name: 'Pre-wedding Jaipur',
      type: 'pre-wedding-jaipur',
      price: 25000,
      eventType: 'pre-wedding',
      features: ['100+ Photos', 'Premium Editing', '2 Photographers', 'Jaipur Locations', 'Online Gallery'],
    },
    {
      id: 'pre-wedding-udaipur',
      name: 'Pre-wedding Udaipur',
      type: 'pre-wedding-udaipur',
      price: 35000,
      eventType: 'pre-wedding',
      features: ['150+ Photos', 'Premium Editing', '2 Photographers', 'Udaipur Locations', 'Online Gallery'],
    },
  ];

  const addOnOptions: AddOnOption[] = [
    {
      id: 'extra-reels',
      name: 'Extra Reels',
      price: 5000,
      description: 'Additional Instagram reels for your event',
    },
    {
      id: 'additional-photos',
      name: 'Additional Photos',
      price: 3000,
      description: 'Extra photo coverage and editing',
    },
    {
      id: 'travel-charges',
      name: 'Travel Charges',
      price: 2000,
      description: 'Travel and accommodation for outstation events',
    },
  ];

  const locationOptions: LocationOption[] = [
    { id: 'jaipur', name: 'Jaipur', type: 'city' },
    { id: 'udaipur', name: 'Udaipur', type: 'city' },
    { id: 'jodhpur', name: 'Jodhpur', type: 'city' },
    { id: 'other', name: 'Other Location', type: 'city' },
  ];

  return {
    formData,
    currentStep,
    isSubmitting,
    updateFormData,
    resetForm,
    nextStep,
    prevStep,
    setCurrentStep,
    setIsSubmitting,
    packageOptions,
    addOnOptions,
    locationOptions,
  };
};
