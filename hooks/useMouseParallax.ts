import { useRef, useEffect } from 'react';

/**
 * Returns a ref to attach to any element.
 * The camera or parent transform reads `parallaxRef.current` for { x, y } offset.
 * Also exports `mousePos` for use in Three.js camera rigs.
 */
export function useMouseParallax(strength = 0.03) {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2 * strength,
        y: (e.clientY / window.innerHeight - 0.5) * 2 * strength,
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength]);

  return mousePos;
}
