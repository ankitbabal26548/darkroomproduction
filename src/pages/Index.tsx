
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FuturisticPortfolioSection } from '@/components/FuturisticPortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="max-w-full">
        <div id="home">
          <HeroSection />
        </div>
        <div className="bg-muted/30">
          <FuturisticPortfolioSection />
        </div>
        <div className="bg-background">
          <AboutSection />
        </div>
        <div className="bg-muted/30">
          <ServicesSection />
        </div>
        <div className="bg-background">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
