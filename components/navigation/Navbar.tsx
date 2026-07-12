'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL, BRAND } from '@/lib/data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logoCount, setLogoCount] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navLinks.forEach((link) => {
      if (link.href.startsWith('#') && link.href !== '#resume') {
        const el = document.querySelector(link.href);
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setLogoCount((c) => c + 1);
    if (logoCount >= 4) {
      window.dispatchEvent(new CustomEvent('neural-logo-click'));
      setLogoCount(0);
    }
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 9.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 28px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Brand */}
      <motion.button
        onClick={handleLogoClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        data-hover aria-label="NeuralOS home"
        style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--glow-cyan)',
          fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--bg-primary)',
        }}>
          SR
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {BRAND.name}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--cyan)', letterSpacing: '0.15em' }}>
            {BRAND.version}
          </div>
        </div>
      </motion.button>

      <nav style={{ display: 'flex', gap: '2px', position: 'relative' }}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;
          return (
            <div key={link.href} style={{ position: 'relative' }}>
              <motion.button
                whileHover={{ color: 'var(--cyan)' }}
                onClick={() => scrollTo(link.href)}
                data-hover aria-label={`Navigate to ${link.label}`}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  color: isActive ? 'var(--cyan)' : 'var(--secondary)', fontSize: '0.875rem',
                  fontFamily: 'var(--font-body)', fontWeight: isActive ? 600 : 500,
                  padding: '8px 14px', borderRadius: '8px',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--glass-bg)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
              >
                {link.label}
              </motion.button>
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  style={{
                    position: 'absolute', bottom: 0, left: '14px', right: '14px', height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
                    borderRadius: '2px', boxShadow: '0 0 10px var(--cyan)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>

      {/* CTA */}
      <motion.a
        href={`mailto:${PERSONAL.email}`}
        whileHover={{ scale: 1.04, boxShadow: 'var(--glow-cyan)' }}
        whileTap={{ scale: 0.97 }}
        data-hover aria-label="Contact Siva Ranjith"
        style={{
          padding: '8px 20px', borderRadius: '10px',
          border: '1px solid var(--glass-border)',
          background: 'var(--glass-bg)',
          color: 'var(--cyan)', fontSize: '0.85rem',
          fontFamily: 'var(--font-body)', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.03em',
          transition: 'all 0.2s',
        }}
      >
        Hire Me ↗
      </motion.a>
    </motion.nav>
  );
}
