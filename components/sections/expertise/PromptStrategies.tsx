'use client';
import { motion } from 'framer-motion';
import { PROMPT_STRATEGIES } from '@/lib/data';

export default function PromptStrategies() {
  return (
    <div style={{ marginBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
          Prompt Engineering
        </h3>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          Advanced techniques for reliable LLM interaction
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {PROMPT_STRATEGIES.map((strategy, i) => (
          <motion.div
            key={strategy.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card"
            style={{
              padding: '24px', borderRadius: '16px',
              borderTop: '2px solid var(--cyan)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', marginBottom: '12px' }}>
              &gt; {strategy.name}
            </div>
            <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {strategy.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
