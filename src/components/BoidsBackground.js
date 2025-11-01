import { useEffect, useRef } from "react";

export default function BoidsBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const numBoids = 100; // Adjust number of boids

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Fill canvas with background color initially
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    resizeCanvas();

    const boids = Array.from({ length: numBoids }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
    }));

    function updateBoids() {
      // Fill with background color instead of clearing
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      boids.forEach((boid, i) => {
        let alignX = 0,
          alignY = 0,
          cohesionX = 0,
          cohesionY = 0,
          separationX = 0,
          separationY = 0,
          count = 0;

        boids.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - boid.x;
            const dy = other.y - boid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const visionRadius = 80; // Boid awareness range

            if (distance < visionRadius) {
              alignX += other.vx;
              alignY += other.vy;
              cohesionX += other.x;
              cohesionY += other.y;
              count++;

              if (distance < 30) {
                separationX -= dx;
                separationY -= dy;
              }
            }
          }
        });

        if (count > 0) {
          alignX /= count;
          alignY /= count;
          cohesionX = cohesionX / count - boid.x;
          cohesionY = cohesionY / count - boid.y;

          boid.vx += alignX * 0.02 + cohesionX * 0.01 + separationX * 0.05;
          boid.vy += alignY * 0.02 + cohesionY * 0.01 + separationY * 0.05;
        }

        boid.vx = Math.min(Math.max(boid.vx, -2), 2);
        boid.vy = Math.min(Math.max(boid.vy, -2), 2);
        boid.x += boid.vx;
        boid.y += boid.vy;

        if (boid.x < 0 || boid.x > canvas.width) boid.vx *= -1;
        if (boid.y < 0 || boid.y > canvas.height) boid.vy *= -1;

        ctx.beginPath();
        ctx.arc(boid.x, boid.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(updateBoids);
    }

    updateBoids();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ backgroundColor: "#111827" }}
    />
  );
}
