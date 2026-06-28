import { useEffect, useRef } from 'react';

/**
 * StarCanvas — Three-layer parallax starfield
 * Responds to scroll and subtle mouse movement.
 */
export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let animId;
    let mouseX = 0, mouseY = 0;
    let scrollY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    // Star layers: [count, maxRadius, speed, opacity]
    const layers = [
      { count: 600, maxR: 0.6, speed: 0.08, opacity: 0.5 },
      { count: 300, maxR: 1.1, speed: 0.18, opacity: 0.7 },
      { count: 100, maxR: 1.8, speed: 0.32, opacity: 0.9 },
    ];

    let stars = [];

    function initStars() {
      stars = [];
      layers.forEach((layer) => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * layer.maxR + 0.2,
            opacity: (Math.random() * 0.4 + 0.6) * layer.opacity,
            twinkleOffset: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.003 + Math.random() * 0.006,
            layer,
          });
        }
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const mx = (mouseX / width - 0.5);
      const my = (mouseY / height - 0.5);

      stars.forEach((star) => {
        const { layer } = star;
        const parallaxX = mx * 18 * layer.speed;
        const parallaxY = my * 12 * layer.speed + (scrollY * layer.speed * 0.15);

        let sx = ((star.x + parallaxX) % width + width) % width;
        let sy = ((star.y + parallaxY) % height + height) % height;

        // Gentle twinkle
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.18 + 0.82;
        const alpha = star.opacity * twinkle;

        // Rare bright stars get a soft glow
        if (star.r > 1.4) {
          const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, star.r * 3.5);
          grd.addColorStop(0, `rgba(200, 210, 255, ${alpha * 0.25})`);
          grd.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(sx, sy, star.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 228, 255, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
