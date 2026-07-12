'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <SectionHeader index="03" label="Projects" title="Holographic Project Worlds" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginTop: '56px' }}>
          {PROJECTS.map((project, i) => {
            const isHov = hovered === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -10 }}
                className="glass-card"
                style={{
                  borderRadius: '20px', overflow: 'hidden',
                  border: `1px solid color-mix(in srgb, ${project.color} ${isHov ? '40%' : '15%'}, transparent)`,
                  background: `linear-gradient(135deg, color-mix(in srgb, ${project.color} 4%, transparent), var(--bg-card))`,
                  boxShadow: isHov ? `0 20px 60px color-mix(in srgb, ${project.color} 15%, transparent)` : 'none',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Accent bar */}
                <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, color-mix(in srgb, ${project.color} 40%, transparent))` }} />

                <div style={{ padding: '28px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: 50, height: 50, borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                      background: `color-mix(in srgb, ${project.color} 10%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${project.color} 25%, transparent)`,
                      boxShadow: isHov ? `0 0 20px color-mix(in srgb, ${project.color} 30%, transparent)` : 'none',
                      transition: 'box-shadow 0.3s',
                    }}>
                      {project.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                      {project.badge && (
                        <span style={{
                          padding: '3px 10px', borderRadius: '999px', fontSize: '0.68rem',
                          background: `color-mix(in srgb, ${project.color} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${project.color} 35%, transparent)`,
                          color: project.color, fontFamily: 'var(--font-mono)', fontWeight: 600,
                        }}>{project.badge}</span>
                      )}
                      <span style={{
                        padding: '3px 10px', borderRadius: '999px', fontSize: '0.68rem',
                        background: project.status === 'Live' || project.status === 'Production' ? 'color-mix(in srgb, var(--emerald) 10%, transparent)' : 'color-mix(in srgb, var(--purple) 10%, transparent)',
                        border: `1px solid ${project.status === 'Live' || project.status === 'Production' ? 'color-mix(in srgb, var(--emerald) 30%, transparent)' : 'color-mix(in srgb, var(--purple) 30%, transparent)'}`,
                        color: project.status === 'Live' || project.status === 'Production' ? 'var(--emerald)' : 'var(--purple)',
                        fontFamily: 'var(--font-mono)', fontWeight: 600,
                      }}>
                        ● {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: project.color, marginBottom: '14px', opacity: 0.8 }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                    {project.description}
                  </p>

                  {/* Architecture reveal on hover */}
                  <AnimatePresence>
                    {isHov && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', marginBottom: '16px' }}
                      >
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--secondary)', marginBottom: '8px', letterSpacing: '0.12em' }}>
                          ARCHITECTURE
                        </div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {project.architecture.map((step, si) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <motion.span
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: si * 0.08 }}
                                style={{
                                  padding: '3px 10px', borderRadius: '6px', fontSize: '0.7rem',
                                  background: `color-mix(in srgb, ${project.color} 10%, transparent)`, 
                                  border: `1px solid color-mix(in srgb, ${project.color} 25%, transparent)`,
                                  color: project.color, fontFamily: 'var(--font-mono)',
                                }}
                              >
                                {step}
                              </motion.span>
                              {si < project.architecture.length - 1 && (
                                <span style={{ color: `color-mix(in srgb, ${project.color} 40%, transparent)`, fontSize: '0.65rem' }}>→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '24px' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: '6px', fontSize: '0.72rem',
                        background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)',
                        color: 'var(--secondary)', fontFamily: 'var(--font-mono)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>{project.year}</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {project.links.demo && (
                        <motion.a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }} data-hover
                          style={{
                            padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem',
                            background: `color-mix(in srgb, ${project.color} 10%, transparent)`,
                            border: `1px solid color-mix(in srgb, ${project.color} 35%, transparent)`,
                            color: project.color, fontWeight: 600, textDecoration: 'none',
                            fontFamily: 'var(--font-body)',
                          }}>
                          Live ↗
                        </motion.a>
                      )}
                      {project.links.paper && (
                        <motion.a href={project.links.paper} target="_blank" rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }} data-hover
                          style={{
                            padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem',
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            color: 'var(--secondary)', fontWeight: 600, textDecoration: 'none',
                            fontFamily: 'var(--font-body)',
                          }}>
                          Paper ↗
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
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
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em' }}>{index}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em' }}>/ {label.toUpperCase()}</span>
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
