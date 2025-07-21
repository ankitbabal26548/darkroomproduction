
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

interface FuturisticNavigationProps {
  items: NavigationItem[];
}

export const FuturisticNavigation = ({ items }: FuturisticNavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center space-x-2">
      {items.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          className="futuristic-nav-item group"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="relative z-10 futuristic-nav-text">
            {item.name}
          </span>
          
          {/* Magnetic hover background */}
          <div className={`futuristic-nav-bg transition-all duration-300 ${
            hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} />
          
          {/* Underline animation */}
          <div className="futuristic-nav-underline" />
          
          {/* Side glow effects */}
          <div className="futuristic-nav-side-glow" />
        </a>
      ))}
    </div>
  );
};
