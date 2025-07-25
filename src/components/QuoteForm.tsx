
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useQuoteForm } from '@/hooks/useQuoteForm';
import { PersonalDetailsStep } from './QuoteFormSteps/PersonalDetailsStep';
import { EventDetailsStep } from './QuoteFormSteps/EventDetailsStep';
import { PackageSelectionStep } from './QuoteFormSteps/PackageSelectionStep';
import { AddOnsStep } from './QuoteFormSteps/AddOnsStep';
import { RequirementsStep } from './QuoteFormSteps/RequirementsStep';
import { generateWhatsAppMessage, openWhatsApp } from '@/utils/whatsappHelper';
import { ChevronLeft, ChevronRight, Send, Camera, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteForm = ({ isOpen, onClose }: QuoteFormProps) => {
  const {
    formData,
    currentStep,
    isSubmitting,
    updateFormData,
    resetForm,
    nextStep,
    prevStep,
    setIsSubmitting,
    packageOptions,
    addOnOptions,
    locationOptions,
  } = useQuoteForm();

  const steps = [
    { id: 'personal', title: 'Personal Details' },
    { id: 'event', title: 'Event Details' },
    { id: 'package', title: 'Package Selection' },
    { id: 'addons', title: 'Add-ons' },
    { id: 'requirements', title: 'Requirements' },
  ];

  const calculateTotal = () => {
    let total = formData.packageSelection.basePrice;
    if (formData.addOns.extraReels) total += 5000;
    if (formData.addOns.additionalPhotos) total += 3000;
    if (formData.addOns.travelCharges) total += 2000;
    return total;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.personalDetails.name && formData.personalDetails.email && formData.personalDetails.phone;
      case 1:
        return formData.eventDetails.eventType && formData.eventDetails.eventDate && formData.eventDetails.location;
      case 2:
        return formData.packageSelection.packageType && formData.packageSelection.basePrice > 0;
      case 3:
        return true; // Add-ons are optional
      case 4:
        return true; // Requirements are optional
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const message = generateWhatsAppMessage(formData);
      openWhatsApp(message);
      
      // Reset form and close dialog
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetailsStep
            data={formData.personalDetails}
            onChange={(data) => updateFormData('personalDetails', data)}
          />
        );
      case 1:
        return (
          <EventDetailsStep
            data={formData.eventDetails}
            onChange={(data) => updateFormData('eventDetails', data)}
            locationOptions={locationOptions}
          />
        );
      case 2:
        return (
          <PackageSelectionStep
            data={formData.packageSelection}
            eventType={formData.eventDetails.eventType}
            packageOptions={packageOptions}
            onChange={(data) => updateFormData('packageSelection', data)}
          />
        );
      case 3:
        return (
          <AddOnsStep
            data={formData.addOns}
            addOnOptions={addOnOptions}
            onChange={(data) => updateFormData('addOns', data)}
          />
        );
      case 4:
        return (
          <RequirementsStep
            data={formData.requirements}
            basePrice={calculateTotal()}
            onChange={(data) => updateFormData('requirements', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-accent" />
            <span>Get Your Photography Quote</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{steps[currentStep].title}</span>
            </div>
            <Progress value={(currentStep + 1) / steps.length * 100} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="min-h-[400px]">
            {renderStep()}
          </div>

          {/* Total Price Display */}
          {formData.packageSelection.basePrice > 0 && (
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Estimated Total:</span>
                <span className="text-2xl font-bold text-accent">₹{calculateTotal().toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request</span>
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
