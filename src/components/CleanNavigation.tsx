
interface NavigationItem {
  name: string;
  href: string;
}

interface CleanNavigationProps {
  items: NavigationItem[];
}

export const CleanNavigation = ({ items }: CleanNavigationProps) => {
  return (
    <div className="flex items-center space-x-6">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
};
