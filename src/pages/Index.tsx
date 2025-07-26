
import { Navbar } from '@/components/Navbar';
import { FuturisticHeroSection } from '@/components/FuturisticHeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FuturisticPortfolioSection } from '@/components/FuturisticPortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GoToTopButton } from '@/components/GoToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="max-w-full">
        <div id="home">
          <FuturisticHeroSection />
        </div>
        <div id="portfolio" className="bg-muted/30">
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
      <GoToTopButton />
    </div>
  );
};

export default Index;
