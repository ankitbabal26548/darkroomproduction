
import { QuoteFormData } from '@/types/quote';
import { format } from 'date-fns';

export const generateWhatsAppMessage = (formData: QuoteFormData): string => {
  const { personalDetails, eventDetails, packageSelection, addOns, requirements } = formData;
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'Not specified';
    return format(date, 'PPP');
  };

  const getPackageName = (type: string) => {
    switch (type) {
      case 'silver': return 'Silver Wedding Package';
      case 'gold': return 'Gold Wedding Package';
      case 'platinum': return 'Platinum Wedding Package';
      case 'pre-wedding-jaipur': return 'Pre-wedding Jaipur Package';
      case 'pre-wedding-udaipur': return 'Pre-wedding Udaipur Package';
      default: return 'Selected Package';
    }
  };

  const getAddOnsList = () => {
    const selectedAddOns = [];
    if (addOns.extraReels) selectedAddOns.push('• Extra Reels - ₹5,000');
    if (addOns.additionalPhotos) selectedAddOns.push('• Additional Photos - ₹3,000');
    if (addOns.travelCharges) selectedAddOns.push('• Travel Charges - ₹2,000');
    if (addOns.customAddOns.length > 0) {
      addOns.customAddOns.forEach(addon => selectedAddOns.push(`• ${addon}`));
    }
    return selectedAddOns.length > 0 ? selectedAddOns.join('\n') : 'None selected';
  };

  const calculateTotal = () => {
    let total = packageSelection.basePrice;
    if (addOns.extraReels) total += 5000;
    if (addOns.additionalPhotos) total += 3000;
    if (addOns.travelCharges) total += 2000;
    return total;
  };

  const message = `🌸 *Wedding Photography Quote Request* 🌸

*Personal Details:*
👤 Name: ${personalDetails.name}
📧 Email: ${personalDetails.email}
📱 Phone: ${personalDetails.phone}

*Event Details:*
💒 Event Type: ${eventDetails.eventType === 'wedding' ? 'Wedding' : 'Pre-wedding'}
📅 Event Date: ${formatDate(eventDetails.eventDate)}
📍 Location: ${eventDetails.location}${eventDetails.customLocation ? ` (${eventDetails.customLocation})` : ''}

*Selected Package:*
📦 Package: ${getPackageName(packageSelection.packageType)}
💰 Base Price: ₹${packageSelection.basePrice.toLocaleString()}

*Add-ons Selected:*
${getAddOnsList()}

*Total Estimated Cost: ₹${calculateTotal().toLocaleString()}*

*Budget Range: ₹${requirements.budgetRange[0].toLocaleString()} - ₹${requirements.budgetRange[1].toLocaleString()}*

*Special Requirements:*
${requirements.message || 'None specified'}

*Payment Terms:*
• ₹5,000 advance booking
• Remaining amount as per package terms

Looking forward to capturing your special moments! 📸✨`;

  return message;
};

export const openWhatsApp = (message: string, phoneNumber: string = '7976249390') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
