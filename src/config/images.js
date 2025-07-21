
/**
 * IMAGES CONFIGURATION FILE
 * ===========================
 * 
 * This file contains ALL the image paths and URLs for the website.
 * Beginners can safely change image URLs here without breaking the website.
 * 
 * INSTRUCTIONS FOR BEGINNERS:
 * - Replace image URLs between the quotes ""
 * - Make sure images are accessible (uploaded to your server or use external URLs)
 * - Keep the structure intact
 * - Use high-quality images for best results
 * 
 * RECOMMENDED IMAGE SIZES:
 * - Hero images: 1920x1080px or larger
 * - Portfolio covers: 800x600px
 * - Gallery images: 1200x800px
 * - About images: 600x400px
 */

export const WEBSITE_IMAGES = {
  // ===== HERO SECTION IMAGES =====
  hero: {
    // Main slideshow images (2 images that rotate)
    slide1: "/src/assets/hero-wedding-1.jpg",    // Change this URL to your first hero image
    slide2: "/src/assets/hero-prewedding-1.jpg", // Change this URL to your second hero image
    
    // Alternative text for accessibility (describe what's in the image)
    slide1Alt: "Beautiful wedding photography",
    slide2Alt: "Romantic pre-wedding photography"
  },

  // ===== ABOUT SECTION IMAGES =====
  about: {
    // Founder/team photo
    founderPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    founderAlt: "Founder and Lead Photographer",
    
    // Background images for about section
    storyBackground: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop",
    storyBackgroundAlt: "Photography equipment and workspace"
  },

  // ===== PLACEHOLDER IMAGES =====
  // These are fallback images used when no specific image is provided
  placeholders: {
    // Default wedding cover image
    defaultWeddingCover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    
    // Default gallery image
    defaultGallery: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
    
    // Default profile image
    defaultProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  }
};

/**
 * HOW TO REPLACE IMAGES:
 * 
 * OPTION 1 - Use your own images:
 * 1. Upload your images to the 'src/assets/' folder
 * 2. Replace the path like: "/src/assets/your-image-name.jpg"
 * 
 * OPTION 2 - Use external URLs:
 * 1. Upload your images to any image hosting service
 * 2. Replace with the full URL: "https://your-site.com/image.jpg"
 * 
 * OPTION 3 - Use Unsplash (free stock photos):
 * 1. Go to unsplash.com and find an image
 * 2. Right-click and copy image address
 * 3. Replace the URL here
 * 
 * IMAGE TIPS:
 * - Use high-quality images (at least 1080p for hero images)
 * - Keep file sizes reasonable (under 2MB each)
 * - Use JPEG for photos, PNG for graphics with transparency
 * - Always update the "Alt" text to describe your image
 */
