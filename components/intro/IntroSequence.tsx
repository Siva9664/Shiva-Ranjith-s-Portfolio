'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/* ─── Intro Sequence ─────────────────────────────────────────────────────────
   Phase 1: Darkness
   Phase 2: Particles emerge
   Phase 3: Neural connections form + energy flows
   Phase 4: Particles assemble into brain hemisphere
   Phase 5: Brain morphs into "S·R" initials
   Phase 6: Logo explodes → particles scatter
   Phase 7: Overlay fades out → homepage visible
────────────────────────────────────────────────────────────────────────────── */

const PARTICLE_COUNT = 1800;
const W = () => (typeof window !== 'undefined' ? window.innerWidth : 1200);
const H = () => (typeof window !== 'undefined' ? window.innerHeight : 800);

interface Particle {
  x: number; y: number; tx: number; ty: number;
  vx: number; vy: number; alpha: number; size: number;
  color: string;
}

export default function IntroSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = W();
    canvas.height = H();

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const colors = ['#00d4ff', '#a855f7', '#ffffff', '#7dd3fc'];
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      tx: Math.random() * canvas.width,
      ty: Math.random() * canvas.height,
      vx: 0, vy: 0,
      alpha: 0,
      size: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // ── Brain target positions (hemisphere)
    function brainTarget(i: number) {
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      const phi = (i / PARTICLE_COUNT) * Math.PI;
      const r = 160 + Math.random() * 60;
      return {
        tx: cx + r * Math.sin(phi) * Math.cos(t * 3),
        ty: cy - 40 + r * 0.6 * Math.cos(phi) + Math.random() * 30,
      };
    }

    // ── "SR" text target positions (rasterize text on offscreen canvas)
    const cw = canvas.width;
    const ch = canvas.height;
    function getTextTargets(): { x: number; y: number }[] {
      const off = document.createElement('canvas');
      off.width = cw; off.height = ch;
      const oc = off.getContext('2d')!;
      oc.fillStyle = '#fff';
      oc.font = `bold ${Math.min(cw * 0.18, 200)}px "Space Grotesk", sans-serif`;
      oc.textAlign = 'center';
      oc.textBaseline = 'middle';
      oc.fillText('S·R', cx, cy);
      const data = oc.getImageData(0, 0, off.width, off.height).data;
      const pts: { x: number; y: number }[] = [];
      const step = 5;
      for (let py = 0; py < off.height; py += step) {
        for (let px = 0; px < off.width; px += step) {
          const idx = (py * off.width + px) * 4;
          if (data[idx + 3] > 128) pts.push({ x: px, y: py });
        }
      }
      return pts;
    }

    let phase = 0;
    let textTargets: { x: number; y: number }[] = [];
    let animId: number;

    // Connections (phase 3)
    const connections: { a: number; b: number; progress: number }[] = [];
    const addConnections = () => {
      for (let i = 0; i < 80; i++) {
        const a = Math.floor(Math.random() * PARTICLE_COUNT);
        const b = Math.floor(Math.random() * PARTICLE_COUNT);
        connections.push({ a, b, progress: 0 });
      }
    };

    // ── Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections in phase 3+
      if (phase >= 3) {
        connections.forEach((c) => {
          const pa = particles[c.a];
          const pb = particles[c.b];
          const dist = Math.hypot(pa.x - pb.x, pa.y - pb.y);
          if (dist < 120) {
            c.progress = Math.min(1, c.progress + 0.015);
            const alpha = c.progress * 0.4 * pa.alpha;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }

      // Draw particles
      particles.forEach((p) => {
        if (p.alpha <= 0) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `,${p.alpha})`).replace('rgb', 'rgba').replace('#', '');
        // Use hex approach
        const hex = p.color;
        const r2 = parseInt(hex.slice(1, 3), 16);
        const g2 = parseInt(hex.slice(3, 5), 16);
        const b2 = parseInt(hex.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r2},${g2},${b2},${p.alpha})`;
        // Glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };
    render();

    // ── GSAP Timeline
    const tl = gsap.timeline();

    // Phase 1: darkness (0.5s)
    tl.to({}, { duration: 0.5 });

    // Phase 2: particles appear (1.5s)
    tl.to(particles, {
      duration: 1.5,
      alpha: () => Math.random() * 0.6 + 0.2,
      stagger: { amount: 1.2, from: 'random' },
      ease: 'power2.out',
      onStart: () => { phase = 2; },
    });

    // Phase 3: connections form (1s)
    tl.to({}, {
      duration: 0.1,
      onStart: () => { phase = 3; addConnections(); },
    });
    tl.to({}, { duration: 0.9 });

    // Phase 4: assemble into brain (2s)
    tl.to(particles, {
      duration: 2,
      x: (i: number) => brainTarget(i).tx,
      y: (i: number) => brainTarget(i).ty,
      alpha: () => Math.random() * 0.7 + 0.3,
      ease: 'power3.inOut',
      onStart: () => { phase = 4; },
    });

    // Phase 5: morph to logo (1.5s)
    tl.add(() => { textTargets = getTextTargets(); })
      .to(particles, {
        duration: 1.5,
        x: (i: number) => {
          const t = textTargets[i % textTargets.length];
          return t ? t.x + (Math.random() - 0.5) * 4 : cx;
        },
        y: (i: number) => {
          const t = textTargets[i % textTargets.length];
          return t ? t.y + (Math.random() - 0.5) * 4 : cy;
        },
        alpha: () => Math.random() * 0.5 + 0.5,
        size: () => Math.random() * 1.5 + 0.5,
        ease: 'expo.inOut',
        onStart: () => { phase = 5; },
      });

    // Hold logo (0.8s)
    tl.to({}, { duration: 0.8 });

    // Phase 6: EXPLODE (1s)
    tl.to(particles, {
      duration: 1,
      x: () => cx + (Math.random() - 0.5) * W() * 2.5,
      y: () => cy + (Math.random() - 0.5) * H() * 2.5,
      alpha: 0,
      ease: 'expo.in',
      stagger: { amount: 0.3, from: 'center' },
      onStart: () => { phase = 6; },
    });

    // Phase 7: fade overlay out (0.8s)
    tl.to(overlay, {
      duration: 0.8,
      opacity: 0,
      ease: 'power2.inOut',
      onComplete: () => {
        setDone(true);
        cancelAnimationFrame(animId);
      },
    });

    const handleResize = () => {
      canvas.width = W();
      canvas.height = H();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      tl.kill();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      id="intro-overlay"
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#000010' }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
