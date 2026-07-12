'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const trail = useRef<{ x: number; y: number; alpha: number }[]>([]);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = trailCanvasRef.current;
    if (!dot || !ring || !canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      trail.current.push({ x: e.clientX, y: e.clientY, alpha: 1 });
      if (trail.current.length > 25) trail.current.shift();
    };

    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    // Ring follows with lag
    let ringX = -100, ringY = -100;
    let rafId: number;
    const animate = () => {
      ringX += (pos.current.x - ringX) * 0.12;
      ringY += (pos.current.y - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      // Draw trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.current.forEach((p, i) => {
        const alpha = (i / trail.current.length) * 0.5;
        const size = (i / trail.current.length) * 5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${alpha})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <canvas ref={trailCanvasRef} id="cursor-trail-canvas" />
      <div
        ref={dotRef}
        id="cursor-dot"
        style={{
          width: isHovering ? '20px' : '12px',
          height: isHovering ? '20px' : '12px',
          background: isHovering ? 'var(--purple)' : 'var(--cyan)',
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          borderColor: isHovering ? 'rgba(168,85,247,0.5)' : 'rgba(0,212,255,0.5)',
        }}
      />
    </>
  );
}
