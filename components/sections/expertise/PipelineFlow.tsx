'use client';
import { motion } from 'framer-motion';

interface FlowNode {
  id: string;
  label: string;
  icon: string;
  color: string;
}

interface PipelineFlowProps {
  title: string;
  description: string;
  flowData: FlowNode[];
}

export default function PipelineFlow({ title, description, flowData }: PipelineFlowProps) {
  return (
    <div style={{ marginBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          {description}
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {flowData.map((node, i) => {
          const isLast = i === flowData.length - 1;
          return (
            <div key={node.id}>
              {/* Node Card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '24px',
                  padding: '24px 32px', borderRadius: '16px',
                  background: `linear-gradient(135deg, color-mix(in srgb, ${node.color} 8%, transparent), var(--bg-card))`,
                  border: `1px solid color-mix(in srgb, ${node.color} 25%, transparent)`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 8px 32px color-mix(in srgb, ${node.color} 10%, transparent)`,
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '14px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem',
                  background: `color-mix(in srgb, ${node.color} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${node.color} 30%, transparent)`,
                }}>
                  {node.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: node.color, letterSpacing: '0.1em', marginBottom: '4px' }}>
                    STEP {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>
                    {node.label}
                  </div>
                </div>
              </motion.div>

              {/* Animated Connector */}
              {!isLast && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60px', padding: '10px 0' }}>
                  <div style={{ position: 'relative', width: '2px', height: '100%' }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to bottom, color-mix(in srgb, ${node.color} 60%, transparent), color-mix(in srgb, ${flowData[i + 1].color} 60%, transparent))`
                    }} />
                    
                    {/* Traveling packet */}
                    <motion.div
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      style={{
                        position: 'absolute', left: '-3px', width: '8px', height: '8px',
                        borderRadius: '50%', background: node.color,
                        boxShadow: `0 0 12px ${node.color}, 0 0 24px ${node.color}`
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
