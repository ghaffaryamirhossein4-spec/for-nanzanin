
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

let stars = [];
let animationFrame;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createStars(rect.width, rect.height);
}

function createStars(width, height) {
  stars = [];

  const count = Math.min(
    180,
    Math.floor((width * height) / 4500)
  );

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.003,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawStars(time) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  ctx.clearRect(0, 0, width, height);

  for (const star of stars) {
    const glow =
      0.35 +
      Math.sin(time * star.speed + star.phase) * 0.3;

    const opacity = Math.max(0.1, Math.min(1, star.alpha + glow));

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(235, 231, 255, ${opacity})`;
    ctx.fill();
  }

  animationFrame = requestAnimationFrame(drawStars);
}

function startStarField() {
  if (animationFrame) return;

  resizeCanvas();
  animationFrame = requestAnimationFrame(drawStars);
}

function stopStarField() {
  cancelAnimationFrame(animationFrame);
  animationFrame = null;
}

window.addEventListener("resize", () => {
  if (!document.getElementById("sky-screen").classList.contains("hidden")) {
    resizeCanvas();
  }
});
