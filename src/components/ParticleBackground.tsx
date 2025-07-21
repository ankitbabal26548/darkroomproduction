
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

  // Get the accent color from CSS custom properties
  const getAccentColor = () => {
    if (typeof window !== 'undefined') {
      const style = getComputedStyle(document.documentElement);
      const accentValue = style.getPropertyValue('--accent').trim();
      // If we get HSL values like "220 100% 50%", convert to proper HSL format
      if (accentValue && !accentValue.startsWith('hsl')) {
        return `hsl(${accentValue})`;
      }
      return accentValue || 'hsl(220, 100%, 50%)'; // fallback
    }
    return 'hsl(220, 100%, 50%)';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const baseColor = getAccentColor();
      
      particlesRef.current.forEach(particle => {
        const opacity = 1 - (particle.life / particle.maxLife);
        
        // Create gradient for holographic effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        
        // Convert HSL to HSLA with opacity
        const centerColor = baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity * 0.8})`);
        const midColor = baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity * 0.4})`);
        const outerColor = baseColor.replace('hsl(', 'hsla(').replace(')', ', 0)');
        
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
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
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
