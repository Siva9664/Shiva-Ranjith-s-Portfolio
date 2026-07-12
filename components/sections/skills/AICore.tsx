'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Html } from '@react-three/drei';

export default function AICore() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="var(--cyan)"
            emissive="var(--purple)"
            emissiveIntensity={0.8}
            wireframe
            distort={0.4}
            speed={2}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Core Label */}
        <Html center position={[0, -2.5, 0]} className="pointer-events-none">
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem',
            color: 'var(--cyan)', textShadow: '0 0 10px var(--cyan)',
            letterSpacing: '0.1em', textAlign: 'center', whiteSpace: 'nowrap'
          }}>
            ARTIFICIAL INTELLIGENCE
          </div>
        </Html>
      </Float>
      
      {/* Energy Rings */}
      {[2.5, 2.7, 2.9].map((radius, i) => (
        <mesh key={i} rotation-x={Math.PI / 2}>
          <torusGeometry args={[radius, 0.01, 16, 100]} />
          <meshBasicMaterial color="var(--cyan)" transparent opacity={0.3 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
}
