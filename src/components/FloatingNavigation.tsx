
import { useState } from 'react';

interface FloatingNavigationProps {
  navItems: Array<{ name: string; href: string }>;
  activeSection: string;
  scrolled: boolean;
}

export const FloatingNavigation = ({ navItems, activeSection, scrolled }: FloatingNavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex justify-center">
      <div className={`floating-nav-container ${scrolled ? 'floating-nav-scrolled' : ''}`}>
        {navItems.map((item, index) => (
          <div
            key={item.name}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100 + 600}ms` }}
          >
            <a
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* 3D Floating Pill */}
              <div className={`floating-nav-pill ${
                activeSection === item.href.slice(1) ? 'nav-pill-active' : ''
              } ${hoveredItem === item.name ? 'nav-pill-hovered' : ''}`}>
                
                {/* Lens Focus Ring */}
                <div className={`lens-focus-ring ${
                  hoveredItem === item.name ? 'focus-ring-active' : ''
                }`} />
                
                {/* Navigation Text */}
                <span className={`nav-text ${
                  activeSection === item.href.slice(1) ? 'text-accent' : 'text-foreground'
                } ${hoveredItem === item.name ? 'text-accent' : ''}`}>
                  {item.name}
                </span>
                
                {/* Focus Peaking Highlight */}
                {activeSection === item.href.slice(1) && (
                  <div className="focus-peaking-highlight animate-glow-pulse" />
                )}
                
                {/* Magnetic Field Effect */}
                {hoveredItem === item.name && (
                  <>
                    <div className="magnetic-field-ring magnetic-ring-1" />
                    <div className="magnetic-field-ring magnetic-ring-2" />
                    <div className="magnetic-field-ring magnetic-ring-3" />
                  </>
                )}
              </div>
              
              {/* Hover Lens Flare */}
              {hoveredItem === item.name && (
                <div className="hover-lens-flare" />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
