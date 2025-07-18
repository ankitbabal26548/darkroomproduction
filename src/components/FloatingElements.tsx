
export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes with different animations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rounded-full animate-breathing opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent/10 to-accent-lighter/10 rounded-lg rotate-45 animate-spin-slow opacity-40" />
      <div className="absolute top-1/2 left-3/4 w-16 h-16 border-2 border-accent/30 rotate-45 animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-bounce opacity-70" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent-lighter rounded-full animate-bounce opacity-60" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/2 w-3 h-3 bg-accent/60 rounded-full animate-bounce opacity-50" 
           style={{ animationDelay: '1.5s' }} />
      
      {/* Abstract lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent-lighter))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M100,200 Q300,100 500,300 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        <path d="M0,400 Q200,300 400,500 T800,400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
};
