'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const AI_REPLIES: Record<string, string> = {
  hello: 'Hello, human. I\'ve been expecting you. Welcome to Sivaranjith\'s neural universe. 🧠',
  hi: 'Hi there! System online. All neural pathways operational. ⚡',
  who: 'Sivaranjith S — AI engineer, full-stack architect, competitive programmer, Arch Linux devotee.',
  skills: 'Python · PyTorch · React · FastAPI · Docker · Redis · Deep Learning · Firebase. The stack is strong.',
  projects: 'Three core systems: AI Timetable Scheduler (research) · Captions.io · Python Rushhour (live). Pick one to explore.',
  help: 'Commands: hello · hi · who · skills · projects · help',
};

export default function EasterEggs() {
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [aiMode, setAiMode] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState<{ from: 'user' | 'ai'; text: string }[]>([]);
  const [logoClicks, setLogoClicks] = useState(0);
  const [devConsole, setDevConsole] = useState(false);
  const typedRef = useRef('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Konami code detector
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Konami
      if (e.key === KONAMI[konamiIdx]) {
        const next = konamiIdx + 1;
        if (next === KONAMI.length) {
          setAiMode(true);
          setKonamiIdx(0);
          setTimeout(() => setAiMode(false), 8000);
        } else {
          setKonamiIdx(next);
        }
      } else {
        setKonamiIdx(0);
      }

      // "hello" detector
      typedRef.current = (typedRef.current + e.key).slice(-10).toLowerCase();
      if (typedRef.current.includes('hello')) {
        setAiOpen(true);
        if (aiMessages.length === 0) {
          setAiMessages([{ from: 'ai', text: AI_REPLIES.hello }]);
        }
        typedRef.current = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [konamiIdx, aiMessages.length]);

  // Logo click counter — listen for logo button clicks
  useEffect(() => {
    const onLogoClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.textContent?.includes('S·R') || el.closest('[data-logo]')) {
        setLogoClicks((c) => {
          const next = c + 1;
          if (next >= 5) { setDevConsole(true); return 0; }
          return next;
        });
      }
    };
    window.addEventListener('click', onLogoClick);
    return () => window.removeEventListener('click', onLogoClick);
  }, []);

  const sendMessage = () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput.trim().toLowerCase();
    setAiMessages((prev) => [...prev, { from: 'user', text: aiInput }]);
    setAiInput('');
    const key = Object.keys(AI_REPLIES).find((k) => userMsg.includes(k));
    const reply = key ? AI_REPLIES[key] : 'Fascinating query. My neural pathways are still learning. Try: hello · skills · projects · help';
    setTimeout(() => {
      setAiMessages((prev) => [...prev, { from: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* ── Konami AI Mode overlay ── */}
      <AnimatePresence>
        {aiMode && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9990, pointerEvents: 'none',
              background: 'rgba(0,212,255,0.04)',
              boxShadow: 'inset 0 0 200px rgba(0,212,255,0.15)',
            }}
          >
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              fontFamily: 'var(--font-mono)', color: '#00d4ff', fontSize: '1rem',
              textAlign: 'center', textShadow: '0 0 20px #00d4ff',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚡ AI MODE ACTIVATED ⚡</div>
              <div style={{ opacity: 0.6, fontSize: '0.85rem' }}>Neural pathways at maximum capacity</div>
            </div>
            {/* Digital rain */}
            <DigitalRain />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── AI Assistant Orb ── */}
      <motion.button
        onClick={() => setAiOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.4)', '0 0 40px rgba(0,212,255,0.7)', '0 0 20px rgba(0,212,255,0.4)'] }}
        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        data-hover
        style={{
          position: 'fixed', bottom: '32px', right: '32px', zIndex: 500,
          width: 56, height: 56, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(0,212,255,0.9), rgba(168,85,247,0.6))',
          border: '1px solid rgba(0,212,255,0.6)',
          cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
        }}
      >
        🤖
      </motion.button>

      {/* ── AI Chat panel ── */}
      <AnimatePresence>
        {aiOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: 'fixed', bottom: '100px', right: '32px', zIndex: 500,
              width: '340px', borderRadius: '20px',
              background: 'rgba(2,4,8,0.92)',
              border: '1px solid rgba(0,212,255,0.2)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(0,212,255,0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 20px', borderBottom: '1px solid rgba(0,212,255,0.1)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ fontFamily: 'var(--font-mono)', color: '#00d4ff', fontSize: '0.85rem', fontWeight: 600 }}>
                SR · AI Assistant
              </span>
              <button onClick={() => setAiOpen(false)}
                style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(240,248,255,0.4)', cursor: 'none', fontSize: '1rem' }}>
                ✕
              </button>
            </div>

            {/* Messages */}
            <div style={{ height: '220px', overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {aiMessages.length === 0 && (
                <div style={{ color: 'rgba(240,248,255,0.3)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '40px' }}>
                  Type &quot;hello&quot; to begin
                </div>
              )}
              {aiMessages.map((m, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%', padding: '10px 14px', borderRadius: '14px',
                    background: m.from === 'user' ? 'rgba(0,212,255,0.15)' : 'rgba(168,85,247,0.1)',
                    border: `1px solid ${m.from === 'user' ? 'rgba(0,212,255,0.3)' : 'rgba(168,85,247,0.2)'}`,
                    color: 'rgba(240,248,255,0.85)', fontSize: '0.82rem', lineHeight: 1.5,
                    fontFamily: 'var(--font-main)',
                  }}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(0,212,255,0.1)', display: 'flex', gap: '8px' }}>
              <input
                ref={inputRef}
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask anything…"
                style={{
                  flex: 1, padding: '8px 12px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,212,255,0.15)',
                  color: '#f0f8ff', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', outline: 'none',
                }}
              />
              <button onClick={sendMessage} data-hover
                style={{
                  padding: '8px 14px', borderRadius: '10px',
                  background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff', cursor: 'none', fontWeight: 700, fontSize: '0.85rem',
                }}>
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Dev Console (logo × 5) ── */}
      <AnimatePresence>
        {devConsole && (
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9000,
              height: '260px', background: 'rgba(0,0,0,0.97)',
              borderTop: '1px solid rgba(0,212,255,0.3)',
              backdropFilter: 'blur(20px)', padding: '20px 28px',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00d4ff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span>▶ SR_OS :: Developer Console v1.0</span>
              <button onClick={() => setDevConsole(false)}
                style={{ background: 'none', border: 'none', color: '#00d4ff', cursor: 'none' }}>✕ CLOSE</button>
            </div>
            <div style={{ color: 'rgba(0,212,255,0.5)', lineHeight: 1.8 }}>
              <div>{'>'} <span style={{ color: '#10b981' }}>system.init()</span> — Neural OS booted successfully</div>
              <div>{'>'} <span style={{ color: '#a855f7' }}>modules.load()</span> — Three.js · R3F · Framer Motion · GSAP</div>
              <div>{'>'} <span style={{ color: '#f59e0b' }}>user.identify()</span> — Sivaranjith S · AI/ML Engineer</div>
              <div>{'>'} <span style={{ color: '#00d4ff' }}>portfolio.render()</span> — All sections operational ⚡</div>
              <div style={{ marginTop: '8px', color: 'rgba(0,212,255,0.3)', fontSize: '0.7rem' }}>
                TIP: Type &quot;hello&quot; to chat with the AI · Konami code activates AI mode
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DigitalRain() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: '110vh' }}
          transition={{ duration: Math.random() * 3 + 2, delay: Math.random() * 2, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', left: `${i * 5 + Math.random() * 3}%`,
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            color: '#00d4ff', lineHeight: 1.2, whiteSpace: 'pre',
          }}
        >
          {Array.from({ length: 30 }).map(() => String.fromCharCode(0x30A0 + Math.random() * 96)).join('\n')}
        </motion.div>
      ))}
    </div>
  );
}
