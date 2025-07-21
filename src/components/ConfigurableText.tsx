
/**
 * CONFIGURABLE TEXT COMPONENT
 * =============================
 * 
 * This component makes it easy for beginners to use text from the config file.
 * It automatically handles missing text and provides helpful error messages.
 * 
 * BEGINNERS: You don't need to edit this file!
 * All text changes should be made in src/config/content.js
 */

import React from 'react';
import { WEBSITE_CONTENT } from '@/config/content';

interface ConfigurableTextProps {
  /** The path to the text in the config file (e.g., "hero.mainTitle") */
  path: string;
  /** HTML tag to render (h1, h2, p, span, etc.) */
  as?: keyof JSX.IntrinsicElements;
  /** Additional CSS classes */
  className?: string;
  /** Fallback text if the config value is missing */
  fallback?: string;
  /** Whether to show editing hints in development */
  showHints?: boolean;
}

/**
 * Gets a value from the config object using a dot-notation path
 * Example: getConfigValue("hero.mainTitle") returns WEBSITE_CONTENT.hero.mainTitle
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
    console.warn(`ConfigurableText: Could not find value for path "${path}"`);
    return '';
  }
};

export const ConfigurableText: React.FC<ConfigurableTextProps> = ({
  path,
  as: Component = 'span',
  className = '',
  fallback = 'Add text in config/content.js',
  showHints = false
}) => {
  const value = getConfigValue(path, WEBSITE_CONTENT);
  const displayText = value || fallback;
  
  // Show helpful hints in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showEditingHint = isDevelopment && showHints && !value;
  
  return (
    <Component 
      className={className}
      title={showEditingHint ? `Edit this in config/content.js at: ${path}` : undefined}
    >
      {displayText}
      {showEditingHint && (
        <span className="text-xs text-orange-500 ml-2">
          [Edit in config/content.js: {path}]
        </span>
      )}
    </Component>
  );
};

/**
 * USAGE EXAMPLES FOR DEVELOPERS:
 * 
 * Basic text:
 * <ConfigurableText path="hero.mainTitle" as="h1" className="text-4xl font-bold" />
 * 
 * With fallback:
 * <ConfigurableText 
 *   path="about.title" 
 *   as="h2" 
 *   fallback="About Us" 
 *   className="text-2xl"
 * />
 * 
 * Show editing hints (development only):
 * <ConfigurableText 
 *   path="hero.description" 
 *   as="p" 
 *   showHints={true}
 * />
 */

/**
 * Utility hook for getting config values in JavaScript
 */
export const useConfigText = (path: string, fallback: string = '') => {
  return getConfigValue(path, WEBSITE_CONTENT) || fallback;
};
