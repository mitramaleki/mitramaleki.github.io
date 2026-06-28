document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
});

function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Stars
  const starCount = 120;
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2000, // depth
      radius: Math.random() * 0.8 + 0.2,
      baseSpeed: 0.015 + Math.random() * 0.025
    });
  }

  // Shooting stars
  const shootingStars = [];
  const maxShooting = 2;
  let lastSpawn = 0;
  const spawnInterval = 7000; // ms

  function spawnShooting() {
    if (shootingStars.length >= maxShooting) return;
    const fromLeft = Math.random() < 0.5;
    let sx, sy, vx, vy;
    if (fromLeft) {
      sx = -50;
      sy = Math.random() * canvas.height * 0.6;
      vx = Math.random() * 3 + 2;
      vy = (Math.random() - 0.5) * 1;
    } else {
      sx = Math.random() * canvas.width * 0.6;
      sy = -50;
      vx = (Math.random() - 0.5) * 1;
      vy = Math.random() * 3 + 2;
    }
    shootingStars.push({
      x: sx, y: sy, vx: vx, vy: vy,
      life: 0, maxLife: 1,
      decay: 0.02 + Math.random() * 0.03,
      width: Math.random() * 2 + 1,
      length: Math.random() * 60 + 30
    });
  }

  let lastTime = performance.now();

  function animate(now) {
    const dt = now - lastTime;
    lastTime = now;

    // Scroll progress
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(1, scrollY / maxScroll); // clamp 0-1
    const moveOffset = scrollProgress * 80; // amount of movement

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update stars
    stars.forEach(s => {
      // base drift + scroll-based parallax
      const speedFactor = 0.2 + scrollProgress * 0.8; // 0.2 when no scroll, up to 1.0 at bottom
      s.z -= s.baseSpeed * 12 * speedFactor;
      if (s.z <= 0) {
        s.z = 2000 + Math.random() * 500;
        s.x = Math.random() * canvas.width;
        s.y = Math.random() * canvas.height;
      }

      const scale = 2000 / (2000 - s.z);
      const screenX = s.x + (s.x - canvas.width / 2) * (scrollProgress * 0.3);
      const screenY = s.y + (s.y - canvas.height / 2) * (scrollProgress * 0.3);

      if (screenX > -1 && screenX < canvas.width + 1 &&
          screenY > -1 && screenY < canvas.height + 1) {
        const depthFactor = 1 - (s.z / 2000);
        const baseBrightness = 0.6 + depthFactor * 0.4; // 0.6-1.0
        // twinkle effect
        const twinkle = Math.sin(now * 0.003 + s.x * 0.01 + s.y * 0.01) * 0.1;
        const brightness = Math.min(1, Math.max(0, baseBrightness + twinkle));
        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        // Draw a 1px dot (centered)
        ctx.fillRect(screenX - 0.5, screenY - 0.5, 1, 1);
      }
    });

    // Shooting stars
    if (now - lastSpawn > spawnInterval && Math.random() < 0.3) {
      spawnShooting();
      lastSpawn = now;
    }
    shootingStars.forEach((star, i) => {
      star.x += star.vx;
      star.y += star.vy;
      star.life += star.decay;
      if (star.life >= 1 ||
          star.x < -100 || star.x > canvas.width + 100 ||
          star.y < -100 || star.y > canvas.height + 100) {
        shootingStars.splice(i, 1);
        return;
      }
      const opacity = 1 - star.life;
      if (opacity <= 0) return;

      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.vx * 4, star.y - star.vy * 4);
      ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.8})`;
      ctx.lineWidth = star.width;
      ctx.stroke();
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}