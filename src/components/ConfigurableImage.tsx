
/**
 * CONFIGURABLE IMAGE COMPONENT
 * ==============================
 * 
 * This component makes it easy for beginners to use images from the config file.
 * It handles loading states, errors, and provides helpful fallbacks.
 * 
 * BEGINNERS: You don't need to edit this file!
 * All image changes should be made in src/config/images.js
 */

import React, { useState } from 'react';
import { WEBSITE_IMAGES } from '@/config/images';

interface ConfigurableImageProps {
  /** The path to the image in the config file (e.g., "hero.slide1") */
  path: string;
  /** Alt text path in config (e.g., "hero.slide1Alt") */
  altPath?: string;
  /** Fallback alt text if altPath is not found */
  alt?: string;
  /** Additional CSS classes */
  className?: string;
  /** Fallback image if the main image fails to load */
  fallback?: string;
  /** Whether to show loading state */
  showLoading?: boolean;
  /** Whether to show editing hints in development */
  showHints?: boolean;
}

/**
 * Gets a value from the config object using a dot-notation path
 */
const getConfigValue = (path: string, config: any): string => {
  try {
    const keys = path.split('.');
    let value = config;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return '';
      }
    }
    
    return typeof value === 'string' ? value : '';
  } catch (error) {
    console.warn(`ConfigurableImage: Could not find value for path "${path}"`);
    return '';
  }
};

export const ConfigurableImage: React.FC<ConfigurableImageProps> = ({
  path,
  altPath,
  alt = 'Image',
  className = '',
  fallback = WEBSITE_IMAGES.placeholders.defaultGallery,
  showLoading = true,
  showHints = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const imageSrc = getConfigValue(path, WEBSITE_IMAGES);
  const imageAlt = altPath ? getConfigValue(altPath, WEBSITE_IMAGES) : alt;
  const displaySrc = hasError ? fallback : (imageSrc || fallback);
  
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showEditingHint = isDevelopment && showHints && !imageSrc;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.warn(`ConfigurableImage: Failed to load image at path "${path}". Using fallback.`);
  };

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {isLoading && showLoading && (
        <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />
      )}
      
      {/* Main image */}
      <img
        src={displaySrc}
        alt={imageAlt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Development hint */}
      {showEditingHint && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          Edit in config/images.js: {path}
        </div>
      )}
      
      {/* Error indicator */}
      {hasError && isDevelopment && (
        <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Image failed to load
        </div>
      )}
    </div>
  );
};

/**
 * USAGE EXAMPLES FOR DEVELOPERS:
 * 
 * Basic image:
 * <ConfigurableImage 
 *   path="hero.slide1" 
 *   altPath="hero.slide1Alt"
 *   className="w-full h-64 object-cover" 
 * />
 * 
 * With custom fallback:
 * <ConfigurableImage 
 *   path="about.founderPhoto" 
 *   alt="Founder photo"
 *   fallback="/default-avatar.jpg"
 *   className="w-32 h-32 rounded-full"
 * />
 * 
 * Show editing hints (development only):
 * <ConfigurableImage 
 *   path="portfolio.coverImage" 
 *   showHints={true}
 *   className="aspect-video object-cover"
 * />
 */

/**
 * Utility hook for getting image URLs in JavaScript
 */
export const useConfigImage = (path: string, fallback: string = '') => {
  return getConfigValue(path, WEBSITE_IMAGES) || fallback;
};
