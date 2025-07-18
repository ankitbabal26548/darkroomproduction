
interface NavigationItem {
  name: string;
  href: string;
}

interface ModernNavigationProps {
  items: NavigationItem[];
}

export const ModernNavigation = ({ items }: ModernNavigationProps) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          {/* Background pill effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-transparent group-hover:border-accent/20" />
          
          {/* Text */}
          <span className="relative text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300 z-10">
            {item.name}
          </span>
          
          {/* Animated underline */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent via-accent-lighter to-accent rounded-full group-hover:w-6 transition-all duration-300" />
        </a>
      ))}
    </div>
  );
};
