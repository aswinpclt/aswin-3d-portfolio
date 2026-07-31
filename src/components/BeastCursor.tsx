import { useEffect, useRef } from "react";
import "../styles/beast.css";

const BeastCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };
    // Beast Energy Trail
const trail: { x: number; y: number }[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    const move = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    const animate = () => {
      requestAnimationFrame(animate);

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;
trail.push({
  x: mouse.x,
  y: mouse.y,
});

if (trail.length > 35) {
  trail.shift();
}
      ctx.clearRect(0, 0, width, height);
      // =====================
// Draw Beast Trail
// =====================

for (let i = 1; i < trail.length; i++) {
  const prev = trail[i - 1];
  const curr = trail[i];

  const alpha = i / trail.length;

  ctx.beginPath();

  ctx.moveTo(prev.x, prev.y);

  ctx.lineTo(curr.x, curr.y);

  ctx.strokeStyle = `rgba(120,220,255,${alpha * 0.6})`;

  ctx.lineWidth = alpha * 10;

  ctx.lineCap = "round";

  ctx.shadowBlur = 25;

  ctx.shadowColor = "#7FD8FF";

  ctx.stroke();
}

ctx.shadowBlur = 0;

// Lightning glow only (no round aura)

ctx.save();

ctx.shadowBlur = 35;
ctx.shadowColor = "#66d9ff";

ctx.strokeStyle = "#9be8ff";
ctx.lineWidth = 3;
ctx.lineCap = "round";

// Draw a short lightning streak
ctx.beginPath();
ctx.moveTo(mouse.x - 12, mouse.y + 8);
ctx.lineTo(mouse.x, mouse.y - 10);
ctx.lineTo(mouse.x + 10, mouse.y + 5);
ctx.stroke();

ctx.restore();
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="beast-canvas" />;
};

export default BeastCursor;