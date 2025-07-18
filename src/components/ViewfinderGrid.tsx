
export const ViewfinderGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      {/* Rule of Thirds Grid */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute left-1/3 top-0 w-px h-full bg-accent/30" />
        <div className="absolute left-2/3 top-0 w-px h-full bg-accent/30" />
        
        {/* Horizontal Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-accent/30" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-accent/30" />
      </div>

      {/* Center Focus Point */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 border border-accent/40 rounded-full">
          <div className="w-2 h-2 bg-accent/60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/30" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/30" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent/30" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent/30" />

      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-viewfinder-scan" />
    </div>
  );
};
