'use client';
import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/data';

export default function Journey() {
  return (
    <div style={{ position: 'relative', padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
          Engineering Journey
        </h3>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Each year is a planet · Achievements unlock as constellations
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '36px', left: '60px', right: '60px', height: '2px',
            background: 'linear-gradient(90deg, color-mix(in srgb, var(--cyan) 15%, transparent), color-mix(in srgb, var(--purple) 55%, transparent), color-mix(in srgb, var(--cyan) 15%, transparent))',
            transformOrigin: 'left',
            display: 'none',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {TIMELINE.map((era, i) => (
            <motion.div
              key={era.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'flex-start',
                gap: '28px',
                padding: '16px 0',
              }}
            >
              {/* Planet */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  animate={{ boxShadow: [`0 0 20px color-mix(in srgb, ${era.color} 25%, transparent)`, `0 0 40px color-mix(in srgb, ${era.color} 55%, transparent)`, `0 0 20px color-mix(in srgb, ${era.color} 25%, transparent)`] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 35%, color-mix(in srgb, ${era.color} 90%, transparent), color-mix(in srgb, ${era.color} 35%, transparent) 60%, color-mix(in srgb, ${era.color} 15%, transparent))`,
                    border: `2px solid color-mix(in srgb, ${era.color} 55%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.85rem',
                    color: 'var(--white)', textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                    flexShrink: 0,
                  }}
                >
                  {era.year}
                </motion.div>
                {/* Connector to next */}
                {i < TIMELINE.length - 1 && (
                  <div style={{ width: '2px', height: '40px', background: `linear-gradient(to bottom, color-mix(in srgb, ${era.color} 40%, transparent), color-mix(in srgb, ${TIMELINE[i + 1].color} 20%, transparent))` }} />
                )}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                style={{
                  flex: 1, padding: '24px 28px', borderRadius: '18px',
                  background: `linear-gradient(135deg, color-mix(in srgb, ${era.color} 8%, transparent), var(--bg-card))`,
                  border: `1px solid color-mix(in srgb, ${era.color} 15%, transparent)`,
                  backdropFilter: 'blur(20px)',
                  maxWidth: '600px',
                }}
              >
                <h3 style={{ color: era.color, fontWeight: 700, fontSize: '1.15rem', marginBottom: '6px' }}>{era.title}</h3>
                <p style={{ color: 'var(--secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '16px' }}>{era.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {era.achievements.map((a, ai) => (
                    <motion.span
                      key={a}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + ai * 0.08 }}
                      style={{
                        padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem',
                        background: `color-mix(in srgb, ${era.color} 10%, transparent)`, 
                        border: `1px solid color-mix(in srgb, ${era.color} 25%, transparent)`,
                        color: era.color, fontFamily: 'var(--font-mono)', fontWeight: 500,
                      }}
                    >
                      ✦ {a}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
