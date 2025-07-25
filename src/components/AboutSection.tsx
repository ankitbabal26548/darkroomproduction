
import { MeetThePhotographer } from './MeetThePhotographer';
import { OurApproach } from './OurApproach';
import { SimpleProcess } from './SimpleProcess';
import { HappyClients } from './HappyClients';
import { PhotographyPassion } from './PhotographyPassion';

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Personal Hero Introduction */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="px-6 py-2 bg-accent/10 rounded-full text-accent font-medium border border-accent/20">
              About Us
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Capturing Your <span className="text-accent italic">Perfect Moments</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're a passionate photography team dedicated to telling your unique story through beautiful, timeless images that you'll treasure forever.
          </p>
        </div>
      </div>

      {/* Meet the Photographer */}
      <div className="relative py-16 bg-muted/20">
        <MeetThePhotographer />
      </div>

      {/* Our Approach */}
      <div className="relative py-16">
        <OurApproach />
      </div>

      {/* Simple Process */}
      <div className="relative py-16 bg-muted/20">
        <SimpleProcess />
      </div>

      {/* Happy Clients */}
      <div className="relative py-16">
        <HappyClients />
      </div>

      {/* Photography Passion */}
      <div className="relative py-16 bg-muted/20">
        <PhotographyPassion />
      </div>
    </section>
  );
};
