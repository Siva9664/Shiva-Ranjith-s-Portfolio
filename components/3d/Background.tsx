'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Star Field ──────────────────────────────────────────────────────────── */
function StarField() {
  const ref = useRef<THREE.Points>(null);
  const count = 4000;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial size={0.08} color="#00d4ff" sizeAttenuation transparent opacity={0.6} depthWrite={false} />
    </Points>
  );
}

/* ── Floating Geometric Shapes ───────────────────────────────────────────── */
function FloatingShapes() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.05;
    }
  });

  const shapes = useMemo(() => [
    { pos: [-12, 4, -20] as [number,number,number], rot: [0.5, 0.3, 0], geo: 'icosa', color: '#00d4ff' },
    { pos: [15, -6, -25] as [number,number,number], rot: [0.2, 0.8, 0.1], geo: 'torus', color: '#a855f7' },
    { pos: [-8, -10, -18] as [number,number,number], rot: [0.3, 0.2, 0.5], geo: 'octa', color: '#10b981' },
    { pos: [10, 8, -30] as [number,number,number], rot: [0.1, 0.4, 0.3], geo: 'box', color: '#f59e0b' },
    { pos: [-18, 2, -22] as [number,number,number], rot: [0.6, 0.1, 0.2], geo: 'torus', color: '#ec4899' },
  ], []);

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot as [number,number,number]}>
          {s.geo === 'icosa' && <icosahedronGeometry args={[1.2, 0]} />}
          {s.geo === 'torus' && <torusGeometry args={[1, 0.3, 8, 24]} />}
          {s.geo === 'octa' && <octahedronGeometry args={[1.2, 0]} />}
          {s.geo === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
          <meshBasicMaterial color={s.color} wireframe transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Grid Plane ──────────────────────────────────────────────────────────── */
function GridPlane() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const shader = useMemo(() => ({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.y += sin(pos.x * 0.5 + uTime * 0.5) * 0.3;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      void main() {
        float gridX = step(0.97, fract(vUv.x * 20.0));
        float gridY = step(0.97, fract(vUv.y * 20.0));
        float grid = max(gridX, gridY);
        float fade = 1.0 - length(vUv - 0.5) * 2.0;
        fade = clamp(fade, 0.0, 1.0);
        gl_FragColor = vec4(0.0, 0.83, 1.0, grid * fade * 0.15);
      }
    `,
    transparent: true,
  }), []);

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <planeGeometry args={[80, 80, 40, 40]} />
      <shaderMaterial {...shader} />
    </mesh>
  );
}

/* ── Mouse-reactive Camera ───────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y * 1.5 - camera.position.y + 1) * 0.02;
    camera.position.z = 8 + Math.sin(t * 0.1) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Nebula Particles ────────────────────────────────────────────────────── */
function Nebula() {
  const ref = useRef<THREE.Points>(null);
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 30 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      arr[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      arr[i * 3 + 1] = r * Math.sin(phi) * 0.3;
      arr[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi) - 20;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial size={0.4} color="#a855f7" sizeAttenuation transparent opacity={0.3} depthWrite={false} />
    </Points>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────────── */
export default function Background() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 1, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.3} color="#00d4ff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
        <CameraRig />
        <StarField />
        <Nebula />
        <FloatingShapes />
        <GridPlane />
      </Canvas>
    </div>
  );
}
