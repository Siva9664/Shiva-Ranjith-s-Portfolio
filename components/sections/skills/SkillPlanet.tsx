'use client';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillPlanetProps {
  skill: { name: string; desc: string };
  galaxyRadius: number;
  galaxySpeed: number;
  index: number;
  totalInGalaxy: number;
  color: string;
  onClick: (skill: { name: string; desc: string; color: string }, position: THREE.Vector3) => void;
  activeSkillName: string | null;
}

export default function SkillPlanet({ skill, galaxyRadius, galaxySpeed, index, totalInGalaxy, color, onClick, activeSkillName }: SkillPlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Calculate initial angle so planets are spread out evenly on their orbital ring
  const initialAngle = (index / totalInGalaxy) * Math.PI * 2;
  
  // Randomize some orbit variations to make it look organic
  const offsetRadius = useMemo(() => galaxyRadius + (Math.random() - 0.5) * 1.5, [galaxyRadius]);
  const yOffset = useMemo(() => (Math.random() - 0.5) * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Calculate orbit position
      const time = state.clock.elapsedTime;
      const angle = initialAngle + time * galaxySpeed * (hovered ? 0.2 : 1); // Slow down on hover
      
      const x = Math.cos(angle) * offsetRadius;
      const z = Math.sin(angle) * offsetRadius;
      
      groupRef.current.position.set(x, yOffset + Math.sin(time + initialAngle) * 0.5, z);
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  const isActive = activeSkillName === skill.name;
  
  // Convert CSS variable to actual color for Three.js (simple mapping for now)
  const threeColor = useMemo(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const varName = color.replace('var(', '').replace(')', '');
    return new THREE.Color(rootStyle.getPropertyValue(varName).trim() || '#ffffff');
  }, [color]);

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          if (groupRef.current) {
            const worldPos = new THREE.Vector3();
            groupRef.current.getWorldPosition(worldPos);
            onClick({ ...skill, color }, worldPos);
          }
        }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'none'; }}
      >
        <sphereGeometry args={[isActive ? 0.6 : hovered ? 0.5 : 0.4, 32, 32]} />
        <meshStandardMaterial
          color={threeColor}
          emissive={threeColor}
          emissiveIntensity={isActive ? 0.8 : hovered ? 0.5 : 0.2}
          wireframe={hovered || isActive}
        />
      </mesh>

      {/* Orbit Trail / Rings around the planet */}
      {(hovered || isActive) && (
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[0.7, 0.75, 32]} />
          <meshBasicMaterial color={threeColor} transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* HTML Tooltip on hover */}
      {hovered && !isActive && (
        <Html distanceFactor={15} center position={[0, 1, 0]}>
          <div style={{
            background: 'var(--glass-bg)', padding: '6px 12px', borderRadius: '8px',
            border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary)',
            whiteSpace: 'nowrap', backdropFilter: 'blur(10px)', pointerEvents: 'none'
          }}>
            {skill.name}
          </div>
        </Html>
      )}
    </group>
  );
}
