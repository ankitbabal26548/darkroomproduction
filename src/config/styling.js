
/**
 * STYLING CONFIGURATION FILE
 * ============================
 * 
 * This file contains spacing, layout, and visual settings that beginners can safely modify.
 * These settings control the overall look and feel of the website.
 * 
 * INSTRUCTIONS FOR BEGINNERS:
 * - Change numbers to adjust spacing and sizes
 * - All spacing is in pixels or relative units
 * - Larger numbers = more space/bigger size
 * - Smaller numbers = less space/smaller size
 */

export const WEBSITE_STYLING = {
  // ===== SPACING SETTINGS =====
  spacing: {
    // Section spacing (space between major sections)
    sectionPadding: "py-20",        // Large padding between sections
    sectionPaddingMobile: "py-16",  // Smaller padding on mobile
    
    // Container spacing (space inside sections)
    containerPadding: "px-4 sm:px-6 lg:px-8",  // Side padding for content
    maxWidth: "max-w-7xl",                       // Maximum width of content
    
    // Element spacing
    elementGap: "gap-8",            // Space between cards/elements
    elementGapMobile: "gap-6",      // Smaller space on mobile
    
    // Text spacing
    titleMargin: "mb-6",            // Space below titles
    paragraphMargin: "mb-4",        // Space below paragraphs
    buttonMargin: "mt-8"            // Space above buttons
  },

  // ===== GRID LAYOUTS =====
  grids: {
    // Portfolio grid (wedding folders)
    portfolioGrid: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    
    // Services grid
    servicesGrid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    
    // About stats grid
    statsGrid: "grid-cols-2 md:grid-cols-4",
    
    // Values grid
    valuesGrid: "grid-cols-1 md:grid-cols-2"
  },

  // ===== TYPOGRAPHY SIZES =====
  typography: {
    // Main headings
    heroTitle: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    sectionTitle: "text-4xl md:text-6xl",
    cardTitle: "text-xl md:text-2xl",
    
    // Body text
    bodyLarge: "text-xl",
    bodyRegular: "text-lg",
    bodySmall: "text-base",
    
    // Captions and labels
    caption: "text-sm",
    label: "text-xs"
  },

  // ===== BORDER RADIUS (ROUNDED CORNERS) =====
  borderRadius: {
    small: "rounded-lg",      // Slightly rounded
    medium: "rounded-xl",     // Medium rounded
    large: "rounded-2xl",     // Very rounded
    full: "rounded-full"      // Completely round
  },

  // ===== SHADOW LEVELS =====
  shadows: {
    small: "shadow-md",       // Subtle shadow
    medium: "shadow-lg",      // Medium shadow
    large: "shadow-xl",       // Strong shadow
    hover: "hover:shadow-2xl" // Shadow on hover
  },

  // ===== ANIMATION SPEEDS =====
  animations: {
    fast: "duration-200",     // Quick animations
    normal: "duration-300",   // Standard animations
    slow: "duration-500"      // Slower animations
  },

  // ===== BUTTON SIZES =====
  buttons: {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }
};

/**
 * COMMON EDITING TASKS:
 * 
 * TO INCREASE SPACE BETWEEN SECTIONS:
 * - Change sectionPadding from "py-20" to "py-24" or "py-32"
 * 
 * TO MAKE CARDS BIGGER:
 * - Change elementGap from "gap-8" to "gap-12"
 * 
 * TO CHANGE TITLE SIZES:
 * - Modify the typography.sectionTitle value
 * 
 * TO MAKE CORNERS MORE/LESS ROUNDED:
 * - Adjust borderRadius values
 * 
 * TO SPEED UP/SLOW DOWN ANIMATIONS:
 * - Change animation duration values
 * 
 * SPACING REFERENCE:
 * - py-4 = small space (16px)
 * - py-8 = medium space (32px)
 * - py-12 = large space (48px)
 * - py-16 = extra large space (64px)
 * - py-20 = huge space (80px)
 */
