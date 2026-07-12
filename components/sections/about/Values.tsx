'use client';
import { motion } from 'framer-motion';
import { VALUES, INTERESTS, FUN_FACTS } from '@/lib/data';

export default function Values() {
  return (
    <div style={{ padding: '80px 0' }}>
      
      {/* Learning Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center', marginBottom: '100px',
          padding: '40px', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)'
        }}
      >
        <h2 style={{
          fontFamily: '"Caveat", cursive, var(--font-display)', // Handwritten effect
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--cyan)',
          fontWeight: 400, letterSpacing: '0.02em', fontStyle: 'italic',
          textShadow: '0 0 20px color-mix(in srgb, var(--cyan) 20%, transparent)'
        }}>
          &quot;I believe every project teaches something that books alone cannot.&quot;
        </h2>
      </motion.div>

      {/* Core Values & Interests Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        
        {/* Core Values */}
        <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--emerald)', letterSpacing: '0.2em', marginBottom: '32px' }}>
            CORE VALUES
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {VALUES.map((val, i) => (
              <motion.div
                key={val}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4, background: 'color-mix(in srgb, var(--emerald) 15%, transparent)' }}
                style={{
                  padding: '12px 20px', borderRadius: '999px',
                  background: 'color-mix(in srgb, var(--emerald) 5%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--emerald) 20%, transparent)',
                  color: 'var(--emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                  cursor: 'default', transition: 'background 0.3s'
                }}
              >
                {val}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Interests (Stylized Node Graph) */}
        <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--purple)', letterSpacing: '0.2em', marginBottom: '32px' }}>
            CURRENT INTERESTS
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {INTERESTS.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--purple)', color: 'var(--primary)' }}
                style={{
                  padding: '10px 16px', borderRadius: '12px',
                  background: 'transparent',
                  border: '1px dashed color-mix(in srgb, var(--purple) 30%, transparent)',
                  color: 'var(--secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                  cursor: 'crosshair', transition: 'all 0.3s'
                }}
              >
                {/* Node dot */}
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--purple)', marginRight: '8px' }} />
                {interest}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Facts & Motto */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '40px', borderRadius: '24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', textAlign: 'center' }}
        >
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cyan)', letterSpacing: '0.2em', marginBottom: '32px' }}>
            FUN FACTS
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            {FUN_FACTS.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ color: 'var(--secondary)', fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
              >
                ⚡ {fact}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ textAlign: 'center', marginTop: '60px', padding: '60px 0' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.1, color: 'var(--primary)',
            letterSpacing: '-0.02em',
          }}>
            Build systems <span style={{ color: 'var(--cyan)' }}>that think.</span><br/>
            Create products <span style={{ color: 'var(--purple)' }}>that matter.</span>
          </h1>
          <p style={{ marginTop: '30px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            The future belongs to engineers who combine intelligence with imagination.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
