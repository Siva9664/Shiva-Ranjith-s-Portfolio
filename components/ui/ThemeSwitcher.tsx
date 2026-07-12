'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-hover
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        background: isDark ? 'rgba(5,8,22,0.8)' : 'rgba(255,255,255,0.8)',
        border: `1px solid ${isDark ? 'rgba(0,212,255,0.3)' : 'rgba(2,132,199,0.3)'}`,
        backdropFilter: 'blur(16px)',
        boxShadow: isDark 
          ? '0 8px 32px rgba(0,212,255,0.15), 0 0 0 1px rgba(0,212,255,0.05)'
          : '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
        transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark"
            initial={{ y: 20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            style={{ color: '#00d4ff', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}
          >
            🌙
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ y: 20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            style={{ color: '#0284c7', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}
          >
            ☀️
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic ring effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '50%',
          border: '1px dashed',
          borderColor: isDark ? 'rgba(0,212,255,0.3)' : 'rgba(2,132,199,0.3)',
          pointerEvents: 'none',
        }}
      />
    </motion.button>
  );
}
