'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/providers/ThemeProvider';

/* ── Star Field ──────────────────────────────────────────────────────────── */
function StarField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const materialRef = useRef<any>(null);
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

  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.1;
    }
    if (materialRef.current) {
      targetColor.set(isDark ? '#00d4ff' : '#0284c7');
      materialRef.current.color.lerp(targetColor, 0.05);
      materialRef.current.opacity = THREE.MathUtils.lerp(
        materialRef.current.opacity, 
        isDark ? 0.6 : 0.2, 
        0.05
      );
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial ref={materialRef} size={0.08} color="#00d4ff" sizeAttenuation transparent opacity={0.6} depthWrite={false} />
    </Points>
  );
}

/* ── Floating Geometric Shapes ───────────────────────────────────────────── */
function FloatingShapes({ isDark }: { isDark: boolean }) {
  const group = useRef<THREE.Group>(null);
  const materials = useRef<THREE.MeshBasicMaterial[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.05;
    }
    materials.current.forEach((mat, i) => {
      if (mat) {
        const darkColor = shapes[i].colorDark;
        const lightColor = shapes[i].colorLight;
        mat.color.lerp(tempColor.set(isDark ? darkColor : lightColor), 0.05);
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, isDark ? 0.25 : 0.1, 0.05);
      }
    });
  });

  const tempColor = useMemo(() => new THREE.Color(), []);
  const shapes = useMemo(() => [
    { pos: [-12, 4, -20] as [number,number,number], rot: [0.5, 0.3, 0], geo: 'icosa', colorDark: '#00d4ff', colorLight: '#0284c7' },
    { pos: [15, -6, -25] as [number,number,number], rot: [0.2, 0.8, 0.1], geo: 'torus', colorDark: '#a855f7', colorLight: '#7e22ce' },
    { pos: [-8, -10, -18] as [number,number,number], rot: [0.3, 0.2, 0.5], geo: 'octa', colorDark: '#10b981', colorLight: '#059669' },
    { pos: [10, 8, -30] as [number,number,number], rot: [0.1, 0.4, 0.3], geo: 'box', colorDark: '#f59e0b', colorLight: '#d97706' },
    { pos: [-18, 2, -22] as [number,number,number], rot: [0.6, 0.1, 0.2], geo: 'torus', colorDark: '#ec4899', colorLight: '#db2777' },
  ], []);

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot as [number,number,number]}>
          {s.geo === 'icosa' && <icosahedronGeometry args={[1.2, 0]} />}
          {s.geo === 'torus' && <torusGeometry args={[1, 0.3, 8, 24]} />}
          {s.geo === 'octa' && <octahedronGeometry args={[1.2, 0]} />}
          {s.geo === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
          <meshBasicMaterial 
            ref={(el) => { if(el) materials.current[i] = el; }} 
            color={s.colorDark} 
            wireframe 
            transparent 
            opacity={0.25} 
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Grid Plane ──────────────────────────────────────────────────────────── */
function GridPlane({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = clock.getElapsedTime();
      
      const targetColor = isDark ? new THREE.Vector3(0.0, 0.83, 1.0) : new THREE.Vector3(0.01, 0.52, 0.78);
      mat.uniforms.uColor.value.lerp(targetColor, 0.05);
      
      mat.uniforms.uOpacity.value = THREE.MathUtils.lerp(
        mat.uniforms.uOpacity.value, 
        isDark ? 0.15 : 0.08, 
        0.05
      );
    }
  });

  const shader = useMemo(() => ({
    uniforms: { 
      uTime: { value: 0 },
      uColor: { value: new THREE.Vector3(0.0, 0.83, 1.0) }, // Default Cyan
      uOpacity: { value: 0.15 }
    },
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
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        float gridX = step(0.97, fract(vUv.x * 20.0));
        float gridY = step(0.97, fract(vUv.y * 20.0));
        float grid = max(gridX, gridY);
        float fade = 1.0 - length(vUv - 0.5) * 2.0;
        fade = clamp(fade, 0.0, 1.0);
        gl_FragColor = vec4(uColor, grid * fade * uOpacity);
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
  
  // Track mouse without re-renders
  useMemo(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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
function Nebula({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const materialRef = useRef<any>(null);
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

  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.01;
    if (materialRef.current) {
      targetColor.set(isDark ? '#a855f7' : '#7e22ce');
      materialRef.current.color.lerp(targetColor, 0.05);
      materialRef.current.opacity = THREE.MathUtils.lerp(
        materialRef.current.opacity, 
        isDark ? 0.3 : 0.1, 
        0.05
      );
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial ref={materialRef} size={0.4} color="#a855f7" sizeAttenuation transparent opacity={0.3} depthWrite={false} />
    </Points>
  );
}

/* ── Scene Controller (Handles Lights) ───────────────────────────────────── */
function SceneController({ isDark }: { isDark: boolean }) {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const pointRef = useRef<THREE.PointLight>(null);
  const { gl } = useThree();

  const tempColorAmbient = useMemo(() => new THREE.Color(), []);
  const tempColorPoint = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    if (ambientRef.current) {
      ambientRef.current.color.lerp(tempColorAmbient.set(isDark ? '#00d4ff' : '#0284c7'), 0.05);
      ambientRef.current.intensity = THREE.MathUtils.lerp(ambientRef.current.intensity, isDark ? 0.3 : 0.8, 0.05);
    }
    if (pointRef.current) {
      pointRef.current.color.lerp(tempColorPoint.set(isDark ? '#a855f7' : '#2563eb'), 0.05);
      pointRef.current.intensity = THREE.MathUtils.lerp(pointRef.current.intensity, isDark ? 0.5 : 1.2, 0.05);
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.3} color="#00d4ff" />
      <pointLight ref={pointRef} position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
    </>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────────── */
export default function Background() {
  const { resolvedTheme } = useTheme();
  
  // To avoid hydration mismatch, default to dark during SSR
  const isDark = resolvedTheme === 'dark' || resolvedTheme === undefined;

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
        <SceneController isDark={isDark} />
        <CameraRig />
        <StarField isDark={isDark} />
        <Nebula isDark={isDark} />
        <FloatingShapes isDark={isDark} />
        <GridPlane isDark={isDark} />
      </Canvas>
    </div>
  );
}
