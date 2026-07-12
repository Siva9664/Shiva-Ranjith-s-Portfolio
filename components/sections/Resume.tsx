'use client';
import { motion } from 'framer-motion';
// Temporary imports mapping to the old standalone files before full merge
import Research from './resume/Research';
import Expertise from './resume/Expertise';
import Achievements from './resume/Achievements';

export default function Resume() {
  return (
    <section id="resume" className="section" style={{ position: 'relative', zIndex: 10, padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em', marginBottom: '12px' }}>
            04 / PROFESSIONAL PROFILE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}>
            Resume & Architecture
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--cyan), var(--purple))', borderRadius: '2px', margin: '16px auto 0' }} />
        </div>

        {/* Modularly load the previously standalone sections as sub-sections here */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden' }}>
             <Expertise />
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden' }}>
             <Research />
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden' }}>
             <Achievements />
          </div>
        </div>

      </div>
    </section>
  );
}
