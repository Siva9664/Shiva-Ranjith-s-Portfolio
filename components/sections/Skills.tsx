'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/lib/data';

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const activeSkill = SKILLS.find((s) => s.id === active);

  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <SectionHeader index="02" label="Skills" title="Engineering Skill Matrix" />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '8px', letterSpacing: '0.08em' }}
        >
          Select a domain to explore the full stack
        </motion.p>

        {/* Domain grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '48px' }}>
          {SKILLS.map((domain, i) => {
            const isActive = active === domain.id;
            return (
              <motion.button
                key={domain.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onClick={() => setActive(isActive ? null : domain.id)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                data-hover
                aria-pressed={isActive}
                aria-label={`Explore ${domain.name} skills`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, color-mix(in srgb, ${domain.color} 12%, transparent), color-mix(in srgb, ${domain.color} 6%, transparent))`
                    : 'var(--glass-bg)',
                  border: `1px solid color-mix(in srgb, ${domain.color} ${isActive ? '40%' : '15%'}, transparent)`,
                  borderRadius: '16px', padding: '22px 24px',
                  cursor: 'none', textAlign: 'left',
                  backdropFilter: 'blur(20px)',
                  boxShadow: isActive ? `0 8px 40px color-mix(in srgb, ${domain.color} 15%, transparent)` : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                    background: `color-mix(in srgb, ${domain.color} 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${domain.color} 25%, transparent)`,
                    boxShadow: isActive ? `0 0 16px color-mix(in srgb, ${domain.color} 40%, transparent)` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}>
                    {domain.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: isActive ? domain.color : 'var(--primary)', transition: 'color 0.2s' }}>
                      {domain.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--secondary)', marginTop: '2px' }}>
                      {domain.skills.length} technologies
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: isActive ? domain.color : 'var(--muted)', transition: 'color 0.2s' }}>
                    {isActive ? '▲' : '▼'}
                  </div>
                </div>

                {/* Preview chips */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {domain.skills.slice(0, 3).map((sk) => (
                    <span key={sk} style={{
                      padding: '3px 10px', borderRadius: '6px', fontSize: '0.7rem',
                      background: `color-mix(in srgb, ${domain.color} 8%, transparent)`, 
                      border: `1px solid color-mix(in srgb, ${domain.color} 20%, transparent)`,
                      color: domain.color, opacity: 0.85, fontFamily: 'var(--font-mono)',
                    }}>
                      {sk}
                    </span>
                  ))}
                  {domain.skills.length > 3 && (
                    <span style={{ padding: '3px 8px', fontSize: '0.7rem', color: 'var(--secondary)', fontFamily: 'var(--font-mono)' }}>
                      +{domain.skills.length - 3}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: '24px', padding: '32px', borderRadius: '20px',
                background: `linear-gradient(135deg, color-mix(in srgb, ${activeSkill.color} 6%, transparent), var(--bg-card))`,
                border: `1px solid color-mix(in srgb, ${activeSkill.color} 30%, transparent)`,
                backdropFilter: 'blur(24px)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--secondary)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                {activeSkill.name.toUpperCase()} · ALL TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {activeSkill.skills.map((sk, si) => (
                  <motion.span
                    key={sk}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: si * 0.05 }}
                    style={{
                      padding: '8px 18px', borderRadius: '10px',
                      background: `color-mix(in srgb, ${activeSkill.color} 12%, transparent)`, 
                      border: `1px solid color-mix(in srgb, ${activeSkill.color} 30%, transparent)`,
                      color: activeSkill.color, fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem', fontWeight: 500,
                    }}
                  >
                    {sk}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
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
