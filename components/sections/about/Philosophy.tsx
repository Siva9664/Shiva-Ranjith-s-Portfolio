'use client';
import { motion } from 'framer-motion';
import { PHILOSOPHY } from '@/lib/data';

export default function Philosophy() {
  return (
    <div style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--emerald)', letterSpacing: '0.2em', marginBottom: '16px' }}>
          ENGINEERING PHILOSOPHY
        </h3>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
      }}>
        {PHILOSOPHY.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            className="glass-card"
            style={{
              padding: '32px 24px', borderRadius: '20px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              background: 'color-mix(in srgb, var(--emerald) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--emerald) 30%, transparent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem'
            }}>
              {item.icon}
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 700 }}>
              {item.title}
            </h4>
            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Why AI Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{
          marginTop: '80px', padding: '60px 40px', borderRadius: '32px', textAlign: 'center',
          background: 'linear-gradient(135deg, color-mix(in srgb, var(--cyan) 10%, transparent), color-mix(in srgb, var(--purple) 10%, transparent))',
          border: '1px solid color-mix(in srgb, var(--cyan) 20%, transparent)',
          position: 'relative', overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, background: 'var(--cyan)', filter: 'blur(100px)', opacity: 0.2 }} />
        <div style={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, background: 'var(--purple)', filter: 'blur(100px)', opacity: 0.2 }} />
        
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--primary)', fontWeight: 800, marginBottom: '24px' }}>
          Why Artificial Intelligence?
        </h3>
        <p style={{ color: 'var(--secondary)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-body)' }}>
          Artificial Intelligence combines logic, creativity, mathematics, engineering, and human-centered problem solving.
          It allows software to perceive, understand, reason, and continuously improve.
          <br /><br />
          <strong style={{ color: 'var(--cyan)' }}>This endless potential inspired me to specialize in AI Engineering.</strong>
        </p>
      </motion.div>
    </div>
  );
}
