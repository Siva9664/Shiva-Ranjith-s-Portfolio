'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 9, duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(2,4,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <motion.button
        onClick={() => handleNav('#hero')}
        whileHover={{ scale: 1.05 }}
        style={{
          border: 'none', cursor: 'none',
          fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '1.25rem',
          background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        data-hover
      >
        S·R
      </motion.button>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
        {navLinks.map((link) => (
          <li key={link.href} style={{ display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'block' }}>
            <motion.button
              whileHover={{ color: '#00d4ff' }}
              onClick={() => handleNav(link.href)}
              data-hover
              style={{
                background: 'none', border: 'none', cursor: 'none',
                color: 'rgba(240,248,255,0.7)', fontSize: '0.9rem',
                fontFamily: 'var(--font-main)', fontWeight: 500,
                letterSpacing: '0.05em', transition: 'color 0.2s',
              }}
            >
              {link.label}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href={`mailto:${PERSONAL.email}`}
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}
        data-hover
        style={{
          padding: '8px 20px', borderRadius: '999px',
          border: '1px solid rgba(0,212,255,0.4)',
          background: 'rgba(0,212,255,0.06)',
          color: '#00d4ff', fontSize: '0.85rem',
          fontFamily: 'var(--font-main)', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.05em',
          transition: 'all 0.2s',
        }}
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
