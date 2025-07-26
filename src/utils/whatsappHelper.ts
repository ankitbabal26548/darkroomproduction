
import { QuoteFormData } from '@/types/quote';

export const generateWhatsAppMessage = (formData: QuoteFormData) => {
  const { personalDetails, eventDetails, packageSelection, addOns, requirements } = formData;
  
  let message = `🎉 *Quote Request - Darkroom Production*\n\n`;
  
  // Personal Details
  message += `👤 *Personal Details:*\n`;
  message += `• Name: ${personalDetails.name}\n`;
  message += `• Email: ${personalDetails.email}\n`;
  message += `• Phone: ${personalDetails.phone}\n\n`;
  
  // Event Details
  message += `📅 *Event Details:*\n`;
  message += `• Type: ${eventDetails.eventType}\n`;
  message += `• Date: ${eventDetails.eventDate}\n`;
  message += `• Location: ${eventDetails.location}\n`;
  if (eventDetails.customLocation) {
    message += `• Custom Location: ${eventDetails.customLocation}\n`;
  }
  message += `\n`;
  
  // Package Selection
  message += `📦 *Package Selection:*\n`;
  message += `• Package: ${packageSelection.packageType}\n`;
  message += `• Starting Price: ₹${packageSelection.basePrice?.toLocaleString()}\n\n`;
  
  // Add-ons
  if (addOns.extraReels || addOns.additionalPhotos || addOns.travelCharges) {
    message += `✨ *Add-ons:*\n`;
    if (addOns.extraReels) message += `• Extra Reels: Yes\n`;
    if (addOns.additionalPhotos) message += `• Additional Photos: Yes\n`;
    if (addOns.travelCharges) message += `• Travel Charges: Yes\n`;
    message += `\n`;
  }
  
  // Requirements
  if (requirements.message) {
    message += `📝 *Special Requirements:*\n`;
    message += `${requirements.message}\n\n`;
  }
  
  // Budget Range
  message += `💰 *Budget Range:* ₹${requirements.budgetRange[0].toLocaleString()} - ₹${requirements.budgetRange[1].toLocaleString()}\n\n`;
  
  // Estimated Total
  let total = packageSelection.basePrice || 0;
  if (addOns.extraReels) total += 5000;
  if (addOns.additionalPhotos) total += 3000;
  if (addOns.travelCharges) total += 2000;
  
  message += `💰 *Estimated Total:* Starting from ₹${total.toLocaleString()}\n`;
  message += `*(Final price may vary based on specific requirements)*\n\n`;
  
  message += `Please provide a detailed quote for the above requirements. Thank you! 🙏`;
  
  return message;
};

export const openWhatsApp = (message: string) => {
  const phoneNumber = '919929795556';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
