
import { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuoteForm } from './QuoteForm';

interface CleanContactProps {
  mobile?: boolean;
}

export const CleanContact = ({ mobile = false }: CleanContactProps) => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteFormOpen(true);
  };

  if (mobile) {
    return (
      <>
        <div className="space-y-3">
          <a 
            href="tel:+919929795556" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors rounded-md"
          >
            <Phone className="w-4 h-4" />
            <span>+91 9929795556</span>
          </a>
          
          <Button 
            onClick={handleGetQuote}
            size="sm"
            className="clean-mobile-cta w-full group"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
        
        <QuoteForm 
          isOpen={isQuoteFormOpen} 
          onClose={() => setIsQuoteFormOpen(false)} 
        />
      </>
    );
  }

  return (
    <>
      <div className="flex items-center space-x-4">
        <a 
          href="tel:+919929795556" 
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="font-medium">+91 9929795556</span>
        </a>
        
        <div className="w-px h-4 bg-border" />
        
        <Button 
          onClick={handleGetQuote}
          size="sm"
          className="clean-cta-button group"
        >
          <span className="relative z-10">Get Quote</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
      
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </>
  );
};
