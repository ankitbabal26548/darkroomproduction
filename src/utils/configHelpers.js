
/**
 * CONFIGURATION HELPER UTILITIES
 * ================================
 * 
 * This file contains utility functions to help beginners work with the config files.
 * These functions provide safe ways to access config data and helpful error messages.
 * 
 * BEGINNERS: You don't need to edit this file!
 */

import { WEBSITE_CONTENT } from '@/config/content';
import { WEBSITE_IMAGES } from '@/config/images';
import { WEBSITE_STYLING } from '@/config/styling';

/**
 * Safely gets a value from any config object using dot notation
 * Example: getConfigValue('hero.mainTitle', WEBSITE_CONTENT)
 */
export const getConfigValue = (path, config, fallback = '') => {
  try {
    const keys = path.split('.');
    let value = config;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Config Helper: Could not find "${path}" in config`);
        }
        return fallback;
      }
    }
    
    return value !== null && value !== undefined ? value : fallback;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Config Helper Error: ${error.message}`);
    }
    return fallback;
  }
};

/**
 * Gets text content from the content config
 * Usage: getText('hero.mainTitle', 'Default Title')
 */
export const getText = (path, fallback = 'Add text in config/content.js') => {
  return getConfigValue(path, WEBSITE_CONTENT, fallback);
};

/**
 * Gets image URL from the images config
 * Usage: getImage('hero.slide1', '/default-image.jpg')
 */
export const getImage = (path, fallback = '/placeholder-image.jpg') => {
  return getConfigValue(path, WEBSITE_IMAGES, fallback);
};

/**
 * Gets styling value from the styling config
 * Usage: getStyle('spacing.sectionPadding', 'py-20')
 */
export const getStyle = (path, fallback = '') => {
  return getConfigValue(path, WEBSITE_STYLING, fallback);
};

/**
 * Validates that all required config values are present
 * This helps beginners identify missing configuration
 */
export const validateConfig = () => {
  const errors = [];
  
  // Check required content fields
  const requiredContent = [
    'companyName',
    'hero.mainTitle',
    'contact.phone',
    'contact.email'
  ];
  
  requiredContent.forEach(path => {
    if (!getText(path)) {
      errors.push(`Missing required content: ${path}`);
    }
  });
  
  // Check required image fields
  const requiredImages = [
    'hero.slide1',
    'hero.slide2'
  ];
  
  requiredImages.forEach(path => {
    if (!getImage(path)) {
      errors.push(`Missing required image: ${path}`);
    }
  });
  
  if (errors.length > 0 && process.env.NODE_ENV === 'development') {
    console.group('⚠️ Configuration Validation Errors');
    errors.forEach(error => console.warn(error));
    console.log('💡 Edit the files in src/config/ to fix these issues');
    console.groupEnd();
  }
  
  return errors;
};

/**
 * Provides helpful development tools for beginners
 */
export const devTools = {
  // Lists all available content paths
  listContentPaths: () => {
    const paths = [];
    const findPaths = (obj, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'string') {
          paths.push(path);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          findPaths(obj[key], path);
        }
      });
    };
    findPaths(WEBSITE_CONTENT);
    return paths;
  },
  
  // Lists all available image paths
  listImagePaths: () => {
    const paths = [];
    const findPaths = (obj, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'string') {
          paths.push(path);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          findPaths(obj[key], path);
        }
      });
    };
    findPaths(WEBSITE_IMAGES);
    return paths;
  },
  
  // Shows example usage
  showExamples: () => {
    console.group('📚 Configuration Examples');
    console.log('Text: getText("hero.mainTitle")');
    console.log('Image: getImage("hero.slide1")');
    console.log('Style: getStyle("spacing.sectionPadding")');
    console.log('Available content paths:', devTools.listContentPaths());
    console.log('Available image paths:', devTools.listImagePaths());
    console.groupEnd();
  }
};

// Run validation in development mode
if (process.env.NODE_ENV === 'development') {
  validateConfig();
}
