'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PERSONAL, ENGINEERING_DOMAINS } from '@/lib/data';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cards = [
  { title: 'Who I Am', icon: '🧠', color: 'var(--cyan)', content: PERSONAL.bio[0] },
  { title: 'What I Build', icon: '⚡', color: 'var(--purple)', content: PERSONAL.bio[1] },
  {
    title: "Where I'm Heading", icon: '🚀', color: 'var(--emerald)',
    content: 'Building AI systems that reshape how humans and machines work together. Seeking challenging roles at the intersection of AI research and production-grade engineering.',
  },
];

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Siva Ranjith">
      <div className="container">
        <SectionHeader index="01" label="About" title="The Mind Behind the Code" />

        {/* Bio cards */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '56px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-card"
              style={{
                borderRadius: '20px', padding: '32px 28px',
                border: `1px solid color-mix(in srgb, ${card.color} 15%, transparent)`,
                background: `linear-gradient(135deg, color-mix(in srgb, ${card.color} 5%, transparent), var(--bg-card))`,
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 50px color-mix(in srgb, ${card.color} 12%, transparent), 0 0 0 1px color-mix(in srgb, ${card.color} 25%, transparent)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: '14px', marginBottom: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                background: `color-mix(in srgb, ${card.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${card.color} 25%, transparent)`,
              }}>
                {card.icon}
              </div>
              <div style={{ width: 36, height: '2px', background: card.color, borderRadius: '2px', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '12px' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.78, fontFamily: 'var(--font-body)' }}>
                {card.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Engineering identity grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ marginTop: '56px' }}
        >
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.15em', marginBottom: '24px' }}>
            ENGINEERING SPECIALIZATIONS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {ENGINEERING_DOMAINS.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '14px',
                  padding: '18px 20px', borderRadius: '14px',
                  background: `color-mix(in srgb, ${d.color} 5%, transparent)`, 
                  border: `1px solid color-mix(in srgb, ${d.color} 15%, transparent)`,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, ${d.color} 35%, transparent)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, ${d.color} 15%, transparent)`; }}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: d.color, fontSize: '0.9rem', marginBottom: '4px' }}>{d.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)', lineHeight: 1.5 }}>{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
