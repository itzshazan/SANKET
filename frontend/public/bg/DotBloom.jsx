"use client";

import { useEffect, useRef } from "react";

export default function DotBloom({
  dotColor = "#c8c3b5",
  bloomColor = "#FF6600",
  background = "transparent",
  speed = 1.0,
  density = 44,
  intensity = 0.7,
  cursorRadius = 150,
  cursorStrength = 1.2,
  moveAmplitude = 10,
  interactiveMove = true,
  centerFade = true,
  className = "",
  style = {},
}) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    speed,
    density,
    intensity,
    cursorRadius,
    cursorStrength,
    moveAmplitude,
    interactiveMove,
    centerFade,
  });
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    stateRef.current = {
      speed,
      density,
      intensity,
      cursorRadius,
      cursorStrength,
      moveAmplitude,
      interactiveMove,
      centerFade,
    };
  }, [speed, density, intensity, cursorRadius, cursorStrength, moveAmplitude, interactiveMove, centerFade]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let t = 0;
    let W = 0;
    let H = 0;

    // ── Mouse tracking ──────────────────────────────────────────────
    const onMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // ── Perlin noise ────────────────────────────────────────────────
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    const perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);
    const grad = (hash, x, y) => {
      const h = hash & 7;
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
    };
    const noise2 = (x, y) => {
      const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
      const xf = x - Math.floor(x), yf = y - Math.floor(y);
      const u = fade(xf), v = fade(yf);
      const aa = perm[perm[X] + Y], ab = perm[perm[X] + Y + 1];
      const ba = perm[perm[X + 1] + Y], bb = perm[perm[X + 1] + Y + 1];
      return lerp(
        lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
        lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
        v
      );
    };
    const fbm = (x, y) =>
      noise2(x, y) * 0.6 + noise2(x * 2.1, y * 2.1) * 0.4;

    // ── Color helpers ───────────────────────────────────────────────
    const hexToRgb = (hex) => {
      if (!hex || !hex.startsWith("#")) return [200, 195, 181];
      let h = hex.replace("#", "");
      if (h.length === 3) {
        h = h.split("").map((c) => c + c).join("");
      }
      return [
        parseInt(h.slice(0, 2), 16) || 0,
        parseInt(h.slice(2, 4), 16) || 0,
        parseInt(h.slice(4, 6), 16) || 0,
      ];
    };

    const lerpColor = (a, b, t) => [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t),
    ];

    const baseRgb = hexToRgb(dotColor);
    const bloomRgb = hexToRgb(bloomColor);

    // ── Resize ──────────────────────────────────────────────────────
    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      W = rect.width;
      H = rect.height;

      if (W === 0 || H === 0) return;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ── Draw loop ───────────────────────────────────────────────────
    const draw = () => {
      if (W === 0 || H === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      const {
        speed,
        density,
        intensity,
        cursorRadius,
        cursorStrength,
        moveAmplitude,
        interactiveMove,
        centerFade,
      } = stateRef.current;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, W, H);

      const spacingX = W / density;
      const spacingY = H / (density * (H / W));
      const cols = Math.ceil(W / spacingX) + 2;
      const rows = Math.ceil(H / spacingY) + 2;
      const nt = t * 0.0006 * speed;
      const motionTime = t * 0.015 * speed;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const baseX = col * spacingX;
          const baseY = row * spacingY;

          // Smooth fluid motion using 2D flow field & harmonics
          const noiseAngle = fbm(baseX * 0.003 + nt * 0.5, baseY * 0.003 + nt * 0.5) * Math.PI * 4;
          const harmonicX = Math.cos(motionTime + col * 0.2) * (moveAmplitude * 0.4);
          const harmonicY = Math.sin(motionTime + row * 0.2) * (moveAmplitude * 0.4);
          const flowX = Math.cos(noiseAngle) * (moveAmplitude * 0.6);
          const flowY = Math.sin(noiseAngle) * (moveAmplitude * 0.6);

          const moveOffsetX = flowX + harmonicX;
          const moveOffsetY = flowY + harmonicY;

          // Ambient noise bloom
          const n = fbm(baseX * 0.004 + nt, baseY * 0.0036 + nt * 0.7);
          const v = (n + 1) * 0.5;
          const thresh = 0.30;
          const vn = v < thresh ? 0 : Math.min((v - thresh) / (1 - thresh), 1);
          const ambientBloom = Math.pow(vn, 1.35) * intensity;

          // Cursor displacement and bloom
          const currentPosX = baseX + moveOffsetX;
          const currentPosY = baseY + moveOffsetY;
          const dx = currentPosX - mx;
          const dy = currentPosY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let cursorBloom = 0;
          let pushX = 0;
          let pushY = 0;

          if (dist < cursorRadius) {
            const norm = 1 - dist / cursorRadius;
            cursorBloom = Math.pow(norm, 1.8) * cursorStrength;

            if (interactiveMove) {
              const pushDist = Math.pow(norm, 1.4) * 22 * cursorStrength;
              const angle = Math.atan2(dy, dx);
              pushX = Math.cos(angle) * pushDist;
              pushY = Math.sin(angle) * pushDist;
            }
          }

          const finalX = currentPosX + pushX;
          const finalY = currentPosY + pushY;

          // Center fade calculation for text area readability
          let centerFactor = 1;
          if (centerFade) {
            const normDistX = (finalX - W * 0.5) / (W * 0.48);
            const normDistY = (finalY - H * 0.5) / (H * 0.44);
            const centerDist = Math.sqrt(normDistX * normDistX + normDistY * normDistY);

            if (centerDist < 0.28) {
              centerFactor = 0.03; // nearly invisible directly behind text
            } else if (centerDist < 0.9) {
              const step = (centerDist - 0.28) / (0.9 - 0.28);
              centerFactor = 0.03 + 0.97 * Math.pow(step, 1.7);
            }
          }

          // Cursor can reveal dots even near center
          const effectiveAlpha = Math.min(1, Math.max(centerFactor, cursorBloom * 0.95));

          // Skip invisible dots outside viewport or faded out
          if (finalX < -20 || finalX > W + 20 || finalY < -20 || finalY > H + 20) continue;
          if (effectiveAlpha < 0.04 && vn < 0.02 && cursorBloom < 0.02) continue;

          // Radius grows with bloom & scales down smoothly in center zone
          const baseR = spacingX * 0.38;
          const r = baseR * (0.12 + 0.88 * Math.max(vn, cursorBloom)) * (0.2 + 0.8 * centerFactor);

          const totalBloom = Math.min(Math.max(ambientBloom, cursorBloom), 1);
          const [cr, cg, cb] = lerpColor(baseRgb, bloomRgb, totalBloom);

          ctx.beginPath();
          ctx.arc(finalX, finalY, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    let ro = null;
    if (canvas.parentElement && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animId);
      if (ro) ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dotColor, bloomColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        background,
        ...style,
      }}
      className={className}
    />
  );
}
