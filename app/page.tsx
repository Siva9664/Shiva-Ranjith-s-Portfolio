'use client';
import dynamic from 'next/dynamic';
import IntroSequence from '@/components/intro/IntroSequence';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Workflow from '@/components/sections/Workflow';
import Timeline from '@/components/sections/Timeline';
import Contact from '@/components/sections/Contact';
import EasterEggs from '@/components/ui/EasterEggs';

const Background = dynamic(() => import('@/components/3d/Background'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <IntroSequence />
      <Background />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Timeline />
        <Contact />
      </main>
      <EasterEggs />
      <footer style={{
        position: 'relative', zIndex: 10, textAlign: 'center',
        padding: '32px', borderTop: '1px solid rgba(0,212,255,0.1)',
        color: 'rgba(240,248,255,0.4)', fontSize: '0.875rem',
        fontFamily: 'var(--font-mono)',
      }}>
        © 2026 Sivaranjith S · Built with passion, AI, and ⚡
      </footer>
    </>
  );
}
