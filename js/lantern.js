/* ==========================================================================
   HỒN VIỆT - VIRTUAL FLOATING LANTERN CEREMONY (Nghi Thức Thả Hoa Đăng)
   Canvas simulation of glowing lotus lanterns drifting on river at night
   ========================================================================== */

class LanternCeremony {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.lanterns = [];
    this.particles = [];
    this.selectedColor = '#f472b6'; // Lotus pink default
    this.animationFrameId = null;

    this.initCanvasSize();
    window.addEventListener('resize', () => this.initCanvasSize());
    this.seedDefaultLanterns();
    this.animate();
  }

  initCanvasSize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = this.canvas.width = rect.width;
    this.height = this.canvas.height = rect.height || 420;
  }

  seedDefaultLanterns() {
    const defaultWishes = [
      { text: "Cầu quốc thái dân an, mưa thuận gió hòa", color: "#f59e0b" },
      { text: "Cầu chúc cha mẹ bình an, trường thọ vô biên", color: "#f472b6" },
      { text: "Cầu cho gia đạo an khang, vạn sự hanh thông", color: "#38bdf8" },
      { text: "Cầu cho học tập tiến tới, công thành danh toại", color: "#34d399" },
      { text: "Ước nguyện non sông gấm vóc ngàn năm rạng rỡ", color: "#fb7185" }
    ];

    defaultWishes.forEach((w, i) => {
      this.lanterns.push({
        x: Math.random() * (this.width - 100) + 50,
        y: this.height * 0.35 + Math.random() * (this.height * 0.5),
        color: w.color,
        wish: w.text,
        radius: 18 + Math.random() * 8,
        vx: 0.25 + Math.random() * 0.35,
        vy: -0.05 + (Math.random() - 0.5) * 0.1,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.02,
        opacity: 0.85
      });
    });
  }

  releaseLantern(wishText, colorHex) {
    const color = colorHex || this.selectedColor;
    const text = wishText.trim() || "Cầu an lành, may mắn và hạnh phúc";

    // Play chime sound
    if (window.vietnamAudio) {
      window.vietnamAudio.playDanTranh(523.25);
    }

    const newLantern = {
      x: this.width * 0.5 + (Math.random() - 0.5) * 120,
      y: this.height - 40,
      color: color,
      wish: text,
      radius: 26,
      vx: 0.3 + Math.random() * 0.3,
      vy: -0.45 - Math.random() * 0.25,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: 0.03,
      opacity: 1
    };

    this.lanterns.push(newLantern);

    // Sparkle particles
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: newLantern.x,
        y: newLantern.y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 1,
        radius: 2 + Math.random() * 2,
        color: color,
        alpha: 1,
        decay: 0.02
      });
    }

    // Add to wish feed
    this.addWishToFeed(text);
  }

  addWishToFeed(text) {
    const feed = document.getElementById('wish-feed');
    if (!feed) return;
    const bubble = document.createElement('div');
    bubble.className = 'wish-bubble';
    bubble.innerHTML = `🪷 <span>"${text}"</span>`;
    feed.prepend(bubble);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw Water & Night Sky Atmosphere
    const waterGrad = this.ctx.createLinearGradient(0, 0, 0, this.height);
    waterGrad.addColorStop(0, '#0a1017');
    waterGrad.addColorStop(0.5, '#060d15');
    waterGrad.addColorStop(1, '#03060a');
    this.ctx.fillStyle = waterGrad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Distant Full Moon
    const moonX = this.width * 0.85;
    const moonY = 60;
    const moonGlow = this.ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, 80);
    moonGlow.addColorStop(0, 'rgba(254, 240, 205, 0.9)');
    moonGlow.addColorStop(0.4, 'rgba(254, 240, 205, 0.2)');
    moonGlow.addColorStop(1, 'rgba(254, 240, 205, 0)');
    this.ctx.fillStyle = moonGlow;
    this.ctx.beginPath();
    this.ctx.arc(moonX, moonY, 80, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#fff9e6';
    this.ctx.beginPath();
    this.ctx.arc(moonX, moonY, 22, 0, Math.PI * 2);
    this.ctx.fill();

    // Gentle Water Ripples
    const time = Date.now() * 0.0015;
    this.ctx.strokeStyle = 'rgba(212, 175, 55, 0.07)';
    this.ctx.lineWidth = 1;
    for (let r = 100; r < this.height; r += 35) {
      this.ctx.beginPath();
      for (let x = 0; x < this.width; x += 20) {
        const y = r + Math.sin(x * 0.02 + time + r) * 3;
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();
    }

    // Update & Draw Lanterns
    for (let i = this.lanterns.length - 1; i >= 0; i--) {
      const l = this.lanterns[i];
      l.swayOffset += l.swaySpeed;
      l.x += l.vx + Math.sin(l.swayOffset) * 0.3;
      l.y += l.vy;

      // Soft perspective shrink as it drifts towards the horizon
      if (l.radius > 12 && l.y < this.height * 0.8) {
        l.radius -= 0.01;
      }

      // If out of bounds, wrap gently
      if (l.x > this.width + 50) l.x = -40;
      if (l.y < 70) {
        l.y = this.height + 20;
        l.x = Math.random() * (this.width - 100) + 50;
      }

      // Draw Water Glow Reflection
      const reflectGrad = this.ctx.createRadialGradient(l.x, l.y + 12, 2, l.x, l.y + 18, l.radius * 2);
      reflectGrad.addColorStop(0, l.color + 'aa');
      reflectGrad.addColorStop(1, 'transparent');
      this.ctx.fillStyle = reflectGrad;
      this.ctx.beginPath();
      this.ctx.ellipse(l.x, l.y + 14, l.radius * 1.5, l.radius * 0.6, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Outer Aura Glow
      const glowGrad = this.ctx.createRadialGradient(l.x, l.y, 2, l.x, l.y, l.radius * 2.2);
      glowGrad.addColorStop(0, l.color + 'dd');
      glowGrad.addColorStop(0.5, l.color + '44');
      glowGrad.addColorStop(1, 'transparent');
      this.ctx.fillStyle = glowGrad;
      this.ctx.beginPath();
      this.ctx.arc(l.x, l.y, l.radius * 2.2, 0, Math.PI * 2);
      this.ctx.fill();

      // Lotus Flower Petals
      this.drawLotusPetals(l.x, l.y, l.radius, l.color);

      // Inner Flame / Candle Core
      const flicker = Math.sin(Date.now() * 0.01 + l.swayOffset) * 1.5;
      this.ctx.fillStyle = '#fffbeb';
      this.ctx.beginPath();
      this.ctx.arc(l.x, l.y - 3 + flicker, 4, 0, Math.PI * 2);
      this.ctx.fill();

      // Subtle wish text floating above lantern
      if (l.radius >= 20) {
        this.ctx.fillStyle = 'rgba(254, 240, 205, 0.8)';
        this.ctx.font = '10px "Be Vietnam Pro", sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(l.wish.length > 22 ? l.wish.slice(0, 22) + '...' : l.wish, l.x, l.y - l.radius - 8);
      }
    }

    // Update & Draw Particles
    for (let p = this.particles.length - 1; p >= 0; p--) {
      const part = this.particles[p];
      part.x += part.vx;
      part.y += part.vy;
      part.alpha -= part.decay;

      if (part.alpha <= 0) {
        this.particles.splice(p, 1);
        continue;
      }

      this.ctx.fillStyle = part.color + Math.floor(part.alpha * 255).toString(16).padStart(2, '0');
      this.ctx.beginPath();
      this.ctx.arc(part.x, part.y, part.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  drawLotusPetals(cx, cy, r, color) {
    const petals = 6;
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = '#fff7ed';
    this.ctx.lineWidth = 1;

    for (let i = 0; i < petals; i++) {
      const angle = (i * Math.PI * 2) / petals;
      const px = cx + Math.cos(angle) * (r * 0.7);
      const py = cy + Math.sin(angle) * (r * 0.35);

      this.ctx.beginPath();
      this.ctx.ellipse(px, py, r * 0.5, r * 0.3, angle, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
}

// Global initialization helper
window.initLanternCeremony = function() {
  window.lanternSystem = new LanternCeremony('lantern-water-canvas');
};
