
import { useEffect, useRef } from 'react';

interface EnergyFieldBackgroundProps {
  variant?: 'primary' | 'secondary';
  intensity?: 'low' | 'medium' | 'high';
}

export const EnergyFieldBackground = ({ 
  variant = 'primary', 
  intensity = 'medium' 
}: EnergyFieldBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const energyWaves = Array.from({ length: 3 }, (_, i) => ({
      radius: 0,
      maxRadius: 200 + i * 100,
      speed: 0.5 + i * 0.2,
      opacity: 0.1 - i * 0.02,
      centerX: canvas.width * (0.2 + i * 0.3),
      centerY: canvas.height * (0.3 + i * 0.2),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create energy field gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );

      if (variant === 'primary') {
        gradient.addColorStop(0, 'hsla(22, 65%, 45%, 0.1)');
        gradient.addColorStop(0.5, 'hsla(22, 65%, 45%, 0.05)');
        gradient.addColorStop(1, 'hsla(22, 65%, 45%, 0)');
      } else {
        gradient.addColorStop(0, 'hsla(240, 30%, 20%, 0.1)');
        gradient.addColorStop(0.5, 'hsla(240, 30%, 20%, 0.05)');
        gradient.addColorStop(1, 'hsla(240, 30%, 20%, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate energy waves
      energyWaves.forEach((wave) => {
        wave.radius += wave.speed;
        if (wave.radius > wave.maxRadius) {
          wave.radius = 0;
        }

        ctx.beginPath();
        ctx.arc(wave.centerX, wave.centerY, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = variant === 'primary' 
          ? `hsla(22, 65%, 45%, ${wave.opacity})`
          : `hsla(240, 30%, 60%, ${wave.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: intensity === 'low' ? 0.3 : intensity === 'medium' ? 0.5 : 0.7
      }}
    />
  );
};
