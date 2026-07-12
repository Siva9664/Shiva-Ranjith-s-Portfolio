'use client';
import { motion } from 'framer-motion';
import { RESEARCH } from '@/lib/data';

export default function Research() {
  return (
    <section id="research" className="section" aria-label="Research">
      <div className="container">
        <SectionHeader index="05" label="Research" title="Academic Contributions" />

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {RESEARCH.map((paper, i) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="glass-card"
              style={{
                borderRadius: '20px', padding: '36px 40px',
                borderLeft: `3px solid ${paper.color}`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '300px', height: '300px', borderRadius: '50%',
                background: `radial-gradient(circle, color-mix(in srgb, ${paper.color} 6%, transparent), transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div>
                  <motion.span
                    style={{
                      display: 'inline-block', padding: '4px 12px', borderRadius: '999px',
                      background: paper.status === 'Under Review' ? 'color-mix(in srgb, var(--purple) 10%, transparent)' : 'color-mix(in srgb, var(--emerald) 10%, transparent)',
                      border: `1px solid ${paper.status === 'Under Review' ? 'color-mix(in srgb, var(--purple) 30%, transparent)' : 'color-mix(in srgb, var(--emerald) 30%, transparent)'}`,
                      color: paper.status === 'Under Review' ? 'var(--purple)' : 'var(--emerald)',
                      fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                      marginBottom: '14px',
                    }}
                  >
                    ● {paper.status}
                  </motion.span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                    color: 'var(--primary)', lineHeight: 1.3,
                  }}>
                    {paper.title}
                  </h3>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: paper.color, fontWeight: 600 }}>
                    {paper.venue}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>
                    {paper.year}
                  </div>
                </div>
              </div>

              <p style={{
                color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.75,
                fontFamily: 'var(--font-body)', marginBottom: '24px',
              }}>
                {paper.abstract}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {paper.tags.map((tag) => (
                  <span key={tag} style={{
                    padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem',
                    background: `color-mix(in srgb, ${paper.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${paper.color} 25%, transparent)`,
                    color: paper.color, fontFamily: 'var(--font-mono)', fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          {/* Teaser card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              padding: '28px 40px', borderRadius: '20px',
              border: '1px dashed color-mix(in srgb, var(--cyan) 15%, transparent)',
              background: 'color-mix(in srgb, var(--cyan) 2%, transparent)',
              display: 'flex', alignItems: 'center', gap: '20px',
            }}
          >
            <div style={{ fontSize: '2rem' }}>🔬</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem', opacity: 0.8 }}>
                More research in progress…
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', opacity: 0.7, marginTop: '4px' }}>
                Agentic AI Systems · Computer Vision · Multi-Agent Optimization
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em' }}>
          {index}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em' }}>
          / {label.toUpperCase()}
        </span>
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
