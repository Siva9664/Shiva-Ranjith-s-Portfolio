'use client';
import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import AICore from './AICore';
import SkillPlanet from './SkillPlanet';
import { SKILL_GALAXIES } from '@/lib/data';

interface GalaxySceneProps {
  onPlanetClick: (skill: { name: string; desc: string; color: string } | null) => void;
  activeSkillName: string | null;
}

export default function GalaxyScene({ onPlanetClick, activeSkillName }: GalaxySceneProps) {
  const cameraControlRef = useRef<CameraControls>(null);

  // Handle zooming to the clicked planet
  const handlePlanetClick = (skill: { name: string; desc: string; color: string }, position: THREE.Vector3) => {
    onPlanetClick(skill);
    if (cameraControlRef.current) {
      // Calculate a position slightly offset from the planet for a good view
      const offset = new THREE.Vector3(2, 1, 2).add(position);
      cameraControlRef.current.setLookAt(offset.x, offset.y, offset.z, position.x, position.y, position.z, true);
    }
  };

  // Reset view when clicking empty space
  const handlePointerMissed = () => {
    onPlanetClick(null);
    if (cameraControlRef.current) {
      cameraControlRef.current.setLookAt(0, 10, 25, 0, 0, 0, true);
    }
  };

  useEffect(() => {
    // Initial camera position
    if (cameraControlRef.current) {
      cameraControlRef.current.setLookAt(0, 10, 25, 0, 0, 0, false);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 10, 25], fov: 45 }}
        onPointerMissed={handlePointerMissed}
        style={{ cursor: 'grab' }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2} color="var(--cyan)" distance={20} />
        
        <CameraControls ref={cameraControlRef} maxDistance={40} minDistance={2} makeDefault />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <group>
          <AICore />

          {/* Render all galaxies and their planets */}
          {SKILL_GALAXIES.map((galaxy) => (
            <group key={galaxy.id}>
              {/* Orbital Ring for the galaxy */}
              <mesh rotation-x={Math.PI / 2}>
                <ringGeometry args={[galaxy.radius - 0.05, galaxy.radius + 0.05, 64]} />
                <meshBasicMaterial color={galaxy.color} transparent opacity={0.15} side={THREE.DoubleSide} />
              </mesh>

              {/* Planets within the galaxy */}
              {galaxy.skills.map((skill, index) => (
                <SkillPlanet
                  key={skill.name}
                  skill={skill}
                  galaxyRadius={galaxy.radius}
                  galaxySpeed={galaxy.speed}
                  index={index}
                  totalInGalaxy={galaxy.skills.length}
                  color={galaxy.color}
                  onClick={handlePlanetClick}
                  activeSkillName={activeSkillName}
                />
              ))}
            </group>
          ))}
        </group>
      </Canvas>
    </div>
  );
}
