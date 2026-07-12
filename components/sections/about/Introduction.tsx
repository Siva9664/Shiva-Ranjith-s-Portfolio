'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Wireframe, Float } from '@react-three/drei';
import { ABOUT_MISSION, ABOUT_VISION } from '@/lib/data';

function AnimatedWords({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <div style={{ display: 'inline-block' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
          style={{ display: 'inline-block', marginRight: '0.4em', color: 'var(--primary)' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

function AIHologram() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="var(--cyan)"
          emissive="var(--purple)"
          emissiveIntensity={0.5}
          wireframe
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Outer ring */}
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="var(--emerald)" transparent opacity={0.3} />
      </mesh>
      <mesh rotation-y={Math.PI / 2}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="var(--cyan)" transparent opacity={0.2} />
      </mesh>
    </Float>
  );
}

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={containerRef} style={{ padding: '60px 0', position: 'relative' }}>
      {/* Intro Text */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center' }}>
        <h3 style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cyan)',
          letterSpacing: '0.2em', marginBottom: '24px'
        }}>
          ABOUT ME
        </h3>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.4 }}>
          <AnimatedWords text="Everything starts with curiosity." />
          <br />
          <span style={{ color: 'var(--secondary)' }}>
            <AnimatedWords text="I don't just build software." />
          </span>
          <br />
          <AnimatedWords text="I build intelligent systems capable of learning, reasoning, automating, and solving real-world problems." />
        </div>
      </div>

      {/* Split Screen */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px',
        alignItems: 'center', marginTop: '60px'
      }}>
        {/* Left: 3D Hologram */}
        <motion.div
          style={{ y: yParallax, height: '500px', position: 'relative' }}
          className="glass-card"
        >
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden',
            background: 'radial-gradient(circle at center, color-mix(in srgb, var(--cyan) 10%, transparent), transparent 70%)',
            border: '1px solid color-mix(in srgb, var(--cyan) 20%, transparent)',
          }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="var(--cyan)" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="var(--purple)" />
              <AIHologram />
            </Canvas>
            
            {/* Scanlines overlay */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
              mixBlendMode: 'overlay',
            }} />
          </div>
          
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)' }}>
            [ DIGITAL IDENTITY SCANNED ]
          </div>
        </motion.div>

        {/* Right: Story Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }} transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{
              padding: '40px', borderRadius: '24px',
              background: 'color-mix(in srgb, var(--purple) 5%, var(--glass-bg))',
              border: '1px solid color-mix(in srgb, var(--purple) 20%, transparent)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--purple)', fontWeight: 700 }}>Mission</h4>
            </div>
            <p style={{ color: 'var(--secondary)', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>{ABOUT_MISSION}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20%' }} transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{
              padding: '40px', borderRadius: '24px',
              background: 'color-mix(in srgb, var(--cyan) 5%, var(--glass-bg))',
              border: '1px solid color-mix(in srgb, var(--cyan) 20%, transparent)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>👁️</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--cyan)', fontWeight: 700 }}>Vision</h4>
            </div>
            <p style={{ color: 'var(--secondary)', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>{ABOUT_VISION}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
