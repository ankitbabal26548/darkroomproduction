
/**
 * CONFIGURATION HELPER UTILITIES
 * ================================
 * 
 * This file contains utility functions to help work with the configuration files.
 * These functions make it safer for beginners to use the config files.
 * 
 * BEGINNERS: You don't need to edit this file!
 */

/**
 * Safely gets a value from a nested object using dot notation
 * Example: getValue(config, "hero.title") gets config.hero.title
 */
export const getValue = (obj, path, fallback = '') => {
  try {
    const keys = path.split('.');
    let value = obj;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return fallback;
      }
    }
    
    return value || fallback;
  } catch (error) {
    console.warn(`ConfigHelper: Could not find value for path "${path}"`);
    return fallback;
  }
};

/**
 * Validates if an image URL is accessible
 * Returns a promise that resolves to true if image loads, false otherwise
 */
export const validateImageUrl = (url) => {
  return new Promise((resolve) => {
    if (!url) {
      resolve(false);
      return;
    }
    
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Formats text for display, handling special cases
 */
export const formatText = (text, replacements = {}) => {
  if (!text) return '';
  
  let formattedText = text;
  
  // Replace placeholders like {count} with actual values
  Object.keys(replacements).forEach(key => {
    const placeholder = `{${key}}`;
    formattedText = formattedText.replace(new RegExp(placeholder, 'g'), replacements[key]);
  });
  
  return formattedText;
};

/**
 * Validates styling values to prevent CSS errors
 */
export const validateStyleValue = (value, allowedValues = []) => {
  if (!value) return false;
  
  // If allowed values are specified, check against them
  if (allowedValues.length > 0) {
    return allowedValues.includes(value);
  }
  
  // Basic validation for Tailwind classes
  return typeof value === 'string' && value.length > 0;
};

/**
 * Gets responsive image URL based on screen size
 * Helps optimize images for different devices
 */
export const getResponsiveImageUrl = (baseUrl, size = 'medium') => {
  if (!baseUrl) return '';
  
  // If it's an Unsplash URL, we can add size parameters
  if (baseUrl.includes('unsplash.com')) {
    const sizeParams = {
      small: 'w=600&h=400',
      medium: 'w=1200&h=800',
      large: 'w=1920&h=1080'
    };
    
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${sizeParams[size] || sizeParams.medium}`;
  }
  
  return baseUrl;
};

/**
 * Debug helper to check if all required config values are present
 * Use this in development to ensure your config is complete
 */
export const validateConfig = (config, requiredPaths = []) => {
  const missing = [];
  
  requiredPaths.forEach(path => {
    const value = getValue(config, path);
    if (!value) {
      missing.push(path);
    }
  });
  
  if (missing.length > 0) {
    console.warn('Missing config values:', missing);
  }
  
  return missing.length === 0;
};
