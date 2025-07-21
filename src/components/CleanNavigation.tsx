
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

interface CleanNavigationProps {
  items: NavigationItem[];
}

export const CleanNavigation = ({ items }: CleanNavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center space-x-1">
      {items.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          className="clean-nav-item group"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <span className="relative z-10 clean-nav-text">
            {item.name}
          </span>
          
          {/* Clean hover background */}
          <div className={`clean-nav-bg transition-all duration-200 ${
            hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} />
          
          {/* Subtle underline */}
          <div className="clean-nav-underline" />
        </a>
      ))}
    </div>
  );
};
