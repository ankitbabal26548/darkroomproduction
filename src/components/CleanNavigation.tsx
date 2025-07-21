
import { useState } from 'react';
import { Home, Users, Camera, Briefcase, Mail } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

interface CleanNavigationProps {
  items: NavigationItem[];
}

const iconMap = {
  Home,
  Users,
  Camera,
  Briefcase,
  Mail,
};

export const CleanNavigation = ({ items }: CleanNavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center space-x-1">
      {items.map((item, index) => {
        const IconComponent = iconMap[item.icon as keyof typeof iconMap];
        
        return (
          <a
            key={item.name}
            href={item.href}
            className="clean-nav-item group"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center space-x-2">
              {IconComponent && (
                <IconComponent className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              )}
              <span className="relative z-10 clean-nav-text">
                {item.name}
              </span>
            </div>
            
            {/* Clean hover background */}
            <div className={`clean-nav-bg transition-all duration-200 ${
              hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`} />
            
            {/* Subtle underline */}
            <div className="clean-nav-underline" />
          </a>
        );
      })}
    </div>
  );
};
