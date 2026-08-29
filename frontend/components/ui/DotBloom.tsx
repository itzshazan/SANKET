"use client";

import React, { useEffect, useRef } from "react";

export interface DotBloomProps {
  dotColor?: string;
  bloomColor?: string;
  background?: string;
  speed?: number;
  density?: number;
  intensity?: number;
  cursorRadius?: number;
  cursorStrength?: number;
  moveAmplitude?: number;
  interactiveMove?: boolean;
  centerFade?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

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
}: DotBloomProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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

    let animId: number;
    let t = 0;
    let W = 0;
    let H = 0;

    let canvasRect: DOMRect | null = null;

    // ── Mouse tracking ──────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      if (!canvasRect) {
        canvasRect = canvas.getBoundingClientRect();
      }
      mouseRef.current = {
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top,
      };
    };

    const onMouseLeave = () => {
      canvasRect = null;
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

    const fade = (val: number) => val * val * val * (val * (val * 6 - 15) + 10);
    const lerp = (a: number, b: number, val: number) => a + val * (b - a);
    const grad = (hash: number, x: number, y: number) => {
      const h = hash & 7;
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
    };
    const noise2 = (x: number, y: number) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const xf = x - Math.floor(x);
      const yf = y - Math.floor(y);
      const u = fade(xf);
      const v = fade(yf);
      const aa = perm[perm[X] + Y];
      const ab = perm[perm[X] + Y + 1];
      const ba = perm[perm[X + 1] + Y];
      const bb = perm[perm[X + 1] + Y + 1];
      return lerp(
        lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
        lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
        v
      );
    };
    const fbm = (x: number, y: number) =>
      noise2(x, y) * 0.6 + noise2(x * 2.1, y * 2.1) * 0.4;

    // ── Color helpers ───────────────────────────────────────────────
    const hexToRgb = (hex: string): [number, number, number] => {
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

    const lerpColor = (
      a: [number, number, number],
      b: [number, number, number],
      factor: number
    ): [number, number, number] => [
        Math.round(a[0] + (b[0] - a[0]) * factor),
        Math.round(a[1] + (b[1] - a[1]) * factor),
        Math.round(a[2] + (b[2] - a[2]) * factor),
      ];

    const baseRgb = hexToRgb(dotColor);
    const bloomRgb = hexToRgb(bloomColor);

    // ── Resize via non-blocking dimensions ──────────────────────────
    const applyDimensions = (newW: number, newH: number) => {
      if (!canvas || newW === 0 || newH === 0) return;
      const dpr = window.devicePixelRatio || 1;
      W = newW;
      H = newH;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvasRect = null;
    };

    // ── Draw loop ───────────────────────────────────────────────────
    const draw = () => {
      if (W === 0 || H === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      const {
        speed: sp,
        density: den,
        intensity: intens,
        cursorRadius: curRad,
        cursorStrength: curStr,
        moveAmplitude: moveAmp,
        interactiveMove: curMove,
        centerFade: cFade,
      } = stateRef.current;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, W, H);

      const spacingX = W / den;
      const spacingY = H / (den * (H / W));
      const cols = Math.ceil(W / spacingX) + 2;
      const rows = Math.ceil(H / spacingY) + 2;
      const nt = t * 0.0006 * sp;
      const motionTime = t * 0.015 * sp;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const baseX = col * spacingX;
          const baseY = row * spacingY;

          // Smooth fluid motion using 2D flow field & harmonics
          const noiseAngle = fbm(baseX * 0.003 + nt * 0.5, baseY * 0.003 + nt * 0.5) * Math.PI * 4;
          const harmonicX = Math.cos(motionTime + col * 0.2) * (moveAmp * 0.4);
          const harmonicY = Math.sin(motionTime + row * 0.2) * (moveAmp * 0.4);
          const flowX = Math.cos(noiseAngle) * (moveAmp * 0.6);
          const flowY = Math.sin(noiseAngle) * (moveAmp * 0.6);

          const moveOffsetX = flowX + harmonicX;
          const moveOffsetY = flowY + harmonicY;

          // Ambient noise bloom
          const n = fbm(baseX * 0.004 + nt, baseY * 0.0036 + nt * 0.7);
          const v = (n + 1) * 0.5;
          const thresh = 0.30;
          const vn = v < thresh ? 0 : Math.min((v - thresh) / (1 - thresh), 1);
          const ambientBloom = Math.pow(vn, 1.35) * intens;

          // Cursor displacement and bloom
          const currentPosX = baseX + moveOffsetX;
          const currentPosY = baseY + moveOffsetY;
          const dx = currentPosX - mx;
          const dy = currentPosY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let cursorBloom = 0;
          let pushX = 0;
          let pushY = 0;

          if (dist < curRad) {
            const norm = 1 - dist / curRad;
            cursorBloom = Math.pow(norm, 1.8) * curStr;

            if (curMove) {
              const pushDist = Math.pow(norm, 1.4) * 22 * curStr;
              const angle = Math.atan2(dy, dx);
              pushX = Math.cos(angle) * pushDist;
              pushY = Math.sin(angle) * pushDist;
            }
          }

          const finalX = currentPosX + pushX;
          const finalY = currentPosY + pushY;

          // Center fade calculation for text area readability
          let centerFactor = 1;
          if (cFade) {
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
      if (isVisible) {
        animId = requestAnimationFrame(draw);
      }
    };

    let isVisible = false;
    const startAnimation = () => {
      if (!animId) {
        animId = requestAnimationFrame(draw);
      }
    };
    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startAnimation();
          } else {
            stopAnimation();
          }
        },
        { threshold: 0 }
      );
      io.observe(canvas);
    } else {
      isVisible = true;
      startAnimation();
    }

    let ro: ResizeObserver | null = null;
    if (canvas.parentElement && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const rect = entry.contentRect;
          if (rect.width > 0 && rect.height > 0) {
            applyDimensions(rect.width, rect.height);
          }
        }
      });
      ro.observe(canvas.parentElement);
    }

    return () => {
      stopAnimation();
      if (io) io.disconnect();
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
