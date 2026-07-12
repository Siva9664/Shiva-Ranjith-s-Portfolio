'use client';
import { motion } from 'framer-motion';
import Introduction from './about/Introduction';
import Philosophy from './about/Philosophy';
import Journey from './about/Journey';
import Values from './about/Values';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About The Engineering Mind">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em' }}>01</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em' }}>/ THE ENGINEERING MIND</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
            About Me
          </motion.h2>
          <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
            style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--cyan), var(--purple))', borderRadius: '2px', marginTop: '14px' }} />
        </div>

        {/* Master Orchestration of Sub-Components */}
        <Introduction />
        <Philosophy />
        <Journey />
        <Values />
        
      </div>
    </section>
  );
}
