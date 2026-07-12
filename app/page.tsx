'use client';
import dynamic from 'next/dynamic';
import IntroSequence from '@/components/intro/IntroSequence';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Workflow from '@/components/sections/Workflow';
import Research from '@/components/sections/Research';
import Timeline from '@/components/sections/Timeline';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import EasterEggs from '@/components/ui/EasterEggs';

const Background = dynamic(() => import('@/components/3d/Background'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      {/* Cinematic intro */}
      <IntroSequence />

      {/* Persistent 3D universe behind all content */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" aria-label="Main portfolio content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Research />
        <Timeline />
        <Achievements />
        <Contact />
      </main>

      {/* Easter eggs system */}
      <EasterEggs />

      {/* Footer */}
      <footer
        role="contentinfo"
        style={{
          position: 'relative', zIndex: 10,
          padding: '40px 28px',
          borderTop: '1px solid rgba(0,212,255,0.08)',
          background: 'rgba(5,8,22,0.9)',
          backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'rgba(240,248,255,0.3)' }}>
          © 2026 Siva Ranjith · NeuralOS v2.4.1
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(0,212,255,0.4)' }}>
          Built with Next.js · R3F · Framer Motion · GSAP · Three.js
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(16,185,129,0.7)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
          All systems operational
        </div>
      </footer>
    </>
  );
}
