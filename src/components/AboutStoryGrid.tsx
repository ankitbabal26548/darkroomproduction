
export const AboutStoryGrid = () => {
  return (
    <div className="mb-24">
      {/* Asymmetric Story Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column - Main Story */}
        <div className="lg:col-span-5 space-y-8">
          <div className="story-card group">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background to-accent/5 border border-accent/20 hover:shadow-professional transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-darker rounded-full" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wide">Since 2010</span>
                </div>
                
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Born from Passion
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  What started as a love for capturing fleeting moments has evolved into a 
                  dedicated craft of preserving life's most precious memories. Every wedding, 
                  every smile, every tear of joy tells a unique story.
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="story-card group">
            <div className="relative p-8 rounded-2xl bg-gradient-to-bl from-background to-accent-lighter/5 border border-accent/20 hover:shadow-professional transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-accent-lighter to-accent rounded-full" />
                  <span className="text-sm font-medium text-accent-lighter uppercase tracking-wide">Today</span>
                </div>
                
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent-lighter transition-colors duration-300">
                  Timeless Artistry
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  We blend traditional photography techniques with modern technology, 
                  creating visual narratives that stand the test of time. Each frame 
                  is carefully composed to tell your unique love story.
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent-lighter/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="lg:col-span-7 space-y-6">
          {/* Large Feature Card */}
          <div className="feature-showcase group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-accent/5 to-accent-lighter/10 border border-accent/20 hover:shadow-glow transition-all duration-500">
            <div className="p-10 md:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
                  Our Philosophy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Every couple has a unique story. Our role is not just to document your wedding day, 
                  but to capture the essence of your love story in a way that will move you to tears 
                  of joy for decades to come."
                </p>
              </div>
              
              {/* Quote attribution */}
              <div className="flex items-center space-x-4 pt-6 border-t border-accent/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-darker flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold text-lg">D</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Darkroom Production</p>
                  <p className="text-sm text-muted-foreground">Founders & Lead Photographers</p>
                </div>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-accent to-transparent rounded-bl-full" />
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="value-card group relative p-6 rounded-2xl bg-gradient-to-br from-background to-accent/5 border border-accent/20 hover:shadow-professional transition-all duration-500 hover:scale-105">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent-darker/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  Authentic Moments
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We specialize in capturing genuine emotions and spontaneous moments that make each wedding unique.
                </p>
              </div>
            </div>

            <div className="value-card group relative p-6 rounded-2xl bg-gradient-to-bl from-background to-accent-lighter/5 border border-accent/20 hover:shadow-professional transition-all duration-500 hover:scale-105">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-lighter/20 to-accent/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-lighter rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent-lighter transition-colors duration-300">
                  Timeless Quality
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our commitment to excellence ensures that your photos will remain beautiful and meaningful for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
