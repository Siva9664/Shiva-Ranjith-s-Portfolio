'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL, BRAND, ENGINEERING_DOMAINS } from '@/lib/data';

const roles = PERSONAL.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        position: 'relative', zIndex: 10,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '120px 28px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Aurora */}
      <div className="aurora" />

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ textAlign: 'center', maxWidth: '960px', position: 'relative', zIndex: 2 }}>

        {/* System label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.3, duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '36px' }}
        >
          <div style={{
            padding: '5px 14px', borderRadius: '999px',
            border: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', letterSpacing: '0.15em' }}>
              {BRAND.name} · {BRAND.version} · ONLINE
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.06, marginBottom: '20px', letterSpacing: '-0.02em' }}
        >
          <span style={{ color: 'var(--primary)' }}>I&apos;m </span>
          <span className="holo-text">Siva Ranjith</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 9.9, duration: 0.6 }}
          style={{ height: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
            color: 'var(--cyan)', fontWeight: 400, letterSpacing: '0.02em',
          }}>
            {displayed}
            <span style={{ borderRight: '2px solid var(--cyan)', marginLeft: '2px', animation: 'blink 1s step-end infinite' }} />
          </span>
        </motion.div>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 10.2, duration: 0.8 }}
          style={{
            color: 'var(--secondary)', fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 56px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {PERSONAL.mission}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 10.5, duration: 0.6 }}
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}
        >
          <GlowButton href="#projects" primary>View Projects →</GlowButton>
          <GlowButton href="#contact">Contact Me</GlowButton>
          <GlowButton href={PERSONAL.resume || '#'} external>Download Resume</GlowButton>
        </motion.div>

        {/* Domain chips */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 10.8, duration: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
        >
          {ENGINEERING_DOMAINS.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 10.9 + i * 0.06 }}
              data-hover
              style={{
                padding: '7px 16px', borderRadius: '999px',
                border: `1px solid color-mix(in srgb, ${d.color} 30%, transparent)`,
                background: `color-mix(in srgb, ${d.color} 10%, transparent)`,
                color: d.color, fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)', fontWeight: 500,
                letterSpacing: '0.04em',
              }}
            >
              {d.icon} {d.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 11.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--cyan), transparent)' }}
        />
      </motion.div>
    </section>
  );
}

function GlowButton({ href, children, primary, external }: {
  href: string; children: React.ReactNode; primary?: boolean; external?: boolean;
}) {
  const isAnchor = href.startsWith('#');
  const onClick = isAnchor ? (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  } : undefined;

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.04, boxShadow: primary ? 'var(--glow-cyan)' : 'var(--glow-purple)' }}
      whileTap={{ scale: 0.97 }}
      data-hover
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '12px 26px', borderRadius: '12px',
        textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
        fontFamily: 'var(--font-body)', letterSpacing: '0.03em',
        background: primary
          ? 'linear-gradient(135deg, color-mix(in srgb, var(--cyan) 15%, transparent), color-mix(in srgb, var(--purple) 12%, transparent))'
          : 'var(--glass-bg)',
        border: primary ? '1px solid color-mix(in srgb, var(--cyan) 45%, transparent)' : '1px solid var(--glass-border)',
        color: primary ? 'var(--cyan)' : 'var(--secondary)',
        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </motion.a>
  );
}
