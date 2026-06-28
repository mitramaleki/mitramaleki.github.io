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

  // ---------- Stars ----------
  const starCount = 5000;                     // 10x more stars
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2000,               // depth
      radius: Math.random() * 0.8 + 0.2,     // base radius (will be scaled)
      baseSpeed: 0.05 + Math.random() * 0.1, // faster base drift
      phase: Math.random() * Math.PI * 2    // per-star twinkle phase
    });
  }

  // ---------- Shooting stars ----------
  const shootingStars = [];
  const maxShooting = 5;                     // allow more simultaneous shooting stars
  let lastSpawn = 0;
  const spawnInterval = 500;                 // ms – much more frequent
  const spawnChance = 0.8;                   // higher chance each interval

  function spawnShooting() {
    if (shootingStars.length >= maxShooting) return;
    if (Math.random() > spawnChance) return;
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

    // ----- Scroll-based parallax (gives the "moving forward" feel) -----
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(1, scrollY / maxScroll); // 0 ... 1

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ----- Update stars -----
    stars.forEach(s => {
      // Base drift + scroll-driven parallax (both faster)
      const speedFactor = 0.8 + scrollProgress * 1.2; // 0.8 when at top, up to 2.0 at bottom
      s.z -= s.baseSpeed * 12 * speedFactor;
      if (s.z <= 0) {
        s.z = 2000 + Math.random() * 500;
        s.x = Math.random() * canvas.width;
        s.y = Math.random() * canvas.height;
      }

      const scale = 2000 / (2000 - s.z);
      const screenX = s.x + (s.x - canvas.width / 2) * (scrollProgress * 0.8);
      const screenY = s.y + (s.y - canvas.height / 2) * (scrollProgress * 0.8);

      // Only draw if the star is within the viewport (plus a small margin)
      if (screenX > -1 && screenX < canvas.width + 1 &&
          screenY > -1 && screenY < canvas.height + 1) {
        const depthFactor = 1 - (s.z / 2000); // 0 (far) -> 1 (near)

        // Brightness range: very dim far away -> bright up close
        const baseBrightness = 0.15 + depthFactor * 0.85; // 0.15 ... 1.0

        // Twinkle = sine wave with per-star phase offset
        const twinkle = Math.sin(now * 0.004 + s.phase) * 0.15;
        let brightness = baseBrightness + twinkle;
        if (brightness < 0.05) brightness = 0.05; // floor so we never lose a star completely
        if (brightness > 1) brightness = 1;

        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        // Draw a 1-pixel dot (centered on the sub-pixel coordinates)
        ctx.fillRect(screenX - 0.5, screenY - 0.5, 1, 1);
      }
    });

    // ----- Update shooting stars -----
    if (now - lastSpawn > spawnInterval) {
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