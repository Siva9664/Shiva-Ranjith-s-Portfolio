'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GalaxyScene from './skills/GalaxyScene';
import InfoPanel from './skills/InfoPanel';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<{ name: string; desc: string; color: string } | null>(null);

  return (
    <section id="skills" className="section" style={{ padding: 0 }} aria-label="Skills Galaxy">
      <div style={{ position: 'relative', width: '100%', height: '100vh', background: 'var(--bg-primary)' }}>
        
        {/* Section Header Overlay */}
        <div style={{ position: 'absolute', top: '100px', left: '40px', zIndex: 10, pointerEvents: 'none' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em' }}>02</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em' }}>/ TECHNOLOGICAL UNIVERSE</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
            Skills Galaxy
          </motion.h2>
          <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
            style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--cyan), var(--purple))', borderRadius: '2px', marginTop: '14px' }} />
          
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '16px', letterSpacing: '0.08em' }}
          >
            DRAG TO EXPLORE · CLICK TO FOCUS
          </motion.p>
        </div>

        {/* 3D R3F Galaxy Scene */}
        <GalaxyScene 
          activeSkillName={activeSkill?.name || null} 
          onPlanetClick={setActiveSkill} 
        />

        {/* Interactive Info Panel Overlay */}
        <InfoPanel 
          activeSkill={activeSkill} 
          onClose={() => setActiveSkill(null)} 
        />

      </div>
    </section>
  );
}
