
import { MagneticNavItem } from './MagneticNavItem';

interface NavigationGroup {
  items: Array<{ name: string; href: string }>;
  side: 'left' | 'right';
}

interface SplitNavigationProps {
  leftItems: Array<{ name: string; href: string }>;
  rightItems: Array<{ name: string; href: string }>;
  activeSection: string;
}

export const SplitNavigation = ({ leftItems, rightItems, activeSection }: SplitNavigationProps) => {
  const NavigationGroup = ({ items, side }: NavigationGroup) => (
    <div className={`nav-pill flex items-center space-x-1 animate-fade-in-up ${
      side === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
    }`}>
      {items.map((item, index) => (
        <div 
          key={item.name}
          className="animate-fade-in-up"
          style={{ animationDelay: `${(side === 'left' ? index : index + 3) * 100}ms` }}
        >
          <MagneticNavItem 
            href={item.href}
            isActive={activeSection === item.href.slice(1)}
          >
            {item.name}
          </MagneticNavItem>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Left Navigation Group */}
      <div className="hidden lg:flex">
        <NavigationGroup items={leftItems} side="left" />
      </div>

      {/* Right Navigation Group */}
      <div className="hidden lg:flex">
        <NavigationGroup items={rightItems} side="right" />
      </div>
    </>
  );
};
