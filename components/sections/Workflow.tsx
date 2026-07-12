'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WORKFLOW } from '@/lib/data';
import { gsap } from 'gsap';

export default function Workflow() {
  const pathsRef = useRef<SVGPathElement[]>([]);
  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    if (pathsRef.current.length === 0) return;
    // Animate dashes on paths to simulate packet flow
    pathsRef.current.forEach((path, i) => {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        delay: i * 0.3 + 1,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 2,
      });
    });
  }, []);

  return (
    <section id="workflow" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionHeader label="04 / WORKFLOW" title="AI Agent Pipeline" />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', color: 'rgba(240,248,255,0.4)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', marginTop: '12px', letterSpacing: '0.05em' }}
        >
          Energy flows between agents · Packets travel in real-time
        </motion.p>

        {/* Pipeline */}
        <div style={{ marginTop: '64px', position: 'relative' }}>
          {WORKFLOW.map((node, i) => {
            const isLast = i === WORKFLOW.length - 1;
            return (
              <div key={node.id}>
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  data-hover
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '20px 28px', borderRadius: '16px',
                    background: `linear-gradient(135deg, ${node.color}08, rgba(0,0,0,0.3))`,
                    border: `1px solid ${node.color}33`,
                    backdropFilter: 'blur(20px)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Pulse glow */}
                  <motion.div
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: `radial-gradient(circle at 20% 50%, ${node.color}22, transparent 60%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                    background: `${node.color}14`, border: `1px solid ${node.color}33`,
                    boxShadow: `0 0 16px ${node.color}33`,
                  }}>
                    {node.icon}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: node.color, fontSize: '1rem', marginBottom: '4px' }}>
                      {node.label}
                    </div>
                    <div style={{ color: 'rgba(240,248,255,0.5)', fontSize: '0.83rem', lineHeight: 1.5 }}>
                      {node.description}
                    </div>
                  </div>

                  {/* Step number */}
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${node.color}14`, border: `1px solid ${node.color}44`,
                    color: node.color, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Connector */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 0' }}
                  >
                    {/* Animated energy packet */}
                    <div style={{ position: 'relative', width: '2px', height: '36px' }}>
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to bottom, ${node.color}88, ${WORKFLOW[i + 1].color}88)`,
                      }} />
                      <motion.div
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4, ease: 'linear' }}
                        style={{
                          position: 'absolute', left: '-3px', width: '8px', height: '8px',
                          borderRadius: '50%',
                          background: node.color,
                          boxShadow: `0 0 10px ${node.color}`,
                        }}
                      />
                    </div>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      style={{ color: `${node.color}88`, fontSize: '1rem' }}
                    >
                      ↓
                    </motion.div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
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
