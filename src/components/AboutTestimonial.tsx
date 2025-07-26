
import { Star, Quote } from 'lucide-react';

export const AboutTestimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-modern-layout">
        {/* Modern Testimonial Card */}
        <div className="testimonial-card">
          {/* Background Decorations */}
          <div className="testimonial-bg-decoration">
            <div className="decoration-circle decoration-1"></div>
            <div className="decoration-circle decoration-2"></div>
          </div>

          {/* Quote Icon */}
          <div className="testimonial-quote-icon">
            <Quote className="w-12 h-12 text-accent" />
          </div>
          
          {/* Star Rating */}
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="star-icon"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          
          {/* Testimonial Content */}
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              "I can't speak highly enough of the Darkroom Production team! Their collaboration on our wedding day was impressive. Each member brought their unique skills, resulting in a diverse and beautiful collection of images. They worked efficiently and creatively, making the entire process enjoyable. Highly recommend!"
            </blockquote>
            
            {/* Client Information */}
            <div className="client-info">
              <div className="client-avatar-section">
                <div className="client-avatar">
                  <span className="avatar-initials">L</span>
                </div>
                <div className="client-details">
                  <cite className="client-name">Lokesh</cite>
                  <p className="client-event">Wedding • Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Accent Elements */}
          <div className="testimonial-accents">
            <div className="accent-line accent-line-1"></div>
            <div className="accent-line accent-line-2"></div>
          </div>
        </div>

        {/* Side Statistics */}
        <div className="testimonial-side-stats">
          <div className="side-stat">
            <span className="side-stat-number">100%</span>
            <span className="side-stat-label">Satisfaction Rate</span>
          </div>
          <div className="side-stat">
            <span className="side-stat-number">5.0</span>
            <span className="side-stat-label">Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};
