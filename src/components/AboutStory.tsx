
export const AboutStory = () => {
  return (
    <div className="mb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Main Story */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-sm font-medium text-accent">Our Journey</span>
            </div>
            
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              Capturing Life's Most Precious Moments
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What began as a passion for storytelling through the lens has evolved into 
              a dedicated mission to preserve life's most meaningful celebrations. Every 
              wedding we photograph is a unique narrative, filled with genuine emotions, 
              timeless traditions, and unforgettable moments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines artistic vision with documentary authenticity, 
              ensuring that every image reflects the true essence of your special day. 
              We believe that the best photographs are those that transport you back 
              to the exact moment, feeling, and emotion.
            </p>
          </div>
        </div>

        {/* Right Column - Quote */}
        <div className="lg:pl-8">
          <div className="relative p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl border border-accent/20">
            {/* Quote Mark */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-playfair font-bold text-accent-foreground">"</span>
            </div>
            
            <div className="space-y-6 relative z-10">
              <p className="text-xl font-medium text-foreground leading-relaxed">
                Photography is not just about capturing what you see, but about 
                revealing what you feel. Every couple has a unique story, and our 
                role is to tell it with authenticity, artistry, and heart.
              </p>
              
              <div className="pt-4 border-t border-accent/20">
                <p className="font-semibold text-foreground">Darkroom Production Team</p>
                <p className="text-sm text-muted-foreground">Founded 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
