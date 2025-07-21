
/**
 * CONTENT CONFIGURATION FILE
 * =============================
 * 
 * This file contains ALL the text content for the website.
 * Beginners can safely edit any text here without breaking the website.
 * 
 * INSTRUCTIONS FOR BEGINNERS:
 * - Change any text between the quotes ""
 * - Keep the structure and quotes intact
 * - Save the file after making changes
 * - The website will automatically update
 */

export const WEBSITE_CONTENT = {
  // ===== COMPANY INFORMATION =====
  companyName: "Darkroom Production",
  tagline: "Professional Photography",
  
  // ===== HERO SECTION (Main banner at top) =====
  hero: {
    // Main headline
    mainTitle: "Darkroom Production",
    subtitle: "Capturing Life's Most Precious Moments",
    
    // Description text
    description: "We transform your special occasions into timeless memories with our artistic vision and professional expertise.",
    
    // Rotating content (changes automatically)
    slides: [
      {
        subtitle: "Professional Photography",
        title: "Capturing Life's Most Precious Moments",
        description: "We transform your special occasions into timeless memories with our artistic vision and professional expertise.",
        highlight: "Wedding & Event Specialists"
      },
      {
        subtitle: "Creative Storytelling",
        title: "Every Picture Tells Your Unique Story",
        description: "From intimate pre-wedding sessions to grand celebrations, we craft visual narratives that speak to the heart.",
        highlight: "Pre-Wedding Specialists"
      }
    ],
    
    // Call-to-action buttons
    primaryButton: "View Our Work",
    secondaryButton: "Watch Showreel",
    
    // Trust indicators (small text at bottom)
    experience: "5+ Years Experience",
    happyCouples: "200+ Happy Couples"
  },

  // ===== PORTFOLIO SECTION =====
  portfolio: {
    sectionTitle: "Wedding Collections",
    titleHighlight: "Collections", // This word will be highlighted in accent color
    description: "Explore our curated collection of love stories, each folder containing the complete journey of couples' most precious moments captured with artistic vision and heartfelt passion.",
    
    // Filter categories
    filterAll: "All Weddings",
    
    // Bottom section
    showingText: "Showing {count} wedding collections", // {count} will be replaced automatically
    loadMoreButton: "View More Collections"
  },

  // ===== ABOUT SECTION =====
  about: {
    // Main heading
    badge: "About Us",
    title: "Passionate About Capturing Love Stories",
    subtitle: "Every couple has a unique story, and we're here to tell it through our lens",
    
    // Story section
    storyBadge: "Our Story",
    storyTitle: "Where Art Meets Heart",
    storyDescription: [
      "Founded in 2019, Darkroom Production emerged from a simple belief: every love story deserves to be told with artistry and authenticity. What started as a passion project has grown into a trusted name in wedding photography.",
      "Our approach combines traditional techniques with modern creativity, ensuring that every moment—from the quiet glances to the grand celebrations—is captured with the emotion and beauty it deserves."
    ],
    
    // Mini stats in story section
    miniStats: [
      { number: "200+", label: "Weddings" },
      { number: "15", label: "States" },
      { number: "5", label: "Years" }
    ],
    
    // Quote section
    quote: "Photography is not just about capturing what you see, but feeling what you felt in that moment. We strive to create images that transport you back to the joy, love, and magic of your special day.",
    founderName: "Founder & Lead Photographer",
    founderTitle: "Creative Director",
    
    // Values section
    valuesBadge: "Our Values",
    valuesTitle: "What Drives Us",
    valuesSubtitle: "The principles that guide our work and relationships with every couple",
    
    values: [
      {
        title: "Authentic Storytelling",
        description: "We believe in capturing genuine moments and real emotions, creating a true reflection of your love story."
      },
      {
        title: "Artistic Excellence",
        description: "Every image is crafted with artistic vision, combining technical expertise with creative flair."
      },
      {
        title: "Personal Connection",
        description: "We take time to understand each couple, ensuring their personality shines through in every photograph."
      },
      {
        title: "Timeless Quality",
        description: "Our photography is designed to remain beautiful and meaningful for generations to come."
      }
    ],
    
    // Testimonial
    testimonialQuote: "Darkroom Production captured our wedding so beautifully. Every photo tells our story perfectly, and we couldn't be happier with their artistic vision and professionalism.",
    clientName: "Sarah & Michael",
    clientEvent: "Wedding, Rajasthan Palace",
    
    // Side stats
    sideStats: [
      { number: "98%", label: "Client Satisfaction" },
      { number: "4.9", label: "Average Rating" }
    ]
  },

  // ===== SERVICES SECTION =====
  services: {
    badge: "Our Services",
    title: "Complete Wedding Photography Solutions",
    subtitle: "From intimate moments to grand celebrations, we cover every aspect of your special day",
    
    services: [
      {
        title: "Wedding Photography",
        description: "Complete coverage of your wedding day with artistic storytelling and professional quality.",
        features: ["Full day coverage", "High-resolution gallery", "Professional editing", "Online gallery"]
      },
      {
        title: "Pre-Wedding Shoots",
        description: "Romantic photo sessions that capture your love story before the big day.",
        features: ["Location scouting", "Outfit consultation", "Multiple locations", "Same day preview"]
      },
      {
        title: "Engagement Photography",
        description: "Beautiful engagement sessions that celebrate your commitment and love.",
        features: ["Creative concepts", "Professional styling", "Quick turnaround", "Social media ready"]
      }
    ]
  },

  // ===== CONTACT SECTION =====
  contact: {
    badge: "Get In Touch",
    title: "Let's Create Something Beautiful Together",
    subtitle: "Ready to tell your love story? We'd love to hear about your vision and discuss how we can capture your special moments.",
    
    // Contact information
    phone: "+91 98765 43210",
    email: "hello@darkroomproduction.com",
    address: "123 Photography Street, Creative District, Mumbai, India",
    
    // Contact form
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+91 98765 43210",
      eventDateLabel: "Event Date",
      eventTypePlaceholder: "Select event type",
      messageLabel: "Tell us about your event",
      messagePlaceholder: "Share details about your special day, venue, expectations, and any specific requirements...",
      submitButton: "Send Message",
      submittingButton: "Sending..."
    },
    
    // Event types for dropdown
    eventTypes: [
      "Wedding Photography",
      "Pre-Wedding Shoot",
      "Engagement Photography",
      "Anniversary Shoot",
      "Other"
    ]
  },

  // ===== FOOTER =====
  footer: {
    description: "Professional wedding photography that captures the essence of love and celebration.",
    
    // Quick links
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Portfolio", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" }
      ]
    },
    
    // Services links
    servicesLinks: {
      title: "Services",
      links: [
        { name: "Wedding Photography", href: "#services" },
        { name: "Pre-Wedding Shoots", href: "#services" },
        { name: "Engagement Sessions", href: "#services" },
        { name: "Event Photography", href: "#services" }
      ]
    },
    
    // Contact info
    contactInfo: {
      title: "Contact Info",
      items: [
        "hello@darkroomproduction.com",
        "+91 98765 43210",
        "Mumbai, India"
      ]
    },
    
    // Copyright
    copyright: "© 2024 Darkroom Production. All rights reserved.",
    
    // Social media (leave empty if you don't want to show)
    socialMedia: {
      instagram: "", // Add Instagram URL here
      facebook: "",  // Add Facebook URL here
      youtube: ""    // Add YouTube URL here
    }
  }
};

/**
 * EDITING TIPS:
 * 
 * 1. TO CHANGE MAIN TITLE: Edit hero.mainTitle
 * 2. TO CHANGE COMPANY NAME: Edit companyName at the top
 * 3. TO ADD/REMOVE SERVICES: Edit the services.services array
 * 4. TO CHANGE CONTACT INFO: Edit contact.phone, contact.email, contact.address
 * 5. TO UPDATE SOCIAL MEDIA: Add URLs to footer.socialMedia
 * 
 * REMEMBER: Always keep the structure and quotes intact!
 */
