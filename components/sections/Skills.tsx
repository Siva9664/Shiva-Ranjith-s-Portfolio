'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/lib/data';

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const activeSkill = SKILLS.find((s) => s.id === active);

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader label="02 / SKILLS" title="AI Skill Galaxy" />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', color: 'rgba(240,248,255,0.45)', marginTop: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.05em' }}
        >
          Click a planet to explore · Each cluster is a domain
        </motion.p>

        {/* Galaxy canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', height: '520px', marginTop: '48px' }}
        >
          {/* Central core */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 80, height: 80, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.9) 0%, rgba(0,212,255,0.3) 50%, transparent 70%)',
            boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)',
            zIndex: 5,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
            letterSpacing: '0.05em',
          }}>
            CORE
          </div>

          {/* Orbit rings */}
          {SKILLS.map((skill, i) => {
            const radius = 80 + (i + 1) * 80;
            return (
              <div key={skill.id} style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: radius * 2, height: radius * 2,
                borderRadius: '50%',
                border: `1px solid ${skill.color}18`,
              }} />
            );
          })}

          {/* Planet clusters */}
          {SKILLS.map((skill, gi) => {
            const radius = 80 + (gi + 1) * 80;
            const baseAngle = (gi * 90) * (Math.PI / 180);
            const planetCount = skill.skills.length;

            return skill.skills.map((s, pi) => {
              const spread = 0.6;
              const angle = baseAngle + (pi - planetCount / 2) * spread / planetCount;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius * 0.55; // flatten to ellipse
              const isMain = pi === Math.floor(planetCount / 2);
              const size = isMain ? 52 : 36;

              return (
                <motion.button
                  key={s}
                  onClick={() => setActive(active === skill.id ? null : skill.id)}
                  animate={{
                    x: x, y: y,
                    rotate: [0, 360],
                  }}
                  transition={{
                    x: { duration: 0 }, y: { duration: 0 },
                    rotate: { duration: 20 + gi * 8, repeat: Infinity, ease: 'linear' },
                  }}
                  whileHover={{ scale: 1.25 }}
                  data-hover
                  style={{
                    position: 'absolute', top: '50%', left: '50%',
                    marginTop: -size / 2, marginLeft: -size / 2,
                    width: size, height: size, borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 35%, ${skill.color}cc, ${skill.color}44)`,
                    border: `1px solid ${skill.color}66`,
                    boxShadow: active === skill.id
                      ? `0 0 30px ${skill.color}cc, 0 0 60px ${skill.color}44`
                      : `0 0 12px ${skill.color}66`,
                    cursor: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: isMain ? '0.65rem' : '0.55rem',
                    fontFamily: 'var(--font-mono)', fontWeight: 600,
                    color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    zIndex: 4, overflow: 'hidden',
                  }}
                  title={s}
                >
                  <span style={{ padding: '2px', textAlign: 'center', lineHeight: 1.2, fontSize: isMain ? '0.6rem' : '0.5rem' }}>
                    {s.length > 7 ? s.slice(0, 6) + '…' : s}
                  </span>
                </motion.button>
              );
            });
          })}
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              style={{
                marginTop: '32px',
                padding: '32px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${activeSkill.color}08, rgba(0,0,0,0.3))`,
                border: `1px solid ${activeSkill.color}33`,
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: `radial-gradient(circle, ${activeSkill.color}cc, ${activeSkill.color}33)`,
                  boxShadow: `0 0 20px ${activeSkill.color}88`,
                }} />
                <h3 style={{ color: activeSkill.color, fontWeight: 700, fontSize: '1.3rem' }}>{activeSkill.name}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {activeSkill.skills.map((sk) => (
                  <motion.span
                    key={sk}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      padding: '6px 16px', borderRadius: '999px',
                      background: `${activeSkill.color}14`,
                      border: `1px solid ${activeSkill.color}44`,
                      color: activeSkill.color, fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)', fontWeight: 500,
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
