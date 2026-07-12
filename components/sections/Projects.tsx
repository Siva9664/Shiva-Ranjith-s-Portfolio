'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader label="03 / PROJECTS" title="Holographic Project Worlds" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginTop: '64px' }}>
          {PROJECTS.map((project) => {
            const isHovered = hovered === project.id;
            const isExpanded = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative' }}
              >
                {/* Cube card */}
                <motion.div
                  whileHover={{ y: -12, rotateY: 3, rotateX: -3 }}
                  animate={{ boxShadow: isHovered ? `0 20px 60px ${project.color}30, 0 0 0 1px ${project.color}44` : '0 4px 30px rgba(0,0,0,0.4)' }}
                  transition={{ duration: 0.35 }}
                  style={{
                    borderRadius: '20px', overflow: 'hidden',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(${project.color === '#00d4ff' ? '0,212,255' : project.color === '#a855f7' ? '168,85,247' : '16,185,129'},0.04))`,
                    border: `1px solid ${project.color}22`,
                    backdropFilter: 'blur(20px)',
                    transformStyle: 'preserve-3d',
                    cursor: 'none',
                  }}
                >
                  {/* Top bar */}
                  <div style={{
                    height: '4px',
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                  }} />

                  <div style={{ padding: '28px' }}>
                    {/* Header row */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: '14px', fontSize: '1.6rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `${project.color}14`, border: `1px solid ${project.color}30`,
                        boxShadow: isHovered ? `0 0 20px ${project.color}44` : 'none',
                        transition: 'box-shadow 0.3s',
                      }}>
                        {project.icon}
                      </div>
                      {project.badge && (
                        <span style={{
                          padding: '4px 10px', borderRadius: '999px', fontSize: '0.7rem',
                          background: `${project.color}14`, border: `1px solid ${project.color}44`,
                          color: project.color, fontFamily: 'var(--font-mono)', fontWeight: 600,
                        }}>{project.badge}</span>
                      )}
                    </div>

                    <h3 style={{ color: '#f0f8ff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>{project.title}</h3>
                    <p style={{ color: 'rgba(240,248,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px' }}>{project.tagline}</p>

                    {/* Architecture preview (on hover) */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ overflow: 'hidden', marginBottom: '16px' }}
                        >
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                            {project.architecture.map((step, i) => (
                              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  style={{
                                    padding: '3px 10px', borderRadius: '6px', fontSize: '0.7rem',
                                    background: `${project.color}0f`,
                                    border: `1px solid ${project.color}33`,
                                    color: project.color, fontFamily: 'var(--font-mono)',
                                  }}
                                >
                                  {step}
                                </motion.span>
                                {i < project.architecture.length - 1 && (
                                  <span style={{ color: `${project.color}66`, fontSize: '0.6rem' }}>→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {project.tech.map((t) => (
                        <span key={t} style={{
                          padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(240,248,255,0.6)', fontFamily: 'var(--font-mono)',
                        }}>{t}</span>
                      ))}
                    </div>

                    {/* Status + Links */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        padding: '4px 10px', borderRadius: '999px', fontSize: '0.7rem',
                        background: project.status === 'Live' ? 'rgba(16,185,129,0.1)' : 'rgba(168,85,247,0.1)',
                        border: `1px solid ${project.status === 'Live' ? 'rgba(16,185,129,0.3)' : 'rgba(168,85,247,0.3)'}`,
                        color: project.status === 'Live' ? '#10b981' : '#a855f7',
                        fontFamily: 'var(--font-mono)', fontWeight: 600,
                      }}>
                        {project.status === 'Live' ? '● Live' : '● Research'}
                      </span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {project.links.demo && (
                          <motion.a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }} data-hover
                            style={{
                              padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem',
                              background: `${project.color}14`, border: `1px solid ${project.color}44`,
                              color: project.color, fontWeight: 600, textDecoration: 'none',
                              fontFamily: 'var(--font-main)',
                            }}>
                            Live ↗
                          </motion.a>
                        )}
                        {project.links.paper && (
                          <motion.a href={project.links.paper} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }} data-hover
                            style={{
                              padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem',
                              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
                              color: 'rgba(240,248,255,0.7)', fontWeight: 600, textDecoration: 'none',
                              fontFamily: 'var(--font-main)',
                            }}>
                            Paper ↗
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
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
