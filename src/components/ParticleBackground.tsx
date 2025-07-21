
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  // Get the accent color from CSS custom properties with proper error handling
  const getAccentColor = () => {
    try {
      console.log('Getting accent color...');
      
      if (typeof window === 'undefined') {
        console.log('Window undefined, using fallback');
        return 'hsl(220, 100%, 50%)';
      }

      const style = getComputedStyle(document.documentElement);
      const accentValue = style.getPropertyValue('--accent').trim();
      
      console.log('Raw accent value from CSS:', accentValue);

      if (!accentValue) {
        console.log('No accent value found, using fallback');
        return 'hsl(220, 100%, 50%)';
      }

      // If it's already a proper CSS color format, return it
      if (accentValue.startsWith('hsl(') || accentValue.startsWith('rgb(') || accentValue.startsWith('#')) {
        console.log('Already proper CSS color:', accentValue);
        return accentValue;
      }

      // If it looks like space-separated HSL values (e.g., "220 100% 50%")
      if (accentValue.includes('%') && accentValue.includes(' ')) {
        const hslColor = `hsl(${accentValue})`;
        console.log('Converted to HSL:', hslColor);
        return hslColor;
      }

      // Try to parse as individual values
      const parts = accentValue.split(' ').filter(p => p.trim());
      if (parts.length >= 3) {
        const hslColor = `hsl(${parts[0]}, ${parts[1]}, ${parts[2]})`;
        console.log('Parsed and converted to HSL:', hslColor);
        return hslColor;
      }

      console.log('Could not parse accent value, using fallback');
      return 'hsl(220, 100%, 50%)';
    } catch (error) {
      console.error('Error getting accent color:', error);
      return 'hsl(220, 100%, 50%)';
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log('Initializing particle background...');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        size: Math.random() * 2 + 1
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle());
      }
      console.log('Initialized', particlesRef.current.length, 'particles');
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const drawParticles = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const baseColor = getAccentColor();
        console.log('Using base color for particles:', baseColor);
        
        particlesRef.current.forEach((particle, index) => {
          try {
            const opacity = 1 - (particle.life / particle.maxLife);
            
            // Create gradient for holographic effect
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 3
            );
            
            // Create HSLA colors with proper opacity
            const centerColor = baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity * 0.8})`);
            const midColor = baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity * 0.4})`);
            const outerColor = baseColor.replace('hsl(', 'hsla(').replace(')', ', 0)');
            
            if (index === 0) { // Log only for first particle to avoid spam
              console.log('Particle colors:', { centerColor, midColor, outerColor });
            }

            gradient.addColorStop(0, centerColor);
            gradient.addColorStop(0.5, midColor);
            gradient.addColorStop(1, outerColor);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();

            // Add connecting lines between nearby particles
            particlesRef.current.forEach(otherParticle => {
              if (particle === otherParticle) return;
              
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                const lineOpacity = (1 - distance / 100) * opacity * 0.2;
                const lineColor = baseColor.replace('hsl(', 'hsla(').replace(')', `, ${lineOpacity})`);
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            });
          } catch (particleError) {
            console.error('Error drawing particle:', particleError, 'Particle:', particle);
          }
        });
      } catch (error) {
        console.error('Error in drawParticles:', error);
      }
    };

    const animate = () => {
      try {
        updateParticles();
        drawParticles();
        animationFrameRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Error in animation loop:', error);
      }
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      console.log('Particle background cleanup completed');
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};
