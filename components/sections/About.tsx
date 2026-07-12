'use client';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

const cards = [
  {
    title: 'Who I Am',
    icon: '🧠',
    color: '#00d4ff',
    content: 'B.Tech AI & ML student at Sri Shakthi Institute of Engineering and Technology. Competitive programmer turned full-stack AI engineer. Arch Linux power user who thrives on technical complexity.',
  },
  {
    title: 'What I Build',
    icon: '⚡',
    color: '#a855f7',
    content: 'Intelligent scheduling systems, high-performance web platforms, and enterprise ERP solutions. From fine-tuning PyTorch models to architecting React + Firebase applications at scale.',
  },
  {
    title: 'Where I\'m Heading',
    icon: '🚀',
    color: '#10b981',
    content: 'Seeking roles where technical ambition meets real-world problem-solving. Passionate about the intersection of AI research and production-grade engineering. Always learning, always shipping.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

import type { Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 10, padding: '120px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <SectionHeader label="01 / ABOUT" title="The Mind Behind the Code" />

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '64px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, rotateY: 4, scale: 1.02 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${card.color}22`,
                borderRadius: '20px',
                padding: '36px 28px',
                backdropFilter: 'blur(20px)',
                cursor: 'default',
                transformStyle: 'preserve-3d',
                transition: 'box-shadow 0.3s',
                boxShadow: `0 4px 40px ${card.color}0a`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 60px ${card.color}20, 0 0 0 1px ${card.color}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 40px ${card.color}0a`;
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: '16px', marginBottom: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
                background: `${card.color}14`,
                border: `1px solid ${card.color}30`,
                boxShadow: `0 0 20px ${card.color}15`,
              }}>
                {card.icon}
              </div>

              {/* Color bar */}
              <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: card.color, marginBottom: '16px', boxShadow: `0 0 12px ${card.color}` }} />

              <h3 style={{ color: '#f0f8ff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px' }}>{card.title}</h3>
              <p style={{ color: 'rgba(240,248,255,0.55)', fontSize: '0.95rem', lineHeight: 1.75 }}>{card.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '64px' }}
        >
          {[
            { label: 'Projects Shipped', value: '5+' },
            { label: 'Research Papers', value: '1' },
            { label: 'Internship', value: 'GrowAITech' },
            { label: 'Focus Area', value: 'AI / Full-Stack' },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: '20px 32px', borderRadius: '16px', textAlign: 'center',
              background: 'rgba(0,212,255,0.03)', border: '1px solid rgba(0,212,255,0.1)',
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00d4ff', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(240,248,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00d4ff', letterSpacing: '0.2em', marginBottom: '12px' }}
      >
        {label}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f0f8ff' }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
        style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #00d4ff, #a855f7)', borderRadius: '2px', margin: '16px auto 0' }}
      />
    </div>
  );
}
