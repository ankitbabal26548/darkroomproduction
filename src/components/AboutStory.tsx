
export const AboutStory = () => {
  return (
    <div className="story-container">
      <div className="story-asymmetric-layout">
        {/* Left Column - Enhanced Story */}
        <div className="story-content">
          <div className="space-y-8">
            <div className="story-badge-container">
              <div className="story-badge">
                <span className="text-sm font-medium text-accent">Our Journey</span>
              </div>
            </div>
            
            <h3 className="story-title">
              Capturing Life's Most Precious Moments
            </h3>
            
            <div className="story-text-content">
              <p className="story-paragraph">
                What began as a passion for storytelling through the lens has evolved into 
                a dedicated mission to preserve life's most meaningful celebrations. Every 
                wedding we photograph is a unique narrative, filled with genuine emotions, 
                timeless traditions, and unforgettable moments.
              </p>
              
              <p className="story-paragraph">
                Our approach combines artistic vision with documentary authenticity, 
                ensuring that every image reflects the true essence of your special day. 
                We believe that the best photographs are those that transport you back 
                to the exact moment, feeling, and emotion.
              </p>
            </div>

            {/* Modern Stats Row */}
            <div className="story-mini-stats">
              <div className="mini-stat">
                <span className="mini-stat-number">13+</span>
                <span className="mini-stat-label">Years</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">500+</span>
                <span className="mini-stat-label">Couples</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-number">50+</span>
                <span className="mini-stat-label">Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Modern Quote */}
        <div className="story-quote-section">
          <div className="story-quote-card">
            {/* Modern Quote Design */}
            <div className="quote-mark-container">
              <div className="quote-mark">
                <span className="text-4xl font-playfair font-bold text-accent">"</span>
              </div>
            </div>
            
            <div className="quote-content">
              <blockquote className="story-quote-text">
                Photography is not just about capturing what you see, but about 
                revealing what you feel. Every couple has a unique story, and our 
                role is to tell it with authenticity, artistry, and heart.
              </blockquote>
              
              <div className="quote-attribution">
                <div className="founder-avatar">
                  <div className="avatar-placeholder">
                    <span className="text-xl font-playfair font-bold text-accent">DP</span>
                  </div>
                </div>
                <div>
                  <cite className="founder-name">Darkroom Production Team</cite>
                  <p className="founder-title">Founded 2010</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="quote-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
