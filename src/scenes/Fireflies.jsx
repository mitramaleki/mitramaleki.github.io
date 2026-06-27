import React, { useRef } from 'react';
import { Points } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 50;

function Fireflies() {
  const pointsRef = useRef();

  // Initialize data
  useEffect(() => {
    if (!pointsRef.current) return;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      // Position in a volume above the ground
      positions[i * 3] = (Math.random() - 0.5) * 30; // x
      positions[i * 3 + 1] = Math.random() * 20; // y (height)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30; // z

      // Color: yellowish
      const intensity = 0.6 + Math.random() * 0.4;
      colors[i * 3] = intensity; // r
      colors[i * 3 + 1] = intensity * 0.9; // g
      colors[i * 3 + 2] = intensity * 0.5; // b
    }

    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, []);

  // Animate: twinkle by varying opacity and slight position drift
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    const colors = pointsRef.current.geometry.attributes.color.array;
    const time = performance.now() * 0.001;

    for (let i = 0; i < COUNT; i++) {
      // Slow drift
      positions[i * 3] += (Math.random() - 0.5) * delta * 0.05;
      positions[i * 3 + 1] += (Math.random() - 0.5) * delta * 0.05;
      positions[i * 3 + 2] += (Math.random() - 0.5) * delta * 0.05;

      // Keep within bounds
      if (positions[i * 3] > 20) positions[i * 3] = -20;
      if (positions[i * 3] < -20) positions[i * 3] = 20;
      if (positions[i * 3 + 1] > 25) positions[i * 3 + 1] = 0;
      if (positions[i * 3 + 1] < 0) positions[i * 3 + 1] = 25;
      if (positions[i * 3 + 2] > 20) positions[i * 3 + 2] = -20;
      if (positions[i * 3 + 2] < -20) positions[i * 3 + 2] = 20;

      // Twinkle: vary brightness
      const frequency = 0.5 + Math.random() * 1.5;
      const offset = Math.random() * Math.PI * 2;
      const intensity = 0.6 + Math.sin(time * frequency + offset) * 0.4;
      colors[i * 3] = intensity;
      colors[i * 3 + 1] = intensity * 0.9;
      colors[i * 3 + 2] = intensity * 0.5;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
    >
      <bufferGeometry />
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default Fireflies;