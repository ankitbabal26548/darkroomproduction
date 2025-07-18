
export const AboutStory = () => {
  return (
    <div className="mb-24">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Column - Enhanced Story */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-8">
            {/* Story Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-full border border-accent/20">
              <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent-lighter rounded-full" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">Our Journey</span>
            </div>
            
            <h3 className="font-playfair text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-accent leading-tight">
              Capturing Life's Most Precious Moments
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="relative">
                What began as a passion for storytelling through the lens has evolved into 
                a dedicated mission to preserve life's most meaningful celebrations. Every 
                wedding we photograph is a unique narrative, filled with genuine emotions, 
                timeless traditions, and unforgettable moments.
              </p>
              
              <p className="relative">
                Our approach combines artistic vision with documentary authenticity, 
                ensuring that every image reflects the true essence of your special day. 
                We believe that the best photographs are those that transport you back 
                to the exact moment, feeling, and emotion.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="group p-6 bg-gradient-to-br from-card to-accent/5 rounded-2xl border border-accent/20 hover:shadow-lg transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    Authentic Storytelling
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Every image tells a genuine story of love, joy, and celebration.
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-bl from-card to-accent-lighter/5 rounded-2xl border border-accent/20 hover:shadow-lg transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-lighter/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent-lighter rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent-lighter transition-colors duration-300">
                    Timeless Quality
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Professional excellence that stands the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Enhanced Quote */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Main quote card */}
            <div className="relative p-10 bg-gradient-to-br from-card via-accent/5 to-accent-lighter/10 rounded-3xl border border-accent/20 shadow-professional">
              {/* Enhanced Quote Mark */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-accent-darker rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl font-playfair font-bold text-accent-foreground">"</span>
              </div>
              
              <div className="space-y-8 relative z-10">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed font-playfair">
                  Photography is not just about capturing what you see, but about 
                  revealing what you feel. Every couple has a unique story, and our 
                  role is to tell it with authenticity, artistry, and heart.
                </p>
                
                <div className="pt-6 border-t border-accent/20 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-darker/20 rounded-2xl flex items-center justify-center">
                      <span className="text-xl font-playfair font-bold text-accent">D</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Darkroom Production Team</p>
                      <p className="text-sm text-muted-foreground">Founded 2010</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full opacity-50" />
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-lighter/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};
