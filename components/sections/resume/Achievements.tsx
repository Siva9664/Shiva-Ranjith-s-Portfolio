'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '@/lib/data';

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <SectionHeader index="07" label="Achievements" title="By the Numbers" />

        <div ref={ref} style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card"
              style={{
                borderRadius: '20px', padding: '32px 24px', textAlign: 'center',
                border: `1px solid color-mix(in srgb, ${a.color} 15%, transparent)`,
                background: `linear-gradient(135deg, color-mix(in srgb, ${a.color} 5%, transparent), var(--bg-card))`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <motion.div
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, ${a.color} 25%, transparent), transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Icon */}
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{a.icon}</div>

              {/* Value */}
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: a.color, marginBottom: '8px',
                textShadow: `0 0 30px color-mix(in srgb, ${a.color} 44%, transparent)`,
              }}>
                {a.value}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--secondary)', letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {a.label}
              </div>

              {/* Bottom line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${a.color} 40%, transparent), transparent)`,
              }} />
            </motion.div>
          ))}
        </div>

        {/* Currently section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ marginTop: '48px', padding: '32px 40px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}
          className="glass-card"
        >
          <div style={{
            width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
            background: 'color-mix(in srgb, var(--emerald) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--emerald) 30%, transparent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
          }}>
            🏢
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>
              Currently at GrowAITech
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--secondary)' }}>
              45-day internship · GAT ERP System · React & Firebase
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 10px var(--emerald)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--emerald)' }}>Active</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionHeader({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em' }}>{index}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em' }}>/ {label.toUpperCase()}</span>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
        {title}
      </motion.h2>
      <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
        style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--cyan), var(--purple))', borderRadius: '2px', marginTop: '14px' }} />
    </div>
  );
}
