'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SectionHeader label="06 / CONTACT" title="Let's Build the Future" />

        {/* Glow container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: '64px', padding: '52px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(168,85,247,0.04))',
            border: '1px solid rgba(0,212,255,0.15)',
            backdropFilter: 'blur(30px)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 250, height: 250, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -80, left: -80,
            width: 250, height: 250, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{
            textAlign: 'center', color: 'rgba(240,248,255,0.55)',
            fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '44px',
          }}>
            Whether you want to collaborate on cutting-edge AI research, need a driven full-stack developer,
            or simply want to talk code — my inbox is always open.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FloatingInput label="Your Name" value={name} onChange={setName} />
              <FloatingInput label="Your Email" value={email} onChange={setEmail} type="email" />
            </div>
            <FloatingInput label="Your Message" value={message} onChange={setMessage} multiline />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
              data-hover
              style={{
                marginTop: '8px',
                padding: '16px 40px',
                borderRadius: '14px',
                border: '1px solid rgba(0,212,255,0.5)',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(168,85,247,0.12))',
                color: '#00d4ff', fontWeight: 700, fontSize: '1rem',
                fontFamily: 'var(--font-main)', cursor: 'none',
                letterSpacing: '0.05em',
                transition: 'all 0.25s',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </form>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: PERSONAL.github, color: '#f0f8ff' },
              { label: 'LinkedIn', href: PERSONAL.linkedin, color: '#00d4ff' },
              { label: 'LeetCode', href: PERSONAL.leetcode, color: '#f59e0b' },
              { label: 'Email', href: `mailto:${PERSONAL.email}`, color: '#a855f7' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                data-hover
                style={{
                  padding: '10px 22px', borderRadius: '12px',
                  border: `1px solid ${s.color}22`,
                  background: `${s.color}08`,
                  color: s.color, fontWeight: 600,
                  fontSize: '0.88rem', textDecoration: 'none',
                  fontFamily: 'var(--font-main)',
                  transition: 'all 0.2s',
                }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingInput({ label, value, onChange, type = 'text', multiline = false }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const base = {
    width: '100%', padding: '20px 16px 8px',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${active ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px', color: '#f0f8ff',
    fontFamily: 'var(--font-main)', fontSize: '0.95rem',
    outline: 'none', resize: 'none' as const,
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: active ? '0 0 0 3px rgba(0,212,255,0.06)' : 'none',
  };

  return (
    <div style={{ position: 'relative', gridColumn: multiline ? '1 / -1' : undefined }}>
      <label style={{
        position: 'absolute', left: '16px',
        top: active ? '8px' : '50%',
        transform: active ? 'none' : 'translateY(-50%)',
        fontSize: active ? '0.7rem' : '0.9rem',
        color: active ? '#00d4ff' : 'rgba(240,248,255,0.35)',
        transition: 'all 0.2s', pointerEvents: 'none',
        fontFamily: 'var(--font-mono)',
      }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          style={base}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...base, height: '56px' }}
        />
      )}
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00d4ff', letterSpacing: '0.2em', marginBottom: '12px' }}>
        {label}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f0f8ff' }}>
        {title}
      </motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
        style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #00d4ff, #a855f7)', borderRadius: '2px', margin: '16px auto 0' }} />
    </div>
  );
}
