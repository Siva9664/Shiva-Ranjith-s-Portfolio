'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

const roles = PERSONAL.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" style={{
      position: 'relative', zIndex: 10,
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px 80px',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 9.2, duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '999px', marginBottom: '32px',
            background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ color: '#10b981', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
            {PERSONAL.currentRole} · {PERSONAL.currentProject}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 9.5, duration: 0.8 }}
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px' }}
        >
          <span style={{ color: 'rgba(240,248,255,0.9)' }}>I&apos;m </span>
          <span style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #00d4ff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
          }}>
            Sivaranjith S
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9.8, duration: 0.6 }}
          style={{ marginBottom: '28px', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#00d4ff', fontWeight: 400,
          }}>
            {displayed}
            <span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid #00d4ff', marginLeft: 2 }} />
          </span>
        </motion.div>

        {/* Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 10.1, duration: 0.8 }}
          style={{
            color: 'rgba(240,248,255,0.6)', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 48px',
          }}
        >
          Engineering intelligent algorithms and scalable web applications to bridge the gap between
          AI research and real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 10.4, duration: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <HoloButton href="#projects" primary>View My Work</HoloButton>
          <HoloButton href={PERSONAL.github} external>GitHub</HoloButton>
          <HoloButton href={PERSONAL.linkedin} external>LinkedIn</HoloButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 11, duration: 1 }}
          style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ color: 'rgba(240,248,255,0.3)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #00d4ff, transparent)' }}
          />
        </motion.div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}

function HoloButton({ href, children, primary, external }: {
  href: string; children: React.ReactNode; primary?: boolean; external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05, boxShadow: primary ? '0 0 30px rgba(0,212,255,0.5)' : '0 0 20px rgba(168,85,247,0.3)' }}
      whileTap={{ scale: 0.97 }}
      data-hover
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '12px 28px', borderRadius: '12px',
        textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
        fontFamily: 'var(--font-main)', letterSpacing: '0.04em',
        background: primary
          ? 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))'
          : 'rgba(255,255,255,0.03)',
        border: primary ? '1px solid rgba(0,212,255,0.5)' : '1px solid rgba(255,255,255,0.12)',
        color: primary ? '#00d4ff' : 'rgba(240,248,255,0.7)',
        transition: 'all 0.25s ease',
      }}
    >
      {children}
    </motion.a>
  );
}
