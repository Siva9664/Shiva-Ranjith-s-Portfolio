'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface InfoPanelProps {
  activeSkill: { name: string; desc: string; color: string } | null;
  onClose: () => void;
}

export default function InfoPanel({ activeSkill, onClose }: InfoPanelProps) {
  return (
    <AnimatePresence>
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="glass-card"
          style={{
            position: 'absolute', top: '100px', right: '40px',
            width: '320px', padding: '32px', borderRadius: '24px',
            background: `linear-gradient(135deg, color-mix(in srgb, ${activeSkill.color} 10%, transparent), var(--bg-card))`,
            border: `1px solid color-mix(in srgb, ${activeSkill.color} 30%, transparent)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.2), inset 0 0 0 1px color-mix(in srgb, ${activeSkill.color} 10%, transparent)`,
            backdropFilter: 'blur(30px)', zIndex: 50,
          }}
        >
          <button
            onClick={onClose}
            data-hover
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'none', border: 'none', color: 'var(--secondary)',
              fontSize: '1.2rem', cursor: 'none'
            }}
          >
            ×
          </button>
          
          <div style={{
            width: 48, height: 48, borderRadius: '12px', marginBottom: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `color-mix(in srgb, ${activeSkill.color} 15%, transparent)`,
            border: `1px solid color-mix(in srgb, ${activeSkill.color} 40%, transparent)`,
          }}>
            <span style={{ fontSize: '1.4rem' }}>🛰️</span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '8px' }}>
            {activeSkill.name}
          </h3>
          <div style={{ width: 40, height: 2, background: activeSkill.color, borderRadius: 2, marginBottom: '20px' }} />
          
          <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
            {activeSkill.desc}
          </p>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: activeSkill.color, letterSpacing: '0.1em' }}>
            [ SYSTEM NODE ACTIVE ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
