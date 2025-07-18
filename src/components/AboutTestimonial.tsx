
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
              "Darkroom Production exceeded all our expectations. They captured our wedding 
              day with such artistry and professionalism. Every photo tells a story, and 
              we couldn't be happier with the memories they've preserved for us."
            </blockquote>
            
            {/* Client Information */}
            <div className="client-info">
              <div className="client-avatar-section">
                <div className="client-avatar">
                  <span className="avatar-initials">S&M</span>
                </div>
                <div className="client-details">
                  <cite className="client-name">Sarah & Michael Chen</cite>
                  <p className="client-event">Wedding • June 2023</p>
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
            <span className="side-stat-number">98%</span>
            <span className="side-stat-label">Satisfaction Rate</span>
          </div>
          <div className="side-stat">
            <span className="side-stat-number">4.9</span>
            <span className="side-stat-label">Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};
