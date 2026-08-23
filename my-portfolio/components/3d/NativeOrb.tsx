"use client";
import React, { useEffect, useRef } from "react";

/**
 * Infinite warp-speed starfield — edge-to-edge, no boundaries.
 * Stars spawn everywhere and streak outward from center into endless black.
 */
export default function NativeOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      // Use full window dimensions, not parent — truly edge-to-edge
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Stars ---
    const STAR_COUNT = 800;

    interface Star {
      x: number;
      y: number;
      z: number;
      pz: number;
      speed: number;
    }

    const spawnStar = (): Star => ({
      x: (Math.random() - 0.5) * 2.4,
      y: (Math.random() - 0.5) * 2.4,
      z: Math.random() * 0.95 + 0.05,
      pz: 1,
      speed: 0.002 + Math.random() * 0.006,
    });

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const s = spawnStar();
      s.pz = s.z + 0.005;
      return s;
    });

    const startTime = performance.now();

    const draw = (now: number) => {
      const elapsed = (now - startTime) / 1000;

      // Warp curve: gentle → accelerate → cruise
      let warp: number;
      if (elapsed < 0.5) {
        warp = 0.12;
      } else if (elapsed < 3) {
        const t = (elapsed - 0.5) / 2.5;
        warp = 0.12 + t * t * t * 5;
      } else {
        warp = 5 + Math.sin(elapsed * 0.6) * 0.4;
      }

      // Motion blur: semi-transparent black overlay per frame
      // Lower alpha = longer trails
      const trail = warp < 1 ? 0.15 : Math.max(0.04, 0.12 - warp * 0.012);
      ctx.fillStyle = `rgba(0, 0, 0, ${trail})`;
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const fov = Math.max(w, h) * 0.6;

      for (const s of stars) {
        s.pz = s.z;
        s.z -= s.speed * warp;

        if (s.z <= 0.001) {
          Object.assign(s, spawnStar());
          s.z = 0.9 + Math.random() * 0.1;
          s.pz = s.z;
          continue;
        }

        // Project to screen
        const sx = (s.x / s.z) * fov + cx;
        const sy = (s.y / s.z) * fov + cy;
        const px = (s.x / s.pz) * fov + cx;
        const py = (s.y / s.pz) * fov + cy;

        // Let stars go well past edges — no culling
        if (sx < -200 || sx > w + 200 || sy < -200 || sy > h + 200) continue;

        const depth = 1 - s.z;
        const size = Math.max(0.4, depth * 3);
        const alpha = Math.min(1, depth * 1.2);
        const dx = sx - px;
        const dy = sy - py;
        const len = Math.sqrt(dx * dx + dy * dy);

        if (len > 2 && warp > 0.3) {
          // Streak
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          const grad = ctx.createLinearGradient(px, py, sx, sy);
          grad.addColorStop(0, `rgba(180, 210, 240, 0)`);
          grad.addColorStop(0.5, `rgba(180, 210, 240, ${alpha * 0.2})`);
          grad.addColorStop(1, `rgba(210, 230, 255, ${alpha * 0.8})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.min(size * 0.7, 2.5);
          ctx.lineCap = "round";
          ctx.stroke();

          // Head dot — hint of blue
          if (depth > 0.3) {
            ctx.beginPath();
            ctx.arc(sx, sy, size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 225, 255, ${alpha * 0.7})`;
            ctx.fill();
          }
        } else {
          // Dot
          ctx.beginPath();
          ctx.arc(sx, sy, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 245, ${alpha * 0.45})`;
          ctx.fill();
        }
      }

      // No center bloom — pure black void

      animId.current = requestAnimationFrame(draw);
    };

    // Start fully black
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    animId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "block",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
